function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); 
  }
  

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

