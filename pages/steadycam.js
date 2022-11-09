import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const steadycam = () => {
	return (
		<>
			<Header />
			<div className='global__box pages__margin--header'>
				<h3 className='global__title'>LOREM IPSUM</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit. Aliquam gravida orci augue, vel ullamcorper magna commodo et.
				</p>
				<iframe
					className='pages__video'
					width='1120'
					height='630'
					src='https://www.youtube.com/embed/xNounS1D1_s'
					allowfullscreen></iframe>
				<p className='global__content--text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<iframe
					className='pages__video'
					width='1120'
					height='630'
					src='https://www.youtube.com/embed/xNounS1D1_s'
					allowfullscreen></iframe>
				<p className='global__content--text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<iframe
					className='pages__video'
					width='1120'
					height='630'
					src='https://www.youtube.com/embed/xNounS1D1_s'
					allowfullscreen></iframe>
				<p className='global__content--text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<iframe
					className='pages__video'
					width='1120'
					height='630'
					src='https://www.youtube.com/embed/xNounS1D1_s'
					allowfullscreen></iframe>
			</div>
			<Footer />
		</>
	)
}

export default steadycam
