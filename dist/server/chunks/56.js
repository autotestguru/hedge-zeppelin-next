exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 692:
/***/ ((module) => {

// Exports
module.exports = {
	"App": "App_App__TWaY_",
	"navcontainer": "App_navcontainer__8zC4a",
	"Appheader": "App_Appheader__1INqR",
	"Applink": "App_Applink__mPCIb",
	"buynowfixedright": "App_buynowfixedright__sHWvc",
	"currencyoptfixedright": "App_currencyoptfixedright__vPHDj"
};


/***/ }),

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./src/pages/App.module.css
var App_module = __webpack_require__(692);
var App_module_default = /*#__PURE__*/__webpack_require__.n(App_module);
;// CONCATENATED MODULE: ./src/components/common/Button.js

const Button = ({ children, outlined = false, onClick })=>{
    return(// <div>
    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        className: [
            outlined ? "outlined" : undefined
        ],
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx("span", {})
        ]
    }));
};
/* harmony default export */ const common_Button = (Button);

// EXTERNAL MODULE: external "hamburger-react"
var external_hamburger_react_ = __webpack_require__(623);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/menu/MenuItem.js

const MenuItem = ({ children, onClick })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "menu-item",
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const menu_MenuItem = (MenuItem);

;// CONCATENATED MODULE: ./src/components/menu/MenuList.js


const MenuList = ({ show = false, listMeniItems, onClick })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: show ? "menu-list show" : "menu-list",
        children: listMeniItems.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(menu_MenuItem, {
                onClick: onClick.bind(undefined, item.id),
                children: item.name
            }, item.id))
    });
};
/* harmony default export */ const menu_MenuList = (MenuList);

;// CONCATENATED MODULE: ./src/constants/Config.js
const Config = {
    enableCoinGeckoAPI: true,
    enableSendGrid: false,
    hzepContractAddress: "0x0000000000000000000000000000000000"
};

;// CONCATENATED MODULE: ./src/components/common/currencyOptions/CurrencyOptions.js


const CurrencyOptions = ({ showCurOpts, toggleMenu, alignment })=>{
    const align = alignment === "bottomToTop" ? " dropdown-rev" : " dropdown";
    const navigateToURL = (link)=>{
        window.open(link, "_blank");
        toggleMenu();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "currency-opt-container" + (showCurOpts ? align : ""),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                onClick: ()=>navigateToURL(`https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=${Config.hzepContractAddress}`),
                children: "I have BNB"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                onClick: ()=>navigateToURL(`https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=${Config.hzepContractAddress}`),
                children: "I have BUSD"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                onClick: ()=>navigateToURL(`https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=${Config.hzepContractAddress}`),
                children: "I have USDT"
            })
        ]
    });
};
/* harmony default export */ const currencyOptions_CurrencyOptions = (CurrencyOptions);

;// CONCATENATED MODULE: ./src/components/navbar/Navbar.js






