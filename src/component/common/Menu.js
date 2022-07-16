import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

function Menu() {
	const [Open, setOpen] = useState(true);
	const active = { color: 'aqua' };

	return (
		<AnimatePresence>
			{Open && (
				<nav id='mobileGnb'>
					<h1>
						<NavLink exact to='/'>
							DCODELAB
						</NavLink>
					</h1>

					<ul id='gnb'>
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
				</nav>
			)}
		</AnimatePresence>
	);
}

export default Menu;
