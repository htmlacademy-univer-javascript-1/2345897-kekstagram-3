import {getPhotosArray} from './util.js';

function getRandomPositiveInt(min, max) {
  if (min >= 0 && min <= max){
    return Math.round(Math.random() * (max - min) + min);
  }
  return -1;
}

function isStringLengthEnough(string, maxLength) {
  return string.length <= maxLength;
}
function Photo(id, url, description, likes, comments) {
  this.id = id;
  this.url = url;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
}

const photosArray = [];
function getPhotosArray(number) {
  for (let i = 0; i < number; i++) {
    photosArray[i] = new Photo(
      i + 1,
      `photos/${i + 1}.jpg`,
      `Photo${i + 1}`,
      getRandomPositiveInt(15, 200),
      getRandomPositiveInt(0, 200)
    );
  }
}

getPhotosArray(25);
