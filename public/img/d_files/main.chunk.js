(window["webpackJsonpmarioplan"] = window["webpackJsonpmarioplan"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Titillium+Web&display=swap);", ""]);

// Module
exports.push([module.i, "/* @import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap'); */\n\nhtml {\n  min-height: 100%;\n}\n\n\nbody {\n  /* font-family: 'PT Sans', sans-serif; */\n  font-family: 'Titillium Web', sans-serif;\n  min-height: 100%;\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif; */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* background: url(/img/felt.png) repeat; */\n  background-size: 100%;\n  background-position: bottom;\n  /* background-color: #EDE9E5; */\n  background-color: #27A69A;\n  /* background-image: url(\"https://www.transparenttextures.com/patterns/felt.png\"); */\n}\n\nform {\n  padding: 20px;\n  margin-top: 60px;\n}\n\nform button, form h5 {\n  margin: 20px 0;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\ninput[type=text]:not(.browser-default):focus:not([readonly]),\ninput[type=email]:not(.browser-default):focus:not([readonly]),\ninput[type=password]:not(.browser-default):focus:not([readonly]),\ntextarea.materialize-textarea:focus:not([readonly]){\n  border-color: #ec407a;\n  box-shadow: none;\n}\n\ninput[type=text]:not(.browser-default):focus:not([readonly]) + label,\ntextarea.materialize-textarea:focus:not([readonly]) + label,\ninput[type=email]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=password]:not(.browser-default):focus:not([readonly]) + label{\n  color: #ec407a !important;\n}\n\n.mt-60 {\n  margin-top: 60px;\n}\n\n.mt-0 {\n  margin-top: 0px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.mr-10 {\n  margin-right:10px;\n}\n\n.mr-15 {\n  margin-right:15px;\n}\n\n.mr-20 {\n  margin-right:20px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.round-results-card {\n  height: 400px;\n  overflow-y:auto;\n}\n\n.round-history-card {\n    height: 350px;\n\t  overflow-y: auto;\n}\n\n.card-border {\n  border: 1px solid black;\n}\n\ntable {\n  table-layout: auto;\n}\n\n.sc-user-input--text { \n  width : 280px !important; \n}\n\n.sc-user-input--file-icon {\n  display:none;\n}\n\n.cursor-pointer {\n  cursor:pointer;\n}\n\n.vote-selected {\n  border: 3px solid gold\n}\n\n.upload-border {\n  border: dotted 1px black\n}\n\n.user-story-list {\n    height: 250px;\n\t  overflow-y: auto;\n}\n\n#currentStory {\n  min-height: 70px;\n}", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/Navbar */ "./src/components/layout/Navbar.js");
/* harmony import */ var _components_users_CreateUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/CreateUser */ "./src/components/users/CreateUser.js");
/* harmony import */ var _components_rooms_EnterRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rooms/EnterRoom */ "./src/components/rooms/EnterRoom.js");
/* harmony import */ var _components_rooms_Room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/rooms/Room */ "./src/components/rooms/Room.js");
/* harmony import */ var _components_rooms_InvalidRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rooms/InvalidRoom */ "./src/components/rooms/InvalidRoom.js");
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/App.js";









class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _components_users_CreateUser__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/room/:id",
      component: _components_rooms_Room__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/createUser",
      component: _components_users_CreateUser__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/enterRoom",
      component: _components_rooms_EnterRoom__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/invalidRoom",
      component: _components_rooms_InvalidRoom__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: {
          pathname: "/invalidRoom"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SignedInLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignedInLinks */ "./src/components/layout/SignedInLinks.js");
/* harmony import */ var _SignedOutLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignedOutLinks */ "./src/components/layout/SignedOutLinks.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/components/layout/Navbar.js";






const Navbar = props => {
  const auth = props.auth,
        profile = props.profile; // const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav-wrapper grey darken-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "brand-logo brand-logo center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Planning Poker")));
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Navbar));

/***/ }),

/***/ "./src/components/layout/SignedInLinks.js":
/*!************************************************!*\
  !*** ./src/components/layout/SignedInLinks.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/authActions */ "./src/store/actions/authActions.js");
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/components/layout/SignedInLinks.js";





const SignedInLinks = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/enterRoom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Enter Room")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: props.signOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Log Out"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    className: "btn btn-floating pink lighten-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.profile.initials)));
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(Object(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["signOut"])())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(SignedInLinks));

/***/ }),

/***/ "./src/components/layout/SignedOutLinks.js":
/*!*************************************************!*\
  !*** ./src/components/layout/SignedOutLinks.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/components/layout/SignedOutLinks.js";



const SignedOutLinks = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/signin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Log In")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignedOutLinks);

/***/ }),