const Navbar = ()=>{
    const [expanded, setExpanded] = (0,external_react_.useState)(false);
    const [showCurOpts, setShowCurOpts] = (0,external_react_.useState)(false);
    const toggleBuyMenu = ()=>{
        setShowCurOpts(!showCurOpts);
    };
    const onMenuPress = ()=>{
        setExpanded(!expanded);
    };
    let listMenuItems = [
        {
            id: "whatisthis",
            name: "What is this"
        },
        {
            id: "tokenomics",
            name: "Tokenomics"
        },
        {
            id: "offering",
            name: "Our offering"
        },
        {
            id: "roadmap",
            name: "Roadmap"
        },
        {
            id: "team",
            name: "Our Team"
        },
        {
            id: "next",
            name: "What's happening"
        },
        {
            id: "contact-us",
            name: "Contact Us"
        }
    ];
    const menuClickHandler = (locator)=>{
        const section = document.querySelector("#" + locator);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        setExpanded(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "navbar-container",
                onClick: ()=>{
                    expanded && setExpanded(!expanded);
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "banner-logo",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/hd_nav_logo.png",
                            style: {
                                width: "80px",
                                height: "20%"
                            },
                            alt: "Banner"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "nav-links",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: listMenuItems.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    onClick: ()=>menuClickHandler(item.id),
                                    children: item.name
                                }, item.id))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "nav-buttons",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(common_Button, {
                                outlined: true,
                                onClick: toggleBuyMenu,
                                children: "Buy HZEP"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(currencyOptions_CurrencyOptions, {
                                showCurOpts: showCurOpts,
                                toggleMenu: toggleBuyMenu
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "menu-button",
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_hamburger_react_.Spin, {
                            color: "#ffffff",
                            toggled: expanded,
                            onToggle: onMenuPress
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(menu_MenuList, {
                show: expanded,
                listMeniItems: listMenuItems,
                onClick: menuClickHandler
            })
        ]
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/screens/ContactUs.js




const ContactUs = ()=>{
    const tgLink = "https://t.me/OurTGURL";
    const fbLink = "https://www.facebook.com/OurFabebookPage/";
    const twLink = "https://twitter.com/OurTwitterPage";
    const instaLink = "https://www.instagram.com/OurInstaPage/";
    const emailFormat = {
        fullName: "",
        emailAddress: "",
        message: ""
    };
    const [emailData, setEmailData] = (0,external_react_.useState)(emailFormat);
    const sendGridSendEmail = ()=>{};
    const handleSubmit = (event)=>{
        event.preventDefault();
        sendGridSendEmail();
        console.log(emailData);
    };
    const dataChangeHandler = (event)=>{
        setEmailData((data)=>({
                ...data,
                [event.target.name]: event.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "contact-container",
        id: "contact-us",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "Contact Us"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "contact-sections",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "info-links",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "QUICK LINKS"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "divider"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "social-conatiner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "social-item",
                                        onClick: ()=>window.open(tgLink, "_blank"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/telegram.png",
                                                className: "social-img",
                                                alt: "Telegram"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "img-desc",
                                                children: tgLink
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "social-item",
                                        onClick: ()=>window.open(fbLink, "_blank"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/facebook.png",
                                                className: "social-img",
                                                alt: "Facebook"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "img-desc",
                                                children: fbLink
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "social-item",
                                        onClick: ()=>window.open(fbLink, "_blank"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/twitter.png",
                                                onClick: ()=>window.open(twLink, "_blank"),
                                                className: "social-img",
                                                alt: "Twitter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "img-desc",
                                                children: twLink
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "social-item",
                                        onClick: ()=>window.open(instaLink, "_blank"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/instagram.png",
                                                onClick: ()=>window.open("https://www.instagram.com/cmccoin.io/", "_blank"),
                                                className: "social-img",
                                                alt: "Instagram"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "img-desc",
                                                children: instaLink
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: Config.enableSendGrid ? "email-sec" : "email-sec sendemail-disabled",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "form-container",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    className: "form-style",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            placeholder: "Enter full name",
                                            className: "info-input",
                                            name: "fullName",
                                            value: emailData.fullName,
                                            onChange: dataChangeHandler,
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "email",
                                            placeholder: "Enter email address",
                                            className: "info-input",
                                            name: "emailAddress",
                                            value: emailData.emailAddress,
                                            onChange: dataChangeHandler,
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            placeholder: "Enter message here",
                                            type: "text",
                                            className: "info-input textarea",
                                            name: "message",
                                            value: emailData.message,
                                            onChange: dataChangeHandler,
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "email-action-container",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(common_Button, {
                                                children: "Send Email"
                                            })
                                        })
                                    ]
                                })
                            }),
                            !Config.enableSendGrid && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "not-available-function",
                                children: "We are working on enabling email support. Please visit our socials links in the meantime."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const screens_ContactUs = (ContactUs);

;// CONCATENATED MODULE: ./src/components/common/card/Card.js

const Card = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "card-container",
        children: children
    });
};
/* harmony default export */ const card_Card = (Card);

;// CONCATENATED MODULE: ./src/components/common/news/NewsCard.js

const NewsCard = ({ title, image, data })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "news-card-container",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "news-img-container",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: image,
                    width: "100px",
                    height: "100px",
                    alt: "News"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "news-data-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "news-title",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "news-data",
                        children: data
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const news_NewsCard = (NewsCard);

;// CONCATENATED MODULE: ./src/components/screens/Next.js



const Next = ()=>{
    const newsList = [
        {
            id: 0,
            title: "HZEP partners with biggest marketing platform",
            data: "Hedge Zeppelin has recently partnered with biggest crypto marketing partner CMCCoin securing access to privileged access to its famous magazine 'CryptoMag'. This partnership also open future access for HZEP to CMCCoin's physical goods marketplace.",
            image: "/cmclogo.png"
        },
        {
            id: 1,
            title: "Hedge Zep is going live",
            data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 2,
            title: "Hedge Zep is going live",
            data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/6780838/pexels-photo-6780838.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 3,
            title: "Hedge Zep is going live",
            data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://images.pexels.com/photos/14902677/pexels-photo-14902677.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "next-container",
        id: "next",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "In and around us"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "news-container",
                children: newsList.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "news-item",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(news_NewsCard, {
                                title: item.title,
                                image: item.image,
                                data: item.data
                            })
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const screens_Next = (Next);

;// CONCATENATED MODULE: ./src/components/screens/OurOffering.js


const OurOffering = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "offering-container",
        id: "offering",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "Our offerings"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-sub-title",
                children: "We are not promising an enormous and unsustainable reward, as most of the Crypto Projects in the space, but with a variety of different income value streams, from the early adoption of cutting-edge Projects and technologies to the structural taxation of the transactions, we can keep the token price rising through systematic buybacks and burns. These funds will be generated using the taxes and revenue from variety of crypto investments."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "multi-stream",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "card-investment",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "card-stretch",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "card-con",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "stream-list",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "stream-list-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/investment-bullet.png",
                                                            className: "bullet",
                                                            alt: "Investment bullet"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: "Acquiring stake in early key projects with huge growing potential."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "stream-list-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/investment-bullet.png",
                                                            className: "bullet",
                                                            alt: "Investment bullet"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: "Diversified portfolios in revenue generating assets across multiple blockchain to manage risk and assured returns."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "stream-title",
                                    children: "Investments"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "card-investment",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "card-stretch",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "card-con",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "stream-list",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "stream-list-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/investment-bullet.png",
                                                            className: "bullet",
                                                            alt: "Investment bullet"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: 'Partnership with "Cryptazon" initiative, ensuring rewards for each purchase on the platform.'
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "stream-list-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/investment-bullet.png",
                                                            className: "bullet",
                                                            alt: "Investment bullet"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: "Prime spot in Cryptomag and other marketing avenues, ensuring reach and steady growth of our community."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "stream-title",
                                    style: {
                                        width: "265px"
                                    },
                                    children: "Collaborations"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "dividend",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tok-sub-title",
                    children: "The total revenue generated from the various income streams, will be used to support buyback and burns that in turn raise the token price. This mechanism will provide an additional incentive for the investors to hold on to their bags for longer period."
                })
            })
        ]
    });
};
/* harmony default export */ const screens_OurOffering = (OurOffering);

// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__(866);
;// CONCATENATED MODULE: ./src/components/screens/Team.js



const Team = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "team",
        id: "team",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "Meet the Crew"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "team-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "team-card-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "team-card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/drew-bio-pic.jpeg",
                                        className: "team-img",
                                        alt: "CEO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-title",
                                        children: "Captain"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-email",
                                        children: "drew@hedgezeppelin.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-desc",
                                        children: "Awarded his pilot’s license from Hedgehog University in May 2023. When Capt. Drew is not flying zeppelin projects to the moon, he enjoys scuba diving, collecting construction equipment, and traveling. He and wis beloved wife reside in Hedgeville Burrow with their 4 hedgehogs."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "team-card-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "team-card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/george-bio-pic.jpeg",
                                        className: "team-img",
                                        alt: "COO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-title",
                                        children: "Chief Engineer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-email",
                                        children: "george@hedgezeppelin.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-desc",
                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "team-card-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "team-card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/john-bio-pic.jpeg",
                                        className: "team-img",
                                        alt: "CFO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-title",
                                        children: "Chief Financial Officer "
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-email",
                                        children: "john@hedgezeppelin.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-desc",
                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "team-card-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "team-card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/guru-bio-pic.jpeg",
                                        className: "team-img",
                                        alt: "CTO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-title",
                                        children: "Chief Technology Officer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-email",
                                        children: "guru@hedgezeppelin.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-desc",
                                        children: "Completed degree in aviation technology from Hedgeville institute of aviation and technology in Jan 2023. When he is not establishing communication, tracking beacons or maintaining cloud security, he spend his time with his wife and hoglet in suburban gardens of hedgezuala."
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "Our flight advisors"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "team-container marketing",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "team-card-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "team-card market-card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/nathan-bio-pic.jpeg",
                                        className: "team-img",
                                        alt: "CEO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-title",
                                        children: "Chief Marketing Officer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-email",
                                        children: "nathan@hedgezeppelin.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-desc",
                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "team-card-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "team-card market-card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/colin-bio-pic.jpeg",
                                        className: "team-img",
                                        alt: "CEO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-title",
                                        children: "First Marketing Officer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-email",
                                        children: "colin@hedgezeppelin.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-desc",
                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "team-card-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "team-card market-card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/greg-bio-pic.jpeg",
                                        className: "team-img",
                                        alt: "CEO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-title",
                                        children: "Chief Security Officer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-email",
                                        children: "greg@hedgezeppelin.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "team-desc",
                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "Open flight deck positions"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "team-container marketing",
                children: /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "open-team-position",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(gi_.GiCaptainHatProfile, {
                                        style: {
                                            marginRight: "10px"
                                        }
                                    }),
                                    "First Navigator of Socials"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx(gi_.GiCaptainHatProfile, {
                                        style: {
                                            marginRight: "10px"
                                        }
                                    }),
                                    "First Electrician"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx(gi_.GiCaptainHatProfile, {
                                        style: {
                                            marginRight: "10px"
                                        }
                                    }),
                                    "Radio Operator"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx(gi_.GiCaptainHatProfile, {
                                        style: {
                                            marginRight: "10px"
                                        }
                                    }),
                                    "Digital Communications Officer"
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const screens_Team = (Team);

