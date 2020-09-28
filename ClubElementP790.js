import React from 'react';
import './ClubElement.css';

function ClubElement() {
    return(
        <div className="ClubElement">
            <div className="featureImage" style={{ background: 'white'}}>
                <div className="featureImageDescription">
                    <img id="descriptionImageP790" alt="P770" src="https://assets.tmcontent.com/i/73/393/P790-Logo@2x~W300_Mfit.png" />
                    <h1>You Don't Mess With What Works. You Work To Make It Better.</h1>
                    <p>While you were obsessing over every aspect of your game, we were meticulously improving the all-new P790 with forged hollow body construction, SpeedFoam™ and a redesigned tungsten weight for optimal CG performance.</p>
                </div>
                <div className="featuredImageP790"></div>
            </div>
            <div className="features">
                <h1>Features</h1>
            </div>
            <div className="threeClubFeatures">
                <div className="clubFeature" style={{ background: 'white'}}>
                    <img alt="p770" src="https://assets.tmcontent.com/i/58/334/FB-1@2x~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>Speedfoam</h1>
                        <p>The all new P790 features ultra-light urethane foam injected inside the head, engineered to push the design limits of face speed while simultaneously improving feel.</p>
                    </div>
                </div>
                <div className="clubFeature" id="secondClubFeature">
                    <div className="featureDescription">
                            <h1>Next Generation Forged Progression**</h1>
                            <p>New thinner forged face with progressively located ICT design engineered to maximize COR area while improving accuracy.</p>
                        </div>
                        <img alt="p770" src="https://assets.tmcontent.com/i/28/336/FB-2@2x~H900_Mcrop_P50-50.jpg" />
                    </div>
                <div className="clubFeature" style={{ background: 'white'}}>
                    <img alt="p770" src="https://assets.tmcontent.com/i/54/338/FB-3@2x~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>Low Profile Tungsten Weighting**</h1>
                        <p>The newly redesigned P790 features a low-profile tungsten weight designed to give you a lower CG and higher launch.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubElement;