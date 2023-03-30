function getRandomPositiveInt(min, max) {
  if (min >= 0 && min <= max){
    return Math.round(Math.random() * (max - min) + min);
  }
  return -1;
}

export function isStringLengthEnough(string, maxLength) {
  return string.length <= maxLength;
}

export const photos = Array.from({length: 25}, (element, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: `Photo${i + 1}`,
  likes: getRandomPositiveInt(15, 200),
  comments: getRandomPositiveInt(0, 200)
}));

