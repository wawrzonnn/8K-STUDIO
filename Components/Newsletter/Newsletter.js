import React from 'react'
import { useState } from 'react'
// const API = 'http://localhost:3000'

const Newsletter = () => {
	const [email, setEmail] = useState('')

	const submitEmail = async () => {
		const response = await fetch('http://localhost:3001/api/newsletter', 
			{
				method: 'POST',
				body: JSON.stringify({ email }),
				headers: { 'Content-Type': 'application/json' }
			})
			 const { email } = await response.json()
			 console.log(email);
	
			
	}

	return (
		<div className='newsletter__background'>
			<div className='newsletter__box'>
				<div className='newsletter__xmark'>X</div>
				<h2 className='newsletter__txt newsletter__txt--title'>Bądź na bieżąco!</h2>
				<p className='newsletter__txt newsletter__txt--text'>
					Zapisz się do newslettera i bądź na bieżąco z naszymi relacjami
				</p>
				<div className='newsletter__submit'>
					<input
						className='newsletter__submit--email'
						type={'text'}
						placeholder={'Wpisz swój e-mail'}
						value={email}
						onChange={e => setEmail(e.target.value)}></input>
					<button onClick={submitEmail} className='newsletter__submit--btn'>
						WYŚLIJ
					</button>
				</div>
			</div>
		</div>
	)
}

export default Newsletter
