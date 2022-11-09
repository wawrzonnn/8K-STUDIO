import React from 'react'
import Link from 'next/link'

const Film = () => {
	return (
		<>
			<div className='global__box background__light'>
				<img className='video__image' src='/film.jpg'></img>
				<video className='video__hero' src={'/film.mp4'} autoPlay loop muted />
				<h2 className='video__hero--title1'>Lorem Ipsum</h2>
				<h2 className='video__hero--title2'>Lorem Ipsum</h2>
			</div>
			<div className='global__box background__light'>
				<h3 className='global__title'>PRODUKCJA FILMÓW</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit.
				</p>
				<div className='global__images--box background__light'>
					<div className='global__images--medium'>
						<div className='global__image--parent'>
							
							<Link href='/advertising'>
								<img className='global__images--img images__twice' src='/film6.jpg'></img>
							</Link>
							<p className='global__title global__images--imgtxt'>Film Reklamowy</p>

							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
						<div className='global__image--parent'>
						<Link href='/reportage'>
								<img className='global__images--img images__twice' src='/film5.jpg'></img>
							</Link>
							<p className='global__title global__images--imgtxt'>Reportaż</p>
							<a href='' className='global__images--title'>
								Więcej
							</a>
						</div>
					</div>
				</div>
				<p className='about__more film__more '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</>
	)
}

export default Film
