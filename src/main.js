import {makeRoute} from "./utils";
import {renderPointTripItem} from "./mock/trip";
import Board from "./presenter/board";
import Header from "./presenter/header";
import ModelEvents from "./models/modelEvents";

const TRIPS_COUNT = 15;
const tripList = new Array(TRIPS_COUNT).fill().map(renderPointTripItem);

const route = makeRoute(tripList);

const header = new Header(route);
header.init();

const eventList = new ModelEvents(tripList);
eventList.init();

//const board = new Board();
//board.init();
