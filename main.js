'use strict';

{
  const thumbnails = document.getElementById('thumbnails');
  const main = document.getElementById('main');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const play = document.getElementById('play');
  const stop = document.getElementById('stop');

  const images = [
    'https://github.com/Yoshi-Hiraoka/LaosSlideshow/blob/master/img0.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/LaosSlideshow/blob/master/img1.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/LaosSlideshow/blob/master/img2.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/LaosSlideshow/blob/master/img3.jpg?raw=true',
    'https://github.com/Yoshi-Hiraoka/LaosSlideshow/blob/master/img4.jpg?raw=true',
  ];

  let currentNum = 0;
  let timeoutId;
  let nowPlaying = false;

  const mainImage = document.createElement('img');
  mainImage.src = images[0];
  main.appendChild(mainImage);

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    thumbnails.appendChild(img);
    img.addEventListener('click', () => {
      mainImage.src = img.src;
      currentNum = index;
    });
  });


  prev.addEventListener('click', () => {
    currentNum--;
    if (currentNum < 0) {
      currentNum = images.length - 1;
    }
    mainImage.src = images[currentNum];
    main.appendChild(mainImage);
  });

  next.addEventListener('click', () => {
    currentNum++;
    if (currentNum > images.length - 1) {
      currentNum = 0;
    }
    mainImage.src = images[currentNum];
    main.appendChild(mainImage);
  });

  function autoPlay() {
    next.click();
    timeoutId = setTimeout(() => {
      autoPlay();
    },2000);
  }

  play.addEventListener('click', () => {
    if (nowPlaying) {
      return;
    } else {
      nowPlaying = true;
      autoPlay();
    }
  });

  stop.addEventListener('click', () => {
    nowPlaying = false;
    clearTimeout(timeoutId);
  });

}
