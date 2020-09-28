import React from 'react';
import './ClubElement.css';

function ClubElement() {
    return(
        <div className="ClubElement">
            <div className="featureImage" style={{ background: 'rgb(249, 249, 249)'}}>
                <div className="featureImageDescription">
                    <img id="descriptionImageP7MB" alt="P770" src="https://assets.tmcontent.com/i/0a/59074/P7MB@2x~H700_Mcrop_P50-50.png" />
                    <h1>PURE, BUTTERY, ORGANIC STEEL</h1>
                    <p>It's the moment of impact. Before you look up to see it...you feel it. “Buttery. Pured that one.” There’s nothing like the feel of a perfectly struck iron shot. As golfers, we all love it. Every detail of this contemporary muscle back design has been meticulously crafted to give the game’s best ball strikers the purest feeling iron possible.</p>
                </div>
                <div className="featuredImageP7MB"></div>
            </div>
            <div className="features">
                <h1>Features</h1>
            </div>
            <div className="threeClubFeatures">
                <div className="clubFeature" style={{ background: 'black', color: 'white'}}>
                    <img alt="p770" src="https://assets.tmcontent.com/i/a8/59070/CMS-2-SupDrvHyb~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>FOR SKILLED HANDS, BY SKILLED HANDS</h1>
                        <p>We go beyond the traditional to help golfers improve. It’s our obsession. With Compact Grain Forging™, we’ve yet again gone further. A 2,000-ton press creates the optimal grain structure, letting us form each P•7MB iron with masterful precision and deliver consistent performance across the entire set with the best possible feel.</p>
                    </div>
                </div>
                <div className="clubFeature" id="secondClubFeature">
                    <div className="featureDescription">
                            <h1>CALLING ALL CONTROL FREAKS</h1>
                            <p>The all new P•7MB was designed for the best ball strikers in the world who demand surgical like control with a pure feel at impact. Contemporary aesthetics with a thin topline and slim sole create a minimalist profile that appeals to the ultimate purist.</p>
                        </div>
                        <img alt="p770" src="https://assets.tmcontent.com/i/bf/59071/CMS-3-321-launch~H900_Mcrop_P50-50.jpg" />
                    </div>
                <div className="clubFeature" style={{ background: 'rgb(249, 249, 249)'}}>
                    <img alt="p770" src="https://assets.tmcontent.com/i/b7/59072/CMS-4-FastFeelsBetter~H900_Mcrop_P50-50.jpg" />
                    <div className="featureDescription">
                        <h1>BEAUTY WE CAN ALL ASPIRE TO</h1>
                        <p>For every ball striker, blades are the ultimate aspiration. Their beauty defined not only by precision craftsmanship and clean aesthetics, but by a feel that reflects a level of the game we all aspire to. P•7MB features Tour-inspired shaping and faceted muscle back geometry to provide this classic design with a contemporary look.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubElement;