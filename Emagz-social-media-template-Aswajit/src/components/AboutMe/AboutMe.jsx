import React, { useState } from "react";
import styles from "./AboutMe.module.scss";

const AboutMe = ({editable, setShowAboutMe }) => {
	const [name, setName] = useState("James.test@mail.co");
	const [number, setNumber] = useState("+91 323 323 3245");
	const [live, setLive] = useState("New Delhi, India")
	const [schooling, setSchooling] = useState("New Public School")
	const [profession, setProfession] = useState("Business Owner");

	return (
		<div className={styles.AboutMeWrapper} onClick={() => setShowAboutMe(false)}>
			<div className={styles.AboutMe} onClick={(e) => e.stopPropagation()}>
				<div className={styles.Row}>
					<h1>About Me</h1>
				</div>
				<div className={styles.Row}>
					<p>Email</p>
					<input type="text" readOnly={editable} value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div className={styles.Row}>
					<p>Phone Number</p>
					<input type="text" readOnly={editable} value={number} onChange={(e) => setNumber(e.target.value)} />
				</div>
				<div className={styles.Row}>
					<p>Live in</p>
					<input type="text" readOnly={editable} value={live} onChange={(e) => setLive(e.target.value)} />
				</div>
				<div className={styles.Row}>
					<p>Schooling</p>
					<input type="text" readOnly={editable} value={schooling} onChange={(e) => setSchooling(e.target.value)} />
				</div>
				<div className={styles.Row}>
					<p>Profession</p>
					<input type="text" readOnly={editable} value={profession} onChange={(e) => setProfession(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
