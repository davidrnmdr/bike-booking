import { Booking } from "./book";

export class User {
  name: string;
  cpf: string;

  book(booking: Booking): number {
    if (booking.bike.isAvailable()) {
      booking.bike.bookings.push(booking);
      booking.bike.unsetAvailable();
      return booking.bike.price * booking.span;
    } else return 0;
  }

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }
}
