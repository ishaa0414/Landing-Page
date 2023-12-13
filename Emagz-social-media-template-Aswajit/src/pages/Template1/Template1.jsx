import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AboutMe from "../../components/AboutMe/AboutMe";
import NavBar from "../../components/NavBar/NavBar";
import Rating from "../../components/Rating/Rating";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import styles from "./Template1.module.scss";
import "./Template1.scss";
import setting from "./images/Setting.svg";

const Template1 = () => {
	const { user } = useSelector((state) => state.auth);
	const [width, setWidth] = useState(window.innerWidth);
	document.documentElement.style.setProperty("--base-font-size", "100%");

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width]);
        
	if (width < 1728) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1500) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 1350) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1250) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1150) document.documentElement.style.setProperty("--base-font-size", "65%");
	if (width < 1024) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (width < 900) document.documentElement.style.setProperty("--base-font-size", "55%");
	if (width < 800) document.documentElement.style.setProperty("--base-font-size", "50%");

	const [editable, setEditable] = useState(true);
	const [showNav, setShowNav] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [ratingData, setRatingData] = useState("4.5");
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [name, setName] = useState("");
	const [intro, setIntro] = useState(
		`Lorem ipsum dolor sit amet consectetur. Et enim varius pellentesque gravida. Nisl molestie vitae at mauris dolor varius. Risus iaculis turpis neque leo. Cras lacus ultrices in proin arcu scelerisque feugiat velit. Sit viverra malesuada feugiat massa eu. Sit ac donec risus fermentum sit purus sagittis`
	);
	const [shortStory, setShortStory] = useState(
		`Lorem ipsum dolor sit amet consectetur. Nunc auctor arcu purus urna. Viverra sem netus neque convallis commodo. Sit vitae bibendum rhoncus viverra.`
	);


	return (
		<>
			<NavBar editable={editable} setEditable={setEditable} showNav={showNav} setShowNav={setShowNav} />
			{showRating && <Rating setShowRating={setShowRating} setRatingData={setRatingData} />}
			{showAboutMe && <AboutMe editable={editable} setShowAboutMe={setShowAboutMe} />}

			<div className={styles.Template5Wrapper} id="Temp5" style={{ background: "" }}>
				{!showNav && <img src={setting} alt="" className={styles.Setting} onClick={() => setShowNav(true)} />}

				<div className={styles.Template5}>
					<Container1
						editable={editable}
						name={name}
						setName={setName}
						setShowRating={setShowRating}
						ratingData={ratingData}
					/>
					<Container2 editable={editable} intro={intro} setIntro={setIntro} setShowAboutMe={setShowAboutMe} />
					<Container3 />
					<Container4 editable={editable} shortStory={shortStory} setShortStory={setShortStory} />
				</div>
			</div>
		</>
	);
};

export default Template1;
