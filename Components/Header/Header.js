import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Header = () => {
	const [navBtn, setnavBtn] = useState(false)
	const [navMenu, setnavMenu] = useState(false)
	const navBtnClick = () => {
		setnavBtn(btn => !btn)
		setnavMenu(Menu => !Menu)
	}
	let btnCheck = navBtn ? 'btnActive' : 'btnInactive'
	let menuCheck = navMenu ? 'menuActive' : 'menuInactive'
	return (
		<>
			<div className='header__box'>
				<div className='header__logo'>
					<div>
						<p className='header__logo--text'>8k.studio.pl</p>
						<img
							className='header__logo--img header__logo--small'
							src={'/produkcja-filmow-jelenia-gora.jpg'}
							alt='8KSTUDIO.PL logo'
						/>
						{/* <FontAwesomeIcon icon={faEnvelope}/>
						<FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
					</div>
				</div>
				<nav className={`header__nav ${menuCheck}`}>
					<a className='header__nav--item nav--item-1' href={'/'}>
						HOME
					</a><Link href='/aboutus'>
					<a className='header__nav--item' href={'/'}>
						O NAS
					</a></Link>
					<a className='header__nav--item ' href={'/'}>
						REPORTAŻ <span>SPORTOWY</span>
					</a>
					<a className='header__nav--item' href={'/'}>
						PRODUKCJA <span>FILMÓW</span>
					</a>
					<a className='header__nav--item' href={'/'}>
						USŁUGI <span>OPERATORSKIE</span>
					</a>
					<a className='header__nav--item' href={'/'}>
						USŁUGI <span>LOTNICZE</span>
					</a>
					<a className='header__nav--item' href={'/'}>
						POSTPRODUKCJA
					</a>
					<a className='header__nav--item' href={'/'}>
						RENTAL
					</a><Link href='/contact'>
					<a className='header__nav--item' href={'/'}>
						KONTAKT
					</a></Link>
				</nav>
				<div className='header__hamburger--box'>
					<div className={`hamburger-menu ${btnCheck}`} onClick={navBtnClick}>
						<div className='bar-top'></div>
						<div className='bar-middle'></div>
						<div className='bar-bottom'></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
