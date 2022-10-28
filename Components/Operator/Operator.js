import React from 'react'

const Operator = () => {
	return (
		<>
			<div className='global__box'>
				<img className='video__image operator__box--image' src='/operator.jpg'></img>
                <video className='video__hero' src={'/operator.mp4'} autoPlay loop muted />
				<h3 className='global__title'>USŁUGI OPERATORSKIE</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus.
				</p>
				<div className='global__images--box'>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							<a href=''>
								<img className='global__images--img' src='/operator1.jpg'></img>
							</a>
							<p className='global__title global__images--imgtxt'>Zdjęcia</p>

							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
						<div className='global__image--parent'>
							<a href=''>
								<img className='global__images--img' src='/operator2.jpg'></img>
							</a>
							<p className='global__title global__images--imgtxt'>Steadycam</p>
							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
					</div>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							<a href=''>
								<img className='global__images--img' src='/operator3.jpg'></img>
							</a>
							<p className='global__title global__images--imgtxt'>Live Stream</p>

							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
						<div className='global__image--parent'>
							<a href=''>
								<img className='global__images--img' src='/operator4.jpg'></img>
							</a>
							<p className='global__title global__images--imgtxt'>Hyperlapse, Timelapse</p>

							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Operator
