export class Ui {
  static empty = 0;
  static loading = 1;
  static loaded = 2;
  static failed = 3;

  static Status(getValue) {
    let statusBar = document.getElementById("status-bar");
    switch (getValue) {
      case Ui.empty:
        statusBar.textContent = "status:";
        break;
      case Ui.loading:
        statusBar.textContent = "status: is loading... 🔄";
        break;
      case Ui.loaded:
        statusBar.textContent = "status: is loaded ✅";
        break;
      case Ui.failed:
        statusBar.textContent = "status: No users 😭";
        break;
      default:
        statusBar.textContent = "ERROR: WRONG STATUS ID";
    }
  }
}
