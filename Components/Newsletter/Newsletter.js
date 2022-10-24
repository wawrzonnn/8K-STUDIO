import React from 'react'

const Newsletter = () => {
	return (
		<div className='newsletter__background'>
			<div className='newsletter__box'>
                <div className='newsletter__xmark'>X</div>
				<h2 className='newsletter__txt newsletter__txt--title'>Bądź na bieżąco!</h2>
				<p className='newsletter__txt newsletter__txt--text'>
					Zapisz się do newslettera i bądź bieżąco z naszymi relacjami
				</p>
				<div className='newsletter__submit'>
					<input className='newsletter__submit--email' type={'text'} placeholder={'Wpisz swój e-mail'}></input>
					<button className='newsletter__submit--btn'>WYŚLIJ</button>
				</div>
			</div>
		</div>
	)
}

export default Newsletter
