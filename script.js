// Add your custom JavaScript code here

// Example: Play and Pause Video
const video = document.querySelector('video');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    btn.textContent = 'Pause';
  } else {
    video.pause();
    btn.textContent = 'Play';
  }
});

