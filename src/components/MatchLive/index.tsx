import { FC } from "react";
import { Flex, Tag } from "antd";
import { Card } from "src/components";
import styles from "./style.module.less";

export interface Signal {
    name: string;
    url: string;
}

export interface MatchLiveProps {
    time: string;
    type: string;
    homeTeam: string;
    guestTeam: string;
    signals: Signal[];
}

const MatchLive: FC<MatchLiveProps> = ({
    time,
    type,
    homeTeam,
    guestTeam,
    signals = [],
}) => {
    return (
        <Card title={`${time} ${type} ${homeTeam}vs${guestTeam} 高清直播`}>
            <div className={styles.live}>
                <div className={styles.topic}>直播中</div>
                <Flex gap="4px 0" wrap>
                    {signals.map((item, index) => (
                        <Tag key={index} color="default">
                            default
                        </Tag>
                    ))}
                </Flex>
            </div>
        </Card>
    );
};

export default MatchLive;
