import EventsDay from "../essences/eventsDay";

/**
 * Model class events, contains essences Event
 */

export default class ModelEvents {
  constructor(data) {
    /**
     * @type {array}
     */
    this.events = [];
    /**
     * this property contains array data events
     *
     * @property {array}
     */
    this.data = data;
  }

  init() {
    this.data = this._getArrayEvents(this.data);
    this.data.forEach((events, index) => {
      this.events.push(new EventsDay(events, index));
    });
  }

  /**
   * @param event
   * @private
   */
  _setEvent(event) {
    this.events.push(event);
  }

  _sortEventsByDate(a, b) {
    if (a.dateStart > b.dateStart) {
      return 1;
    }
    if (a.dateStart < b.dateStart) {
      return -1;
    }
    return 0;
  }

  _getArrayEvents(list) {
    list = list.sort(this._sortEventsByDate);
    list = list.reduce(this._splitIntoDays, {});
    return Object.entries(list);
  }

  _splitIntoDays(r, a) {
    r[a.dateStart] = r[a.dateStart] || [];
    r[a.dateStart].push(a);
    return r;
  }
}
