interface SwitchProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  darkMode?: boolean;
  className?: string;
}

export default function Switch({
  checked,
  onChange,
  darkMode = false,
  className = "",
}: SwitchProps) {
  // Track (background) colors
  const trackOn = darkMode ? "rgb(161, 161, 170)" : "rgb(82, 82, 91)"; // zinc-400 / zinc-700
  const trackOff = darkMode ? "rgb(63, 63, 70)" : "rgb(229, 229, 229)"; // zinc-700 / neutral-200

  // Thumb color
  const thumbColor = darkMode ? "rgb(24, 24, 27)" : "rgb(255, 255, 255)"; // zinc-900 / white

  // Focus ring (soft neutral)
  const focusColor = "rgba(115, 115, 115, 0.5)"; // neutral-500/50

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none ${className}`}
      style={{
        backgroundColor: checked ? trackOn : trackOff,
        transition: "background-color 0.25s ease, box-shadow 0.2s ease",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 3px ${focusColor}`;
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(0,0,0,0.1)";
      }}
    >
      <span
        className="absolute top-[2px] left-[2px] h-5 w-5 rounded-full shadow-md"
        style={{
          backgroundColor: thumbColor,
          transform: checked ? "translateX(20px)" : "translateX(0px)",
          transition: "transform 0.25s ease, background-color 0.25s ease",
        }}
      />
    </button>
  );
}
