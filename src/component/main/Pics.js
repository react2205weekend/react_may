function Pics({ Scrolled, start, base }) {
	const position = Scrolled - start - base;

	return (
		<section id='pics' className='myScroll'>
			{/* <p style={position >= 0 ? { left: 100 + position } : null}>FLICKR</p> */}
			<p style={{ left: 100 + position }}>FLICKR</p>
		</section>
	);
}

export default Pics;
