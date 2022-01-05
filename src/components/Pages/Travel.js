import React, { Component } from "react";
import duobaoZero from '../../assets/duobao_0.jpeg';
import duobaoOne from '../../assets/duobao_1.jpeg';
import duobaoTwo from '../../assets/duobao_2.jpeg';
import aaZero from '../../assets/aa_0.jpeg';
import aaOne from '../../assets/aa_1.jpeg';
import aaTwo from '../../assets/aa_2.jpeg';
import aaThree from '../../assets/aa_3.jpeg';
import aaFour from '../../assets/aa_4.jpeg';
import aaFive from '../../assets/aa_5.jpeg';
import aaSix from '../../assets/aa_6.jpeg';
import aaSeven from '../../assets/aa_7.jpeg';
import nyZero from '../../assets/ny_0.jpeg';
import nyOne from '../../assets/ny_1.jpeg';
import nyTwo from '../../assets/ny_2.jpeg';
import nyThree from '../../assets/ny_3.jpeg';
import nyFour from '../../assets/ny_4.jpeg';
import nyFive from '../../assets/ny_5.jpeg';
import nySix from '../../assets/ny_6.jpeg';
import nySeven from '../../assets/ny_7.jpeg';
import nyEight from '../../assets/ny_8.jpeg';
import nyNine from '../../assets/ny_9.jpeg';
import nyTen from '../../assets/ny_10.jpeg';
import nyEleven from '../../assets/ny_11.jpeg';
import nyTweleve from '../../assets/ny_12.jpeg';
import nyThirteen from '../../assets/ny_13.jpeg';
import nyFourteen from '../../assets/ny_14.jpeg';
import nyFifteen from '../../assets/ny_15.jpeg';
import nySixteen from '../../assets/ny_16.jpeg';
import nySeventeen from '../../assets/ny_17.jpeg';
import nyEighteen from '../../assets/ny_18.jpeg';
import nyNinteen from '../../assets/ny_19.jpeg';
import nyTwenty from '../../assets/ny_20.jpeg';
import nyTwentyOne from '../../assets/ny_21.jpeg';
import nyTwentyTwo from '../../assets/ny_22.jpeg';
import nyTwentyThree from '../../assets/ny_23.jpeg';
import nyTwentyFour from '../../assets/ny_24.jpeg';
import nyTwentyFive from '../../assets/ny_25.jpeg';
import nyTwentySix from '../../assets/ny_26.jpeg';
import nyTwentySeven from '../../assets/ny_27.jpeg';
import ny28 from '../../assets/ny_28.jpeg';
import ny29 from '../../assets/ny_29.jpeg';
import ny30 from '../../assets/ny_30.jpeg';
import ny31 from '../../assets/ny_31.jpeg';
import ny32 from '../../assets/ny_32.jpeg';
import ny33 from '../../assets/ny_33.jpeg';
import chicagoZero from '../../assets/chicago_0.jpeg';
import chicagoOne from '../../assets/chicago_1.jpeg';
import seattleZero from '../../assets/seattle_0.jpeg';
import sanjoseZero from '../../assets/sanjose_0.jpeg';
import sanjoseOne from '../../assets/sanjose_1.jpeg';
import sanjoseTwo from '../../assets/sanjose_2.jpeg';
import sanjoseThree from '../../assets/sanjose_3.jpeg';
import paloZero from '../../assets/palo_0.jpeg';
import paloOne from '../../assets/palo_1.jpeg';
import paloTwo from '../../assets/palo_2.jpeg';
import paloThree from '../../assets/palo_3.jpeg';
import hunterZero from '../../assets/hunter_0.jpeg';
import hunterOne from '../../assets/hunter_1.jpeg';
import hunterTwo from '../../assets/hunter_2.jpeg';
import hunterThree from '../../assets/hunter_3.jpeg';
import hunterFour from '../../assets/hunter_4.jpeg';
import hunterFive from '../../assets/hunter_5.jpeg';
import hunterSix from '../../assets/hunter_6.jpeg';
import mtvZero from '../../assets/mtv_0.jpeg';
import mtvOne from '../../assets/mtv_1.jpeg';
import mtvTwo from '../../assets/mtv_2.jpeg';
import mtvThree from '../../assets/mtv_3.jpeg';
import mtvFour from '../../assets/mtv_4.jpeg';
import mtvFive  from '../../assets/mtv_5.jpeg';
import mtvSix from '../../assets/mtv_6.jpeg';
import mtvSeven from '../../assets/mtv_7.jpeg';
import sfZero from '../../assets/sf_0.jpeg';
import sfOne from '../../assets/sf_1.jpeg';
import sfTwo from '../../assets/sf_2.jpeg';
import sfThree from '../../assets/sf_3.jpeg';
import sfFour from '../../assets/sf_4.jpeg';
import sfFive from '../../assets/sf_5.jpeg';
import sfSix from '../../assets/sf_6.jpeg';
import sfSeven from '../../assets/sf_7.jpeg';
import sfEight from '../../assets/sf_8.jpeg';
import sfNine from '../../assets/sf_9.jpeg';
import sfTen from '../../assets/sf_10.jpeg';
import sfEleven from '../../assets/sf_11.jpeg';



