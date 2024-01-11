(function showHeaderComponent() {

  const headerContainerEl = document.createElement("div");

  headerContainerEl.className = "header-container";

  headerContainerEl.innerHTML = `
  
    <p class="header-logo">Gonzalo Zaniewski</p>
  
    <img src="./images/burger.svg" class="header-burger" />
    
    <div class="header-window">
    
    <img src="./images/x.svg" class="header-close" />
    
    <div class="header-menu">
      <a href="./portfolio.html" class="header-page">Portfolio</a>
      <a href="./services.html" class="header-page">Servicios</a>
      <a href="./contacto.html" class="header-page">Contacto</a>
    </div>
  </div>
    <div class="header-section">
      <a href="./portfolio.html" class="header-section">Portfolio</a>
      <a href="./services.html" class="header-section">Servicios</a>
      <a href="./contacto.html" class="header-section">Contacto</a>
  </div>
  `;

    const headerEl = document.querySelector(".header");
     
    headerEl.appendChild(headerContainerEl);
})();

(function listenHeaderComponent() {
  
  const headerEl = document.querySelector(".header");
  
  const headerWindowEl = headerEl.querySelector(".header-window");

  const headerBurgerEl = headerEl.querySelector(".header-burger");
  
  headerBurgerEl.addEventListener("click", () => {
    
    headerWindowEl.style.display = "inherit";
  
  });

  const headerCloseEl = headerEl.querySelector(".header-close");
  
  headerCloseEl.addEventListener("click", () => {
    
    headerWindowEl.style.display = "";
  });
})();
