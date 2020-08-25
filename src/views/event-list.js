import View from "./view";

const createEventList = () => {
  return (
    `<ul class="trip-events__list">`
  );
};

export default class EventListView extends View {
  getTemplate() {
    return createEventList();
  }
}
