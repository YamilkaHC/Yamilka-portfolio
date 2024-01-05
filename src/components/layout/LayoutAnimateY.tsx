import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const LayoutAnimateY = ({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: -70, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: delay || 0, timeConstant: 200 }}
    exit={{ y: 30, opacity: 0 }}
    className={className}
  >
    {children}
  </motion.div>
);
export default LayoutAnimateY;