;// CONCATENATED MODULE: ./src/components/screens/Tokenomics.js



const Tokenomics = ()=>{
    const [distFlip, setDistFlip] = (0,external_react_.useState)({
        prelaunch: false,
        supply: false,
        liquidity: false
    });
    const DetailItem = (rowName, rowValue)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                marginLeft: "10px",
                marginRight: "10px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    style: {
                        fontSize: "12px",
                        marginBottom: "4px"
                    },
                    children: rowName
                }),
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    style: {
                        fontSize: "12px",
                        marginBottom: "4px",
                        textAlign: "right"
                    },
                    children: rowValue.map((line)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                line,
                                /*#__PURE__*/ jsx_runtime.jsx("br", {})
                            ]
                        }))
                })
            ]
        });
    };
    const flip = (target)=>{
        let object;
        switch(target){
            case "prelaunch":
                object = {
                    prelaunch: !distFlip.prelaunch
                };
                break;
            case "supply":
                object = {
                    supply: !distFlip.supply
                };
                break;
            case "liquidity":
                object = {
                    liquidity: !distFlip.liquidity
                };
                break;
            default:
                break;
        }
        setDistFlip((data)=>({
                ...data,
                ...object
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "tokenomics-container",
        id: "tokenomics",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "Tokenomics"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-sub-title",
                children: "Hedge Zeppelin is a meme token at heart! $HZEP is a deflationary token designed to become more scarce over time. On chain holders of Hedge Zeppelin will see profit rising over time fueled by systematic and sustainable buyback and token burns; all that for simply holding Hedge Zeppelin tokens in your wallet."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "highlight-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "300px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/checkmark-icon.png",
                                    style: {
                                        width: "60px",
                                        height: "60px"
                                    },
                                    alt: "Checkmark"
                                }),
                                "100 Million total supply"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "300px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/checkmark-icon.png",
                                    style: {
                                        width: "60px",
                                        height: "60px"
                                    },
                                    alt: "Checkmark"
                                }),
                                "5% Buy/Transfer fees"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "300px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/checkmark-icon.png",
                                    style: {
                                        width: "60px",
                                        height: "60px"
                                    },
                                    alt: "Checkmark"
                                }),
                                "5% Sell fees"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "300px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/checkmark-icon.png",
                                    style: {
                                        width: "60px",
                                        height: "60px"
                                    },
                                    alt: "Checkmark"
                                }),
                                "50,000 HZEP Maximum sell per Hour"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "tk-card-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "card-content",
                            onMouseEnter: flip.bind(undefined, "prelaunch"),
                            onMouseLeave: flip.bind(undefined, "prelaunch"),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "front" + (distFlip.prelaunch ? " flipF" : ""),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/icons8-capital-96.png",
                                            style: {
                                                width: "180px",
                                                height: "120px",
                                                margin: "20px"
                                            },
                                            alt: "Capital"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                fontSize: "16px",
                                                fontWeight: "bold"
                                            },
                                            children: "Presale / Launch Details"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                fontSize: "12px"
                                            },
                                            children: "Hover/Click for details"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "back" + (distFlip.prelaunch ? " unflipB" : ""),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                marginBottom: "20px",
                                                fontWeight: "bold"
                                            },
                                            children: "Tokens Distribution"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                borderTop: "1px solid #ffffff",
                                                width: "100%",
                                                marginBottom: "20px"
                                            }
                                        }),
                                        DetailItem("Private sale", [
                                            "15,000,000"
                                        ]),
                                        DetailItem("Listing & Liquidity", [
                                            "50,000,000"
                                        ])
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "card-content",
                            onMouseEnter: flip.bind(undefined, "supply"),
                            onMouseLeave: flip.bind(undefined, "supply"),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "front" + (distFlip.supply ? " flipF" : ""),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/core-team.png",
                                            style: {
                                                width: "180px",
                                                height: "120px",
                                                margin: "20px"
                                            },
                                            alt: "Core team"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                fontSize: "16px",
                                                fontWeight: "bold"
                                            },
                                            children: "Supply breakdown"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                fontSize: "12px"
                                            },
                                            children: "Hover/Click for details"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "back" + (distFlip.supply ? " unflipB" : ""),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                marginBottom: "20px",
                                                fontWeight: "bold"
                                            },
                                            children: "Tokens Distribution"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                borderTop: "1px solid #ffffff",
                                                width: "100%",
                                                marginBottom: "20px"
                                            }
                                        }),
                                        DetailItem("Investment Wallet", [
                                            "15,000,000"
                                        ]),
                                        DetailItem("Team & Ops Wallet", [
                                            "5,000,000"
                                        ]),
                                        DetailItem("Marketing Wallet", [
                                            "5,000,000"
                                        ]),
                                        DetailItem("Locked", [
                                            "10,000,000"
                                        ])
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card_Card, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "card-content",
                            onMouseEnter: flip.bind(undefined, "liquidity"),
                            onMouseLeave: flip.bind(undefined, "liquidity"),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "front" + (distFlip.liquidity ? " flipF" : ""),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/liquidity.png",
                                            style: {
                                                width: "180px",
                                                height: "120px",
                                                margin: "20px"
                                            },
                                            alt: "Liquidity"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                fontSize: "16px",
                                                fontWeight: "bold"
                                            },
                                            children: "Liquidity pools"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                fontSize: "12px"
                                            },
                                            children: "Hover/Click for details"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "back" + (distFlip.liquidity ? " unflipB" : ""),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                marginBottom: "20px",
                                                fontWeight: "bold"
                                            },
                                            children: "Tokens Distribution"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            style: {
                                                borderTop: "1px solid #ffffff",
                                                width: "100%",
                                                marginBottom: "20px"
                                            }
                                        }),
                                        DetailItem("Initial Liquidity", [
                                            "10,000,000"
                                        ]),
                                        DetailItem("Liquidity Pairs", [
                                            "HZEP / BNB",
                                            "HZEP / BUSD",
                                            "HZEP / USDT"
                                        ])
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const screens_Tokenomics = (Tokenomics);