/***/ "./src/components/rooms/EnterRoom.js":
/*!*******************************************!*\
  !*** ./src/components/rooms/EnterRoom.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/roomActions */ "./src/store/actions/roomActions.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/components/rooms/EnterRoom.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // import { firestoreConnect } from 'react-redux-firebase';




class EnterRoom extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  // state = {
  // 	stories,
  // }
  componentDidMount() {
    let options = {
      swipeable: true // responsiveThreshold: 500

    };
    materialize_css__WEBPACK_IMPORTED_MODULE_7___default.a.Tabs.init(this.Tabs, options);
  }

  constructor(props) {
    super(props); // var instance = M.Tabs.init(el, options);

    this.handleChange = e => {
      // console.log(">", this.props);
      this.setState({
        [e.target.id]: e.target.value // room: { ...this.props.room, invalidRoom: false }

      });
    };

    this.handleCreateSubmit = e => {
      e.preventDefault();
      if (this.state && this.state.name) this.props.createRoom(this.state);else alert("Enter a Valid Room Name! ");
    };

    this.handleJoinSubmit = e => {
      e.preventDefault();
      this.props.joinRoom(this.state);
    };

    this.handleFileDrop = acceptedFiles => {
      if (acceptedFiles.length === 1) {
        let file = acceptedFiles[0];

        if (file.type == 'text/rtf' || file.type == 'text/plain') {
          const reader = new FileReader();

          reader.onabort = () => console.log('file reading was aborted');

          reader.onerror = () => console.log('file reading has failed');

          reader.onload = () => {
            const fileContents = reader.result;
            let userStories = fileContents.split('\n').filter(story => {
              return story.length > 0;
            });
            userStories.forEach(story => {
              console.log("Story is : ", story);
            });
            this.setState(_objectSpread({}, this.state, {
              stories: userStories
            }));
            let options = {
              displayLength: 2500,
              classes: 'rounded',
              html: 'User Stories Loaded'
            };
            materialize_css__WEBPACK_IMPORTED_MODULE_7___default.a.toast(options);
            console.log(this.state);
          };

          acceptedFiles.forEach(file => reader.readAsBinaryString(file));
        } else {
          alert("Choose a valid txt/rtf file!");
        }
      } else {
        alert("Choose 1 text file!");
      }
    };
  }

  render() {
    const _this$props = this.props,
          room = _this$props.room,
          auth = _this$props.auth,
          user = _this$props.user,
          stories = _this$props.stories;

    if (user && !user.id) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/createUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      });
    } // return <Redirect to="/createUser" />


    if (this.props.invalidRoom) {
      let options = {
        displayLength: 2000,
        classes: 'rounded',
        html: 'Invalid Room. Try Again!'
      };
      materialize_css__WEBPACK_IMPORTED_MODULE_7___default.a.toast(options);
    }

    if (room && room.id) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: '/room/' + room.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container mt-60",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      ref: Tabs => {
        this.Tabs = Tabs;
      },
      id: "tabs-swipe-demo",
      className: "tabs tabs-fixed-width tab-demo z-depth-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#create-room-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Create Room")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#join-room-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Join Room"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "create-room-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "white mt-0",
      onSubmit: this.handleCreateSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "grey-text text-darken-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Create Room"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "material-icons prefix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "account_balance"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      id: "name",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Room Name")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "upload-border center-align cursor-pointer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onDrop: acceptedFiles => this.handleFileDrop(acceptedFiles),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, ({
      getRootProps,
      getInputProps
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, getRootProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, getInputProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "To import user stories automatically, drag and drop a .txt file containing user stories separated by line"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "large material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "cloud_upload")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn pink lighten-1 z-depth-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Create Room")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "join-room-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "white mt-0",
      onSubmit: this.handleJoinSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "grey-text text-darken-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Join Room"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "material-icons prefix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "fingerprint"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      id: "id",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Room ID")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn pink lighten-1 z-depth-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Join Room"))))));
  }

}

const mapStateToProps = state => {
  if (state) console.log("state is -> ", state);
  return {
    room: state.room,
    user: state.user,
    invalidRoom: state.room.invalidRoom,
    stories: state.stories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRoom: room => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__["createRoom"])(room)),
    joinRoom: room => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__["joinRoom"])(room))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(EnterRoom));

/***/ }),

/***/ "./src/components/rooms/InvalidRoom.js":
/*!*********************************************!*\
  !*** ./src/components/rooms/InvalidRoom.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/components/rooms/InvalidRoom.js";



const InvalidRoom = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "broken_image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Oops, looks like this room doesn't exist..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Star over by clicking ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/createUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "here.")));
};

/* harmony default export */ __webpack_exports__["default"] = (InvalidRoom);

/***/ }),

