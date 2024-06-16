// import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { MatchStatus } from "@/types";
import { MatchList, MatchTable } from "@/components";
import { WORLD_CUP_2024_LIST } from "../config";

import styles from "./style.module.less";

const Home = () => {
    // const navigate = useNavigate();÷

    return (
        <div className={styles.home}>
            <MatchTable
                {...{
                    title: "比赛直播",
                    data: WORLD_CUP_2024_LIST.filter((item) =>
                        [
                            MatchStatus.unStarted,
                            MatchStatus.inprogress,
                        ].includes(item.status)
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
            <MatchList
                {...{
                    title: "比赛回放",
                    data: WORLD_CUP_2024_LIST.filter((item) =>
                        [MatchStatus.finish].includes(item.status)
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
            {/* <MatchList
                {...{
                    title: "历史集锦",
                    data: WORLD_CUP_2024_LIST.filter((item) =>
                        [MatchStatus.history, MatchStatus.inprogress].includes(
                            item.status
                        )
                    ),
                }}
            /> */}
        </div>
    );
};

export default Home;
