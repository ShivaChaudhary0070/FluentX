const words = [
  "Confidence",
  "Grammar",
  "Fluency",
  "Vocabulary",
  "Interview",
  "Speaking",
  "AI",
  "Communication",
  "Practice",
  "English",
  "Coach",
  "Learning",
  "Growth",
  "Success",
  "Placement",
  "Skills",
  "Voice",
  "Pronunciation",
  "Career",
  "Future",
];

export default function FloatingWords() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {words.map((word, i) => (
        <span
          key={i}
          className="floating-word"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            fontSize: `${18 + Math.random() * 22}px`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}