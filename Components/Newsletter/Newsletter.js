import React from 'react'
import { useState, useEffect } from 'react'
// import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzkgiuutarllvikdabbv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

const Newsletter = () => {
	const [email, setEmail] = useState('')
	const [newsletterDisplay, setNewsletterDisplay] = useState('')
	useEffect(() => {
		setTimeout(() => {
			setNewsletterDisplay('display')
		}, 5000)
	}, [])

	const submitEmail = async () => {
		const response = await fetch('https://reqres.in/api/users', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: { 'Content-Type': 'application/json' },
		})

		const { email } = await response.json()
		console.log(email)

		// setNewsletterDisplay('')
	}

	const xMarkNewsletter = () => {
		setNewsletterDisplay('')
	}

	return (
		<div className='newsletter__background'>
			<div className={`newsletter__box ${newsletterDisplay}`}>
				<div className='newsletter__xmark' onClick={xMarkNewsletter}>
					X
				</div>
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
