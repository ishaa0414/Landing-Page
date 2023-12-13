import React from "react";
import styles from "./Template10.module.scss";
import bgImg from "./images/Rectangle 507.png";
import ratingIcon from "./images/ratingIcon.png";
import TextArea from "./TextArea";

const Container1 = ({ editable, name, setName, setShowRating, ratingData }) => {
    return(
    <>
        <div className={styles.Container1}>

            <div className={styles.ImageContainer}>
                <img src={bgImg} alt="" />
                <div className={styles.BlurOverlay}></div>
                {/* <div className={styles.DarkOverlay1}></div> */}
                <div className={styles.DarkOverlay2}></div>
            </div>

            <div className={styles.BorderBox}>

                <div className={styles.RatingCon} onClick={() => setShowRating(true)}>
			        <img src={ratingIcon} alt="" />
			        <span>{ratingData}</span>
		        </div>

               <div className={styles.NameBox}>
                <div className={styles.HR1flex}>
             <div className={styles.HR1}></div>
             </div>
                  <div  className={styles.nameCon1}><div className={styles.TextWidth}>I'm</div><div className={styles.TextWidth2}>Leslie Alexander</div></div>
                 <div  className={styles.HR2flex}><div className={styles.HR2}></div></div> 
                  </div>
              
                <div className={styles.ContentBox}>
                    <div className={styles.left}>
                        <div>
                            <button>FOLLOW</button>
                        </div>
                        <div>
                            <button>MESSAGE</button>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div>
                            <h1>436K</h1>
                            <p>FOLLOWERS</p>
                        </div>
                        <div>
                            <h1>209</h1>
                            <p>POSTS</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
    );
}

export default Container1;