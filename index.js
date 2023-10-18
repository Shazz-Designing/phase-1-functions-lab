function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); 
}
  

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264; 
}
  

