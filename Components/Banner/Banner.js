import React from 'react'
// import video from '../../public/video.mp4';

const Banner = () => {
	return (
		<>
			<div className='banner__box'>
				<video className='banner__video' src={'../../public/video.mp4'} autoPlay loop muted />
				<div className='banner__text--box'>
					<h1 className='banner__text1'>8K STUDIO</h1>
					<h2 className='banner__text2'>PRODUKCJA FILMOWA I TELEWIZYJNA</h2>
				</div>
				<img src='../../public/produkcja-filmow-jelenia-gora.jpg' />
			</div>
		</>
	)
}

export default Banner
