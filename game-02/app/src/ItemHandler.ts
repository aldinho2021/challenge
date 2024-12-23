import { Item } from "./Item";

export abstract class ItemHandler {
  constructor(protected item: Item) {}

  abstract update(): void;

  protected increaseQuality(amount: number = 1): void {
    if (this.item.quality < 50) {
      this.item.quality += amount;
    }
  }

  protected decreaseQuality(amount: number = 1): void {
    if (this.item.quality > 0) {
      this.item.quality -= amount;
    }
  }

  protected decreaseSellIn(): void {
    this.item.sellIn--;
  }
}

export class NormalItemHandler extends ItemHandler {
  update(): void {
    this.decreaseQuality();
    this.decreaseSellIn();
    if (this.item.sellIn < 0) {
      this.decreaseQuality();
    }
  }
}

export class AgedBrieHandler extends ItemHandler {
  update(): void {
    this.increaseQuality();
    this.decreaseSellIn();
    if (this.item.sellIn < 0) {
      this.increaseQuality();
    }
  }
}

export class SulfurasHandler extends ItemHandler {
  update(): void {
    // "Sulfuras" no cambia su calidad ni su SellIn
  }
}

export class BackstagePassesHandler extends ItemHandler {
  update(): void {
    if (this.item.sellIn > 10) {
      this.increaseQuality();
    } else if (this.item.sellIn > 5) {
      this.increaseQuality(2);
    } else if (this.item.sellIn > 0) {
      this.increaseQuality(3);
    } else {
      this.item.quality = 0; // Después del concierto, calidad a 0
    }
    this.decreaseSellIn();
  }
}

export class ConjuredItemHandler extends ItemHandler {
  update(): void {
    this.decreaseQuality(2);
    this.decreaseSellIn();
    if (this.item.sellIn < 0) {
      this.decreaseQuality(2);
    }
  }
}
