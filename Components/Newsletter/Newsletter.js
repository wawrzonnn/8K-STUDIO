import React from 'react'
import { useState, useEffect } from 'react'

export default function Newsletter () {
	const [email, setEmail] = useState('')
	// const [response, setResponse] = useState()
	const [newsletterDisplay, setNewsletterDisplay] = useState('')
	
	useEffect(() => {
		setTimeout(() => {
			setNewsletterDisplay('display')
		}, 10000)
	}, [])

	const xMarkNewsletter = () => {
		setNewsletterDisplay('')
	}

	const emailChangeHandler = e => {
		setEmail(e.target.value)
	}

	const submitHandler = async e => {
		e.preventDefault()
		const body = JSON.stringify({
			email,
		})

		const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body,
		})
		// const data = await res.json()
		// setResponse(data)
	}

	return (
		<div className='newsletter__background'>
			<div className={`newsletter__box ${newsletterDisplay}`}>
				<div className='newsletter__xmark' onClick={xMarkNewsletter}>
					X
				</div>
				<h2 className='newsletter__txt newsletter__txt--title'>BĄDŹ NA BIEŻĄCO!</h2>
				<p className='newsletter__txt newsletter__txt--text'>
					Zapisz się do newslettera i bądź na bieżąco z naszymi relacjami
				</p>
				<form className='newsletter__submit' onSubmit={submitHandler}>
					<input
						className='newsletter__submit--email'
						placeholder={'Wpisz swój e-mail'}
						type='email'
						value={email}
						name='email'
						onChange={emailChangeHandler}
					/>
					<button className='newsletter__submit--btn' type='submit'>
						WYŚLIJ
					</button>
				</form>
			</div>
		</div>
	)
}