;// CONCATENATED MODULE: ./src/components/screens/WhatIsThis.js



const WhatIsThis = ()=>{
    const [marketData, setMarketData] = (0,external_react_.useState)({
        "Unit Price": "",
        "24hr Volume": "",
        "Market cap": ""
    });
    const fetchMarketData = async ()=>{
        const requestParams = {
            ids: "ripple",
            vs_currencies: "usd",
            include_market_cap: true,
            include_24hr_vol: true
        };
        const requestOptions = {
            method: "GET",
            headers: {
                accept: "application/json"
            }
        };
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(requestParams.ids)}&vs_currencies=${encodeURIComponent(requestParams.vs_currencies)}&include_market_cap=${encodeURIComponent(requestParams.include_market_cap)}&include_24hr_vol=${encodeURIComponent(requestParams.include_24hr_vol)}`, requestOptions);
            const data = await response.json();
            setMarketData({
                "Unit Price": data.ripple.usd,
                "24hr Volume": data.ripple.usd_24h_vol,
                "Market cap": data.ripple.usd_market_cap
            });
        } catch (err) {
            console.log("Error occurred while fetching market data");
            console.log(err);
            setMarketData({
                "Unit Price": "",
                "24hr Volume": "",
                "Market cap": ""
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        Config.enableCoinGeckoAPI && fetchMarketData();
    }, []);
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "whatisthis",
        id: "whatisthis",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "left-side",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "moving-image",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "/hedgie_nobg.png",
                        alt: "Hedgie",
                        className: "banner-image"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "right-side",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "title-text",
                        children: "HEDGE Zeppelin"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "sub-title-text",
                        children: "What is this?"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "sub-text",
                        children: "Hedge Zeppelin is here to provide a sustainable interaction with the cryptocurrency world. Our team, which has a perfect knowledge of risk management and portfolio management, will be able to offer you a token with the perfect safety/profit balance."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "market-data-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "market-data-title",
                                children: "*Live Market data"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mak-data-unit",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "madata-header",
                                        children: "Unit Price"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "madata-data",
                                        children: formatter.format(marketData["Unit Price"])
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mak-data-unit",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "madata-header",
                                        children: "24hrs Volume"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "madata-data",
                                        children: formatter.format(marketData["24hr Volume"])
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mak-data-unit",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "madata-header",
                                        children: "Market Cap"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "madata-data",
                                        children: formatter.format(marketData["Market cap"])
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "market-data-disc",
                                children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "* There is a limit to how many times data can be retrieved from the server. If the price shows $0 please refresh after few minutes"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const screens_WhatIsThis = (WhatIsThis);

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/common/spacemap/SpaceSection.js


const SpaceSection = ({ title, status, phases })=>{
    const isInProgress = phases.some((items)=>items.status === "IN PROGRESS");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-section-container",
        style: {
            color: status === "DONE" ? "goldenrod" : ""
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `rocket-container ${isInProgress ? "center-rocket" : ""}`,
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/rocket.png",
                    width: "50px",
                    height: "120px",
                    className: `moving-space-image ${status === "IN PROGRESS" ? "active-rocket" : ""}`,
                    alt: "Flying rocket"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bar-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `bar ${status === "DONE" || isInProgress ? "bar-done" : ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `bar ${status === "DONE" ? "bar-done" : ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: `dot-start ${status === "DONE" || isInProgress ? "dot-done" : ""}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section-data-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "sec-title",
                        children: title
                    }),
                    phases.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "sec-sub-section",
                            style: {
                                color: item.status === "DONE" ? "goldenrod" : ""
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "sub-sec-title",
                                    children: [
                                        "Phase # ",
                                        item.id
                                    ]
                                }),
                                item.text.split("\n").map((itm)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(bs_.BsBookmarkCheckFill, {
                                                style: {
                                                    marginRight: "5px"
                                                }
                                            }),
                                            itm
                                        ]
                                    }))
                            ]
                        }))
                ]
            })
        ]
    });
};
/* harmony default export */ const spacemap_SpaceSection = (SpaceSection);

