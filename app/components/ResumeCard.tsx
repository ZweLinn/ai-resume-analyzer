import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

export default function ResumeCard({ resume }: { resume: Resume }) {
  const scoreColor = getScoreColor(resume.feedback.overallScore);

  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card group animate-in fade-in duration-700"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2 min-w-0">
          {resume.companyName && (
            <h2 className="!text-brown font-bold break-words font-serif">
              {resume.companyName}
            </h2>
          )}
          {resume.jobTitle && (
            <h3 className="text-base break-words" style={{ color: "var(--color-muted)" }}>
              {resume.jobTitle}
            </h3>
          )}
          {!resume.companyName && !resume.jobTitle && (
            <h2 className="!text-brown font-bold font-serif">Resume</h2>
          )}
        </div>
        <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>
      {resume.imagePath && (
        <div className="gradient-border overflow-hidden">
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={resume.imagePath}
              alt="resume"
              className="w-full h-[350px] object-cover object-top"
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between px-2">
        <span
          className="text-sm font-medium px-3 py-1 rounded-full"
          style={{
            backgroundColor: scoreColor.bg,
            color: scoreColor.text,
          }}
        >
          Score: {resume.feedback.overallScore}/100
        </span>
        <span
          className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: "var(--color-terra)" }}
        >
          View Analysis →
        </span>
      </div>
    </Link>
  );
}

function getScoreColor(score: number) {
  if (score >= 80) {
    return {
      bg: "var(--color-badge-green)",
      text: "var(--color-badge-green-text)",
    };
  } else if (score >= 60) {
    return {
      bg: "var(--color-badge-yellow)",
      text: "var(--color-badge-yellow-text)",
    };
  } else {
    return {
      bg: "var(--color-badge-red)",
      text: "var(--color-badge-red-text)",
    };
  }
}
