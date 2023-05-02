import {photosArray} from './data.js';
import {Photo} from './data.js';

function getRandomPositiveInt(min, max) {
  if (min >= 0 && min <= max){
    return Math.round(Math.random() * (max - min) + min);
  }
  return -1;
}

export function isStringLengthEnough(string, maxLength) {
  return string.length <= maxLength;
}

export function getPhotosArray(number) {
  for (let i = 0; i < number; i++) {
    photosArray[i] = new Photo(
      i + 1,
      `photos/${i + 1}.jpg`,
      `Photo${i + 1}`,
      getRandomPositiveInt(15, 200),
      getRandomPositiveInt(0, 200)
    );
  }
  return photosArray;
}

export const checkHashtag = (value) => /^(#[a-zA-Zа-яА-ЯЁё0-9\-_]{3,15} *)+$/.test(value);
export const checkEscapeKey = (evt) => evt.key === 'Escape';
