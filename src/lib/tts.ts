export interface TTSOptions {
    rate?: number;
    pitch?: number;
    volume?: number;
    onStart?: () => void;
    onEnd?: () => void;
    onError?: () => void;
    onProgress?: (progress: number) => void;
}

let activeAudio: HTMLAudioElement | null = null;
let hasUserInteracted = false;

export const markUserInteracted = () => {
    hasUserInteracted = true;
};

export const canAutoPlayAudio = () => hasUserInteracted;

export const stopAllAudio = () => {
    if (activeAudio) {
        const audio = activeAudio;
        activeAudio = null;
        audio.pause();
        audio.currentTime = 0;
        audio.dispatchEvent(new Event("ended"));
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
};

export const playAudioUrl = (url: string, options: TTSOptions = {}) => {
    if (typeof window === "undefined") {
        return;
    }
    stopAllAudio();
    const audio = new Audio(url);
    activeAudio = audio;
    if (options.onProgress) {
        options.onProgress(0);
    }
    if (options.onStart) {
        options.onStart();
    }
    if (options.onProgress) {
        audio.addEventListener("timeupdate", () => {
            if (!audio.duration || Number.isNaN(audio.duration)) return;
            options.onProgress?.(audio.currentTime / audio.duration);
        });
    }
    audio.addEventListener(
        "ended",
        () => {
            if (activeAudio === audio) {
                activeAudio = null;
            }
            if (options.onProgress) {
                options.onProgress(1);
            }
            if (options.onEnd) {
                options.onEnd();
            }
        },
        { once: true }
    );
    audio.play().catch((error) => {
        if (error && typeof error === "object" && "name" in error) {
            if ((error as { name?: string }).name === "AbortError") {
                return;
            }
        }
        if (activeAudio === audio) {
            activeAudio = null;
        }
        if (options.onEnd) {
            options.onEnd();
        }
        if (options.onError) {
            options.onError();
        }
    });
};

export const speak = (text: string, options: TTSOptions = {}) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        return;
    }

    const now = Date.now();
    // Avoid rapid repeats of the same utterance
    if ((window as unknown as { __lastSpeakText?: string; __lastSpeakAt?: number }).__lastSpeakText === text) {
        const lastAt = (window as unknown as { __lastSpeakAt?: number }).__lastSpeakAt || 0;
        if (now - lastAt < 700) {
            return;
        }
    }

    // Cancel any ongoing speech and audio
    stopAllAudio();
    (window as unknown as { __lastSpeakText?: string; __lastSpeakAt?: number }).__lastSpeakText = text;
    (window as unknown as { __lastSpeakAt?: number }).__lastSpeakAt = now;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    // Default options optimized for natural sound
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    // Voice Selection logic
    // We try to find high-quality voices known to exist on major platforms.
    const voices = window.speechSynthesis.getVoices();

    const preferredVoices = [
        "Google US English",
        "Microsoft Zira",     // Windows
        "Samantha",           // Mac
        "Daniel",             // Mac (UK)
    ];

    let selectedVoice = voices.find(v => v.name === "Google US English"); // Best web voice usually

    if (!selectedVoice) {
        // Try finding other preferred ones
        for (const name of preferredVoices) {
            const found = voices.find(v => v.name.includes(name));
            if (found) {
                selectedVoice = found;
                break;
            }
        }
    }

    // Fallback to any English voice
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.startsWith("en"));
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    if (options.onStart) {
        utterance.onstart = options.onStart;
    }

    if (options.onEnd) {
        utterance.onend = options.onEnd;
    }

    window.speechSynthesis.speak(utterance);
};
