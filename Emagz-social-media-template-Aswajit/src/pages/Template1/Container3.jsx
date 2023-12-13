import React, { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./Template1.module.scss";
import CommentIcon from "./images/CommentIcon.svg";
import LikeIcon from "./images/LikeIcon.svg";
import ShareIcon from "./images/ShareIcon.svg";

const Container3 = () => {
	const [index, setIndex] = useState(1);
	const post1Ref = useRef();
	const post2Ref = useRef();
	const post3Ref = useRef();
	const post4Ref = useRef();
	const post5Ref = useRef();

	useEffect(() => {
		if (index === 1) post1Ref?.current?.click();
		if (index === 2) post2Ref?.current?.click();
		if (index === 3) post3Ref?.current?.click();
		if (index === 4) post4Ref?.current?.click();
		if (index === 5) post5Ref?.current?.click();
		const currentIndex = setInterval(() => {
			if (index < 5) {
				setIndex(index + 1);
			}
		}, 3000);
		setTimeout(() => {
			if (index === 5) setIndex(1);
		}, 3000);
		return () => clearInterval(currentIndex);
	}, [index]);

	return (
		<div className={styles.Container3}>
			<h1>My Gallery</h1>

			<div className={styles.bar}>
				<h3>View All</h3>

				<div className={styles.BtnContainer}>
					<button
						onClick={() => {
							if (index > 1) setIndex(index - 1);
						}}>
						<FiArrowLeft />
					</button>
					<button
						onClick={() => {
							if (index < 5) setIndex(index + 1);
						}}>
						<FiArrowRight />
					</button>
				</div>
			</div>

			<div className={styles.CarouselWrapper}>
				<div className={styles.CarouselContainer}>
					<input type="radio" name="btn" id="post1" onClick={() => setIndex(1)} ref={post1Ref} />
					<input type="radio" name="btn" id="post2" onClick={() => setIndex(2)} ref={post2Ref} />
					<input type="radio" name="btn" id="post3" onClick={() => setIndex(3)} ref={post3Ref} />
					<input type="radio" name="btn" id="post4" onClick={() => setIndex(4)} ref={post4Ref} />
					<input type="radio" name="btn" id="post5" onClick={() => setIndex(5)} ref={post5Ref} />

					<div className={index === 1 ? styles.ActiveImageContainer : styles.ImageContainer} id="ActiveImageContainer">
						<img src="https://picsum.photos/900/750" alt="" />

						<div className={index === 1 ? styles.ActiveFloatingContainer : styles.DisableFloatingContainer}>
							<div className={styles.Left}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.Right}>
								<div className={styles.Icon}>
									<img src={LikeIcon} alt="Like" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={CommentIcon} alt="Comment" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					</div>

					<div className={index === 2 ? styles.ActiveImageContainer : styles.ImageContainer}>
						<img src="https://picsum.photos/900/760" alt="" />

						<div className={index === 2 ? styles.ActiveFloatingContainer : styles.DisableFloatingContainer}>
							<div className={styles.Left}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.Right}>
								<div className={styles.Icon}>
									<img src={LikeIcon} alt="Like" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={CommentIcon} alt="Comment" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					</div>

					<div className={index === 3 ? styles.ActiveImageContainer : styles.ImageContainer}>
						<img src="https://picsum.photos/900/740" alt="" />

						<div className={index === 3 ? styles.ActiveFloatingContainer : styles.DisableFloatingContainer}>
							<div className={styles.Left}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.Right}>
								<div className={styles.Icon}>
									<img src={LikeIcon} alt="Like" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={CommentIcon} alt="Comment" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					</div>

					<div className={index === 4 ? styles.ActiveImageContainer : styles.ImageContainer}>
						<img src="https://picsum.photos/900/770" alt="" />

						<div className={index === 4 ? styles.ActiveFloatingContainer : styles.DisableFloatingContainer}>
							<div className={styles.Left}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.Right}>
								<div className={styles.Icon}>
									<img src={LikeIcon} alt="Like" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={CommentIcon} alt="Comment" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					</div>

					<div className={index === 5 ? styles.ActiveImageContainer : styles.ImageContainer}>
						<img src="https://picsum.photos/900/730" alt="" />

						<div className={index === 5 ? styles.ActiveFloatingContainer : styles.DisableFloatingContainer}>
							<div className={styles.Left}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.Right}>
								<div className={styles.Icon}>
									<img src={LikeIcon} alt="Like" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={CommentIcon} alt="Comment" />
									<p>05</p>
								</div>
								<div className={styles.Icon}>
									<img src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Container3;
