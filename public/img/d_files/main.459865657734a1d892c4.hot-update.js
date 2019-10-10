webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.459865657734a1d892c4.hot-update.js.map