import { motion as Motion } from "framer-motion";

export default function FadeInSection({
  children,
  delay = 0,
  y = 40,
  className = "",
}) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </Motion.div>
  );
}