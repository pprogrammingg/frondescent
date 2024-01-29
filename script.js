document.addEventListener("DOMContentLoaded", function () {
    const changingWord = document.getElementById("changingWord");
    const words = [
      "Web3",
      "NFT",
      "DeFi",
      "CryptoCurrencies",
      "On-Chain Games",
      "Smart Contracts",
      "Tokenization",
      "Decentralization",
      "Digital Assets"
    ];
    let currentIndex = 0;
  
    function updateWord() {
      changingWord.textContent = words[currentIndex];
      changingWord.style.color = getRandomColor();
      currentIndex = (currentIndex + 1) % words.length;
    }
  
    setInterval(updateWord, 450);
  
    function getRandomColor() {
      const colorRanges = [
        "#CCFF00",
        "#CCFF33",
        "#c88125",
        "#66d843"
      ];
      return colorRanges[Math.floor(Math.random() * colorRanges.length)];
    }

    const boxes = document.querySelectorAll(".box");


    function updateOpacity() {
      boxes.forEach((box, index) => {
        const rect = box.getBoundingClientRect();
        let opacity;
        const scrollDirection = window.scrollY > 0 ? 'down' : 'up';
        opacity = Math.max(0, Math.min(1, ((window.innerHeight - Math.abs(rect.top)) / window.innerHeight)));
        //console.log(`direction ${scrollDirection} index ${index} opacity ${opacity} windows_inner_height ${window.innerHeight} rect.top ${rect.top} rect.bottom ${rect.bottom}`
        const transitionDuration = scrollDirection === 'up' ? '0.3s' : '0.6s';
        box.style.transition = `opacity ${transitionDuration} ease`;
        box.style.opacity = opacity.toFixed(2);
      });
    }
  
    document.addEventListener("scroll", updateOpacity);
  });
  