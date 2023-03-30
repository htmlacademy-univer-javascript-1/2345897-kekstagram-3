function getRandomPositiveInt(min, max) {
  if (min >= 0 && min <= max){
    return Math.round(Math.random() * (max - min) + min);
  }
  return -1;
}

function isStringLengthEnough(string, maxLength) {
  return string.length <= maxLength;
}
