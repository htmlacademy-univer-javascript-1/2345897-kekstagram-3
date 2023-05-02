import {getPhotosArray} from './util.js';
import {drawPictures} from './miniatures.js';

const numberDescriptions = 25;
const photoDescriptions = getPhotosArray(numberDescriptions);
drawPictures(photoDescriptions);
