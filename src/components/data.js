const items = [];

for (let i = 1; i <= 5; i++) {
  const item = {
    id: i,
    name: `Destination ${i}`,
    imageUrl: `https://picsum.photos/200?random=${i}`,
    price: (i * 10).toFixed(2),
    description: `This is the description for item ${i}. It's a great product that you will love.`,
  };
  items.push(item);
}

export const jsonData = items;
