import { expect } from 'chai';
import { Item } from '../src/Item';
import {GildedRose} from '../src/Gilded-rose';
describe('Gilded Rose', () => {
  it('debe reducir la calidad de un artículo normal después de un día', () => {
    const items = [new Item('Normal Item', 10, 20)];
    const gildedRose = new GildedRose(items);
    
    gildedRose.updateQuality();

    expect(items[0].quality).to.equal(19);
  });

  it('debe reducir la calidad de un artículo después de la fecha de vencimiento', () => {
    const items = [new Item('Normal Item', 0, 20)];
    const gildedRose = new GildedRose(items);
    
    gildedRose.updateQuality();

    expect(items[0].quality).to.equal(18);
  });

  it('debe aumentar la calidad de Aged Brie', () => {
    const items = [new Item('Aged Brie', 10, 20)];
    const gildedRose = new GildedRose(items);
    
    gildedRose.updateQuality();

    expect(items[0].quality).to.equal(21);
  });

  it('debe no permitir que la calidad sea mayor a 50', () => {
    const items = [new Item('Aged Brie', 10, 50)];
    const gildedRose = new GildedRose(items);
    
    gildedRose.updateQuality();

    expect(items[0].quality).to.equal(50);
  });

});
