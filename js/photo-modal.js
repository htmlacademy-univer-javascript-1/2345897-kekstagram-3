import {checkEscapeKey} from './util.js';
import {pristine} from './photo-form.js';
import {setStartScale} from './photo-scale.js';
import {sendData} from './api.js';
import {showSendDataAlert, showSendDataSuccess} from './messages.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFileElement = imgUploadForm.querySelector('#upload-file');
const imgUploadOverlayElement = imgUploadForm.querySelector('.img-upload__overlay');
const imgCloseElement = imgUploadOverlayElement.querySelector('.img-upload__cancel');
const imgUploadText = imgUploadOverlayElement.querySelector('.img-upload__text');
const imgUploadButton = imgUploadOverlayElement.querySelector('.img-upload__submit');

// Закрытие окна редактирования
const onPopupEscKeydown = (evt) => {
  if (checkEscapeKey(evt) || imgUploadOverlayElement.classList.contains('hidden')) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const reloadForm = () => {
  const errorMessage = imgUploadForm.querySelectorAll('.pristine-error');
  if (errorMessage) {
    errorMessage.forEach((element) => { element.style['display'] = 'none'; });
  }
  setStartScale();
  imgUploadForm.reset();
};

// Закрытие окна редактирования
function closePhotoModal() {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  reloadForm();
}

let formUploading = false;
// Обновление состояние кнопки отправки формы
const updateButtonStatus = () => {
  if (formUploading) {
    return;
  }
  imgUploadButton.disabled = !pristine.validate(true);
};

const blockSubmitButton = () => {
  formUploading = true;
  imgUploadButton.disabled = true;
  imgUploadButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  formUploading = false;
  imgUploadButton.disabled = false;
  imgUploadButton.textContent = 'Сохранить';
};

// Открытие окна редактирования
function openPhotoModal () {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  updateButtonStatus();
}

export const startModalWindow = () => {
  uploadFileElement.addEventListener('change', openPhotoModal);

  imgCloseElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePhotoModal();
  });

  imgUploadText.addEventListener('input', updateButtonStatus);

  // Отправка формы
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!pristine.validate(false)) {
      return;
    }
    blockSubmitButton();
    sendData(
      () => {
        closePhotoModal();
        showSendDataSuccess();
        unblockSubmitButton();
      },
      () => {
        showSendDataAlert();
        unblockSubmitButton();
      },
      new FormData(evt.target)
    );
  });
};