import "../../styles/App.css";
import "../../styles/Travel.css"


// props: tag, [images]
class PhotoGallery extends Component {

  render() {

    const { tag, images } = this.props;
    
    const renderedImages = images.map((image, index) => {
      return (
        <div className="photo-gallery">
          <img src={image} id={tag+`${index}`}/>
        </div>
      )
    })

    return (
      <div>
        {/* <h3>#{tag}</h3> */}
        {renderedImages}
      </div>
    )
  }
}


class Travel extends Component {

  state = {
    hashtags: ["NYC", "Ann Arbor", "Seattle", "Chicago", "SF", "MTV", "Palo Alto", "San Jose", "Hunter Mountain", "LA", "Detroit", "Berkeley", "San Diego"],
    tagImageMap: {
      "NYC": [nyThirteen, nyZero, nyThree,   nyTwentyOne, nyNine, nySix, nyTen, nyFive,nyOne,nyEleven, nyTwo, nyTweleve, nyFourteen, nySeven, nyFifteen, nySixteen, nyEight,nyNinteen, nyEighteen, nySeventeen, nyTwenty, nyTwentyTwo, nyTwentyThree, nyTwentyFour, nyTwentyFive, nyFour, nyTwentySix, nyTwentySeven, ny28, ny29, ny30, ny31, ny32, ny33],
      "Ann Arbor": [aaOne, aaTwo, aaThree, aaFour, aaZero,aaFive,  aaSix],
      "Seattle": [seattleZero],
      "Hunter Mountain": [hunterFour, hunterSix, hunterOne, hunterTwo, hunterThree,  hunterFive, hunterZero],
      "SF": [sfZero, sfOne, sfTwo, sfThree, sfFour, sfFive, sfSix, sfSeven, sfEight, sfNine, sfTen, sfEleven],
      "Palo Alto": [paloZero, paloOne, paloTwo, paloThree],
      "MTV": [mtvZero, mtvOne, mtvTwo, mtvThree, mtvFour, mtvFive, mtvSix, mtvSeven],
      "San Jose": [sanjoseZero, sanjoseOne, sanjoseTwo, sanjoseThree],
      "Chicago": [chicagoZero, chicagoOne],
    },
  }

  componentDidMount = () => {
    // populate 
  }

  render() {
    const { hashtags, tagImageMap } = this.state;


    const renderedHashTags = hashtags.map((tag, index) => {
      return (
        <div className="hashtags">
          <a href={`#${tag}0`} >
            <h3>#{tag}</h3>
          </a>
        </div>
      )
    })


    const renderedPhotoGalleries = Object.keys(tagImageMap).map((tag, index) => {
      return (
        <div key={index} >
          <PhotoGallery 
            tag={tag}
            images={tagImageMap[tag]}
          />
          <br />
        </div>
      )
    })

    return (
      <div>
        {/* <h1>Travel</h1> */}
        
        <div className="hashtags-container">
          {renderedHashTags}
        </div>
        
       
        <div className="photo-gallery-container">
          {renderedPhotoGalleries}
        </div>
        

      </div>
    );
  }
};

export default Travel;
