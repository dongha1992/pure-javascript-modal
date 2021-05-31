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

  save() {}
  cancel() {}
  getDataSource() {
    return this.state;
  }
  setDataSource() {}

  render() {
    console.log(this.isChangeTtile);

    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.className = 'backgroundOverlay';

    const modalContents = document.createElement('section');
    modalContents.className = 'modalContents';

    let title;

    if (this.isEdiable) {
      title = document.createElement('input');
      title.value = this.state.title;
    } else {
      title = document.createElement('div');
      title.innerHTML = this.state.title;
    }

    const inputForm = document.createElement('form');
    if (this.isEdiable) {
      INPUT_TITLE.forEach((node) => {
        const inputTitle = document.createElement('div');
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

        row.appendChild(inputTitle);
        row.appendChild(userInput);

        inputForm.appendChild(row);
      });
    } else {
      INPUT_TITLE.forEach((node) => {
        const inputTitle = document.createElement('div');
        inputTitle.innerText = node;

        const row = document.createElement('div');
        row.className = 'row';
        const userInput = document.createElement('div');

        userInput.innerText = this.state[node];
        row.appendChild(inputTitle);
        row.appendChild(userInput);

        inputForm.appendChild(row);
      });
    }

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('buttonWrapper');

    const editButton = document.createElement('button');
    editButton.classList.add('button');
    editButton.innerText = 'Edit';

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('button');
    cancelButton.innerText = 'Close';

    cancelButton.addEventListener('click', () => {
      this.close();
    });

    backgroundOverlay.addEventListener('click', () => {
      this.close();
    });

    editButton.addEventListener('click', () => {
      const isEdiable = !this.isEdiable;
      this.editable(isEdiable);
    });

    inputForm.addEventListener('keyup', (e) => {
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
}
