import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faFlickr } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	const [navBtn, setnavBtn] = useState(false)
	const [navMenu, setnavMenu] = useState(false)
	const [sportMenu, setsportMenu] = useState(false)
	const [filmMenu, setfilmMenu] = useState(false)
	const [operatorMenu, setoperatorMenu] = useState(false)
	const [productionMenu, setproductionMenu] = useState(false)

	const navBtnClick = () => {
		setnavBtn(btn => !btn)
		setnavMenu(menu => !menu)
	}

	const sportToggle = () => {
		setsportMenu(sport => !sport)
	}
	const filmToggle = () => {
		setfilmMenu(film => !film)
	}
	const operatorToggle = () => {
		setoperatorMenu(operator => !operator)
	}
	const productionToggle = () => {
		setproductionMenu(production => !production)
	}
	let btnCheck = navBtn ? 'btnActive' : 'btnInactive'
	let menuCheck = navMenu ? 'menuActive' : 'menuInactive'
	let sportShow = sportMenu ? 'global__show' : 'global__hidden'
	let filmShow = filmMenu ? 'global__show' : 'global__hidden'
	let operatorShow = operatorMenu ? 'global__show' : 'global__hidden'
	let productionShow = productionMenu ? 'global__show' : 'global__hidden'
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
					</div>
				</div>
				<nav className={`header__nav ${menuCheck}`}>
					<Link href='https://www.instagram.com/mountainguide_iml/'>
						<FontAwesomeIcon className='header__icon header__icon--ig' icon={faInstagram}></FontAwesomeIcon>
					</Link>
					<Link href='https://www.facebook.com/8kstudiopl'>
						<FontAwesomeIcon className='header__icon header__icon--fb' icon={faFacebook}></FontAwesomeIcon>
					</Link>
					<Link href='https://www.flickr.com/photos/154352174@N05/'>
						<FontAwesomeIcon className='header__icon header__icon--fk' icon={faFlickr}></FontAwesomeIcon>
					</Link>

					<Link href='https://8-k-studio-125i.vercel.app/'>
						<p className='header__nav--item nav--item-1'>HOME</p>
					</Link>
					<Link href='/aboutus'>
						<p className='header__nav--item'>O NAS</p>
					</Link>
					<div className='header__column'>
						<div className='header__dropdown--box'>
							<p className='header__nav--item header__nav--itemtwice' onClick={sportToggle}>
								REPORTAŻ SPORTOWY
							</p>
							<FontAwesomeIcon
								className={`header__dropicon header__dropicon--sport`}
								icon={faAngleDown}></FontAwesomeIcon>
						</div>
						<div class={`header__drop header__drop--first ${sportShow}`}>
							<Link href='runs'>
								<p className='header__nav--item header__drop--item'>BIEGI</p>
							</Link>
							<Link href='bikes'>
								<p className='header__nav--item header__drop--item'>ROWERY</p>
							</Link>
							<Link href='triathlon'>
								<p className='header__nav--item header__drop--item'>TRIATHLON</p>
							</Link>
							<Link href='other'>
								<p className='header__nav--item header__drop--item'>INNE</p>
							</Link>
						</div>
					</div>
					<div className='header__column'>
						<div className='header__dropdown--box'>
							<p className='header__nav--item header__nav--itemtwice' onClick={filmToggle}>
								PRODUKCJA FILMÓW
							</p>

							<FontAwesomeIcon
								className='header__dropicon header__dropicon--sport'
								icon={faAngleDown}></FontAwesomeIcon>
						</div>
						<div class={`header__drop ${filmShow}`}>
							<Link href='/advertising'>
								<p className='header__nav--item header__drop--item'>FILM REKLAMOWY</p>
							</Link>
							<Link href='/reportage'>
								<p className='header__nav--item header__drop--item'>REPORTAŻ</p>
							</Link>
						</div>
					</div>
					<div className='header__column'>
						<div className='header__dropdown--box'>
								<p className='header__nav--item header__nav--itemtwice huj' onClick={operatorToggle}>
									USŁUGI OPERATORSKIE
								</p>
							<FontAwesomeIcon
								className='header__dropicon header__dropicon--operator'
								icon={faAngleDown}></FontAwesomeIcon>
						</div>
						<div class={`header__drop ${operatorShow}`}>
							<Link href='/photos'>
								<p className='header__nav--item header__drop--item'>ZDJĘCIA</p>
							</Link>
							<Link href='/steadycam'>
								<p className='header__nav--item header__drop--item'>STEADYCAM</p>
							</Link>
							<Link href='livestream'>
								<p className='header__nav--item header__drop--item'>LIVE STREAM</p>
							</Link>
							<Link href='hyperlapse'>
								<p className='header__nav--item header__drop--item'>HYPERLAPSE TIMELAPSE</p>
							</Link>
						</div>
					</div>
					<Link href='/sky'>
						<p className='header__nav--item '>USŁUGI LOTNICZE</p>
					</Link>
					<div className='header__column'>
						<div className='header__dropdown--box'>
							<Link href='#production'>
								<p className='header__nav--item cipa' onClick={productionToggle}>
									POSTPRODUKCJA
								</p>
							</Link>
							<FontAwesomeIcon
								className='header__dropicon header__dropicon--production'
								icon={faAngleDown}></FontAwesomeIcon>
						</div>
						<div class={`header__drop ${productionShow}`}>
							<Link href='/montage'>
								<p className='header__nav--item header__drop--item'>MONTAŻ</p>
							</Link>
							<Link href='/colorcorrection'>
								<p className='header__nav--item header__drop--item'>KOREKCJA BARWNA</p>
							</Link>
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
