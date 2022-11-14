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
					<Link href='/'>
						<p className='header__nav--item nav--item-1'>HOME</p>
					</Link>
					<Link href='/aboutus'>
						<p className='header__nav--item'>O NAS</p>
					</Link>
					<div className='kolumna'>
						<Link href='/bikes'>
							<p className='header__nav--item'>REPORTAŻ SPORTOWY</p>
						</Link>
						<div class='drop'>
							<p className='header__nav--item'>BIEGI</p>
							<p className='header__nav--item'>ROWERY</p>
							<p className='header__nav--item'>TRIATHLON</p>
							<p className='header__nav--item'>INNE</p>
						</div>
					</div>
					<div className='kolumna'>
						<Link href='/advertising'>
							<p className='header__nav--item'>PRODUKCJA FILMÓW</p>
						</Link>
						<div class='drop'>
							<p className='header__nav--item'>FILM REKLAMOWY</p>
							<p className='header__nav--item'>REPORTAŻ</p>
						</div>
					</div>
					<div className='kolumna'>
						<Link href='/steadycam'>
							<p className='header__nav--item'>USŁUGI OPERATORSKIE</p>
						</Link>
						<div class='drop'>
							<p className='header__nav--item'>ZDJĘCIA</p>
							<p className='header__nav--item'>STEADYCAM</p>
							<p className='header__nav--item'>LIVE STREAM</p>
							<p className='header__nav--item'>HYPERLAPSE TIMELAPSE</p>
						</div>
					</div>
					<Link href='/sky'>
						<p className='header__nav--item'>USŁUGI LOTNICZE</p>
					</Link>
					<div className='kolumna'>
						<Link href='/montage'>
							<p className='header__nav--item'>POSTPRODUKCJA</p>
						</Link>
						<div class='drop'>
							<p className='header__nav--item'>MONTAŻ</p>
							<p className='header__nav--item'>KOREKCJA BARWNA</p>
						</div>
					</div>

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
