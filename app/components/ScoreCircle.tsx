const ScoreCircle = ({ score = 75 }: { score: number }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (1 - score / 100);

  return (
    <div className="relative w-[100px] h-[100px]">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        className="transform -rotate-90"
      >
        <defs>
          <linearGradient id="scoreGrad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c4714a" />   {/* terra */}
            <stop offset="50%" stopColor="#5c3d2e" />  {/* brown */}
            <stop offset="100%" stopColor="#6b7c4e" /> {/* olive */}
          </linearGradient>
        </defs>

        {/* Background ring — warm sand-dark tone */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="#ddd0c0"
          strokeWidth={stroke}
          fill="transparent"
        />

        {/* Progress arc */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="url(#scoreGrad)"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-semibold text-sm"
          style={{ color: "#5c3d2e" }}
        >
          {score}/100
        </span>
      </div>
    </div>
  );
};

export default ScoreCircle;