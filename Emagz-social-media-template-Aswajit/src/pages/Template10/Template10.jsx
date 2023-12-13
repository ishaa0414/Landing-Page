import React, { useEffect, useState } from "react";
import Container2 from "./Container2";
import Container3 from "./Container3";
import styles from "./Template10.module.scss";
import Container4 from "./Container4";
import Container4m from "./Container4m";
import Container1 from "./Container1";
import NavBar from "../../components/NavBar/NavBar";
import Rating from "../../components/Rating/Rating";
import setting from "./images/Setting.svg";
import Container2m from "./Container2m";
import AboutMe from "../../components/AboutMe/AboutMe"
import "./Template10.scss";
const Template10 = () => {
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
	const [showRating, setShowRating] = useState(false);
	const [ratingData, setRatingData] = useState("4");
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [showNav, setShowNav] = useState(false);
	const [name, setName] = useState("Leslie Alexander");
	const [intro, setIntro] = useState(
		`Lorem ipsum dolor sit amet consectetur. Et enim varius pellentesque gravida. Nisl molestie vitae at mauris dolor varius. Risus iaculis turpis neque leo. Cras lacus ultrices in proin arcu scelerisque feugiat velit. Sit viverra malesuada feugiat massa eu. Sit ac donec risus fermentum sit purus sagittis`
	);
	const [shortStory, setShortStory] = useState(
		`Lorem ipsum dolor sit amet consectetur. Nunc auctor arcu purus urna. Viverra sem netus neque convallis commodo. Sit vitae bibendum rhoncus viverra.`
	);
	const breakpoint = 800;
  return (
	<>


<NavBar editable={editable} setEditable={setEditable} showNav={showNav} setShowNav={setShowNav} />
	{showRating && <Rating setShowRating={setShowRating} setRatingData={setRatingData} />}
	{showAboutMe && <AboutMe editable={editable} setShowAboutMe={setShowAboutMe} />}

	<div className={styles.Template10Wrapper}   id="Temp10" style={{ background: "" }}>
		{!showNav && <img src={setting} alt="" className={styles.Setting} onClick={() => setShowNav(true)} />}

		<div className={styles.Template10}>
      	<Container1 
        	editable={editable}
		    name={name}
		    setName={setName}
		    setShowRating={setShowRating}
		    ratingData={ratingData}
      	/>

{window.innerWidth <= breakpoint ? (
        <Container2m editable={editable}intro={intro} setIntro={setIntro} setShowAboutMe={setShowAboutMe}/>
      ) : (
        <Container2 editable={editable}intro={intro} setIntro={setIntro} setShowAboutMe={setShowAboutMe} />
      )}
			
		<Container3 />
	   
		<div>
      {window.innerWidth <= breakpoint ? (
        <Container4m editable={editable} shortStory={shortStory} setShortStory={setShortStory}/>
      ) : (
        <Container4 editable={editable} shortStory={shortStory} setShortStory={setShortStory} />
      )}
    </div>
		</div>
		</div>
  </>
  );
};

export default Template10;