/***/ "./src/components/rooms/Room.js":
/*!**************************************!*\
  !*** ./src/components/rooms/Room.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/roomActions */ "./src/store/actions/roomActions.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_sharingbuttons_dist_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-sharingbuttons/dist/main.css */ "./node_modules/react-sharingbuttons/dist/main.css");
/* harmony import */ var react_sharingbuttons_dist_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_sharingbuttons_dist_main_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_sharingbuttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sharingbuttons */ "./node_modules/react-sharingbuttons/dist/index.js");
/* harmony import */ var react_sharingbuttons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sharingbuttons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_chat_window__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-chat-window */ "./node_modules/react-chat-window/es/index.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/components/rooms/Room.js";

















class Room extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {// chosen: []
    };

    this.handleChange = e => {
      e.preventDefault();
      let updateStory = {
        'id': this.props.room[0].id,
        'currentStory': e.target.value
      };
      this.props.updateCurrentStory(updateStory);
    };

    this.toggleRound = toggle => {
      if (toggle && !this.props.currentStory) alert("Enter a story to start round.");else {
        let toggleRound = {
          'id': this.props.room[0].id,
          'activeRound': toggle,
          'currentStoryId': toggle ? uuid__WEBPACK_IMPORTED_MODULE_4___default.a.v4() : null
        };
        this.props.toggleRound(toggleRound);
      }
    };

    this.castVote = vote => {
      let currentVote = {
        'roomId': this.props.room[0].id,
        'userId': this.props.user.id,
        'userName': this.props.user.name,
        'vote': vote
      };
      this.props.castVote(currentVote);
    };

    this.copyUrl = () => {
      let options = {
        displayLength: 2000,
        classes: 'rounded',
        html: 'URL Copied'
      };
      materialize_css__WEBPACK_IMPORTED_MODULE_10___default.a.toast(options);
    };

    this.keepOnPage = e => {
      this.props.leaveRoom(this.props.roomTest);
      return undefined;
    };

    this.assignStory = story => {
      let updateStory = {
        'id': this.props.room[0].id,
        'currentStory': story
      };
      this.props.updateCurrentStory(updateStory);
    };

    this.state = {
      render: false //Set render state to false

    };
  }

  _onMessageWasSent(message) {
    if (message.type == 'text') {
      message.data.text = this.props.user.name + ' ➡️ ' + message.data.text;
    } else if (message.type == 'emoji') {
      message.type = "text";
      message.data.text = this.props.user.name + ' ➡️ ' + message.data.emoji;
    }

    this.props.sendMessage({
      author: 'them',
      type: message.type,
      data: message.data
    });
  }

  _handleClick() {// this.props.readMessage({
    //     id: this.props.user.id
    // })
  }

  printDocument() {
    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_14__('p');
    var res = doc.autoTableHtmlToJson(document.getElementById("roundHistoryTable"));
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    var header = function (data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle('normal'); //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);

      doc.text("Planning Poker - " + today, data.settings.margin.left, 50);
    };

    var options = {
      beforePageContent: header,
      margin: 10,
      startY: doc.autoTableEndPosY() + 70
    };
    doc.autoTable(res.columns, res.data, options);
    doc.save("Planning Poker.pdf");
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.keepOnPage);
    window.addEventListener('unload', this.keepOnPage);
    window.addEventListener('pagehide', this.keepOnPage);
    var elems = document.querySelectorAll('.modal');
    var instances = materialize_css__WEBPACK_IMPORTED_MODULE_10___default.a.Modal.init(elems);
    var ddelems = document.querySelectorAll('.dropdown-trigger');
    var ddinstances = materialize_css__WEBPACK_IMPORTED_MODULE_10___default.a.Dropdown.init(ddelems);
    var sideElems = document.querySelectorAll('.sidenav');
    var sideInstances = materialize_css__WEBPACK_IMPORTED_MODULE_10___default.a.Sidenav.init(sideElems);
    setTimeout(function () {
      //Start the timer
      this.setState({
        render: true
      }); //After 1 second, set render to true
    }.bind(this), 200);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.keepOnPage);
    window.addEventListener('unload', this.keepOnPage);
    window.addEventListener('pagehide', this.keepOnPage);
  }

  render() {
    const votes = [1, 2, 3, 5, 8, 13, 20, 40, 100];
    const _this$props = this.props,
          room = _this$props.room,
          currentStory = _this$props.currentStory,
          currentScore = _this$props.currentScore,
          activeRound = _this$props.activeRound,
          roundsHistory = _this$props.roundsHistory,
          messageList = _this$props.messageList,
          userList = _this$props.userList,
          localRoom = _this$props.localRoom,
          leaveRoom = _this$props.leaveRoom,
          user = _this$props.user,
          stories = _this$props.stories; // if(localRoom && leaveRoom) 
    // console.log("Leaving...")

    let currentUserStatus = userList ? userList.filter(user => {
      return user.id == this.props.user.id;
    }) : {};
    let isOpen = currentUserStatus ? currentUserStatus.isOpen : false;
    let newMessagesCount = currentUserStatus ? currentUserStatus.newMessagesCount : 0; // if(roundsHistory && roundsHistory.length>1)
    //     roundsHistory.sort((a,b)=>{
    //         return b.time - a.time;
    // })

    const showRoundResult = currentScore ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, currentScore, " points") : '';
    if (localRoom && localRoom.id == '') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: '/enterRoom'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    });
    console.log("Before redirect : -> ", localRoom);
    console.log(this.props);
    if (!this.props.user.id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: '/createUser',
        state: {
          redirectRoom: this.props.history.location.pathname
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    });
    let roomUrl = room && room[0].id ? 'https://nv-marioplan.firebaseapp.com/room/' + room[0].id : '';
    let currentUserVote = room && room[0].currentVotes.find(obj => {
      return obj.userId === this.props.user.id;
    });
    const showVotingCards = votes.map(vote => {
      return vote < 20 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        onClick: () => this.castVote(vote),
        className: currentUserVote && vote == currentUserVote.vote ? "vote-selected mr-10 cursor-pointer" : "mr-10 cursor-pointer",
        width: "13%",
        height: "13%",
        src: "/img/" + vote + ".png",
        key: vote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        onClick: () => this.castVote(vote),
        className: currentUserVote && vote == currentUserVote.vote ? "vote-selected mr-20 cursor-pointer" : "mr-20 cursor-pointer",
        width: "18%",
        height: "18%",
        src: "/img/" + vote + ".png",
        key: vote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      });
    });
    const showUserStories = stories.map(story => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: () => this.assignStory(story),
        key: story,
        href: "#!",
        className: currentStory && currentStory == story ? "collection-item active" : "collection-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, story);
    });
    let renderContainer = false; //By default don't render anything

    if (this.state.render) {
      //If this.state.render == true, which is set to true by the timer.
      renderContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, room ? room[0].name : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn grey right hide-on-small-only",
        onClick: () => {
          console.log('BEFORE :', this.props);
          {
            /* this.setState(user={}); */
          }
          this.props.leaveRoom(this.props.roomTest);
          console.log('AFTER', this.props);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "exit_to_app"), "Exit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "modal-trigger btn green right mr-10 hide-on-small-only",
        href: "#share-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "share"), "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hide-on-med-and-up right lighten-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-trigger btn btn-floating pink",
        href: "#",
        "data-target": "dropdown1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "dropdown1",
        className: "dropdown-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "modal-trigger",
        href: "#share-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Share")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: () => {
          this.props.leaveRoom(this.props.roomTest);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Exit"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "share-modal",
        className: "modal bottom-sheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Share Room"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s8 m8 l8 offset-l2 s-2 m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        readOnly: true,
        value: roomUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s2 m2 l2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__["CopyToClipboard"], {
        text: roomUrl,
        onCopy: this.copyUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-floating grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "content_copy"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sharingbuttons__WEBPACK_IMPORTED_MODULE_9__["Facebook"], {
        url: roomUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sharingbuttons__WEBPACK_IMPORTED_MODULE_9__["Email"], {
        url: roomUrl,
        text: 'Email',
        subject: "Planning Poker: Join your team!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#!",
        className: "modal-close waves-effect waves-green btn-flat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Close")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 m6 l6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Current Story", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
        type: "Watch",
        color: "black",
        height: 35,
        width: 35,
        visible: activeRound,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        type: "text",
        id: "currentStory",
        value: currentStory,
        onChange: this.handleChange,
        readOnly: activeRound,
        placeholder: "Enter Story...",
        className: "materialize-textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, activeRound ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "pink lighten-1 z-depth-0 btn",
        onClick: () => this.toggleRound(false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "End") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "pink lighten-1 z-depth-0 btn",
        onClick: () => this.toggleRound(true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Start"))), activeRound ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Choose Vote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row center-align mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, showVotingCards))) : '', !activeRound && stories && stories.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collection with-header user-story-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collection-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "User Stories")), showUserStories) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 m6 l6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card white round-results-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Round Results", showRoundResult), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, room && room[0].users.map(user => {
        let userVoteObj = room[0].currentVotes.find(obj => {
          return obj.userId === user.id;
        });
        let userVote = userVoteObj ? userVoteObj.vote : '?';
        let fileName = userVoteObj && userVoteObj.vote && !activeRound ? '/img/' + userVoteObj.vote + '.png' : '/img/card-flipped.jpg';
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: user.id,
          className: "col s3 l3 m3 mt-20",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          },
          __self: this
        }, userVoteObj && userVoteObj.vote && !activeRound ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "mr-20",
          width: "65%",
          height: "65%",
          src: fileName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "mr-20 card-border",
          width: "65%",
          height: "65%",
          src: fileName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 405
          },
          __self: this
        }, user.name, userVoteObj && userVoteObj.vote && activeRound ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "material-icons tiny green white-text ml-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 409
          },
          __self: this
        }, "done") : ''));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card white round-history-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, "Round History", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        title: "Download Results",
        className: "material-icons right cursor-pointer",
        onClick: this.printDocument,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, "cloud_download")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "striped",
        id: "roundHistoryTable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, "Story Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, "Average Score"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, "Duration"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, roundsHistory && roundsHistory.map(round => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: round.storyId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          },
          __self: this
        }, round.storyName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, round.score), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, round.duration));
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chat_window__WEBPACK_IMPORTED_MODULE_13__["Launcher"], {
        agentProfile: {
          teamName: 'Planning Poker Chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        },
        onMessageWasSent: this._onMessageWasSent.bind(this),
        messageList: messageList,
        showEmoji: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }));
    }

    return renderContainer //Render the dom elements, or, when this.state == false, nothing.
    ;
  }

}

