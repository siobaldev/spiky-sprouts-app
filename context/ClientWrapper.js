"use client";

import { motion } from "framer-motion";

const ClientWrapper = ({ children }) => {
  return (
    <motion.div
      className="group flex cursor-pointer flex-col gap-y-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default ClientWrapper;
