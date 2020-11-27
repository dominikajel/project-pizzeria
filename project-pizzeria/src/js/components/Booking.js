
import { templates, select } from '../settings.js';
import { AmountWidget } from './AmountWidget.js';


export class Booking {
  constructor(bookingWrapper) {
    const thisBooking = this;
    //   thisBooking.render(thisApp.booking);
    thisBooking.render(bookingWrapper);
    thisBooking.initWidgets();
  }

  render(bookingWrapper) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = bookingWrapper;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(
      select.booking.peopleAmount
    );
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(
      select.booking.hoursAmount
    );
  }
  initWidgets() {
    const thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
  }
}
