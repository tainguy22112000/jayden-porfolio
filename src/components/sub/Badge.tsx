import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import React from "react";

type TBadgeProps = {
  variant?: Variants;
  children?: React.ReactNode;
};

export const Badge = ({ variant, children }: TBadgeProps) => {
  return (
    <motion.div
      variants={variant}
      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h1 className="Welcome-text text-[13px]">{children}</h1>
    </motion.div>
  );
};
