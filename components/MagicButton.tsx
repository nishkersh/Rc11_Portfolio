import React from "react";
import Link from 'next/link';

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  href?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  href,
}) => {
  const ButtonContent = () => (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`relative inline-flex items-center justify-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </>
  );

  const containerClasses = "relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none";

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button
      className={containerClasses}
      onClick={handleClick}
    >
      <ButtonContent />
    </button>
  );
};

export default MagicButton;