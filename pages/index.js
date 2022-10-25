import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Newsletter from "../Components/Newsletter/Newsletter";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	return (
		<>
		<Header />
		<Banner />
		<About />
		{/* <FontAwesomeIcon icon={faHome} />
		<FontAwesomeIcon icon={FontAwesomeIcon} />
		<FontAwesomeIcon icon={faInstagramSquare} /> */}
		<Newsletter />
		</>
	)
}
