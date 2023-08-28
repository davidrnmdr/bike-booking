import { Booking } from "./book";

export class Bike {
  cod: string;
  price: number; //$ per day
  bookings: Booking[];
  available: boolean = true;

  constructor(cod: string, price: number, bookings: Booking[]) {
    this.cod = cod;
    this.price = price;
    this.bookings = bookings;
  }

  isAvailable(): boolean {
    for (let i = 0; i < this.bookings.length; i++) {
      if (
        this.bookings[i].dateIn < this.bookings[i + 1].dateOut &&
        this.bookings[i + 1].dateOut < this.bookings[i].dateIn
      ) {
        this.available = false;
      }
    }

    return this.available;
  }

  setAvailable(): void {
    this.available = true;
  }
  unsetAvailable(): void {
    this.available = false;
  }
}
