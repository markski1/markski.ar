import { withTheme } from '@emotion/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  out: {
    opacity: 0,
    scale: 0.9,
    zIndex: 1,
    y: 200,
    transition: {
      duration: 0.25
    }
  },
  in: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25
    }
  }
};


const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
		<div className="efectoTransicion">
			<AnimatePresence
	      mode='wait'
	    >
	      <motion.div variants={variants}
          key={asPath}
          animate="in"
          initial="out"
          exit="out">
	        {children}
	      </motion.div>
	    </AnimatePresence>
		</div>
	);
};

export default Transition;