const mapStateToProps = state => {
  console.log("Room State -> ", state);
  return {
    room: state.firestore.ordered.rooms,
    currentStory: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].currentStory : "",
    messageList: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].messageList : [],
    stories: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].stories : [],
    currentScore: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].currentScore : "",
    activeRound: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].activeRound : false,
    roundsHistory: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].roundsHistory : [],
    user: state.user,
    localRoom: state.room,
    leaveRoom: state.room.leaveRoom,
    roomTest: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0] : null,
    userList: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].users : []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // createRoom: (name) => dispatch(createRoom(name))
    updateCurrentStory: story => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__["updateCurrentStory"])(story)),
    toggleRound: toggle => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__["toggleRound"])(toggle)),
    castVote: currentVote => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__["castVote"])(currentVote)),
    leaveRoom: room => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__["leaveRoom"])(room)),
    sendMessage: data => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__["sendMessage"])(data)) // readMessage: (data) => dispatch(readMessage(data)),

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_5__["firestoreConnect"])(props => {
  const id = props.match.params.id;
  return [{
    collection: 'rooms',
    doc: id
  }];
}))(Room));

/***/ }),

/***/ "./src/components/users/CreateUser.js":
/*!********************************************!*\
  !*** ./src/components/users/CreateUser.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/userActions */ "./src/store/actions/userActions.js");
