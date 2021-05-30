"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CommonDialog = /*#__PURE__*/function () {
  function CommonDialog(_ref) {
    var props = _ref.props;

    _classCallCheck(this, CommonDialog);

    this.isModalOpen = false;
    this.data = null;
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modalContainer';
    this.modalContainer.classList.add('hidden');
    props.appendChild(this.modalContainer);
    this.render();
  }

  _createClass(CommonDialog, [{
    key: "open",
    value: function open() {
      this.isModalOpen = !this.isModalOpen;
      var modal = document.querySelector('.modalContainer');
      modal.classList.toggle('hidden');
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
  }, {
    key: "render",
    value: function render() {
      var background = document.createElement('div');
      background.className = 'background';
      var modalContents = document.createElement('section');
      modalContents.className = 'modalContents';
      this.modalContainer.appendChild(background);
      this.modalContainer.appendChild(modalContents);
    }
  }]);

  return CommonDialog;
}();

exports["default"] = CommonDialog;