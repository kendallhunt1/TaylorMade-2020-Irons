import React, {useState, useContext} from 'react';
import {CartArrayContext} from '../../CartArrayContext.js';
import './P770.css';
import { clubSetDropDown, shaftDropDown, gripDropwDown, lieAngleDropDown } from './DropDownSelections.js';
import ClubElement from './ClubElementP790.js';

const P790 = () => {
    const [mainImage, setMainImage] = useState("https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1599757844712/zoom/AL464_zoom_D.jpg");
    let pictureSelect = e => setMainImage(e.target.src);

    const [clubSet, setClubSet] = useState("3-PW")
    const [grip, setGrip] = useState("Tour Velvet")
    const [shaft, setShaft] = useState("KBS Tour Lite")
    const [lieAngle, setLieAngle] = useState("Standard")
    const [cartArray, setCartArray] = useContext(CartArrayContext);

    function addToCart() {
        setCartArray([...cartArray, {clubImage: "https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1599757844712/zoom/AL464_zoom_D.jpg", clubName: "P790", clubSet: clubSet, clubGrip: grip, clubShaft: shaft, clubLieAngle: lieAngle}]);
        console.log(cartArray);
    }

    console.log(cartArray)
    const dropDownSelectionsGrouping =
    <div className="dropDownSelectionsGrouping">
        <div onChange={e => setClubSet(e.target.value)}>{clubSetDropDown}</div>
        <div onChange={e => setShaft(e.target.value)}>{shaftDropDown}</div>
        <div onChange={e => setGrip(e.target.value)}>{gripDropwDown}</div>
        <div onChange={e => setLieAngle(e.target.value)}>{lieAngleDropDown}</div>
    </div>

    return(
        <div className="P790">
            <div className="displayBox">
                <div className="clubImagesBoxWrapper">
                    <div className="clubImagesWrapper">
                        <div className="clubImages">
                            <img className="smallClubImage" alt="P790" onClick={pictureSelect} src="https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1599757844712/zoom/AL464_zoom_D.jpg"></img>
                            <img className="smallClubImage" alt="P790" onClick={pictureSelect} src="https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1599757844712/zoom/AL464_zoom_D2.jpg"></img>
                            <img className="smallClubImage" alt="P790" onClick={pictureSelect} src="https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1599757844712/zoom/AL464_zoom_D3.jpg"></img>
                            <img className="smallClubImage" alt="P790" onClick={pictureSelect} src="https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1599757844712/zoom/AL464_zoom_D4.jpg"></img>
                            <img className="smallClubImage" alt="P790" onClick={pictureSelect} src="https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1599757844712/zoom/AL464_zoom_D5.jpg"></img>
                        </div>
                    </div>
                    <div className="selectedImage">
                        <img className="mainImage" alt="P790" src={mainImage} />
                    </div>
                </div>
                <div className="clubInformationWrapper">
                    <div className="clubInformation">
                        <div className="boxOneInformationWrapper">
                            <div className="boxOneInformation">
                                <div className="writtenWrapper">
                                    <div className="writtenWrapperH1"><h1>P790 Irons</h1></div>
                                    <div className="writtenWrapperP"><p id="sku">SKU # DW-TA155</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="clubDescriptionAndReadMore">
                            <div className="clubDescription"><p>P790 irons pack powerful performance into a clean, classic design to deliver breakthrough distance in a players iron. Through a combination of forged construction and...</p></div>
                            <div className="readMoreButton"><span>Read More</span></div>
                        </div>
                        <div className="optionsAndAddToCart">
                            <div className="clubOptions">{dropDownSelectionsGrouping}</div>
                            <div className="buyButtonWrapper" onClick={addToCart}><button className="buyButton">Add to Cart</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <ClubElement />
        </div>
    )
}

export default P790;