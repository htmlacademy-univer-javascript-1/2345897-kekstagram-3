import {checkEscapeKey, findTemplate} from './util.js';
const internetErrorMessage = document.querySelector('.error_connect');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

export const showGetDataAlert = () => {
  internetErrorMessage.classList.remove('hidden');
};

const getESCListener = (closeFunction) => (evt) => {
  if (!checkEscapeKey(evt)) {
    return;
  }
  evt.preventDefault();
  closeFunction();
};

export const showSendDataAlert = () => {
  const alertElement = findTemplate('#error', '.error').cloneNode(true);
  imgUploadOverlay.classList.add('hidden');
  const ESCListener = getESCListener(closeDataAlertMessage);

  function closeDataAlertMessage() {
    document.body.removeChild(alertElement);
    imgUploadOverlay.classList.remove('hidden');
    document.removeEventListener('keydown', ESCListener);
  }

  alertElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('error')) {
      closeDataAlertMessage(alertElement, ESCListener);
    }
  });
  document.addEventListener('keydown', ESCListener);
  document.body.appendChild(alertElement);
};

export const showSendDataSuccess = () => {
  const successElement = findTemplate('#success', '.success').cloneNode(true);
  const ESCListener = getESCListener(closeDataSuccessMessage);

  function closeDataSuccessMessage() {
    document.body.removeChild(successElement);
    document.removeEventListener('keydown', ESCListener);
  }

  successElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('success')) {
      closeDataSuccessMessage(ESCListener);
    }
  });
  document.addEventListener('keydown', ESCListener);
  document.body.appendChild(successElement);
};
