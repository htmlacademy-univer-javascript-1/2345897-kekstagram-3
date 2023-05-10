import {getPhotosArray} from './util.js';
import {drawPictures} from './miniatures.js';
import {getData} from './api.js';
import {showGetDataAlert} from './messages.js';

const numberDescriptions = 25;

export const drawPhoto = () =>
  getData(
    (data) => drawPictures(data.slice(0, numberDescriptions)),
    () => {
      showGetDataAlert();
      drawPictures(getPhotosArray(numberDescriptions));
    }
  );
