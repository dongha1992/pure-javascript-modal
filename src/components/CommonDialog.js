const INPUT_TITLE = ['userId', 'email', 'name', 'mobile', 'team'];

export default class CommonDialog {
  constructor(props) {
    this.isModalOpen = false;
    this.isEdiable = false;
    this.state = {
      title: 'Some title...',
      userId: 'Liveconnect',
      email: 'liveconnect@liveconnect.com',
      name: 'liveconnect',
      mobile: '010-0000-0000',
      team: 'Media.Lab',
    };
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modalContainer';
    this.modalContainer.classList.add('hidden');
    props.appendChild(this.modalContainer);
  }

  open() {
    this.isModalOpen = !this.isModalOpen;
    const modal = document.querySelector('.modalContainer');
    modal.classList.remove('hidden');
    this.render();
  }

  close() {
    this.isModalOpen = !this.isModalOpen;
    const modal = document.querySelector('.modalContainer');
    modal.classList.add('hidden');
    this.modalContainer.innerHTML = '';
  }

  changeTtile(changedTitle) {
    this.state.title = changedTitle;
    this.open();
  }

  editable(isEdiable) {
    this.isEdiable = isEdiable;
    this.modalContainer.innerHTML = '';
    this.render();
  }

  save() {
    this.isEdiable = !this.isEdiable;
    this.modalContainer.innerHTML = '';
    this.render();
  }
  
  cancel() {
    this.isEdiable = !this.isEdiable;
    this.modalContainer.innerHTML = '';
    this.render();
  }

  getDataSource() {
    return this.state;
  }

  setDataSource() {}

  render() {
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.className = 'backgroundOverlay';

    const modalContents = document.createElement('section');
    modalContents.className = 'modalContents';

    let buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('buttonWrapper');

    const inputForm = document.createElement('form');
    const titleInputForm = document.createElement('form');

    let title, editButton, cancelButton, editCancelButton, saveButton;

    if (this.isEdiable) {
      title = document.createElement('input');
      title.className = 'dialogTitle';
      title.name = 'title';
      title.value = this.state.title;

      titleInputForm.appendChild(title);

      INPUT_TITLE.forEach((node) => {
        const inputTitle = document.createElement('div');
        inputTitle.className = 'inputTitle';
        inputTitle.innerText = node;
        const row = document.createElement('div');
        row.className = 'row';
        let userInput;

        if (node === 'email' || node === 'name' || node === 'mobile') {
          userInput = document.createElement('input');
          userInput.value = this.state[node];
          userInput.name = node;
        } else {
          userInput = document.createElement('div');
          userInput.innerText = this.state[node];
        }
        userInput.className = 'userInput';

        row.appendChild(inputTitle);
        row.appendChild(userInput);

        inputForm.appendChild(row);
      });

      editCancelButton = document.createElement('button');
      editCancelButton.classList.add('button');
      editCancelButton.innerText = 'Cancel';

      saveButton = document.createElement('button');
      saveButton.classList.add('button');
      saveButton.innerText = 'save';

      buttonWrapper.appendChild(editCancelButton);
      buttonWrapper.appendChild(saveButton);

      modalContents.appendChild(titleInputForm);

      editCancelButton.addEventListener('click', () => {
        this.cancel();
      });

      saveButton.addEventListener('click', () => {
        this.save();
      });
    } else {
      title = document.createElement('div');
      title.className = 'dialogTitle';
      title.innerHTML = this.state.title;

      INPUT_TITLE.forEach((node) => {
        const inputTitle = document.createElement('div');
        inputTitle.className = 'inputTitle';
        inputTitle.innerText = node;

        const row = document.createElement('div');
        row.className = 'row';
        const userInput = document.createElement('div');
        userInput.className = 'userInput';
        userInput.innerText = this.state[node];
        row.appendChild(inputTitle);
        row.appendChild(userInput);

        inputForm.appendChild(row);
      });

      editButton = document.createElement('button');
      editButton.classList.add('button');
      editButton.innerText = 'Edit';

      cancelButton = document.createElement('button');
      cancelButton.classList.add('button');
      cancelButton.innerText = 'Close';

      buttonWrapper.appendChild(editButton);
      buttonWrapper.appendChild(cancelButton);

      modalContents.appendChild(title);

      cancelButton.addEventListener('click', () => {
        this.close();
      });

      editButton.addEventListener('click', () => {
        const isEdiable = !this.isEdiable;
        this.editable(isEdiable);
      });
    }

    backgroundOverlay.addEventListener('click', () => {
      this.close();
    });

    titleInputForm.addEventListener('keyup', (e) => {
      const { name, value } = e.target;
      this.state[name] = value;
    });

    inputForm.addEventListener('keyup', (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      this.state = {
        ...this.state,
        [name]: value,
      };
    });

    modalContents.appendChild(inputForm);
    modalContents.appendChild(buttonWrapper);
    this.modalContainer.appendChild(backgroundOverlay);
    this.modalContainer.appendChild(modalContents);
  }
}
