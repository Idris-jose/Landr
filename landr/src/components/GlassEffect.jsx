export default function GlassEffect({ children }) {
  return (
    <div className="bg-[#02D482]/30 backdrop-blur-md border-2 border-white/30 p-10 shadow-lg">
      {children}
    </div>
  );
}
