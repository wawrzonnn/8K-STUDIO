import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'


const Film = () => {
	const [showBtn, setshowBtn] = useState(false)
	const [arrowBtn, setarrowBtn] = useState(false)

	const showBtnClick = () => {
		setshowBtn(show => !show)
		setarrowBtn(arrow => !arrow)
	}
	let showToggle = showBtn ? 'global__show' : 'global__hidden'
	let arrowToggle = arrowBtn ? 'global__arrow--show' : 'global__arrow--hidden'
	return (
		<>
			<div className='global__box '>
				<img className='video__image' src='/film.jpg'/>
				<video className='video__hero' src={'/film.mp4'} autoPlay loop muted />
				<h2 className='video__hero--title1'>Lorem Ipsum</h2>
				<h2 className='video__hero--title2' id='film'>Lorem Ipsum</h2>
			</div>
			<div className='global__box background__light'>
				<h3 className='global__title'>PRODUKCJA FILMÓW</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit.
				</p>
				<FontAwesomeIcon
					className={`global__show--button global__show--arrow ${arrowToggle}`}
					icon={faAngleDoubleDown}
					onClick={showBtnClick}></FontAwesomeIcon>
<div className={`global__hidden--box ${showToggle}`}>
				<div className='global__images--box background__light'>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							
							<Link href='/advertising'>
								<img className='global__images--img images__twice' src='/film6.jpg' alt='Nagrywanie filmu reklamowego'/>
							</Link>
							<p className='global__title global__images--imgtxt'>Film Reklamowy</p>

							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
						<div className='global__image--parent'>
						<Link href='/reportage'>
								<img className='global__images--img images__twice' src='/film5.jpg'/>
							</Link>
							<p className='global__title global__images--imgtxt'>Reportaż</p>
							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default Film
