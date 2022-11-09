import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'

const contact = () => {
	return (
		<>
			<Header />
            <div className='global__box background__light pages__margin--header pages__contact--box'>
				<h3 className='global__title'>NAPISZ DO NAS</h3>
				<p className='global__content--text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quam non sapien rutrum, vel
					dictum sapien scelerisque. Fusce feugiat dolor ut dolor rutrum faucibus. Sed dictum porttitor nisi molestie
					hendrerit.
				</p>
			
			<div className='contact__input--box'>
				<div className='contact__input--boxsmall'>
					<input className='newsletter__submit--email' type={'text'} placeholder={'Imię'}></input>
					<input className='newsletter__submit--email' type={'text'} placeholder={'E-mail'}></input>
					<input className='newsletter__submit--email' type={'text'} placeholder={'Telefon'}></input>
				</div>

				<input className='newsletter__submit--email' type={'textarea'} placeholder={'Wiadomość'} col='10' rows='10'></input>
			</div>

			<button className='newsletter__submit--btn'>WYŚLIJ</button></div>
			<Footer />
		</>
	)
}

export default contact
