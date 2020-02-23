webpackHotUpdate("static/development/pages/news.js",{

/***/ "./components/NewsItem/index.js":
/*!**************************************!*\
  !*** ./components/NewsItem/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./components/NewsItem/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/moro/develop/kitayama/components/NewsItem/index.js";



var NewsItem = function NewsItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.newsItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.additional,
    href: props.additional,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.additional), props.images && props.images.length > 0 && props.images.map(function (image) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imageWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image,
      alt: "",
      className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsItem);

/***/ })

})
//# sourceMappingURL=news.js.60710f65f0fd0e8a15e0.hot-update.js.map