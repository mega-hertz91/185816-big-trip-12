import EventItemView from "../views/event-item";
import EventItemEditView from "../views/event-edit-item";
import {render, RenderPosition} from "../utils/render";

export default class Event {
  // Класс одного события
  constructor(data) {
    this._data = data;
    this._templateItem = new EventItemView(this._data);
    this._templateItemEdit = new EventItemEditView(this._data);
  }

  init(targetList) {
    this.getItem();
    this.element = render(targetList, this.getItem(), RenderPosition.BEFOREEND);
    this.element.querySelector(`.event__rollup-btn`).addEventListener(`click`, this._eventOpenForm(this));
  }

  getItem() {
    return this._templateItem;
  }

  getItemEdit() {
    return this._templateItemEdit;
  }

  _eventOpenForm(proto) {
    return () => {
      proto.element.innerHTML = proto.getItemEdit().getTemplate();
      proto.element.querySelector(`.event__rollup-btn`).addEventListener(`click`, this._eventCloseForm(proto));
    };
  }

  _eventCloseForm(proto) {
    return () => {
      proto.element.innerHTML = proto.getItem().getTemplate();
      proto.element.querySelector(`.event__rollup-btn`).addEventListener(`click`, this._eventOpenForm(proto));
    };
  }
}
