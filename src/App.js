import CommonDialog from './components/CommonDialog.js';

export default class App {
  constructor(props) {
    this.props = props;
    this.dialog = new CommonDialog(props);
    this.render();
  }
  render() {
    const openButton = document.createElement('button');
    openButton.innerText = 'Open';
    openButton.className = 'openButton';
    openButton.addEventListener('click', () => {
      this.dialog.open();
    });

    const changeTtitleButton = document.createElement('button');
    changeTtitleButton.innerText = 'Change Title';
    changeTtitleButton.className = 'changeTitleButton';
    changeTtitleButton.addEventListener('click', () => {
      const changedTitle = 'title changed';
      this.dialog.changeTtile(changedTitle);
    });

    this.props.appendChild(changeTtitleButton);
    this.props.appendChild(openButton);
  }
}
