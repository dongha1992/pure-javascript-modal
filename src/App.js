import CommonDialog from './components/CommonDialog.js';

export default class App {
  constructor(props) {
    let dialog = new CommonDialog({ props });
    dialog.open();
  }
}
