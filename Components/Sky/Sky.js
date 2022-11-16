import React from 'react'
import Link from 'next/link'

const Sky = () => {
	return (
		<>
			<div className='global__box'><Link href='/sky'>
				<img className='video__image operator__box--image' src='/dron.jpg'></img></Link>
				<video className='video__hero' src={'/dron.mp4'} autoPlay loop muted />
				<h2 className='video__hero--title1'>Lorem Ipsum</h2>
				<h2 className='video__hero--title2 sky__title2'>Lorem Ipsum</h2>
				<h3 className='global__title'>ZDJĘCIA LOTNICZE</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus.
				</p>
				<div className='global__images--box'>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							
								{/* <img className='global__images--img images__twice' src='/dron.jpg'></img> */}
							
							{/* <p className='global__title global__images--imgtxt'>Zdjęcia Lotnicze</p> */}

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
