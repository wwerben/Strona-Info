document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");


    const startCounting = (target) => {
      let count = 0;
      const targetNumber = 30;
      const interval = setInterval(() => {
        if (count <= targetNumber) {
          target.textContent = count;
          count++;
        } else {
          clearInterval(interval);
        }
      }, 50); 
    };


    setTimeout(() => {
      counterElement.classList.remove("opacity-0");
      counterElement.classList.add("opacity-100");
      startCounting(counterElement);
    }, 500); 
  });


  