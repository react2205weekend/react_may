function Pics({ Scrolled, start, base }) {
	let position = 0;
	if (start) position = Scrolled - start - base;

	return (
		<section id='pics' className='myScroll'>
			{/* <p style={position >= 0 ? { left: 100 + position } : null}>FLICKR</p> */}
			<p style={{ left: 100 + position }}>FLICKR</p>
			<h3 style={{ left: 100 + position * 2 }}>FLICKR</h3>
		</section>
	);
}

export default Pics;
