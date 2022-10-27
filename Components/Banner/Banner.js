import React from 'react'

const Banner = () => {
	return (
		<>
			<div className='banner__box'>
				<video className='banner__video' src={'/hero.mp4'} autoPlay loop muted />
				<div className='banner__text--box'>
					<h1 className='banner__text1'>8K STUDIO</h1>
					<h2 className='banner__text2'>PRODUKCJA FILMOWA I TELEWIZYJNA</h2>
				</div>
			</div>
		</>
	)
}

export default Banner
