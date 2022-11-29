import React from 'react'

const Contact = () => {
	return (
		<>
			<div className='global__box background__light'>
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
					<textarea
						className='newsletter__submit--email contact__textarea'
						type={'textarea'}
						placeholder={'Wiadomość'}
						rows={7}
						cols={7}/>
				</div>

				<button className='newsletter__submit--btn contact__submit'>WYŚLIJ</button>
			</div>
		</>
	)
}

export default Contact
