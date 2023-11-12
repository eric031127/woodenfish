const woodenFish = document.getElementById('woodenFish');
const scoreCount = document.getElementById('scoreCount');

let score = 0;

woodenFish.addEventListener('click', () => {
  woodenFish.classList.add('active');
  scoreCount.textContent = score;
  woodenFish.addEventListener('animationend', () => {
    woodenFish.classList.remove('active');
  }, { once: true });

  
});

woodenFish.addEventListener('click', (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;

    const fishRect = woodenFish.getBoundingClientRect();
    const fishCenterX = fishRect.left + fishRect.width / 2;
    const fishTop = fishRect.top;
    score++;
    scoreCount.textContent = score;
  

    floatingText.style.left = fishCenterX + 'px';
    floatingText.style.top = (fishTop - 30) + 'px'; 
    floatingText.textContent = '級分+1';
    floatingText.style.opacity = 1;
    floatingText.style.transform = 'translateX(-50%)'; 

    setTimeout(() => {
      floatingText.style.opacity = 0;
    }, 500);
  });
