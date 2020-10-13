import Model from "./model";

export default class EventModel extends Model {
  constructor(props = {}) {
    super();
    this.properties = props;
    /**
     * Properties model
     * */
    this.pointType = null;
    this.destination = null;
    this.description = null;
    this.photos = null;
    this.dateStart = null;
    this.dateFinish = null;
    this.dateDiff = null;
    this.value = null;
    this.offers = null;

    this._installProperties(this.properties);
  }

  _installProperties(props) {
    this.pointType = props.pointType ? props.pointType : this.pointType;
    this.destination = props.destination ? props.destination : this.destination;
    this.description = props.description ? props.description : this.destination;
    this.photos = props.photos ? props.photos : this.photos;
    this.dateStart = props.dateStart ? props.dateStart : this.dateStart;
    this.dateFinish = props.dateFinish ? props.dateFinish : this.dateFinish;
    this.dateDiff = props.dateDiff ? props.dateDiff : this.dateDiff;
    this.value = props.value ? props.value : this.value;
    this.offers = props.offers ? props.offers : this.offers;
  }

  update(props = {}) {
    this._installProperties(props);
  }

  static create(props) {
    return new EventModel(props);
  }
}
