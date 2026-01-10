export interface TTSOptions {
    rate?: number;
    pitch?: number;
    volume?: number;
    onStart?: () => void;
    onEnd?: () => void;
}

export const speak = (text: string, options: TTSOptions = {}) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

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