;// CONCATENATED MODULE: ./src/components/common/spacemap/SpaceWrapper.js

const SpaceWrapper = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "space-wrapper",
        children: children
    });
};
/* harmony default export */ const spacemap_SpaceWrapper = (SpaceWrapper);

;// CONCATENATED MODULE: ./src/components/screens/Roadmap.js



const Roadmap = ()=>{
    const roadmapItems = [
        {
            title: "Mar 2023 - May 2023",
            status: "IN PROGRESS",
            phases: [
                {
                    id: 1.1,
                    text: "Community Based Meme Concept - Hedge Zeppelin Created\nBuild Core Team & Advisors\nHedgie is Born \uD83E\uDD94",
                    status: "DONE"
                },
                {
                    id: 1.2,
                    text: "Contract with Crypto Marketing Company to handle marketing\nBuild & Publish Website",
                    status: "DONE"
                },
                {
                    id: 1.3,
                    text: `Develop Contract\nConduct Initial Audit`,
                    status: "IN PROGRESS"
                }
            ]
        },
        {
            title: "Jun 2023 - Aug 2023",
            status: "NOT STARTED",
            phases: [
                {
                    id: 2.1,
                    text: "Release Official Press Documents\nBuild Socials & Community",
                    status: "NOT STARTED"
                },
                {
                    id: 2.2,
                    text: "Presale on Pinksale and/or other platforms\nWhitelist Distribution\nMajor Marketing Campaign",
                    status: "NOT STARTED"
                },
                {
                    id: 2.3,
                    text: "Multi-Chain Launch\nDEX Listings\nCMC & CG Listing",
                    status: "NOT STARTED"
                }
            ]
        },
        {
            title: "Sep 2023 - Feb 2024",
            status: "NOT STARTED",
            phases: [
                {
                    id: 3.1,
                    text: "Featured in Crypto Magazine\nMassive marketing campaign\nCollaboration with media celebs and reputed influencers",
                    status: "NOT STARTED"
                },
                {
                    id: 3.2,
                    text: "Certik Audit\nMajor CEX Listing",
                    status: "NOT STARTED"
                },
                {
                    id: 3.3,
                    text: "E-commerce Usecase\nCollaboration with Investment Partners\nNFT Project Release",
                    status: "NOT STARTED"
                }
            ]
        },
        {
            title: "Mar 2024 and beyond",
            status: "NOT STARTED",
            phases: [
                {
                    id: 4.1,
                    text: "Additional CEX Listings",
                    status: "NOT STARTED"
                },
                {
                    id: 4.2,
                    text: "Cutting Edge Utilities\nInvestments for the future",
                    status: "NOT STARTED"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "roadmap-site-container",
        id: "roadmap",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tok-title",
                children: "Our Roadmap"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(spacemap_SpaceWrapper, {
                children: roadmapItems.map((item)=>{
                    return /*#__PURE__*/ jsx_runtime.jsx(spacemap_SpaceSection, {
                        id: item.title,
                        title: item.title,
                        status: item.status,
                        phases: item.phases
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const screens_Roadmap = (Roadmap);

;// CONCATENATED MODULE: ./src/components/common/floozIntegration/FloozIntegration.js


const FloozIntegration = ()=>{
    //0xfa134985a4d9D10DBf2d7dCf811055aA25d0807C
    const floozIFrame = `<iframe width="400" height="600" frameborder="0" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=${Config.hzepContractAddress}&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=bnb&stakeDisabled=true&network=bsc&lightMode=false&primaryColor=%23a00495&backgroundColor=transparent&roundedCorners=10&padding=20"></iframe>`;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        dangerouslySetInnerHTML: {
            __html: floozIFrame
        }
    });
};
/* harmony default export */ const floozIntegration_FloozIntegration = (FloozIntegration);

;// CONCATENATED MODULE: ./src/components/screens/BuyNow.js






const BuyNow = ()=>{
    let contractAddress = Config.hzepContractAddress;
    const [showCurOpts, setShowCurOpts] = (0,external_react_.useState)(false);
    const [copied, setCopied] = (0,external_react_.useState)(false);
    const toggleBuyMenu = ()=>{
        setShowCurOpts(!showCurOpts);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "buy-now-container",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("video", {
                id: "video-container",
                loop: true,
                autoPlay: true,
                muted: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("source", {
                    src: "/digital-pattern.mp4",
                    type: "video/mp4"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "overlay"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "buy-now-content-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "buy-left-section",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "buy-now-punch-line",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        children: "The only Sustainably Scalable MEME Token"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "buy-action-container",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(common_Button, {
                                                outlined: true,
                                                onClick: toggleBuyMenu,
                                                children: "BUY HZEP ON PANCAKESWAP NOW"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(currencyOptions_CurrencyOptions, {
                                                showCurOpts: showCurOpts,
                                                toggleMenu: toggleBuyMenu
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "contract-info",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    "Contract Address: ",
                                                    contractAddress
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                style: {
                                                    textDecoration: "underline",
                                                    cursor: "pointer"
                                                },
                                                onClick: async ()=>{
                                                    if ("clipboard" in navigator) {
                                                        await navigator.clipboard.writeText(contractAddress);
                                                    } else {
                                                        document.execCommand("copy", true, contractAddress);
                                                    }
                                                    setCopied(true);
                                                },
                                                children: copied ? "Copied to Clipboard" : "Copy Address"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "huge-marketing",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: "huge-marketing-title",
                                        children: "Partnership with biggest marketing platform"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/cmccoinbig-redact.png",
                                        className: "marketing-img",
                                        alt: "Marketing partner"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flooz-container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(floozIntegration_FloozIntegration, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const screens_BuyNow = (BuyNow);

;// CONCATENATED MODULE: ./src/pages/App.js














function App() {
    const [showButton, setShowButton] = (0,external_react_.useState)(false);
    const [showCurOpts, setShowCurOpts] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const visibilityOnScrollHandler = ()=>{
            window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false);
        };
        window.addEventListener("scroll", visibilityOnScrollHandler);
        return ()=>{
            window.removeEventListener("scroll", visibilityOnScrollHandler);
        };
    }, []);
    const toggleBuyMenu = ()=>{
        setShowCurOpts(!showCurOpts);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (App_module_default()).App,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(navbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_BuyNow, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_WhatIsThis, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_Tokenomics, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_OurOffering, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_Roadmap, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_Team, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_Next, {}),
            /*#__PURE__*/ jsx_runtime.jsx(screens_ContactUs, {}),
            showButton && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (App_module_default()).currencyoptfixedright,
                        children: /*#__PURE__*/ jsx_runtime.jsx(currencyOptions_CurrencyOptions, {
                            showCurOpts: showCurOpts,
                            alignment: "bottomToTop",
                            toggleMenu: toggleBuyMenu
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (App_module_default()).buynowfixedright,
                        children: /*#__PURE__*/ jsx_runtime.jsx(common_Button, {
                            outlined: false,
                            onClick: toggleBuyMenu,
                            children: "Buy HZEP"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const pages_App = (App);


/***/ })

};
;