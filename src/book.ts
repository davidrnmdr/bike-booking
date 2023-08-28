import { User } from "./user";
import { Bike } from "./bike";

export class Booking {
  dateIn: Date;
  dateOut: Date;

  bike: Bike;
  client: User;
  span: number;

  constructor(dateIn: Date, dateOut: Date, bike: Bike, client: User) {
    this.dateIn = dateIn;
    this.dateOut = dateOut;
    this.bike = bike;
    this.client = client;
    this.span = Math.ceil(
      (dateOut.getTime() - dateIn.getTime()) / (100 * 3600 * 24)
    );
  }
}
