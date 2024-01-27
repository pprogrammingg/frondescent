document.addEventListener("DOMContentLoaded", function () {
    const changingWord = document.getElementById("changingWord");
    const words = [
      "Web3",
      "NFT MarketPlace",
      "DeFi",
      "CryptoCurrencies",
      "Crypto in Games",
      "Smart Contracts",
      "Tokenization",
      "Decentralization"
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
      ];
      return colorRanges[Math.floor(Math.random() * colorRanges.length)];
    }

    const boxes = document.querySelectorAll(".box");

    function updateOpacity() {
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const opacity = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        box.style.opacity = opacity.toFixed(2);
      });
    }
  
    document.addEventListener("scroll", updateOpacity);
  });
  