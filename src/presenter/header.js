import MainMenuView from "../views/menu";
import MainFilterView from "../views/filter";
import InfoView from "../views/info";
import {render, RenderPosition} from "../utils/render";

export default class Header {
  constructor(route) {
    this._mainHeader = document.querySelector(`.page-header`);
    this._eventHeaderInfo = this._mainHeader.querySelector(`.trip-main`);
    this._mainControls = this._eventHeaderInfo.querySelector(`.trip-main__trip-controls`);
    this._filter = new MainFilterView();
    this._menu = new MainMenuView();
    this._info = new InfoView(route);
  }

  init() {
    render(this._eventHeaderInfo, this._info, RenderPosition.AFTERBEGIN);
    render(this._mainControls, this._menu, RenderPosition.AFTERBEGIN);
    render(this._mainControls, this._filter, RenderPosition.BEFOREEND);
  }
}
