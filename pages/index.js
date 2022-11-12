import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Newsletter from '../Components/Newsletter/Newsletter'
import Sport from '../Components/Sport/Sport'
import Film from '../Components/Film/Film'
import Media from '../Components/Media/Media'
import Operator from '../Components/Operator/Operator'
import Sky from '../Components/Sky/Sky'
import Production from '../Components/Production/Production'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Sport />
			<Film />
			<Media />
			<Operator />
			<Sky />
			<Production />
			<Newsletter />
			<Contact />
			<Footer />
		</>
	)
}
