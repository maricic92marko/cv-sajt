/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(3);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(4);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sendMail = __webpack_require__(15);

var _sendMail2 = _interopRequireDefault(_sendMail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyParser = __webpack_require__(17);
var router = _express2.default.Router();
var app = (0, _express2.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));

router.post('/send-message', function (req, res) {

    var data = req.body.eMail;
    var mailOptions = {
        from: data.email,
        to: 'maricic92marko@gmail.com',
        subject: data.Firstname + ' ' + data.Lastname + ' posetio moj sajt/CV',
        text: data.message
    };
    (0, _sendMail2.default)(mailOptions);
    res.json(true);
    res.end();
});

router.get('/', function (req, res) {

    var mailOptions = {
        from: "maricic92marko@gmail.com",
        to: 'maricic92marko@gmail.com',
        subject: 'Neko je posetio moj sajt/CV',
        text: 'Neko je posetio moj sajt/CV'
    };
    (0, _sendMail2.default)(mailOptions);

    var markup = (0, _server.renderToString)(
    //<StaticRouter location={req.url} context={{url_data}}>
    _react2.default.createElement(_App2.default, null)
    // </StaticRouter> 
    );

    res.send('\n    <!DOCTYPE html>\n    <html>\n        <head>\n        <title>Marko Maricic</title>\n        <meta name="Marko Maricic" \n        content="Innovative and creative with great analytical skills. Highly motivated, self tought\n        with great desire for learning and improving programming skills." />\n        <link rel="canonical" href="http://markomaricic.com" />\n            <link rel="stylesheet" href="/main.css">\n            <script src=\'/bundle.js\' defer></script>\n           \n            </head>      \n        <body>\n            <div id=\'app\'>' + markup + '</div>\n        </body>\n    </html>\n    ');
});

app.use(router);

