"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommonDialog = _interopRequireDefault(require("./components/CommonDialog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App(props) {
  _classCallCheck(this, App);

  var dialog = new _CommonDialog["default"]({
    props: props
  });
  dialog.open();
};

exports["default"] = App;