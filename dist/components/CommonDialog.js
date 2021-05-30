"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
    value: function save() {}
  }, {
    key: "cancel",
    value: function cancel() {}
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

      console.log(this.isChangeTtile);
      var backgroundOverlay = document.createElement('div');
      backgroundOverlay.className = 'backgroundOverlay';
      var modalContents = document.createElement('section');
      modalContents.className = 'modalContents';
      var title;

      if (this.isEdiable) {
        title = document.createElement('input');
        title.value = this.state.title;
      } else {
        title = document.createElement('div');
        title.innerHTML = this.state.title;
      }

      var inputForm = document.createElement('form');

      if (this.isEdiable) {
        INPUT_TITLE.forEach(function (node) {
          var inputTitle = document.createElement('div');
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

          row.appendChild(inputTitle);
          row.appendChild(userInput);
          inputForm.appendChild(row);
        });
      } else {
        INPUT_TITLE.forEach(function (node) {
          var inputTitle = document.createElement('div');
          inputTitle.innerText = node;
          var row = document.createElement('div');
          row.className = 'row';
          var userInput = document.createElement('div');
          userInput.innerText = _this.state[node];
          row.appendChild(inputTitle);
          row.appendChild(userInput);
          inputForm.appendChild(row);
        });
      }

      var buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('buttonWrapper');
      var editButton = document.createElement('button');
      editButton.classList.add('button');
      editButton.innerText = 'Edit';
      var cancelButton = document.createElement('button');
      cancelButton.classList.add('button');
      cancelButton.innerText = 'Close';
      cancelButton.addEventListener('click', function () {
        _this.close();
      });
      backgroundOverlay.addEventListener('click', function () {
        _this.close();
      });
      editButton.addEventListener('click', function () {
        var isEdiable = !_this.isEdiable;

        _this.editable(isEdiable);
      });
      inputForm.addEventListener('keyup', function (e) {
        console.log(e.target.name, e.target.value);
      });
      buttonWrapper.appendChild(editButton);
      buttonWrapper.appendChild(cancelButton);
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