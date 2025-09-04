export default function GlassEffect({ children }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 p-20 shadow-lg">
      {children}
    </div>
  );
}
