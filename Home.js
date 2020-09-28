import React from 'react';
import './Clubs.css';
import {Link} from 'react-router-dom';



function Home() {
    return (
        <div className="home">
            <div className="background">
                <div className="backgroundInformation">
                    <div id="backgroundInformationTitle"><h1>TaylorMade 2020 Irons</h1></div>
                    <div id="backgroundInformationDescription"><p>2020 is the year that TaylorMade outpaces the 
                        competition in every way possible. Looks: Check.
                        Performance: Check. Playability: Check. 
                        Nothing was compromised from our world class engineers
                        and design team to give your game everything that
                        it needs. There a total of three new irons, P7&#183;MB,
                        P770, and P7&#183;MC, one of which will ultimately fit
                        almost anyone's game. Take a look, schedule a fitting,
                        order now, do anything except overlook this year's set
                        of TaylorMade irons.</p>
                    </div>
                    <div className="ironButtons">
                        <a href="#p770Club"><button className="ironButton" id="p7mb">P770</button></a>
                        <a href="#p790Club"><button className="ironButton" id="p770">P790</button></a>
                        <a href="#p7mcClub"><button className="ironButton" id="p790">P7&#183;MC</button></a>
                        <a href="#p7mbClub"><button className="ironButton" id="p7mc">P7&#183;MB</button></a>
                    </div>
                </div>
                <div className="backgroundImage"></div>
            </div>
            <div className="ironStoryHeader">
                <h2>Each Iron Tells a Story of it's Own. Read Them Below.</h2>
            </div>

            <div className="clubsList">
                <div className="clubSection" id="p770Club">
                    <div className="wrapper">
                        <div className="gridBox" id="clubDescription">
                            <div className="informationWrapper">
                                <div className="informationWrapperH1"><h1>LET THE SIBLING RIVALRY BEGIN</h1></div>
                                <div className="informationWrapperP"><p>We took everything that makes P•790 such a beast and put it into the all-new P•770.
                                They share the same DNA, each built for dominating distance and premium performance. It’s impossible to 
                                choose your favorite child. So you choose for us. The rivalry starts now.</p></div>
                                <div className="learnMoreButtonWrapper"><Link to="/P770" ><button className="learnMoreButton">Learn More</button></Link></div>
                            </div>
                        </div>
                        <div className="gridBox" id="p770clubImage"></div>
                    </div>
            </div>

            <div className="clubSection" id="p790Club">
                <div className="wrapper">
                    <div className="gridBox" id="clubDescription">
                        <div className="informationWrapper">
                            <div className="informationWrapperH1" id="p790Title"><h1>YOU DON’T MESS WITH WHAT WORKS. YOU WORK TO MAKE IT BETTER.</h1></div>
                            <div className="informationWrapperP"><p>While you were obsessing over every aspect of your game, we were meticulously 
                            improving the all-new P790 with forged hollow body construction, SpeedFoam™ 
                            and a redesigned tungsten weight for optimal CG performance.</p></div>
                            <div className="learnMoreButtonWrapper"><Link to="/P790" ><button className="learnMoreButton">Learn More</button></Link></div>
                        </div>
                    </div>
                    <div className="gridBox" id="p790clubImage"></div>
                </div>
            </div>

            <div className="clubSection" id="p7mcClub">
                <div className="wrapper">
                    <div className="gridBox" id="clubDescription">
                        <div className="informationWrapper">
                            <div className="informationWrapperH1"><h1>PURE, BUTTERY, ORGANIC STEEL</h1></div>
                            <div className="informationWrapperP"><p>It's the moment of impact. Before you look up to see it...you 
                                feel it. “Buttery. Pured that one.” There’s nothing like the feel 
                                of a perfectly struck iron shot. As golfers, we all love it. Every 
                                detail of this contemporary muscle cavity design has been meticulously 
                                crafted to give the game’s best ball strikers the purest feeling iron 
                                possible.</p></div>
                                <div className="learnMoreButtonWrapper"><Link to="/P7MC"><button className="learnMoreButton">Learn More</button></Link></div>
                        </div>
                    </div>
                    <div className="gridBox" id="p7mcclubImage"></div>
                </div>
            </div>

            <div className="clubSection" id="p7mbClub">
                <div className="wrapper">
                    <div className="gridBox" id="clubDescription">
                        <div className="informationWrapper">
                        <div className="informationWrapperH1"><h1>FOR SKILLED HANDS, BY SKILLED HANDS</h1></div>
                        <div className="informationWrapperP"><p>Crafted with Compact Grain Forging™, the all-new P•7MB was 
                            designed for the best ball strikers in the world who demand 
                            surgical like control and a pure feel at impact. Tour-inspired 
                            shaping and faceted muscle back geometry give this classic design 
                            a contemporary look.</p></div>
                            <div className="learnMoreButtonWrapper"><Link to="/P7MB"><button className="learnMoreButton">Learn More</button></Link></div>
                        </div>
                    </div>
                    <div className="gridBox" id="p7mbclubImage"></div>
                </div>
            </div>
            
            </div>
        </div>
    )
}

// export {dropDownSelections};
export default Home;