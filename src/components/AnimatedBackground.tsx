export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[600px] rounded-full bg-violet/20 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Animated SVG data flow lines */}
      <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.82 0.17 195)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.82 0.17 195)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={`${15 + i * 14}%`}
            x2="100%"
            y2={`${10 + i * 14}%`}
            stroke="url(#flowGrad)"
            strokeWidth="1"
            strokeDasharray="4 8"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-200"
              dur={`${8 + i * 2}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
      </svg>
    </div>
  );
}
