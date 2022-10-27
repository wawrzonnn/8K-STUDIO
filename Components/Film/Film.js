import React from 'react'

const Film = () => {
  return (
    <>
    <div className='sport__box'>
    <img className='sport__image' src='/film.jpg'></img>
    <video className='sport__video' src={'/film.mp4'} autoPlay loop muted />
    <h2 className='sport__title1'>Lorem Ipsum</h2>
				<h2 className='sport__title2'>Lorem Ipsum</h2>
                </div>
                <div className='about__box'>
                <h3 className='about__title'>PRODUKCJA FILMÓW</h3>
				<p className='about__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit.
				</p>
                <div className='sport__images--box'>
                <div className='sport__images--medium'>
						<div className='sport__image--parent'>
							<a href=''>
								<img className='sport__images--img' src='/film1.jpg'></img>
							</a>
							<p className='about__title sport__images--imgtxt'>Film Reklamowy</p>
							<a href='' className='sport__content--title sport__images--title'>
								Więcej
							</a>
						</div>
						<div className='sport__image--parent'>
							<a href=''>
								<img className='sport__images--img' src='/film2.jpg'></img>
							</a>
							<p className='about__title sport__images--imgtxt'>Reportaż</p>
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

export default Film