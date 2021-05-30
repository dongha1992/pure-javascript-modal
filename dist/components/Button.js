"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(_ref) {
    var props = _ref.props;

    _classCallCheck(this, Button);

    this.text = props.text;
    this.render();
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var customButton = document.createElement('button');
    }
  }]);

  return Button;
}();

exports["default"] = Button;