export default function PressButton({
  text,
  shadow = "black",
  color = "green",
  border,
  onClick,
}) {
  const shadowClass = {
    black:
      "shadow-[6px_6px_0px_rgb(0,0,0)]  active:shadow-[2px_2px_0px_rgba(0,0,0,.7)] active:translate-y-[2px]",
    green:
      "shadow-[6px_6px_0px_rgba(2,212,130,0.4)]  active:shadow-[2px_2px_0px_rgba(2,212,130,0.2)] active:translate-y-[2px]",
    white:
      "shadow-[6px_6px_0px_rgba(255,255,255)]  active:shadow-[2px_2px_0px_rgba(255,255,255,0.2)] active:translate-y-[2px]",
  };

  const colorClasses = {
    green: "bg-[#02D482]  hover:bg-[#02D482] text-[#ffffff]",
    white: "bg-white text-[#02d482]",
    black: "bg-[#02D482] text-white"
  };

  const borderClasses = {
    green: "border-2 border-[rgba(2,212,130,0.8)]",
    black: "border-2 border-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${colorClasses[color]} ${borderClasses[border]} px-10 py-3 text-sm w-full transition-all ${shadowClass[shadow]}`}
    >
      {text}
    </button>
  );
}

