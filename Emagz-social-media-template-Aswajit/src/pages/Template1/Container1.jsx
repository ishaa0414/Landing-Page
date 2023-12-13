import React, { useState } from "react";
import styles from "./Template1.module.scss";
import TextArea from "./TextArea";
import Con1 from "./images/Container1.png";
import ratingIcon from "./images/ratingIcon.png";

const Container1 = ({ editable, name, setName, setShowRating, ratingData }) => {
	return (
		<div className={styles.Container1}>
			<div className={styles.Left}>
				<h4>I'm</h4>
				<TextArea className={styles.name} readOnly={editable} value={name} setValue={setName} />
			</div>

			<div className={styles.Right}>
				<img src={Con1} alt="" />
			</div>

			<div className={styles.BottomPart}>
				<div className={styles.LeftInner}>
					<div className={styles.RatingContainer} onClick={() => setShowRating(true)}>
						<img src={ratingIcon} alt="" />
						<span>{ratingData}</span>
					</div>
					<div className={styles.TextContainer}>
						<h3>436k</h3>
						<p>Followers</p>
					</div>
					<div className={styles.TextContainer}>
						<h2>209</h2>
						<p>Posts</p>
					</div>
				</div>

				<div className={styles.RightInner}>
					<button>Message</button>
					<button>Follow</button>
				</div>
			</div>

			<div className={styles.RealContainer}>
				<div className={styles.Dots}>
					{Array(100)
						.fill("")
						.map((data, index) => (
							<div key={index} className={styles.Dot}></div>
						))}
				</div>
				<div className={styles.ImageContainer}>
					<img src="https://picsum.photos/800/450" alt="" />
					<img src="https://picsum.photos/800/430" alt="" />
					<img src="https://picsum.photos/800/420" alt="" />
				</div>
				<div className={styles.Dots}>
					{Array(100)
						.fill("")
						.map((data, index) => (
							<div key={index} className={styles.Dot}></div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Container1;
