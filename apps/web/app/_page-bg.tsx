/* eslint-disable react/prop-types */
"use client";
import { PropsWithChildren } from "react";
import { AuroraBackground } from "./_aurora-background";
import { motion } from "motion/react";

interface PageBackgroundProps extends PropsWithChildren {
  className?: string;
}
const PageBackground: React.FC<PageBackgroundProps> = ({
  className,
  children,
}) => (
  <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  </AuroraBackground>
);

export default PageBackground;
