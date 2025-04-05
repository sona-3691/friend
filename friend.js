// Event Listener for the "Power On Surprise ⚡" button
document.getElementById('revealBtn').addEventListener('click', () => {
    const surprise = document.getElementById('surpriseSection');
    const music = document.getElementById('bgMusic');
    const letter = document.getElementById('scrollLetter');
    const letterText = document.getElementById('letterText');
  
    // Reveal the surprise section
    surprise.style.display = 'block';
    surprise.scrollIntoView({ behavior: 'smooth' });
  
    // Play the song
    music.play().catch(() => {
      console.log("Autoplay blocked.");
    });
  
    // Start shooting star
    createShootingStar();
  
    // Start typewriter letter
    letter.style.display = 'block';
    letterText.textContent = '';
  
    const letterContent = `
      Dear Ragul,
  
      College life was a story written with your laughter, passion, and brilliance.
      Every wire you connected, every bug you fixed... you’ve left a mark in our lives.
  
      As you step into the next chapter, remember — you’re not just a coder, you’re a creator of joy.
  
      With your's,
      SONA💜
    `;
  
    let i = 0;
    function typeWriter() {
      if (i < letterContent.length) {
        letterText.textContent += letterContent.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      } else {
        // Show the final starry popup after the letter ends
        setTimeout(() => {
          showFinalPopup();
        }, 2000);
      }
    }
    typeWriter();
  });
  
  // Shooting Star Generator
  function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
  
    // Random position
    star.style.top = Math.random() * 20 + 10 + 'vh';
    star.style.left = Math.random() * 20 + 'vw';
  
    document.getElementById('shootingStarContainer').appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, 1000);
  }
  
  // 🌠 Wish Upon a Star Logic
  document.getElementById('wishStarBtn').addEventListener('click', () => {
    const overlay = document.getElementById('wishOverlay');
    overlay.style.display = 'block';
  
    // Trigger another shooting star
    createShootingStar();
  
    // Auto-hide overlay after a few seconds
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 4000);
  });
  
  // 🌙 Final Starry Popup with Moon & Message
  function showFinalPopup() {
    const finalPopup = document.getElementById('finalPopup');
    if (finalPopup) {
      finalPopup.style.display = 'flex';
    }
  }
  // new star adding
  function generateTwinklingStars(count = 50) {
    const sky = document.querySelector('.sky');
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      sky.appendChild(star);
    }
  }
  
  generateTwinklingStars();
  // To create a petals
  function createPetals() {
    const sky = document.querySelector('.sky');
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement('div');
      petal.classList.add('falling-petal');
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDelay = Math.random() * 5 + 's';
      sky.appendChild(petal);
    }
  }
  createPetals();
  