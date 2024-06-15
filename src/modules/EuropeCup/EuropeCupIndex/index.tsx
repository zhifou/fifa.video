import { MatchStatus } from "@/types";
import { MatchList } from "@/components";
import { WORLD_CUP_2024_LIST } from "src/modules/Home/config";

const EuropeCupIndex = () => {
    console.log("EuropeCupIndex");
    return (
        <div>
            <MatchList
                {...{
                    title: "比赛直播",
                    data: WORLD_CUP_2024_LIST.filter((item) =>
                        [
                            MatchStatus.unStarted,
                            MatchStatus.inprogress,
                        ].includes(item.status)
                    ),
                }}
            />
            <MatchList
                {...{
                    title: "比赛回放",
                    data: WORLD_CUP_2024_LIST.filter((item) =>
                        [MatchStatus.finish].includes(item.status)
                    ),
                }}
            />
            <MatchList
                {...{
                    title: "历史集锦",
                    data: WORLD_CUP_2024_LIST.filter((item) =>
                        [MatchStatus.history, MatchStatus.inprogress].includes(
                            item.status
                        )
                    ),
                }}
            />
        </div>
    );
};

export default EuropeCupIndex;
