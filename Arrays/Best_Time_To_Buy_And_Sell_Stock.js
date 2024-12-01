function maxProfit(prices) {
  let minPrice = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    profit = Math.max(profit, prices[i] - minPrice);
  }

  return profit;
}