/* harmony import */ var _store_actions_roomActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/roomActions */ "./src/store/actions/roomActions.js");
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/components/users/CreateUser.js";






class CreateUser extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: ''
    };

    this.handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      if (!this.state.name) alert("Enter valid username.");else this.props.createUser(this.state);
    };
  }

  render() {
    if (this.props.user && this.props.user.id && this.props.location && this.props.location.state && this.props.location.state.redirectRoom) {
      let roomId = this.props.location.state.redirectRoom.split('/')[2];
      this.props.joinRoom({
        'id': roomId
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: this.props.location.state.redirectRoom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    } else if (this.props.user && this.props.user.id) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: '/enterRoom',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    }

    console.log("Props : ", this.props.location);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "white",
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "grey-text text-darken-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Create User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons prefix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "account_circle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      id: "name",
      className: "validate",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Username")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn pink lighten-1 z-depth-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Create User"))));
  }

}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: name => dispatch(Object(_store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__["createUser"])(name)),
    joinRoom: room => dispatch(Object(_store_actions_roomActions__WEBPACK_IMPORTED_MODULE_4__["joinRoom"])(room))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CreateUser));

/***/ }),

/***/ "./src/config/fbConfig.js":
/*!********************************!*\
  !*** ./src/config/fbConfig.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


 // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyCXiaaKeEoxxMCDoeiHToiRTnFad_KuAqg",
  authDomain: "nv-marioplan.firebaseapp.com",
  databaseURL: "https://nv-marioplan.firebaseio.com",
  projectId: "nv-marioplan",
  storageBucket: "",
  messagingSenderId: "823946612980",
  appId: "1:823946612980:web:8c57da3f320f3de21acea1"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducers/rootReducer */ "./src/store/reducers/rootReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-firestore */ "./node_modules/redux-firestore/es/index.js");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_fbConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/fbConfig */ "./src/config/fbConfig.js");
var _jsxFileName = "/Users/vigneshnandakumar/Desktop/React/marioplan/src/index.js";











 // const loadState = () => {
