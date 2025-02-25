console.log(process.env.NODE_ENV);
export const cardName = process.env.NODE_ENV !== "production" 
  ? 'floors-card-dev'
  : 'floors-card';
console.log(cardName);