import React from 'react'

const Sport = () => {
	return (
		<>
			<div className='sport__box'>
				<img className='sport__image' src='/cycle.jpg'></img>
				<video className='sport__video' src={'/cycle.mp4'} autoPlay loop muted />
				<h2 className='sport__title1'>Lorem Ipsum</h2>
				<h2 className='sport__title2'>Lorem Ipsum</h2>
			</div>
			<div className='about__box'>
				<h3 className='about__title'>REPORTAŻ SPORTOWY</h3>
				<p className='about__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit. Aliquam gravida orci augue, vel ullamcorper magna commodo et.
				</p>
			
				<div className='sport__images--box'>
					<div className='sport__images--medium'>
						<div className='sport__image--parent'>
							<a href=''>
								<img className='sport__images--img' src='/sport1.jpg'></img>
							</a>
							<p className='about__title sport__images--imgtxt'>Biegi</p>
							<a href='' className='sport__content--title sport__images--title'>
								Więcej
							</a>
						</div>
						<div className='sport__image--parent'>
							<a href=''>
								<img className='sport__images--img' src='/sport2.jpg'></img>
							</a>
							<p className='about__title sport__images--imgtxt'>Rowery</p>
							<a href='' className='sport__content--title sport__images--title'>
							Więcej
							</a>
						</div>
					</div>
					<div className='sport__images--medium'>
						<div className='sport__image--parent'>
							<a href=''>
								<img className='sport__images--img' src='/sport3.jpg'></img>
							</a>
							<p className='about__title sport__images--imgtxt'>Triathlon</p>
							<a href='' className='sport__content--title sport__images--title'>
							Więcej
							</a>
						</div>
						<div className='sport__image--parent'>
							<a href=''>
								<img className='sport__images--img' src='/sport4.jpg'></img>
							</a>
							<p className='about__title sport__images--imgtxt'>Inne</p>
							<a href='' className='sport__content--title sport__images--title'>
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
