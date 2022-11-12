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
					<p className='header__nav--item nav--item-1'>HOME</p>
					<Link href='/aboutus'>
						<p className='header__nav--item'>O NAS</p>
					</Link>
					<Link href='/bikes'>
						<p className='header__nav--item'>
							REPORTAŻ <span>SPORTOWY</span>
						</p>
					</Link>
					<Link href='/advertising'>
						<p className='header__nav--item'>
							PRODUKCJA <span>FILMÓW</span>
						</p>
					</Link>
					<Link href='/steadycam'>
						<p className='header__nav--item'>
							USŁUGI <span>OPERATORSKIE</span>
						</p>
					</Link>
					<Link href='/sky'>
						<p className='header__nav--item'>
							USŁUGI <span>LOTNICZE</span>
						</p>
					</Link>
					<p className='header__nav--item'>POSTPRODUKCJA</p>
					<Link href='/rental'>
						<p className='header__nav--item'>RENTAL</p>
					</Link>
					<Link href='/contact'>
						<p className='header__nav--item'>KONTAKT</p>
					</Link>
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
