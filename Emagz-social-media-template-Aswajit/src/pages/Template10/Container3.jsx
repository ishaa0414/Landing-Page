import styles from "./Template10.module.scss";
import BackCon3 from "./images/Con3Bg.png";
import ImageCon3 from "./images/Rectangle 506.png"
const Container3=() => {
    return(
        <div className={styles.contain3}>
              <div><img src={ImageCon3}className={styles.ImageCon3} alt="" /></div>
                <div><img className={styles.BackgroundCon3} alt="" /></div>
        </div>
        
    )
}
 export default Container3;