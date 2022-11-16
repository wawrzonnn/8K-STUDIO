import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Operator = () => {
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
				<img className='video__image operator__box--image' src='/operator.jpg'></img>
				<video className='video__hero' src={'/operator.mp4'} autoPlay loop muted />
				<h2 className='video__hero--title1'>Lorem Ipsum</h2>
				<h2 className='video__hero--title2 operator__title2' id='operator'>
					Lorem Ipsum
				</h2>
				<h3 className='global__title'>USŁUGI OPERATORSKIE</h3>
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
								<Link href='/photos'>
									<img className='global__images--img' src='/operator1.jpg'></img>
								</Link>
								<p className='global__title global__images--imgtxt'>Zdjęcia</p>

								<a href='' className='global__images--title'>
									Więcej
								</a>
							</div>
							<div className='global__image--parent'>
								<Link href='/steadycam'>
									<img className='global__images--img' src='/operator2.jpg'></img>
								</Link>
								<p className='global__title global__images--imgtxt'>Steadycam</p>
								<a href='' className='global__images--title'>
									Więcej
								</a>
							</div>
						</div>
						<div className='global__images--medium'>
							<div className='global__image--parent'>
								<Link href='/livestream'>
									<img className='global__images--img' src='/operator3.jpg'></img>
								</Link>
								<p className='global__title global__images--imgtxt'>Live Stream</p>

								<a href='' className='global__images--title'>
									Więcej
								</a>
							</div>
							<div className='global__image--parent'>
								<Link href='/hyperlapse'>
									<img className='global__images--img' src='/operator4.jpg'></img>
								</Link>
								<p className='global__title global__images--imgtxt'>Hyperlapse, Timelapse</p>

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

export default Operator