//     try {
//       const serializedState = localStorage.getItem('state');
//       if(serializedState === null) {
//         return undefined;
//       }
//       return JSON.parse(serializedState);
//     } catch (e) {
//       return undefined;
//     }
//   };
//   const saveState = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem('state', serializedState);
//     } catch (e) {
//       // Ignore write errors;
//     }
//   };
//   const persistedState = loadState();

const store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_6__["default"], // persistedState,
Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])( // store enhancers
Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"].withExtraArgument({
  getFirebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["getFirebase"],
  getFirestore: redux_firestore__WEBPACK_IMPORTED_MODULE_9__["getFirestore"]
})), Object(redux_firestore__WEBPACK_IMPORTED_MODULE_9__["reduxFirestore"])(_config_fbConfig__WEBPACK_IMPORTED_MODULE_11__["default"]), Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["reactReduxFirebase"])(_config_fbConfig__WEBPACK_IMPORTED_MODULE_11__["default"], {
  useFirestoreForProfile: true,
  // to sync firestore 'users' collection to 'profile' attribute of firebase
  userProfile: 'users',
  attachAuthIsReady: true
}))); // store.subscribe(() => {
//   saveState(store.getState());
// });

store.firebaseAuthIsReady.then(() => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), document.getElementById('root'));
}); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/actions/authActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/authActions.js ***!
  \******************************************/
/*! exports provided: signIn, signOut, signUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
const signIn = credentials => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
      dispatch({
        type: 'LOGIN_SUCCESS'
      });
    }).catch(err => {
      dispatch({
        type: 'LOGIN_ERROR',
        err
      });
    });
  };
};
const signOut = () => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'SIGNOUT_SUCCESS'
      });
    }).catch(err => {
      console.log(err);
    });
  };
};
const signUp = newUser => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({
        type: 'SIGNUP_SUCCESS'
      });
    }).catch(err => {
      dispatch({
        type: 'SIGNUP_ERROR',
        err
      });
    });
  };
};

/***/ }),

/***/ "./src/store/actions/roomActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/roomActions.js ***!
  \******************************************/
