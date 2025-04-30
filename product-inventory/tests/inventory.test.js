const {sortInventory, filterProducts, calculateDiscount} = require('../inventory.js');

describe('Basic Function Tests', () => {
    // calculateDiscount
    test('calculateDiscount: 10% off $100 returns $90', () => {
      // Basic math check: $100 - 10% of $100 = $90
      const result = calculateDiscount(100, 0.1);
      expect(result).toBe(90);
    });
  
    // filterProducts
    test('filterProducts: filters products over $10', () => {
      const products = [
        { name: 'Pen', price: 5 },
        { name: 'Notebook', price: 15 }
      ];
  
      // Directly compare the filtered result with what we expect
      const result = filterProducts(products, (product) => product.price > 10);
      expect(result).toEqual([{ name: 'Notebook', price: 15 }]);
    });
  
    // sortInventory
    test('sortInventory: sorts by price in ascending order', () => {
      const inventory = [
        { name: 'Zebra', price: 3 },
        { name: 'Apple', price: 1 }
      ];
  
      // Compare the entire sorted array
      const result = sortInventory(inventory, 'price');
      expect(result).toEqual([
        { name: 'Apple', price: 1 },
        { name: 'Zebra', price: 3 }
      ]);
    });
  });