import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
// import { IoIosFootball } from "react-icons/io";
import "./style.less";

const { Header, Content, Footer } = Layout;
const items = [
    {
        key: "world-cup",
        label: "世界杯",
    },
    {
        key: "europe-cup",
        label: <Link to="/europe-cup">欧洲杯</Link>,
    },
    {
        key: "america-cup",
        label: "美洲杯",
    },
    {
        key: "africa-cup",
        label: "非洲杯",
    },
    {
        key: "asia-cup",
        label: "亚洲杯",
    },
    {
        key: "epl",
        label: "英超",
    },
    {
        key: "la-liga",
        label: "西甲",
    },
    {
        key: "lega",
        label: "意甲",
    },
    {
        key: "ligue1",
        label: "法甲",
    },
    {
        key: "bl",
        label: "德甲",
    },
    {
        key: "ucl",
        label: "欧冠",
    },
    {
        key: "acl",
        label: "亚冠",
    },
    {
        key: "csl",
        label: "中超",
    },
    {
        key: "ssf",
        label: "沙特联",
    },
];

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 24px",
                }}
            >
                <div className="logo">
                    <a href="/">
                        <img src="/fifa2.svg" alt="fifa video logo" />
                    </a>
                    {/* <a href="https://reactjs.org" target="_blank">
                        <IoIosFootball
                            style={{
                                paddingBottom: "4px",
                                fontSize: "32px",
                                verticalAlign: "bottom",
                            }}
                        />
                    </a> */}
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content
                style={{
                    padding: "0 48px",
                    background: "#fff",
                    minHeight: "calc(100vh - 128px)",
                }}
            >
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center", background: "#fafafa" }}>
                FIFA Video ©{new Date().getFullYear()} Created by ZhiFou
                Corporation.
            </Footer>
        </Layout>
    );
};

export default App;
