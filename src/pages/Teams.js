import React, { useState } from "react";
import './Team.css'
import Navbar from "../components/Navbar";
import Score from "../components/Score";

function Teams() {


    const [team, setTeam] = useState("");
    console.log(team, "first");


    const iplTeams = [
        {
            teamName: "Chennai Super Kings",
            teamLogo: require('./image/csk.jpg'),
            teamCap: "MS Dhoni",
            players: [
                { pic: require('./image/MSD.jpg'), name: "MS Dhoni", runs: 5000, age: 42 },
                { pic: require('./image/RG.jpg'), name: "Ruturaj Gaikwad", runs: 1500, age: 27 },
                { pic: require('./image/RJ.jpg'), name: "Ravindra Jadeja", runs: 2500, age: 35 }
            ]
        },
        {
            teamName: "Mumbai Indians",
            teamLogo: require('./image/mi.jpg'),
            teamCap: "Rohit Sharma",
            players: [
                { pic: require('./image/RS.jpg'), name: "Rohit Sharma", runs: 6000, age: 37 },
                { pic: require('./image/SKY.jpg'), name: "Suryakumar Yadav", runs: 3000, age: 33 },
                { pic: require('./image/JB.jpg'), name: "Jasprit Bumrah", runs: 500, age: 30 }
            ]
        },
        {
            teamName: "Royal Challengers Bangalore",
            teamLogo: require('./image/rcb.jpg'),
            teamCap: "Virat Kohli",
            players: [
                { pic: require('./image/VK.jpg'), name: "Virat Kohli", runs: 7500, age: 36 },
                { pic: require('./image/FDP.jpg'), name: "Faf du Plessis", runs: 3500, age: 39 },
                { pic: require('./image/GM.jpg'), name: "Glenn Maxwell", runs: 3000, age: 35 },
                { pic: require('./image/RP.jpg'), name: "Rajath Patidhar", runs: 3000, age: 35 }
            ]
        }
    ];

    // console.log(iplTeams[0].players.name);

    const chooseteam = (event) => {
        setTeam(event.target.value);
        // console.log(team);
    }



    return (
        <>
            <div>
                <Navbar />
                <Score />



                
                <div className='DropDowns'>


                    <div class="menu">
                        <div class="item">
                            <a class="link">
                                <span> Select Team </span>
                                <svg viewBox="0 0 360 360" space="preserve">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            id="XMLID_225_"
                                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <div class="submenu">
                                {iplTeams.map((team, index) => (
                                    // <div class="submenu-item">
                                    <option class="submenu-link" onClick={chooseteam} key={index} value={index}> {team.teamName} </option>
                                    // </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* <select onClick={chooseteam} className='dropdown'>
            <option value="">Select Team</option>
            {iplTeams.map((t, index) => (
              <option key={index} value={index}>{t.teamName}</option>
            ))}
          </select> */}


                    {/* <p>{iplTeams[0].players}</p> */}


                    {/* {team != '' ? (
            <select className='dropdown'>
              {iplTeams[team].players.map((player, playerIndex) => (
                <option value={playerIndex}>{player.name}</option>))}
            </select>
          ) : (
            <select className='dropdown'><option>Choose any one Franches</option></select>
          )} */}


                    {/* <div class="menu">
                        <div class="item">
                            <a class="link">
                                <span> Choose any one Franches </span>
                                <svg viewBox="0 0 360 360" space="preserve">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            id="XMLID_225_"
                                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <div class="submenu">

                                {(team != '') ?
                                    iplTeams[team].players.map((player, playerIndex) => (
                                        <option value={playerIndex}>{player.name}</option>
                                    ))
                                    : (
                                        <option>Choose any one Franches</option>
                                    )}

                            </div>
                        </div>
                    </div> */}


                </div>

                <div>
                    {team != '' ? <div>
                        <h2 className='teamName'>Team Name : {iplTeams[team].teamName}</h2>
                        <h4 className='teamcap'>Team Captain : {iplTeams[team].teamCap}</h4>
                        {/* <img style={{width:'30px', height:'30px',backgroundColor:'white'}} className='teamlogo' src={iplTeams[team].teamLogo}></img> */}
                        <div className='playerscard' style={{ display: 'flex' }}>

                            {console.log("check", iplTeams[team].players)}
                            {iplTeams[team].players.map((player) => {
                                return (
                                    <div className='playerCard'>
                                        <p>Name : {player.name}</p>
                                        <img className='image' src={player.pic}></img>
                                        <p>Age : {player.age}</p>
                                        <p>Runs : {player.runs}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div> : (
                        <h2 className='teamName'>Please select Any Team</h2>
                    )}
                </div>




            </div>
        </>
    )

}

export default Teams;