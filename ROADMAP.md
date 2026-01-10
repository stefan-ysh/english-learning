# Jingyan English App - Development Roadmap

## Phase 1: Core Foundation (Completed)
- [x] **Tech Stack Setup**: Next.js 15, TailwindCSS, Framer Motion.
- [x] **Vocabulary Module**: Swipe learning, Flashcards, Quiz (Select/Input).
- [x] **Basic UI**: Clean, minimal design with dark mode support.

## Phase 2: Engagement & Polish (Completed)
- [x] **Magical UI**: Shine borders, blur fade-ins.
- [x] **Natural TTS**: High-quality voice synthesis for all cards.
- [x] **Phrases v1**: Basic phrase list by category.
- [x] **I18n**: English/Chinese switching foundation.

## Phase 3: Robustness & Content (Completed)
- [x] **Stability**: Fixed hydration issues in quizzes.
- [x] **Phrases v2**: Syntax highlighting (SVO analysis), Learn & Quiz modes.
- [x] **Grammar Module**: Visual grammar explanations.
- [x] **Study Tracking**: Daily check-in calendar, streak tracking.

## Phase 4: Future Plans (Reference for AI Development)
These features are planned for future iterations to enhance the learning experience.

### 4.1 Advanced Personalization (AI Integration)
- **AI Pronunciation Coach**: Record voice using Web Audio API -> Send to OpenAI Whisper/Gemini -> Analyze pronunciation + feedback.
- **Smart Recommendations**: Suggest words/grammar based on quiz error patterns.
- **Generative Stories**: Create short stories using the words the user has just learned.

### 4.2 Social & Gamification
- **Leaderboards**: Weekly friend rankings.
- **Badges/Achievements**: "7 Day Streak", "Vocabulary Master", "Grammar Guru".
- **Multiplayer Quiz**: Real-time 1v1 vocabulary battles (WebSocket).

### 4.3 Content Expansion
- **Listening Module**: Dictation exercises (Listen & Type).
- **Reading Module**: Short articles with tap-to-translate words.
- **Video Learning**: Clips from movies/shows with subtitles analysis.

### 4.4 Technical Improvements
- **PWA Support**: Offline capability for learning without internet.
- **Backend Integration**: Move from local storage to Supabase/Postgres for cross-device sync.
