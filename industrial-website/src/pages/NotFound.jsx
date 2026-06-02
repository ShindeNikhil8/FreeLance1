import { Link, NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="mt-4 text-lg text-slate-300">Page not found</p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
      >
        Go Back Home
      </Link>
    </div>
  );
}