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
  
function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot beyond the first 400 feet
    } else if (distance < 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance is over 2500 feet
    }
  }
  
