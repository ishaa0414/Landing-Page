import styles from "./Template10.module.scss";
import TextArea from "./TextArea";
import Con2a from "./images/Rectangle 508.png";
import Con2b from "./images/Rectangle 509.png";
import Con2d from "./images/Con2d.png"



const Container2=({editable,intro,setIntro,setShowAboutMe}) => {

    return(
        <div className={styles.contain2}>

            <div className={styles.imageContainer2}>

            <div><img src={Con2b} className={styles.Con2Image1} alt="" /></div>
            <div><img src={Con2a} className={styles.Con2Image2} alt="" /></div>
            </div>
            <div>
            <img src={Con2d} className={styles.Con2Background} alt="" />  
            </div>
          <div className="Con2Text">
                <h4 className={styles.h4}>My Intro</h4>
                <TextArea className={styles.IntroContain2} readOnly={editable} value={intro} setValue={setIntro} />
             
            </div>
            <div className={styles.ButtonCont2}>
							<button onClick={() => setShowAboutMe(true)}>ABOUT ME</button>
							<button className={styles.hireCon2}>HIRE ME</button>
						</div>
          
        </div>
    )
}
 export default Container2;