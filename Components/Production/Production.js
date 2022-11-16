import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Production = () => {
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
			<div className='global__box'>
				<img className='video__image' src='/produkcja.jpg'></img>
				<video className='video__hero' src={'/produkcja.mp4'} autoPlay loop muted />
				<h2 className='video__hero--title1'>Lorem Ipsum</h2>
				<h2 className='video__hero--title2' id='production'>
					Lorem Ipsum
				</h2>
			</div>
			<div className='global__box'>
				<h3 className='global__title'>POSTPRODUKCJA</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus.
				</p>
				<FontAwesomeIcon
					className={`global__show--button global__show--arrow ${arrowToggle}`}
					icon={faAngleDoubleDown}
					onClick={showBtnClick}></FontAwesomeIcon>
				<div className={`global__hidden--box ${showToggle}`}>
					<div className='global__images--box'>
						<div className='global__images--medium'>
							<div className='global__image--parent'>
								<Link href='/montage'>
									<img className='global__images--img images__twice' src='/produkcja1.jpg'></img>
								</Link>
								<p className='global__title global__images--imgtxt'>Montaż</p>

								<a href='' className='global__images--title'>
									Więcej
								</a>
							</div>
							<div className='global__image--parent'>
								<Link href='/colorcorrection'>
									<img className='global__images--img images__twice' src='/produkcja2.jpg'></img>
								</Link>
								<p className='global__title global__images--imgtxt'>Korekcja Barwna</p>
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

export default Production
