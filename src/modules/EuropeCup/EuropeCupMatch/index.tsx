import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MatchLive } from "src/components";
import { WORLD_CUP_2024_LIST } from "src/modules/config";

const EuropeCupMatch = () => {
    const params = useParams();
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    const [homeTeam, setHomeTeam] = useState("");
    const [guestTeam, setGuestTeam] = useState("");
    const [signals, setSignals] = useState([]);
    console.log("EuropeCupMatch", params);

    useEffect(() => {}, []);

    return (
        <div>
            <MatchLive
                {...{
                    time,
                    type,
                    homeTeam,
                    guestTeam,
                    signals,
                }}
            ></MatchLive>
        </div>
    );
};

export default EuropeCupMatch;
