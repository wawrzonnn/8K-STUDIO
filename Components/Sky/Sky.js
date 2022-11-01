import React from 'react'

const Sky = () => {
	return (
		<>
			<div className='global__box'>
				<img className='video__image operator__box--image' src='/dron.jpg'></img>
				<video className='video__hero' src={'/dron.mp4'} autoPlay loop muted />
				<h3 className='global__title'>ZDJĘCIA LOTNICZE</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus.
				</p>
				<div className='global__images--box'>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							<a href=''>
								<img className='global__images--img images__twice' src='/dron.jpg'></img>
							</a>
							<p className='global__title global__images--imgtxt'>Zdjęcia Lotnicze</p>

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

export default Sky
