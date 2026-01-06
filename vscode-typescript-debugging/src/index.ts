import { User, calculateDiscount } from './user';

const users: User[] = [
  { id: '1', name: 'Alice', discountRate: 0.1 },
  { id: '2', name: 'Bob' }, // no discountRate
];

users.forEach(user => {
  const price = 100;
  const finalPrice = calculateDiscount(user, price);
  console.log(`${user.name} pays ${finalPrice}`);
});
