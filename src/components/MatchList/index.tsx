import { FC } from "react";
// import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { MatchStatus } from "@/types";
import { VsMatch } from "@/components";

import styles from "./style.module.less";

export interface MatchListProps {
    data: any[];
    title: string;
}

const MatchList: FC<MatchListProps> = ({ title, data }) => {
    // const navigate = useNavigate();÷

    return (
        <div className={classNames(styles.match, styles.live)}>
            <div className={styles.title}>{title}</div>
            <div className={styles.vs}>
                {(data || []).map((item) => (
                    <VsMatch
                        key={item.value}
                        {...{
                            matchId: item.value,
                            matchType: item.type,
                            matchTime: item.time,
                            homeTeam: item.homeTeam,
                            guestTeam: item.guestTeam,
                            url: item.url,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MatchList;
