import { forwardRef, useState, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.aside
					className='pop'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
					exit={{
						opacity: 0,
						scale: 0,
						transition: { duration: 0.5, delay: 1 },
					}}>
					<motion.div
						className='con'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
						exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}>
						{props.children}
						<motion.span
							className='close'
							onClick={() => setOpen(false)}
							initial={{ opacity: 0, x: 50 }}
							animate={{
								opacity: 1,
								x: 0,
								transition: { duration: 0.5, delay: 1 },
							}}
							exit={{
								opacity: 0,
								x: 50,
							}}>
							close
						</motion.span>
					</motion.div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Popup;
