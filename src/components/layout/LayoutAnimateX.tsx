import { motion, useAnimation } from 'framer-motion';
import { type ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
  visible: { opacity: 1, x: 0, delay: 10 },
  hidden: { opacity: 0, x: -70 },
};

const LayoutAnimateX = ({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      viewport={{ once: true }}
      variants={boxVariant}
      initial={{ x: -70, opacity: 0 }}
      animate={control}
      transition={{ delay, timeConstant: 200 }}
    >
      {children}
    </motion.div>
  );
};
export default LayoutAnimateX;
