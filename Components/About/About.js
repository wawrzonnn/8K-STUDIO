import React from 'react'
import Link from 'next/link'

const About = () => {
	return (
		<>
			<div className='global__box'>
				<p className='global__title'>O NAS</p>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit. Aliquam gravida orci augue
				</p>
				<Link href='/aboutus'>
					<p className='about__more'>WIĘCEJ</p>
				</Link>
			</div>
		</>
	)
}

export default About