app.listen(3000, function () {
    console.log('server is listening on port :3000');
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(6);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

var _Skills = __webpack_require__(9);

var _Skills2 = _interopRequireDefault(_Skills);

var _Projects = __webpack_require__(10);

var _Projects2 = _interopRequireDefault(_Projects);

var _Contact = __webpack_require__(11);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.beginTour = _this.beginTour.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'beginTour',
        value: function beginTour() {
            document.getElementById('About').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'page-container' },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', href: '/main.css' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Marko Maricic'
                    ),
                    _react2.default.createElement('link', { rel: '/images/logoTab.png', href: 'http://localhost:3000/images/logoTab.png', type: 'image/x-icon' }),
                    _react2.default.createElement('meta', { name: 'Marko Maricic',
                        content: 'Innovative and creative with great analytical skills. Highly motivated, self tought\r with great desire for learning and improving programming skills.' }),
                    _react2.default.createElement('link', { rel: 'canonical', href: 'http://markomaricic.com' })
                ),
                _react2.default.createElement(_NavBar2.default, null),
                _react2.default.createElement(
                    'div',
                    { id: 'begining', className: 'begining' },
                    _react2.default.createElement(
                        'div',
                        { className: 'begining-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'begining-p1' },
                            'Hello!'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'begining-p2' },
                            'Welcome to my site presentation.'
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.beginTour, className: 'begining-btn' },
                            'Begin tour'
                        )
                    )
                ),
                _react2.default.createElement(_About2.default, null),
                _react2.default.createElement(_Skills2.default, null),
                _react2.default.createElement(_Projects2.default, null),
                _react2.default.createElement(_Contact2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

        _this.state = { scroll: 0, width: 0, height: 0, menu_toggle: false };
        _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
        _this.onScroll = _this.onScroll.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(NavBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
            window.addEventListener("scroll", this.onScroll);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
            window.removeEventListener("scroll", this.onScroll);
        }
    }, {
        key: 'updateWindowDimensions',
        value: function updateWindowDimensions() {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        }
    }, {
        key: 'onScroll',
        value: function onScroll() {
            var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            this.setState({ scroll: scrollTop });

            if (scrollTop > 50) {
                document.getElementById("NavBar").className = "NavBar1";
            } else {
                document.getElementById("NavBar").className = "NavBar";
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var element = document.getElementById(e.target.innerHTML);
            var id = parseInt(e.target.id);

            if (parseInt(e.target.parentElement.id) === 0) {
                document.getElementById('begining').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            } else if (id === 1) {
                element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            } else if (id === 2) {
                element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            } else if (id === 3) {
                element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            } else if (id === 4) {
                document.getElementById('Contact').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { id: 'NavBar', className: 'NavBar' },
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        { onClick: this.handleClick, id: '0', className: 'logo' },
                        _react2.default.createElement('img', { src: '/images/logo.png' })
                    ),
                    _react2.default.createElement(
                        'li',
                        { onClick: this.handleClick, id: '4', className: 'NavLink' },
                        'Contact'
                    ),
                    _react2.default.createElement(
                        'li',
                        { onClick: this.handleClick, id: '3', className: 'NavLink' },
                        'Projects'
                    ),
                    _react2.default.createElement(
                        'li',
                        { onClick: this.handleClick, id: '2', className: 'NavLink' },
                        'Skills'
                    ),
                    _react2.default.createElement(
                        'li',
                        { onClick: this.handleClick, id: '1', className: 'NavLink' },
                        'About'
                    )
                )
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = About;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About() {
    return _react2.default.createElement(
        'div',
        { id: 'About', className: 'About' },
        _react2.default.createElement(
            'div',
            { className: 'About-cv-part' },
            _react2.default.createElement(
                'p',
                { className: 'About-title' },
                'About'
            ),
            _react2.default.createElement(
                'a',
                { href: '/images/Marko Maricic - CV.pdf', download: true, target: '' },
                _react2.default.createElement('img', { align: 'middle', className: 'cv-icon',
                    src: '/images/cv_icon.png' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Atributes' },
            _react2.default.createElement(
                'div',
                { className: 'Atributes-left' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { className: 'Atributes-img-left', src: '/images/creative.png' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'Atributes-p-left' },
                        'Innovative and creative with great analytical skills.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { className: 'Atributes-img-left', src: '/images/progress.png' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'Atributes-p-left' },
                        'Highly motivated, self tought with great desire for learning and improving programming skills.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Atributes-myimg-div' },
                _react2.default.createElement('img', { className: 'Atributes-myimg', src: '/images/markomaricic.png' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'Atributes-right' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: '/images/team.png', className: 'Atributes-img-right' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'Atributes-p-right' },
                        'Team player, hard-working and highly organized'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: '/images/smile.png', className: 'Atributes-img-right' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'Atributes-p-right' },
                        'Cheerful and touchy person with a bunch of funny comments that will laugh colleagues and raise a team spirit'
                    )
                )
            )
        )
    );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Skills;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Skills() {
    return _react2.default.createElement(
        'div',
        { id: 'Skills', className: 'Skills' },
        _react2.default.createElement(
            'p',
            null,
            'Skills'
        ),
        _react2.default.createElement(
            'div',
            { className: 'Skills-div' },
            _react2.default.createElement('img', { src: '/images/html.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/css.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/js.jpg', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/react.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/redux.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/nodejs.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/C.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/php.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/mysql.png', className: 'Skills-img' }),
            _react2.default.createElement('img', { src: '/images/sql-server.png', className: 'Skills-img' })
        )
    );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Projects;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Projects() {
    function handleClick(link) {

        window.open(link, "_blank");
    }
    return _react2.default.createElement(
        'div',
        { id: 'Projects', className: 'Projects' },
        _react2.default.createElement(
            'p',
            null,
            'Projects'
        ),
        _react2.default.createElement(
            'div',
            { className: 'GitImage' },
            _react2.default.createElement(
                'a',
                { href: 'https://github.com/maricic92marko' },
                _react2.default.createElement('img', { src: '/images/git_logo.png', href: 'https://github.com/maricic92marko' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Projects-imgContainer' },
            _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                        return handleClick("https://rolten.info/");
                    } },
                _react2.default.createElement('img', { src: '/images/Rolten-info.jpg' }),
                _react2.default.createElement(
                    'div',
                    { className: 'overlay' },
                    _react2.default.createElement(
                        'div',
                        { className: 'text' },
                        'RoloSistem'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Projects-imgContainer' },
            _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                        return handleClick("https://github.com/maricic92marko/cv-sajt");
                    } },
                _react2.default.createElement('img', { src: '/images/cv-sajt.jpg' }),
                _react2.default.createElement(
                    'div',
                    { className: 'overlay' },
                    _react2.default.createElement(
                        'div',
                        { className: 'text' },
                        'cv-sajt'
                    )
                )
            )
        )
    );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Contact;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(12);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Contact() {

    function handleClick() {

        var Firstname = document.getElementById('fName').value;
        var Lastname = document.getElementById('lName').value;
        var email = document.getElementById('eMail').value;
        var message = document.getElementById('Message').value;

        var eMail = {
            Firstname: Firstname,
            Lastname: Lastname,
            email: email,
            message: message
        };

        (0, _api2.default)('POST', 'http://localhost:3000/send-message', {
            eMail: eMail
        }).then(function (json) {
            if (json.errors) {
                alert('something went wrong!');
            }
            alert('Message sent.');
            document.location.href = '/';
        });
    }

    return _react2.default.createElement(
        'div',
        { id: 'Contact', className: 'Contact' },
        _react2.default.createElement(
            'p',
            null,
            'Contact Me!'
        ),
        _react2.default.createElement(
            'div',
            { className: 'contactForm' },
            _react2.default.createElement(
                'p',
                null,
                'First name'
            ),
            _react2.default.createElement('input', { id: 'fName', className: 'fName' }),
            _react2.default.createElement(
                'p',
                null,
                'Last name'
            ),
            _react2.default.createElement('input', { id: 'lName', className: 'lName' }),
            _react2.default.createElement(
                'p',
                null,
                'Email'
            ),
            _react2.default.createElement('input', { id: 'eMail', className: 'eMail' }),
            _react2.default.createElement(
                'p',
                null,
                'Message'
            ),
            _react2.default.createElement('textarea', { id: 'Message', className: 'Message' }),
            _react2.default.createElement(
                'button',
                { onClick: handleClick },
                'Send message'
            )
        )
    );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = FetchApi;

var _isomorphicFetch = __webpack_require__(13);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(14).polyfill();

function FetchApi(method, url, data) {

    if (method.toLowerCase() === 'get') {
        return (0, _isomorphicFetch2.default)(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(function (response) {
            return response.json();
        }).catch(function (error) {
            console.warn(error);
            return null;
        });
    } else {
        console.log(data);
        return (0, _isomorphicFetch2.default)(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)

        }).then(function (response) {
            return response.json();
        }).catch(function (error) {
            console.warn(error);
            return null;
        });
    }
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var nodemailer = __webpack_require__(16);
//const sendgrid = require("@sendgrid/mail")


/*

sendgrid.setApiKey('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')
function sendMail(msg){
sendgrid.send(msg)
}
module.exports = sendMail*/

/*const transporter = nodemailer.createTransport("SMTP", {
        host: "mail.domain.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        auth: {
            user: "info@domain.com",
            pass: "password"
        },
        debug:true,
        tls: {
        rejectUnauthorized: false
        }
});
*/
var transporter = nodemailer.createTransport({
  host: 'gmail',
  port: 465,
  secure: true,

  auth: {
    user: 'maricic92marko@gmail.com',
    pass: 'A!192kt2combo'
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
});

/*
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rolosistem@gmail.com',
    pass: '2894652.j'
  }
});
*/

function sendMail(mailOptions) {
  transporter.sendMail(mailOptions, function (error, info) {
    console.log(66666666666);

    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = sendMail;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })
/******/ ]);