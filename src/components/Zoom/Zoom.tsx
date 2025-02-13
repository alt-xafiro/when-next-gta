import { motion } from 'motion/react';

import { CustomComponentProps } from '@/types';

type ZoomProps = CustomComponentProps & {
  order?: number;
};

export default function Zoom({
  children,
  className,
  order = 0,
  ...rest
}: ZoomProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 100,
        duration: 0.2,
        delay: order * 0.6 + 0.2,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
