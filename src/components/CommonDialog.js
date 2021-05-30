export default class CommonDialog {
  constructor({ props }) {
    this.isModalOpen = false;
    this.data = null;
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modalContainer';
    this.modalContainer.classList.add('hidden');
    props.appendChild(this.modalContainer);
    this.render();
  }

  open() {
    this.isModalOpen = !this.isModalOpen;
    const modal = document.querySelector('.modalContainer');
    modal.classList.toggle('hidden');
  }
  close() {}
  changeTtile() {}
  editable() {}
  save() {}
  cancel() {}
  getDataSource() {}
  setDataSource() {}
  render() {
    const background = document.createElement('div');
    background.className = 'background';

    const modalContents = document.createElement('section');
    modalContents.className = 'modalContents';

    this.modalContainer.appendChild(background);
    this.modalContainer.appendChild(modalContents);
  }
}
