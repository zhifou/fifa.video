import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.less";

export interface VsMatchProps {
    matchId: string;
    matchType: string;
    matchTime: string;
    homeTeam: string;
    homeTeamId?: string;
    guestTeam: string;
    guestTeamId?: string;
    url: string;
}

const VsMatch: FC<VsMatchProps> = ({
    matchId,
    matchType,
    matchTime,
    homeTeam,
    guestTeam,
    url,
}) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(url);
    };

    return (
        <div className={styles.vsmatch} onClick={onClick}>
            <div>{matchType}</div>
            <div>{matchTime}</div>
            <div>
                <span style={{ marginRight: "4px" }}>{homeTeam}</span>VS
                <span style={{ marginLeft: "4px" }}>{guestTeam}</span>
            </div>
            {/* <div>
                <span>视频直播</span>
            </div> */}
        </div>
    );
};

export default VsMatch;
