import { select, settings } from '../settings.js';
import { BaseWidget } from './BaseWidget.js'; 

export class AmountWidget extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, settings.amountWidget.defaultValue);

    const thisWidget = this;
    thisWidget.getElements();
    // thisWidget.value = settings.amountWidget.defaultValue;
    // thisWidget.setValue(thisWidget.input.value);
    thisWidget.initActions();
    ////console.log('AmountWidget:', thisWidget);
    ////console.log('constructor arguments:', element);
  }

  getElements() {
    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(
      select.widgets.amount.input
    );
    thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(
      select.widgets.amount.linkDecrease
    );
    thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(
      select.widgets.amount.linkIncrease
    );
  }

  // setValue(value) {
  //   const thisWidget = this;

  //   const newValue = parseInt(value);

  //   /*TO DO: Add validation*/
  //   if (
  //     newValue != thisWidget.value &&
  //     newValue >= settings.amountWidget.defaultMin &&
  //     newValue <= settings.amountWidget.defaultMax
  //   ) {
  //     thisWidget.value = newValue;
  //     thisWidget.announce();
  //   }
  //   thisWidget.input.value = thisWidget.value;
  // }

  isValid(newValue) {
    return !isNaN(newValue) && newValue >= settings.amountWidget.defaultMin && newValue <= settings.amountWidget.defaultMax; 

  }

  renderValue() {
    const thisWidget = this;
    thisWidget.dom.input.value = thisWidget.value;
  }

  initActions() {
    const thisWidget = this;

    thisWidget.dom.input.addEventListener('change', function () {
      thisWidget.value = thisWidget.dom.input.value;
    });
    thisWidget.dom.linkDecrease.addEventListener('click', function (event) {
      event.preventDefault;
      --thisWidget.value
    });
    thisWidget.dom.linkIncrease.addEventListener('click', function (event) {
      event.preventDefault;
      ++thisWidget.value
    });
  }

  // announce() {
  //   const thisWidget = this;

  //   const event = new CustomEvent('updated', {
  //     bubbles: true,
  //   });

  //   thisWidget.element.dispatchEvent(event);
  // }
}
