document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
  document.addEventListener("mousedown", () => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
  });
  
  document.addEventListener("mouseup", () => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.transform = "translate(-50%, -50%)";
  });
  