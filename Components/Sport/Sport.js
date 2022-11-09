import React from 'react'
import Link from 'next/link'

const Sport = () => {
	return (
		<>
			<div className='global__box'>
				<img className='video__image' src='/cycle.jpg'></img>
				<video className='video__hero' src={'/cycle.mp4'} autoPlay loop muted />
				<h2 className='video__hero--title1'>Lorem Ipsum</h2>
				<h2 className='video__hero--title2'>Lorem Ipsum</h2>
			</div>
			<div className='global__box'>
				<h3 className='global__title'>REPORTAŻ SPORTOWY</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit. Aliquam gravida orci augue, vel ullamcorper magna commodo et.
				</p>

				<div className='global__images--box'>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							<Link href='/runs'>
								<img className='global__images--img' src='/sport1.jpg'></img>
							</Link>
							<p className='global__title global__images--imgtxt'>Biegi</p>

							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
						<div className='global__image--parent'>
							<Link href='/bikes'>
								<img className='global__images--img' src='/sport2.jpg'></img>
							</Link>
							<p className='global__title global__images--imgtxt'>Rowery</p>
							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
					</div>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							<Link href='/triathlon'>
								<img className='global__images--img' src='/sport3.jpg'></img>
							</Link>
							<p className='global__title global__images--imgtxt'>Triathlon</p>

							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
						<div className='global__image--parent'>
							<Link href='/other'>
								<img className='global__images--img' src='/sport4.jpg'></img>
							</Link>
							<p className='global__title global__images--imgtxt'>Inne</p>

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

export default Sport
