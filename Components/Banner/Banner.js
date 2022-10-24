import React from 'react'
// import video from '../../public/video.mp4';

const Banner = () => {
	return (
		<>
		
		<div className='banner__box'>
		<video className='huj' src={"../../public/video.mp4"} autoPlay loop muted/>  
				<div className='test'>
					<h1 className='banner__text1'>8K STUDIO</h1>
					<h2 className='banner__text2'>PRODUKCJA FILMOWA I TELEWIZYJNA</h2></div>
			</div>
		</>
	)
}

export default Banner
