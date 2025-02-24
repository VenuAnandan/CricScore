import React, { useRef, useState } from "react";
import './Score.css';
import Home from "../pages/Home";


function Score() {

    const scoreTable = [
        { live: "", match: "Champion Trophy", teamA: "Eng", teamB: "Aus", result: "Australia won by 5 wickets", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "" },
        { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
        { live: "", match: "Champion Trophy", teamA: "Eng", teamB: "Aus", result: "Australia won by 5 wickets", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "" },
        { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" }
        // { live: "", match: "Champion Trophy", teamA: "Eng", teamB: "Aus", result: "Australia won by 5 wickets", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "" },
        // { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
        // { live: "", match: "Champion Trophy", teamA: "Eng", teamB: "Aus", result: "Australia won by 5 wickets", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "" },
        // { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
        // { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
    ];


    // console.log(scoreTable[match].match);


    return (
        <>
            <div className="main-score">
                <h3>Matchs</h3>
                <div className="mainofscore">
                    <div className="container">
                        {scoreTable.map((item, index) => {
                            return (
                                <div className="scorecard">
                                    <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}><span>{item.live} </span>{item.match}</p>
                                    <p style={{ fontWeight: 'bold' }}>{item.teamA}: {item.teamAs}/{item.teamAw}</p>
                                    <p style={{ fontWeight: 'bold' }}>{item.teamB}: {item.teamBs}/{item.teamBw} <span style={{ fontWeight: 'normal' }}>{item.overremaind}</span></p>
                                    <p style={{ fontSize: '0.8rem' }}>{item.result}</p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
            {/* <Home data={scoreTable} /> */}

        </>
    );
}

export default Score;