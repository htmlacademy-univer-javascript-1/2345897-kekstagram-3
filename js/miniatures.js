const pictures = document.querySelector('.pictures');
const tempFragment = document.querySelector('#picture').content.querySelector('.picture');

export const drawPictures = function (data) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    const picture = tempFragment.cloneNode(true);

    picture.querySelector('.picture__img').src = data[i].url;
    picture.querySelector('.picture__likes').textContent = data[i].likes;
    picture.querySelector('.picture__comments').textContent = data[i].comments;

    fragment.appendChild(picture);
    pictures.append(fragment);
  }
};
