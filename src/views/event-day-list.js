import View from "./view";

const createEventDayList = () => {
  return (
    `<ul class="trip-days"/>`
  );
};
export default class EventDayListView extends View {
  getTemplate() {
    return createEventDayList();
  }
}
