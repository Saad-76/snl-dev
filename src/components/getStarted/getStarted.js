
import {React,useEffect} from 'react';
import SectionInfo from "../SectionInfo/sectionInfo"
import {

	ListedItemsArtwork1} from '../../utils/allImgs'
  import InfoComponent from '../InfoComponent'
  import "./getStarted.css"
  import { useLocation } from "react-router-dom";
  // import BackgroundVideoA from "../../assets/img/test-img/BackgroundVideo.mp4"
  import Ren55 from "../../assets/img/test-img/ren_55.png"
  import Monkey1 from "../../assets/img/test-img/Monkey1.jpg"
  import Image from "../../assets/img/test-img/1.jpg"


  import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";




const  GetStarted=()=> {

    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 4);
    };
    useEffect(() => {
      onTop();
    }, [routePath]);
  

  return (
      <>
      <div className="about-top-pad">
        <InfoComponent
              // titleSm='About Us.'
              titleLg=' 	Get Started
              '
              text=' We have different assets in our collection 
              '
            />
            </div>

            <div className="about-content-pad">
            <MindSectionInfo
        img={<img src={Image} alt="monkey1"/>}

        titleSmTwo=" Browse our collections"
        contentTwo="We have different assets in our collection ranging from Sports memorabilia and coins to trading cards. "
        titleSmThree=" Pick your number "
        contentThree="Each fractionalised piece is uniquely numbered out of 500. Each one is different from the other. 
"
        titleSmFour=" OpenSea "
        contentFour="OpenSea is the biggest NFT marketplace in the world. All of our collections are exclusively on OpenSea. Click this link to sign up now! (link to opensea/latest collection) 
"
      />
</div>
      </>
  );
}

export default GetStarted;
