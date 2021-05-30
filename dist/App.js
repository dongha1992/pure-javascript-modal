"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommonDialog = _interopRequireDefault(require("./components/CommonDialog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(props) {
    _classCallCheck(this, App);

    this.props = props;
    this.dialog = new _CommonDialog["default"](props);
    this.render();
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this = this;

      var openButton = document.createElement('button');
      openButton.innerText = 'Open';
      openButton.className = 'openButton';
      openButton.addEventListener('click', function () {
        _this.dialog.open();
      });
      var changeTtitleButton = document.createElement('button');
      changeTtitleButton.innerText = 'Change Title';
      changeTtitleButton.className = 'changeTitleButton';
      changeTtitleButton.addEventListener('click', function () {
        var changedTitle = 'title changed';

        _this.dialog.changeTtile(changedTitle);
      });
      this.props.appendChild(changeTtitleButton);
      this.props.appendChild(openButton);
    }
  }]);

  return App;
}();

exports["default"] = App;