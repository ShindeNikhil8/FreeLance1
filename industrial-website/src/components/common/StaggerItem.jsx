import { motion as Motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function StaggerItem({ children, className = "" }) {
  return (
    <Motion.div variants={itemVariants} className={className}>
      {children}
    </Motion.div>
  );
}