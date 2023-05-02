const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview').children[0];

const changeScale = (newScale) => {
  scaleControlValue.value = `${newScale}%`;
  imgUploadPreview.style['transform'] = `scale(${newScale / 100})`;
};

export const setStartScale = () => changeScale(100);

setStartScale();

scaleControlSmaller.addEventListener('click', () => {
  const newScale = Number(scaleControlValue.value.slice(0, -1)) - 25;
  if (newScale < 25) {
    return;
  }
  changeScale(newScale);
});

scaleControlBigger.addEventListener('click', () => {
  const newScale = Number(scaleControlValue.value.slice(0, -1)) + 25;
  if (newScale > 100) {
    return;
  }
  changeScale(newScale);
});
