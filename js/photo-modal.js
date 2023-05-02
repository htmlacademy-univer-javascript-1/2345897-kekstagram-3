import {checkEscapeKey} from './util.js';
import {pristine} from './photo-form.js';
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFileElement = imgUploadForm.querySelector('#upload-file');
const imgUploadOverlayElement = imgUploadForm.querySelector('.img-upload__overlay');
const imgCloseElement = imgUploadOverlayElement.querySelector('.img-upload__cancel');

// Закрытие окна редактирования
const onPopupEscKeydown = (evt) => {
  if (checkEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const reloadForm = () => {
  const errorMessage = imgUploadForm.querySelectorAll('.pristine-error');
  if (errorMessage) {
    errorMessage.forEach((element) => { element.style['display'] = 'none'; });
  }
  imgUploadForm.reset();
};

// Закрытие окна редактирования
function closePhotoModal() {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  reloadForm();
}

// Открытие окна редактирования
function openPhotoModal () {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

uploadFileElement.addEventListener('change', () => {
  openPhotoModal();
});

imgCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePhotoModal();
});

// Отправка формы
imgUploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
