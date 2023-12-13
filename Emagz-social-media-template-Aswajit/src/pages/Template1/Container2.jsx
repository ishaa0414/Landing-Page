import React, { useState } from "react";
import styles from "./Template1.module.scss";
import TextArea from "./TextArea";
// import Con2 from "./images/new.svg";
import Con2 from "./images/Group 10.svg";

const Container2 = ({ editable, intro, setIntro, setShowAboutMe }) => {
	return (
		<div className={styles.Container2}>
			<h4 className={styles.H4}>My Intro</h4>

			<div className={styles.Wrapper}>
				<div className={styles.Left}>
					<div className={styles.LeftInner}>
						<h4>My Intro</h4>
						<TextArea className={styles.Intro} readOnly={editable} value={intro} setValue={setIntro} />
						<div className={styles.ButtonContainer}>
							<button onClick={() => setShowAboutMe(true)}>About Me</button>
							<button>Hire Me</button>
						</div>
					</div>
				</div>

				<div className={styles.Right}>
					<div className={styles.RightInner}>
						<img src={Con2} className={styles.Overlay} alt="" />

						{/* <div className={styles.Overlay1}>
							<img src="https://picsum.photos/500/800" alt="" />
						</div>

						<div className={styles.Overlay2}>
						<img src="https://picsum.photos/500/800" alt="" className={styles.Img1} />
						</div>

						<div className={styles.Overlay3}></div>
						<div className={styles.Overlay4}></div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Container2;
