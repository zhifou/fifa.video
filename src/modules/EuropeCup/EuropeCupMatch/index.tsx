import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MatchLive, MatchDetail } from "src/components";
import { EUROPE_CUP_LIST } from "@/data";

const EuropeCupMatch = () => {
    const params = useParams();
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    const [homeTeam, setHomeTeam] = useState("");
    const [guestTeam, setGuestTeam] = useState("");
    const [signals, setSignals] = useState<any[]>([]);
    console.log("EuropeCupMatch", params);

    useEffect(() => {
        const { matchId, year = "" } = params;
        const match = EUROPE_CUP_LIST[+year].filter(
            (item) => item.value === matchId
        )[0];
        if (match) {
            setTime(match.time);
            setType(match.type);
            setHomeTeam(match.homeTeam);
            setGuestTeam(match.guestTeam);
            setSignals(match.lives || []);
        }
    }, [params]);

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
            <MatchDetail
                {...{
                    time,
                    type,
                    homeTeam,
                    guestTeam,
                    style: { marginTop: "24px" },
                }}
            />
        </div>
    );
};

export default EuropeCupMatch;
