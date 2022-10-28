import React from 'react'

const Hero = () => {
	return (
		<>
			<div className='hero__box'>
				<video className='hero__video' src={'/hero.mp4'} autoPlay loop muted />
				<div className='hero__text--box'>
					<h1 className='hero__text1'>8K STUDIO</h1>
					<h2 className='hero__text2'>PRODUKCJA FILMOWA I TELEWIZYJNA</h2>
				</div>
			</div>
		</>
	)
}

export default Hero
