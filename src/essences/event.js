import EventItemView from "../views/event-item";
import EventItemEditView from "../views/event-edit-item";
import {replace} from "../utils/render";

export default class EventItem {
  constructor(data) {
    this._data = data;
    this.templateItem = new EventItemView(this._data);
    this.templateItemEdit = new EventItemEditView(this._data);
  }

  init() {

  }

  _replace() {
    replace(this.templateItem, this.templateItemEdit);
  }
}
