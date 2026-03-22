import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) {
  const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition duration-300 active:scale-[0.98]";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-slate-300 bg-transparent text-slate-900 hover:border-orange-500 hover:text-orange-500",
    light:
      "bg-white text-orange-600 hover:bg-slate-100",
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}