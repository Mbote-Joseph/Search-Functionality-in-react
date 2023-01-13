const items = [];

for (let i = 1; i <= 12; i++) {
  const item = {
    id: i,
    name: `Destination ${i}`,
    imageUrl: `https://picsum.photos/200?random=${i}`,
    price: 45,
    description: `This is the description for destination ${i}. It's a great product that you will love.`,
  };
  items.push(item);
}

export const jsonData = items;
