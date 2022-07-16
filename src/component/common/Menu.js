import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, forwardRef, useImperativeHandle } from 'react';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	const active = { color: 'aqua' };

	useImperativeHandle(ref, () => {
		return {
			toggle: () => setOpen(!Open),
		};
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobileGnb'
					initial={{ x: -320, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
					exit={{ x: -320, opacity: 0 }}>
					<h1>
						<NavLink exact to='/'>
							DCODELAB
						</NavLink>
					</h1>

					<ul>
						<li>
							<NavLink activeStyle={active} to='/department'>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/community'>
								Community
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/gallery'>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/youtube'>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/location'>
								Location
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/join'>
								Join
							</NavLink>
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
