import {checkHashtag} from './util.js';
const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');

export const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
});

pristine.addValidator(
  textHashtags,
  checkHashtag,
  'Формат ввода: #(символы от 3 до 15)',
);
