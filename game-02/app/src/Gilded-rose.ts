import { Item } from './Item';
import { ItemHandler, AgedBrieHandler, SulfurasHandler, BackstagePassesHandler, ConjuredItemHandler, NormalItemHandler } from './ItemHandler';


export class GildedRose {
    items: Array<Item>;
  
    constructor(items = [] as Array<Item>) {
      this.items = items;
    }
  
    updateQuality(): Array<Item> {
      for (let item of this.items) {
        this.getItemHandler(item).update();
      }
      return this.items;
    }
  
    private getItemHandler(item: Item): ItemHandler {
      if (item.name === "Aged Brie") {
        return new AgedBrieHandler(item);
      } else if (item.name === "Sulfuras, Hand of Ragnaros") {
        return new SulfurasHandler(item);
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        return new BackstagePassesHandler(item);
      } else if (item.name.startsWith("Conjured")) {
        return new ConjuredItemHandler(item);
      } else {
        return new NormalItemHandler(item);
      }
    }
  }
  