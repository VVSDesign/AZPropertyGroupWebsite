import { motion } from "framer-motion";

export default function AbstractElements() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-[10%] -left-[150px] w-[300px] h-[300px] rounded-full bg-gradient-radial from-secondary/20 to-secondary/0 z-[-1] opacity-70"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="fixed bottom-[5%] -right-[100px] w-[200px] h-[200px] rounded-full bg-gradient-radial from-primary/15 to-primary/0 z-[-1] opacity-70"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed bottom-[-200px] left-[30%] w-[400px] h-[400px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-radial from-primary/10 to-primary/0 z-[-1] opacity-70"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="fixed top-[40%] -right-[100px] w-[200px] h-[200px] rounded-[40%_60%_70%_30%/50%_40%_60%_50%] bg-gradient-radial from-secondary/10 to-secondary/0 z-[-1] opacity-50"
      />
    </>
  );
}
