import { motion } from "framer-motion";

const LOGO_PATH = "/Logo  (1)_1764706801942.jpeg";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative"
    >
      {/* Faded Background with Logo and Arabic Text */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.08]">
          <img 
            src={LOGO_PATH} 
            alt="Background Logo" 
            className="h-64 w-auto object-contain mb-8 mix-blend-multiply"
          />
          <span className="font-arabic text-[150px] leading-none text-primary text-center whitespace-nowrap">فصيحة</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
