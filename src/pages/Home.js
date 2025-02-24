import React, { useState } from "react";
import './Home.css';
import Navbar from "../components/Navbar";
import Score from "../components/Score";

function Home() {
    const [mc, setMc] = useState(1);

    const matchCoverage = [
        { 
            id: 3,
            series: "CT",
            year: "2025",
            teamA: "IND",
            teamB: "PAK",
            headline: "Live - King Kohil finished pakistan race in CT", 
            result: "IND vs PAK:  India won by 4 wickets(with 15 balls remaining)", 
            live: "https://youtu.be/p6DrIDJfSSg",
            img1 : require('./image/ivp 1.webp') },
        { id: 1, series: "CT", year: "2025", teamA: "ENG", teamB: "AUS", headline: "Inglish 120* seals record win for Australia", result: "ENG vs AUS: Australia won by 5 wickets(with 30 balls remaining)", live: "video" },
        { id: 2, series: "CT", year: "2025", teamA: "SAF", teamB: "AFG", headline: "Another one QTK 120* seals record win for South Africa", result: "SAF vs AFG: South Africa won by 2 wickets(with 0 balls remaining)", live: "video" }
    ]

    const handlechange = (value) => {
        setMc(value);
        // console.log(value);
    }

    return (
        <>
            <div>
                <Navbar />
                <Score />




                <div className="home-container">
                    <div className="leftside-container">
                        <div className="match-coverage-container">
                            <p className="for-bold">Match Coverage</p>
                            <div className="match-container">
                                {matchCoverage.map((match) => {
                                    return (

                                        <button className="m" onClick={() => handlechange(match.id)}>
                                            <p className="for-bold">{match.teamA} <span style={{ fontWeight: 'lighter' }}>vs</span> {match.teamB}</p>
                                            <p style={{ fontSize: '.8rem' }}>{match.series} <span>{match.year}</span></p>
                                        </button>
                                    );
                                })}
                            </div>
                            {matchCoverage.map((match) => {
                                if (match.id == mc) {
                                    return (
                                        <div className="match-container-body">
                                            <video style={{width:'60%'}} controls><source src={match.live} type="video/mp4"></source></video>
                                            <div>
                                                <h3>{match.headline}</h3>
                                                <p>njrekar: Gill 'the complete player' right now in ODIs
                                                    Shami on rehab: 'Felt like a toddler learning how to walk'
                                                    Is Rohit India's best batter at ICC
                                                    lete player' right now in ODIs
                                                    Shami on rehab: 'Felt like a toddler learning how to walk'
                                                    Is Rohit India's best batter at ICC ODI tournaments?</p>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                            <div className="watch-main">
                                <p>Watch Online  |  <span>points table</span></p>
                                <div className="watch-hilights">
                                    <div><img src="" alt="KeyMoment"></img><p>Watch - innings</p></div>
                                    <div><img src="" alt="KeyMoment"></img><p>Watch - innings</p></div>
                                    <div><img src="" alt="KeyMoment"></img><p>Watch - innings</p></div>
                                    <div><img src="" alt="KeyMoment"></img><p>Watch - innings</p></div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="rightside-container">
                        <div>
                            <p>Recent Buzz</p>
                            <div className="topstories">
                                <img className="topstories-img" src="" alt="Top Stories"></img>
                            </div>
                            <div className="topstories">
                                <img className="topstories-img" src="" alt="Top Stories"></img>
                            </div>
                            <div className="topstories">
                                <img className="topstories-img" src="" alt="Top Stories"></img>
                            </div>
                        </div>
                        <div>
                            <div className="advert"><h1>Advertesment*</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;