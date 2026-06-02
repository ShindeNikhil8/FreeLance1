export default function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
        hover
          ? "transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}