/*! exports provided: createRoom, joinRoom, updateCurrentStory, toggleRound, castVote, leaveRoom, sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return createRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRoom", function() { return joinRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentStory", function() { return updateCurrentStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleRound", function() { return toggleRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castVote", function() { return castVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveRoom", function() { return leaveRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

const createRoom = room => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore(); // const userId = getState().firebase.auth.uid;

    const profile = getState().firebase.profile;
    let joinMessage = {
      author: 'them',
      type: 'text',
      data: {
        text: "🤖 " + getState().user.name + " has joined the room."
      }
    };
    fireStore.collection('rooms').add({
      name: room.name,
      users: [{
        'name': getState().user.name,
        'id': getState().user.id,
        'isOpen': false,
        'newMessagesCount': 0
      }],
      moderator: getState().user.id,
      currentStory: '',
      currentStoryId: null,
      currentVotes: [],
      roundsHistory: [],
      activeRound: false,
      messageList: [joinMessage],
      currentStartTime: 0,
      stories: room && room.stories ? room.stories : []
    }).then(room => {
      console.log("THe room created is :", room);
      dispatch({
        type: 'CREATE_ROOM',
        room: room
      });
    }).catch(err => {
      dispatch({
        type: 'CREATE_ROOM_ERROR',
        err
      });
    });
  };
};
const joinRoom = room => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore(); // const userId = getState().firebase.auth.uid;
    // const profile = getState().firebase.profile;
    // const user = {"id":userId, "name":profile.firstName}

    const userId = getState().user.id;
    const username = getState().user.name;
    const user = {
      "id": userId,
      "name": username
    };
    let joinMessage = {
      author: 'them',
      type: 'text',
      data: {
        text: "🤖 " + username + " has joined the room."
      }
    };
    const roomsRef = fireStore.collection('rooms').doc(room.id);
    roomsRef.get().then(docSnapshot => {
      if (docSnapshot.exists) {
        fireStore.collection('rooms').doc(room.id).update({
          users: fireStore.FieldValue.arrayUnion(user),
          messageList: fireStore.FieldValue.arrayUnion(joinMessage)
        }).then(dispatch({
          type: 'JOIN_ROOM',
          room: room
        })).catch(err => {
          dispatch({
            type: 'JOIN_ROOM_ERROR',
            err
          });
        });
      } else {
        // alert("Invalid room!");
        dispatch({
          type: 'JOIN_ROOM_ERROR'
        });
      }
    });
  };
};
const updateCurrentStory = data => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore();
    fireStore.collection('rooms').doc(data.id).update({
      "currentStory": data.currentStory
    }).then(() => {
      dispatch({
        type: 'UPDATE_TEST',
        data: data
      });
    }).catch(err => {
      dispatch({
        type: 'UPDATE_TEST_ERROR',
        err
      });
    });
  };
};
const toggleRound = toggle => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore();
    const fireBase = getFirebase();

    if (toggle.activeRound) {
      fireStore.collection('rooms').doc(toggle.id).update({
        activeRound: toggle.activeRound,
        currentStoryId: toggle.currentStoryId,
        currentVotes: [],
        currentScore: null,
        currentStartTime: new Date().getTime()
      }).then(() => {
        dispatch({
          type: 'TOGGLE_ROUND',
          data: toggle
        });
      }).catch(err => {
        dispatch({
          type: 'TOGGLE_ROUND_ERROR',
          err
        });
      });
    } else {
      let room = getState().firestore.ordered.rooms[0];
      let score = 0;

      if (room.currentVotes.length > 0) {
        score = room.currentVotes.reduce((total, voteObj) => {
          return total + voteObj.vote;
        }, 0);
        score = score / room.currentVotes.length;
      }

      let currentEndTime = new Date().getTime();
      let duration = currentEndTime - room.currentStartTime;
      duration = 1000 * Math.round(duration / 1000); // round to nearest second

      var d = new Date(duration);
      let history = {
        storyId: room.currentStoryId,
        storyName: room.currentStory,
        score: score,
        time: currentEndTime,
        duration: d.getUTCMinutes() + 'm  ' + d.getUTCSeconds() + 's'
      };
      fireStore.collection('rooms').doc(toggle.id).update({
        activeRound: toggle.activeRound,
        roundsHistory: fireStore.FieldValue.arrayUnion(history),
        //currentVotes: [],
        currentStory: '',
        currentStoryId: null,
        currentScore: score
      }).then(() => {
        dispatch({
          type: 'TOGGLE_ROUND',
          data: toggle
        });
      }).catch(err => {
        dispatch({
          type: 'TOGGLE_ROUND_ERROR',
          err
        });
      });
    }
  };
};
const castVote = currentVote => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore();

    const userVote = (({
      userId,
      vote,
      userName
    }) => ({
      userId,
      vote,
      userName
    }))(currentVote);

    let voteList = [];
    let room = getState().firestore.ordered.rooms[0];

    if (room && room.currentVotes) {
      voteList = room.currentVotes.filter(vote => {
        return vote.userId !== userVote.userId;
      });
    }

    voteList.push(userVote);
    fireStore.collection('rooms').doc(currentVote.roomId).update({
      currentVotes: voteList
    }).then(() => {
      dispatch({
        type: 'CAST_VOTE',
        currentVote
      });
    }).catch(err => {
      dispatch({
        type: 'CAST_VOTE_ERROR',
        err
      });
    });
  };
};
const leaveRoom = room => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore();
    const userId = getState().user.id;
    const userName = getState().user.name;
    let quitMessage = {
      author: 'them',
      type: 'text',
      data: {
        text: "🤖 " + userName + " has left the room."
      }
    };
    Promise.all([room.users.length == 1 && room.users[0].id == userId ? // if last user, delete the entire room
    fireStore.collection('rooms').doc(room.id).delete() : // update list of room users by filtering out leaving user
    fireStore.collection('rooms').doc(room.id).update({
      users: room.users.filter(user => user.id !== userId),
      messageList: [...room.messageList, quitMessage]
    }), fireStore.collection('users').doc(userId).delete()]).then(dispatch({
      type: 'LEAVE_ROOM',
      room: room
    }), dispatch({
      type: 'CLEAR_USER',
      room: room
    })).catch(err => {
      dispatch({
        type: 'LEAVE_ROOM_ERROR',
        err
      });
    });
  };
};
const sendMessage = data => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore();
    let room = getState().firestore.ordered.rooms[0];
    console.log("Send : ", data);
    let messageList = [];
    if (room && room.messageList) messageList = [...room.messageList, data];else messageList.push(data);
    fireStore.collection('rooms').doc(room.id).update({
      "messageList": messageList,
      "users": room.users
    }).then(() => {
      dispatch({
        type: 'UPDATE_TEST',
        data: data
      });
    }).catch(err => {
      dispatch({
        type: 'UPDATE_TEST_ERROR',
        err
      });
    });
  };
}; // export const readMessage = (data) => {
//     return (dispatch, getState, { getFirebase, getFirestore } ) => {
//         const fireStore = getFirestore();
//         let room = getState().firestore.ordered.rooms[0]; 
//         let users = [];
//         if(room && room.users){
//             users = [...room.users];
//         users.map((user) => {
//             if(user.id == data.id) {
//                 if(!user.isOpen)
//                     user.newMessagesCount = 0;
//                 user.isOpen = !user.isOpen;
//             }
//         })
//         console.log('Reading users are ', room.users);
//         fireStore.collection('rooms').doc(room.id).update({
//             "users": users
//         })
//         .then(() => {
//             dispatch({ type:'UPDATE_TEST', data: data })
//         })
//         .catch((err) => {
//             dispatch({ type: 'UPDATE_TEST_ERROR', err })
//         })
//     }
//     };
// }

/***/ }),

