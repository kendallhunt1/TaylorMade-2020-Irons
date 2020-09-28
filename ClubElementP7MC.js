import React from 'react';
import './ClubElement.css';

function ClubElement() {
    return(
        <div className="ClubElement">
            <div className="featureImage" style={{ background: 'rgb(249, 249, 249)'}}>
                <div className="featureImageDescription">
                    <img id="descriptionImageP7MC" alt="P7MC" src="https://assets.tmcontent.com/i/1f/59096/P7MC@2x~H700_Mcrop_P50-50.png" />
                    <h1>PURE, BUTTERY, ORGANIC STEEL</h1>
                    <p>It's the moment of impact. Before you look up to see it...you feel it. “Buttery. Pured that one.” There’s nothing like the feel of a perfectly struck iron shot. As golfers, we all love it. Every detail of this contemporary muscle cavity design has been meticulously crafted to give the game’s best ball strikers the purest feeling iron possible.</p>
                </div>
                <div className="featuredImageP7MC"></div>
            </div>
            <div className="features">
                <h1>Features</h1>
            </div>
            <div className="threeClubFeatures">
                <div className="clubFeature" style={{ background: 'black', color: 'white'}}>
                    <img alt="p7MC" src="https://assets.tmcontent.com/i/6b/59091/CMS-2-SupDrvHyb~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>FOR SKILLED HANDS, BY SKILLED HANDS</h1>
                        <p>We go beyond the traditional to help golfers improve. It’s our obsession. With Compact Grain Forging™, we’ve yet again gone further. A 2,000-ton press creates the optimal grain structure, letting us form each P•7MC iron with masterful precision and deliver consistent performance across the entire set.</p>
                    </div>
                </div>
                <div className="clubFeature" id="secondClubFeature" style={{ background: 'rgb(249, 249, 249)'}}>
                    <div className="featureDescription">
                            <h1>COMPLETELY NEW, YET COMPLETELY CLASSIC</h1>
                            <p>Inspired by Tour, the design features of P•7MC meet the standards of the game’s most discerning players. Classic shaping and minimal offset deliver the ultimate in control and precision. Perimeter weighting gives it just the right touch of forgiveness.</p>
                        </div>
                        <img alt="p7MC" src="https://assets.tmcontent.com/i/c0/59092/CMS-3-321-launch~H900_Mcrop_P50-50.jpg" />
                    </div>
                <div className="clubFeature" style={{ background: 'white'}}>
                    <img alt="p7MC" src="https://assets.tmcontent.com/i/44/59093/CMS-4-FastFeelsBetter~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>MACHINED BEYOND PERFECTION</h1>
                        <p>Advanced machine milling ensures an unmatched level of precision, quality and aesthetics. Aggressively crafted grooves deliver the spin and control needed to create your desired shape and trajectory.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubElement;