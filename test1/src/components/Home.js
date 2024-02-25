import React, { useState, useEffect, useRef } from "react";
import "../assets/css/index.css";
import {
    AppOutline,
    AntOutline,
    DownOutline,
    ArrowsAltOutline,
    LeftOutline,
    CloseOutline,
    RightOutline,
    FaceRecognitionOutline,
    UpOutline,
    ClockCircleOutline,
    ScanningOutline,
    FlagOutline,
    BillOutline,
    CollectMoneyOutline,
} from "antd-mobile-icons";
import { Button, Dropdown, Carousel, Divider, Drawer, Image } from "antd";

const Home = () => {
    // header
    var [isDown, setIsDown] = React.useState(true);
    var [buttonColor, setButtonColor] = React.useState("black");
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState("left");
    const [moneyExpanded, setMoneyExpanded] = useState(false);
    const [cultureExpanded, setCultureExpanded] = useState(false);
    const [cheerExpanded, setCheerExpanded] = useState(false);

    const handleMoneyClick = () => {
        setMoneyExpanded(!moneyExpanded);
    };

    const handleCultureClick = () => {
        setCultureExpanded(!cultureExpanded);
    };

    const handleCheerClick = () => {
        setCheerExpanded(!cheerExpanded);
    };
    // 点击展开导航
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    // 导航内categories
    const parentStyle = {
        fontSize: "18px", // 设置父级<p>元素的字体大小
        fontWeight: "bold",
        display: "block",
        marginBottom: "10px",
    };

    const childStyle = {
        fontSize: "13px", // 设置子级<p>元素的字体大小
        display: "block",
        marginBottom: "10px",
    };

    const Money = [
        { id: 1, name: "Money" },
        { id: 2, name: "Economics" },
    ];

    const Culture = [
        { id: 1, name: "Culture" },
        { id: 2, name: "Humanity" },
    ];

    const Cheer = [
        { id: 1, name: "Cheer" },
        { id: 2, name: "Business" },
    ];

    // categories
    var toggleIcon = () => {
        setIsDown(!isDown);
        setButtonColor(buttonColor === "black" ? "blue" : "black");
    };

    const items = [
        {
            key: "1",
            label: "Money & Economics",
            children: [
                {
                    key: "1-1",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            <BillOutline />
                            Money
                        </a>
                    ),
                },
                {
                    key: "1-2",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            <CollectMoneyOutline />
                            Economics
                        </a>
                    ),
                },
            ],
        },
        {
            key: "2",
            label: "Culture & Humanity",
            children: [
                {
                    key: "2-1",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            <ClockCircleOutline />
                            Culture
                        </a>
                    ),
                },
                {
                    key: "2-2",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            <FlagOutline />
                            Humanity
                        </a>
                    ),
                },
            ],
        },
        {
            key: "3",
            label: "Cheer & Business",
            children: [
                {
                    key: "3-1",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            <FaceRecognitionOutline />
                            Cheer
                        </a>
                    ),
                },
                {
                    key: "3-2",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            <ScanningOutline />
                            Business
                        </a>
                    ),
                },
            ],
        },
    ];

    const linkStyle = {
        color: "black",
    };

    // startfree
    const handlestart = () => {
        window.location.href = "";
    };

    // leader
    const customPrevArrow = (
        <Button onClick={() => carousel.prev()}>
            <LeftOutline />
        </Button>
    );
    const customNextArrow = (
        <Button onClick={() => carousel.next()}>
            <RightOutline />
        </Button>
    );

    let carousel;

    const carouselRef = useRef();

    // button
    const handleClickPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleClickNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    // 点击导航
    const buttonContents = [
        { icon: <ClockCircleOutline />, text: "Money & Economics" },
        { icon: <FlagOutline />, text: "Culture & Humanity" },
        { icon: <FlagOutline />, text: "Cheer & Business" },
    ];

    // 内容介绍
    const titleContent =
        [
            [
                {
                    mainTitle: "Most popular in",
                    category: "Money & Economics",
                    subtitle: "Read or listen to 323 titles in this category",
                },
            ],
            [
                {
                    mainTitle: "Most popular in",
                    category: "Culture & Humanity",
                    subtitle: "Read or listen to 573 titles in this category",
                },
            ],
            [
                {
                    mainTitle: "Most popular in",
                    category: "Cheer & Business",
                    subtitle: "Read or listen to 666 titles in this category",
                },
            ]
        ];

    const [id, setid] = useState(0);

    const changeid = (index) => {
        setid(index);
        // console.log(id);
    };

    // id改变 重新渲染
    useEffect(() => { }, [id]);

    // 轮播图内容
    const imageContents = [
        [
            [
                { src: "../assets/images/1.jpeg", text: "朝花夕拾1" },
                { src: "../assets/images/4.jpg", text: "Linix1" },
                { src: "../assets/images/2.jpg", text: "龙族1" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭1" },
            ],
            [
                { src: "../assets/images/4.jpg", text: "Linix1" },
                { src: "../assets/images/2.jpg", text: "龙族1" },
                { src: "../assets/images/1.jpeg", text: "朝花夕拾1" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭1" },
            ],
            [
                { src: "../assets/images/3.jpeg", text: "古剑奇谭1" },
                { src: "../assets/images/5.jpg", text: "window1" },
                { src: "../assets/images/2.jpg", text: "龙族1" },
                { src: "../assets/images/4.jpg", text: "Linix1" },

            ],
        ],
        [
            [
                { src: "../assets/images/2.jpg", text: "龙族2" },
                { src: "../assets/images/1.jpeg", text: "朝花夕拾2" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭2" },
                { src: "../assets/images/4.jpg", text: "Linix2" },
            ],
            [
                { src: "../assets/images/4.jpg", text: "Linix2" },
                { src: "../assets/images/1.jpeg", text: "朝花夕拾2" },
                { src: "../assets/images/2.jpg", text: "龙族2" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭2" },
            ],
            [
                { src: "../assets/images/5.jpg", text: "window2" },
                { src: "../assets/images/4.jpg", text: "Linix2" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭2" },
                { src: "../assets/images/2.jpg", text: "龙族2" },
            ],
        ],
        [
            [
                { src: "../assets/images/1.jpeg", text: "朝花夕拾3" },
                { src: "../assets/images/2.jpg", text: "龙族3" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭3" },
                { src: "../assets/images/4.jpg", text: "Linix3" },
            ],
            [
                { src: "../assets/images/4.jpg", text: "Linix3" },
                { src: "../assets/images/1.jpeg", text: "朝花夕拾3" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭3" },
                { src: "../assets/images/2.jpg", text: "龙族3" },
            ],
            [
                { src: "../assets/images/5.jpg", text: "window3" },
                { src: "../assets/images/2.jpg", text: "龙族3" },
                { src: "../assets/images/4.jpg", text: "Linix3" },
                { src: "../assets/images/3.jpeg", text: "古剑奇谭3" },
            ],
        ],
    ];

    return (
        <>
            {/* header */}
            <header>
                <div className="header_inner">
                    <div className="header_container">
                        {/* left */}
                        <div className="header_left_icon" onClick={showDrawer}>
                            <ArrowsAltOutline />
                        </div>

                        <Drawer
                            title={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <div>
                                        <AppOutline
                                            style={{ marginRight: "2px" }}
                                        />
                                        Blinkist
                                    </div>

                                    <div>
                                        <button
                                            onClick={onClose}
                                            style={{
                                                border: "none",
                                                background: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <CloseOutline />
                                        </button>
                                    </div>
                                </div>
                            }
                            placement={placement}
                            onClose={onClose}
                            closable={false}
                            open={open}
                            width={1024}
                            key={placement}
                        >
                            <a href="">
                                <AntOutline />
                                Log in
                            </a>

                            <Divider />

                            <p style={parentStyle}>CATEGORIES</p>

                            <p style={childStyle} onClick={handleMoneyClick}>
                                Money & Economics
                                <RightOutline />
                            </p>
                            {moneyExpanded && (
                                <ul>
                                    {Money.map((item) => (
                                        <a
                                            key={item.id}
                                            style={{
                                                margin: "10px",
                                                display: item.hidden
                                                    ? "none"
                                                    : "block",
                                            }}
                                            href=""
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </ul>
                            )}

                            <p style={childStyle} onClick={handleCultureClick}>
                                Culture & Humanity
                                <RightOutline />
                            </p>
                            {cultureExpanded && (
                                <ul>
                                    {Culture.map((item) => (
                                        <a
                                            key={item.id}
                                            style={{
                                                margin: "10px",
                                                display: item.hidden
                                                    ? "none"
                                                    : "block",
                                            }}
                                            href=""
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </ul>
                            )}

                            <p style={childStyle} onClick={handleCheerClick}>
                                Cheer & Business
                                <RightOutline />
                            </p>

                            {cheerExpanded && (
                                <ul>
                                    {Cheer.map((item) => (
                                        <a
                                            key={item.id}
                                            style={{
                                                margin: "10px",
                                                display: item.hidden
                                                    ? "none"
                                                    : "block",
                                            }}
                                            href=""
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </ul>
                            )}
                            <Divider />

                            <a href="">For Business</a>
                        </Drawer>

                        <div className="header_left">
                            <a className="header_logo" href="">
                                <AppOutline />
                                Blinkist
                            </a>
                        </div>

                        {/* right */}
                        <div className="header_right">
                            <div className="header_content">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    trigger={["click"]}
                                >
                                    <button
                                        className="header_content_left"
                                        style={{ color: buttonColor }}
                                        onClick={toggleIcon}
                                    >
                                        Categories
                                        {isDown ? (
                                            <DownOutline />
                                        ) : (
                                            <UpOutline />
                                        )}
                                    </button>
                                </Dropdown>

                                <div className="header_blink"></div>

                                <div className="header_content_right">
                                    <a className="business" href="">
                                        <span>For Business</span>
                                    </a>
                                    <a className="coaching" href="">
                                        <span>Coaching</span>
                                    </a>
                                    <a className="login" href="">
                                        <span>
                                            <AntOutline />
                                            Log in
                                        </span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Divider />

            {/* leader */}
            <div className="leader">
                <div className="leader-all">
                    {/* title */}
                    <div className="leader_contain">
                        <h2 className="leader_contain_title">
                            What are you interested in?
                        </h2>

                        <p className="leader_contain_introduct">
                            With over 6,500 nonfiction books, we have the{" "}
                            <span>most comprehensive</span> library of its kind.
                        </p>
                    </div>

                    {/* leader1 */}
                    <div className="leader-box">
                        {buttonContents.map((content, index) => (
                            <div
                                key={index}
                                className="leader-box-contain"
                                onClick={() => changeid(index)}
                            >
                                <button>
                                    {content.icon}
                                    {content.text}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* leader2 */}
                    <div style={{ marginTop: "20px" }}>
                        <div className="leader-constructor">
                            {titleContent[id].map((titlecontent, index) => (
                                <div key={index} className="leader-constructor-title">
                                    <h2>
                                        {titlecontent.mainTitle}{' '}
                                        <span>{titlecontent.category}</span>
                                    </h2>
                                    <p>{titlecontent.subtitle}</p>
                                </div>

                            ))}

                            <div className="leader-constructor-all-in">
                                <Button
                                    className="{leftbutton}"
                                    style={{ left: 20, width: "40px" }}
                                    onClick={handleClickPrev}
                                >
                                    <LeftOutline type="icon-previous" />
                                </Button>

                                <Carousel
                                    ref={carouselRef}
                                    prevArrow={customPrevArrow}
                                    nextArrow={customNextArrow}
                                >
                                    {imageContents[id].map((content, index) => (
                                        <div
                                            key={index}
                                            className="leader-constructor-all"
                                        >
                                            {content.map((item, index1) => (
                                                <div
                                                    key={index1}
                                                    className="leader-constructor-all-img"
                                                >
                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                        <img
                                                            src={item.src}
                                                            alt=""
                                                        />
                                                        <p>{item.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </Carousel>

                                <Button
                                    className="rightbutton"
                                    style={{ right: 30, width: "40px" }}
                                    onClick={handleClickNext}
                                >
                                    <RightOutline type="icon-next" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;