/***/ "./src/store/actions/userActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/userActions.js ***!
  \******************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
const createUser = name => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const fireStore = getFirestore();
    fireStore.collection('users').add({
      firstName: name.name,
      lastName: name.name,
      initials: "XY"
    }).then(function (user) {
      // console.log("User -->", user);
      let userDetails = {
        id: user.id,
        name: name.name
      };
      dispatch({
        type: 'CREATE_USER',
        userDetails
      });
    }).catch(err => {
      dispatch({
        type: 'CREATE_USER_ERROR',
        err
      });
    });
  };
};

/***/ }),

/***/ "./src/store/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return _objectSpread({}, state, {
        authError: 'Login Failed'
      });

    case 'LOGIN_SUCCESS':
      return _objectSpread({}, state, {
        authError: null
      });

    case 'SIGNOUT_SUCCESS':
      return state;

    case 'SIGNUP_SUCCESS':
      return _objectSpread({}, state, {
        authError: null
      });

    case 'SIGNUP_ERROR':
      return _objectSpread({}, state, {
        authError: action.err.message
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./src/store/reducers/projectReducer.js":
/*!**********************************************!*\
  !*** ./src/store/reducers/projectReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initState = {
  projects: [{
    id: '1',
    title: 'help me find peach',
    content: 'blah blah blah'
  }, {
    id: '2',
    title: 'help me find apple',
    content: 'blah blah blah'
  }, {
    id: '3',
    title: 'help me find mango',
    content: 'blah blah blah'
  }]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;

    case 'CREATE_PROJECT_ERROR':
      return state;

    case 'UPDATE_TEST':
      return state;

    case 'UPDATE_TEST_ERROR':
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (projectReducer);

/***/ }),

/***/ "./src/store/reducers/roomReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/roomReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const initState = {// 'name': '',
  // 'id': ''
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ROOM':
      return {
        'id': action.room.id
      };

    case 'CREATE_ROOM_ERROR':
      return state;

    case 'JOIN_ROOM':
      return {
        'id': action.room.id
      };

    case 'JOIN_ROOM_ERROR':
      return _objectSpread({}, state, {
        invalidRoom: true
      });

    case 'LEAVE_ROOM':
      return _objectSpread({}, state, {
        id: ''
      });

    case 'LEAVE_ROOM_ERROR':
      return state;

    case 'TOGGLE_ROUND':
      return state;

    case 'TOGGLE_ROUND_ERROR':
      return state;

    case 'CAST_VOTE':
      // return {...state, 'currentVote': action.currentVote.vote};
      return state;

    case 'CAST_VOTE_ERROR':
      return state;

    case 'READ_MESSAGE':
      return state;

    case 'READ_MESSAGE_ERROR':
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (roomReducer);

/***/ }),

/***/ "./src/store/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authReducer */ "./src/store/reducers/authReducer.js");
/* harmony import */ var _projectReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectReducer */ "./src/store/reducers/projectReducer.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userReducer */ "./src/store/reducers/userReducer.js");
/* harmony import */ var _roomReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roomReducer */ "./src/store/reducers/roomReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-firestore */ "./node_modules/redux-firestore/es/index.js");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__);







const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  project: _projectReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _userReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  room: _roomReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  firestore: redux_firestore__WEBPACK_IMPORTED_MODULE_5__["firestoreReducer"],
  firebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__["firebaseReducer"]
}); // const appReducer = combineReducers({
//     auth: authReducer,
//     project: projectReducer,
//     user: userReducer,
//     room: roomReducer,
//     firestore: firestoreReducer,
//     firebase: firebaseReducer
//  })
//   const rootReducer = (state, action) => {
//   if (action.type === 'CLEARSTORE') {
//     state = undefined
//   }
//    return appReducer(state, action)
//  }

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/store/reducers/userReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/userReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_vigneshnandakumar_Desktop_React_marioplan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const initState = {// 'name': '',
  // 'id': ''
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log("Action ------> ", action);
      let user = action.userDetails;
      return _objectSpread({}, state, {}, user);

    case 'CREATE_USER_ERROR':
      return state;

    case 'CLEAR_USER':
      console.log("Sampling user redux");
      return _objectSpread({}, state, {
        id: '',
        name: ''
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/vigneshnandakumar/Desktop/React/marioplan/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/vigneshnandakumar/Desktop/React/marioplan/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map