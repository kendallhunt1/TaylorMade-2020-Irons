import React from 'react';
import './ClubElement.css';

function ClubElement() {
    return(
        <div className="ClubElement">
            <div className="featureImage">
                <div className="featureImageDescription">
                    <img id="descriptionImageP770" alt="P770" src="https://assets.tmcontent.com/i/8e/59053/P770@2x~H700_Mcrop_P50-50.png" />
                    <h1>LET THE SIBLING RIVARLY BEGIN</h1>
                    <p>We took everything that makes P•790 such a beast and put it into a more compact players shape with P•770.<br></br>
                    They share the same DNA, each built for dominating distance and premium performance. It’s impossible to choose your favorite child. So, you choose for us. The rivalry starts now.</p>
                </div>
                <div className="featuredImageP770"></div>
            </div>
            <div className="features">
                <h1>Features</h1>
            </div>
            <div className="threeClubFeatures">
                <div className="clubFeature">
                    <img alt="p770" src="https://assets.tmcontent.com/i/5c/59034/P770-CMS-2-PoundForPound~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>POUND FOR POUND, NOTHING HITS HARDER</h1>
                        <p>P•770 punches above its weight class. This more compact players iron has no problem keeping up with the heavy hitters, delivering explosive power and distance.</p>
                    </div>
                </div>
                <div className="clubFeature" id="secondClubFeature">
                    <div className="featureDescription">
                            <h1>FORGED PERFORMANCE AND FORGIVING POWER</h1>
                            <p>A forged hollowed-body construction and ultra-thin face are designed for enhanced feel, distance and forgiveness. The combination of a Thru-Slot Speed Pocket and Progressive ICT are engineered to protect ball speed across the face and improve playability. Even with its compact head shape, P•770 is loaded with the technology needed to make it playable for a wide range of golfers.</p>
                        </div>
                        <img alt="p770" src="https://assets.tmcontent.com/i/78/59035/P770-CMS-3-ForgedPerformance~H900_Mcrop_P50-50.jpg" />
                    </div>
                <div className="clubFeature" >
                    <img alt="p770" src="https://assets.tmcontent.com/i/f0/59036/P770-CMS-4-DNAofABeast~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>THE DNA OF A BEAST</h1>
                        <p>With the technology of P•790 in a smaller package, P•770 is forged from the same DNA with hollow body construction, SpeedFoam™ and advanced tungsten weighting for precise CG placement.</p>
                    </div>
                </div>
            </div>
            <div className="features"><h1>Technology</h1></div>
            <div className="technologyList">
                <div className="technologyFeature">
                    <div className="technologyHeadline"><h1>Compact Players Shaping</h1></div>
                    <div className="technologyDescription"><p>Designed to fit the eye of a more discerning player, P•770 shaping relies on visual cues such as a thinner topline, less offset and shorter blade length when compared to the P•790.</p></div>
                </div>
                <div className="technologyFeature">
                    <div className="technologyHeadline"><h1>Forged Hollow Body Construction</h1></div>
                    <div className="technologyDescription"><p>These irons consist of a thin, wrap around forged 4140 steel face, soft carbon steel body and up to 46g of tungsten weighting designed to deliver explosive distance and forgiveness.</p></div>
                </div>
                <div className="technologyFeature">
                    <div className="technologyHeadline"><h1>SpeedFoam™</h1></div>
                    <div className="technologyDescription"><p>An ultra-light urethane foam injected inside the head that’s engineered to push the design limits of face speed while simultaneously improving feel.</p></div>
                </div>
                <div className="technologyFeature">
                    <div className="technologyHeadline"><h1>Thru-Slot Speed Pocket™</h1></div>
                    <div className="technologyDescription"><p>Our most flexible Speed Pocket™ design is engineered to maximize ball speeds and provide forgiveness on low face shots.</p></div>
                </div>
                <div className="technologyFeature">
                    <div className="technologyHeadline"><h1>Progressive Inverted Cone Technology</h1></div>
                    <div className="technologyDescription"><p>Engineers strategically positioned Progressive ICT in each iron to improve accuracy and protect off-center ball speed. Each face is uniquely designed to optimize performance for the specific iron.</p></div>
                </div>
            </div>
        </div>
    )
}

export default ClubElement;