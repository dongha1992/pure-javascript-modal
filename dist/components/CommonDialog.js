"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var INPUT_TITLE = ['userId', 'email', 'name', 'mobile', 'team'];

var CommonDialog = /*#__PURE__*/function () {
  function CommonDialog(props) {
    _classCallCheck(this, CommonDialog);

    this.isModalOpen = false;
    this.isEdiable = false;
    this.state = {
      title: 'Some title...',
      userId: 'Liveconnect',
      email: 'liveconnect@liveconnect.com',
      name: 'liveconnect',
      mobile: '010-0000-0000',
      team: 'Media.Lab'
    };
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modalContainer';
    this.modalContainer.classList.add('hidden');
    props.appendChild(this.modalContainer);
  }

  _createClass(CommonDialog, [{
    key: "open",
    value: function open() {
      this.isModalOpen = !this.isModalOpen;
      var modal = document.querySelector('.modalContainer');
      modal.classList.remove('hidden');
      this.render();
    }
  }, {
    key: "close",
    value: function close() {
      this.isModalOpen = !this.isModalOpen;
      var modal = document.querySelector('.modalContainer');
      modal.classList.add('hidden');
      this.modalContainer.innerHTML = '';
    }
  }, {
    key: "changeTtile",
    value: function changeTtile(changedTitle) {
      this.state.title = changedTitle;
      this.open();
    }
  }, {
    key: "editable",
    value: function editable(isEdiable) {
      this.isEdiable = isEdiable;
      this.modalContainer.innerHTML = '';
      this.render();
    }
  }, {
    key: "save",
    value: function save() {
      this.isEdiable = !this.isEdiable;
      this.modalContainer.innerHTML = '';
      this.render();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.isEdiable = !this.isEdiable;
      this.modalContainer.innerHTML = '';
      this.render();
    }
  }, {
    key: "getDataSource",
    value: function getDataSource() {
      return this.state;
    }
  }, {
    key: "setDataSource",
    value: function setDataSource() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var backgroundOverlay = document.createElement('div');
      backgroundOverlay.className = 'backgroundOverlay';
      var modalContents = document.createElement('section');
      modalContents.className = 'modalContents';
      var title, editButton, cancelButton, editCancelButton, saveButton;

      if (this.isEdiable) {
        title = document.createElement('input');
        title.className = 'dialogTitle';
        title.value = this.state.title;
      } else {
        title = document.createElement('div');
        title.className = 'dialogTitle';
        title.innerHTML = this.state.title;
      }

      var inputForm = document.createElement('form');

      if (this.isEdiable) {
        INPUT_TITLE.forEach(function (node) {
          var inputTitle = document.createElement('div');
          inputTitle.className = 'inputTitle';
          inputTitle.innerText = node;
          var row = document.createElement('div');
          row.className = 'row';
          var userInput;

          if (node === 'email' || node === 'name' || node === 'mobile') {
            userInput = document.createElement('input');
            userInput.value = _this.state[node];
            userInput.name = node;
          } else {
            userInput = document.createElement('div');
            userInput.innerText = _this.state[node];
          }

          userInput.className = 'userInput';
          row.appendChild(inputTitle);
          row.appendChild(userInput);
          inputForm.appendChild(row);
        });
      } else {
        INPUT_TITLE.forEach(function (node) {
          var inputTitle = document.createElement('div');
          inputTitle.className = 'inputTitle';
          inputTitle.innerText = node;
          var row = document.createElement('div');
          row.className = 'row';
          var userInput = document.createElement('div');
          userInput.className = 'userInput';
          userInput.innerText = _this.state[node];
          row.appendChild(inputTitle);
          row.appendChild(userInput);
          inputForm.appendChild(row);
        });
      }

      var buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('buttonWrapper');

      if (this.isEdiable) {
        editCancelButton = document.createElement('button');
        editCancelButton.classList.add('button');
        editCancelButton.innerText = 'Cancel';
        saveButton = document.createElement('button');
        saveButton.classList.add('button');
        saveButton.innerText = 'save';
        buttonWrapper.appendChild(editCancelButton);
        buttonWrapper.appendChild(saveButton);
      } else {
        editButton = document.createElement('button');
        editButton.classList.add('button');
        editButton.innerText = 'Edit';
        cancelButton = document.createElement('button');
        cancelButton.classList.add('button');
        cancelButton.innerText = 'Close';
        buttonWrapper.appendChild(editButton);
        buttonWrapper.appendChild(cancelButton);
      }

      backgroundOverlay.addEventListener('click', function () {
        _this.close();
      });

      if (this.isEdiable) {
        editCancelButton.addEventListener('click', function () {
          _this.cancel();
        });
        saveButton.addEventListener('click', function () {
          _this.save();
        });
      } else {
        cancelButton.addEventListener('click', function () {
          _this.close();
        });
        editButton.addEventListener('click', function () {
          var isEdiable = !_this.isEdiable;

          _this.editable(isEdiable);
        });
      }

      inputForm.addEventListener('keyup', function (e) {
        var _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
        _this.state = _objectSpread(_objectSpread({}, _this.state), {}, _defineProperty({}, name, value));
      });
      modalContents.appendChild(title);
      modalContents.appendChild(inputForm);
      modalContents.appendChild(buttonWrapper);
      this.modalContainer.appendChild(backgroundOverlay);
      this.modalContainer.appendChild(modalContents);
    }
  }]);

  return CommonDialog;
}();

exports["default"] = CommonDialog;