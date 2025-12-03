const { faker } = require('faker');
const fs = require('fs');
const orders = Array.from({ length: 1000 }, (_, i) => ({
  id: `ORD-${1000 + i}`,
  customerName: faker.person.fullName(),
  email: faker.internet.email(),
  total: parseFloat(faker.commerce.price(100, 5000)),
  status: faker.helpers.arrayElement(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  createdAt: faker.date.recent({ days: 30 }).toISOString(),
  items: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
    name: faker.commerce.productName(),
    qty: faker.number.int({ min: 1, max: 10 }),
    price: parseFloat(faker.commerce.price())
  }))
}));
fs.writeFileSync('src/mocks/db.json', JSON.stringify({ orders }, null, 2));
console.log('1000 fake orders generated!');
