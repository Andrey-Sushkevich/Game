import { CARD_ROTATE_DURATION, OPEN_CARD_DURATION, HIDDEN_CLASS, HIDE_CARD_DELAY } from './values';

class Card {
  constructor(templateNode, icon, shirt) {
    this.node = Card._createNode(templateNode, shirt);
    this.icon = icon;
    this.shirt = shirt;
  }

}

