function minCostToConnectRopes(ropes) {
  let totalCost = 0;

  // Keep going until only 1 rope is left
  while (ropes.length > 1) {
    // 1. Sort smallest to largest
    ropes.sort((a, b) => a - b);

    // 2. Take out the two smallest ropes
    const firstSmallest = ropes.shift();
    const secondSmallest = ropes.shift();

    // 3. Combine them and add to total cost
    const cost = firstSmallest + secondSmallest;
    totalCost += cost;

    // 4. Put the newly combined rope back into the list
    ropes.push(cost);
  }

  return totalCost;
}


module.exports=minCostToConnectRopes;
