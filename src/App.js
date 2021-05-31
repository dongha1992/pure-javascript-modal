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

    const changeTtitleButton = document.createElement('button');
    changeTtitleButton.innerText = 'Change Title';
    changeTtitleButton.className = 'changeTitleButton';

    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'mainButtonWrapper';
    buttonWrapper.appendChild(changeTtitleButton);
    buttonWrapper.appendChild(openButton);
    this.props.appendChild(buttonWrapper);

    openButton.addEventListener('click', () => {
      this.dialog.open();
    });

    changeTtitleButton.addEventListener('click', () => {
      const changedTitle = 'title changed';
      this.dialog.changeTtile(changedTitle);
    });
  }

  getState() {
    this.dialog.getDataSource();
  }
}
