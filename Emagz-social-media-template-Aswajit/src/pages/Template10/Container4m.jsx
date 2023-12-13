import React, { useState, useEffect } from 'react';
import styles from "./Template10.module.scss";
import CommentIcon from "./images/CommentIcon.svg";
import LikeIcon from "./images/LikeIcon.svg";
import ShareIcon from "./images/ShareIcon.svg";
import img1 from "./images/Rectangle 510.png"
import img2 from "./images/Rectangle 509.png"
import img3 from "./images/Rectangle 508.png"
import img4 from "./images/carousel4.png"
import img5 from "./images/carousel5.png"
import TextArea from "./TextArea";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import {  Pagination ,Autoplay} from 'swiper/modules';



const images = [
    img1,
    img2,
    img3,
    img4,
    img5
   
  ];
  
  const Container4=({ editable,shortStory, setShortStory })=> {
 
  
    
  
    return (
        <>
            <div className={styles.Con4Bg}>
            <div className={styles.top}>
        <div className={styles.topText1}>My Gallery</div>
        <div className={styles.topText2}>View All</div>
      </div>
      <div className={styles.middle}>
<div className={styles.sliderContainer}>
<Swiper
     
		

        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        loop={false}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ el: '.swiper-pagination', clickable: true , bulletClass: `swiper-pagination-bullet swiper-pagination-testClass` }}
      
        autoplay={{delay:3000,
        disableOnInteraction:false}}
        modules={[ Pagination,Autoplay]}
        className="swiper_container"
        
      >
 <SwiperSlide>
          <img src={img1} alt="slide_image" className={styles.imageSlider} />
          <div className={styles.ImageFooter}>
							<div className={styles.LeftPart}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.RightPart}>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconLike} src={LikeIcon} alt="Like" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconComment} src={CommentIcon} alt="Comment" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconShare} src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" className={styles.imageSlider}  />
          <div className={styles.ImageFooter}>
							<div className={styles.LeftPart}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.RightPart}>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconLike} src={LikeIcon} alt="Like" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconComment} src={CommentIcon} alt="Comment" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconShare} src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" className={styles.imageSlider}  />
          <div className={styles.ImageFooter}>
							<div className={styles.LeftPart}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.RightPart}>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconLike} src={LikeIcon} alt="Like" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconComment} src={CommentIcon} alt="Comment" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconShare} src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image"  className={styles.imageSlider} />
          <div className={styles.ImageFooter}>
							<div className={styles.LeftPart}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.RightPart}>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconLike} src={LikeIcon} alt="Like" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconComment} src={CommentIcon} alt="Comment" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconShare} src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide_image" className={styles.imageSlider}  />
          <div className={styles.ImageFooter}>
							<div className={styles.LeftPart}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							<div className={styles.RightPart}>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconLike} src={LikeIcon} alt="Like" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconComment} src={CommentIcon} alt="Comment" />
									<p className={styles.count}>05</p>
								</div>
								<div className={styles.Iconcontainer}>
									<img className={styles.styleiconShare} src={ShareIcon} alt="Share" />
								</div>
							</div>
						</div>
					
         
        </SwiperSlide>
       <div className={styles.bulletheight}>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
</div>
      </div>
      <div className={styles.bottom}>
	  <TextArea
				className={styles.footerText1}
				readOnly={editable}
				value={shortStory}
				setValue={setShortStory}
			/>
        <div className={styles.footerText2}>Thank you ! Visit Again</div>
      </div>
            </div>
        </>
    )
  }
  export default Container4;