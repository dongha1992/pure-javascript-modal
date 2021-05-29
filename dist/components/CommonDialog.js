"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CommonDialog = /*#__PURE__*/function () {
  function CommonDialog() {
    _classCallCheck(this, CommonDialog);
  }

  _createClass(CommonDialog, [{
    key: "open",
    value: function open() {
      console.log('open');
    }
  }, {
    key: "close",
    value: function close() {}
  }, {
    key: "changeTtile",
    value: function changeTtile() {}
  }, {
    key: "editable",
    value: function editable() {}
  }, {
    key: "save",
    value: function save() {}
  }, {
    key: "cancel",
    value: function cancel() {}
  }, {
    key: "getDataSource",
    value: function getDataSource() {}
  }, {
    key: "setDataSource",
    value: function setDataSource() {}
  }]);

  return CommonDialog;
}();

exports["default"] = CommonDialog;