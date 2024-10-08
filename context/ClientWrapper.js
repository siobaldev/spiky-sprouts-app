"use client";

import { motion } from "framer-motion";

const ClientWrapper = ({ children }) => {
  return (
    <motion.div
      className="group cursor-pointer space-y-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default ClientWrapper;
