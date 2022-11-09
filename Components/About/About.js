import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faHSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const About = () => {
	return (
		<>
			<div className='global__box'>
				<p className='global__title'>O NAS</p>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit. Aliquam gravida orci augue, vel ullamcorper magna commodo et. Fusce consectetur, nisl volutpat
					pharetra consectetur, massa sapien porta dolor
				</p>
				{/* <FontAwesomeIcon icon={faHSquare}></FontAwesomeIcon> */}
				<Link href='/aboutus'>
					<p className='about__more'>SPRAWDŹ WIĘCEJ</p>
				</Link>
			</div>
		</>
	)
}

export default About
