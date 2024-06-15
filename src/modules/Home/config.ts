import { MatchStatus } from "src/types";

export const WORLD_CUP_2024_LIST = [
    {
        label: "【2024欧洲杯】德国 VS 苏格兰",
        homeTeam: "德国",
        guestTeam: "苏格兰",
        value: "123456",
        type: "欧洲杯",
        time: "2024-06-15 03:00",
        status: MatchStatus.finish,
        url: "/europe-cup/2024/1243456",
        lives: [
            {
                label: "鹰眼直播",
                value: "li-123456789",
                url: "http://zhifou.github.io/assets/123456789",
            },
            {
                label: "兔子直播",
                value: "li-12345678944",
                url: "http://zhifou.github.io/assets/123456789",
            },
        ],
        replays: [
            {
                label: "鹰眼回放",
                value: "pb-123456789",
                url: "http://zhifou.github.io/assets/123456789",
            },
        ],
        highlights: [
            {
                label: "集锦1",
                value: "hl-123456789",
                url: "http://zhifou.github.io/assets/123456789",
            },
        ],
    },
    {
        label: "【2024世界杯】匈牙利 VS 瑞士",
        homeTeam: "匈牙利",
        guestTeam: "瑞士",
        value: "1234567",
        type: "欧洲杯",
        time: "2024-06-15 21:00",
        status: MatchStatus.unStarted,
        url: "/europe-cup/2024/12434567",
        lives: [
            {
                label: "鹰眼直播",
                value: "li-123456789",
                url: "http://zhifou.github.io/assets/123456789",
            },
            {
                label: "兔子直播",
                value: "li-12345678944",
                url: "http://zhifou.github.io/assets/123456789",
            },
        ],
    },
    {
        label: "【2024世界杯】西班牙 VS 克罗地亚",
        homeTeam: "西班牙",
        guestTeam: "克罗地亚",
        value: "12345678",
        type: "欧洲杯",
        time: "2024-06-16 00:00",
        status: MatchStatus.unStarted,
        url: "/europe-cup/2024/124345678",
        lives: [
            {
                label: "鹰眼直播",
                value: "li-123456789",
                url: "http://zhifou.github.io/assets/123456789",
            },
            {
                label: "兔子直播",
                value: "li-12345678944",
                url: "http://zhifou.github.io/assets/123456789",
            },
        ],
    },
];
