import EventItemView from "../views/event-item";
import EventItemEditView from "../views/event-edit-item";
import {render, RenderPosition, replace} from "../utils/render";

export default class Event {
  // Класс одного события
  constructor(data) {
    this._data = data;
    this._templateItem = new EventItemView(this._data);
    this._templateItemEdit = new EventItemEditView(this._data);
  }

  init(targetList) {
    render(targetList, this._templateItem, RenderPosition.BEFOREEND);
    this._templateItem
      .getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._eventOpenForm());

    this._templateItemEdit
      .getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._eventCloseForm());
  }

  _eventOpenForm() {
    return () => {
      replace(this._templateItemEdit, this._templateItem);
    };
  }

  _eventCloseForm() {
    return () => {
      replace(this._templateItem, this._templateItemEdit);
    };
  }
}
