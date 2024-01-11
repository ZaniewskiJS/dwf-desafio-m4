(function showFooterComponent() {
  
  const footerContainerEl = document.createElement("div");
  
  footerContainerEl.className = "footer-container";

  footerContainerEl.innerHTML = `
  
  <p class="footer-logo">Zaniewski</p>
  
  <div class="footer-section">
    
  <div class="footer-section">
      
    <a href="./index.html">
      <img src="./images/home.svg" />
      </a>
  
  </div>
    
  <div class="footer-section">
    
  <a href="./servicios.html"><img src="./images/services.svg" /></a>
  
  </div>
    
  <div class="footer-section">
   
  <a href="./contacto.html">
  
  <img src="./images/contact.svg" />
  
  </a>
     
  </div>
  
  </div>
  
  <div class="footer-social">
  <a href="https://www.linkedin.com/in/gonzalo-javier-zaniewski-4913b2180/"><img src="./images/linkedin.svg" /></a>
    <a href="https://github.com/ZaniewskiJS"><img src="./images/github.svg" /></a>
    <a href="https://twitter.com/?lang=es"><img src="./images/twitter.svg" /></a>
  </div>
  <p class="footer-copyright">©2024 - Gonzalo Zaniewski</p>`;

  const footerEl = document.querySelector(".footer");
  footerEl.appendChild(footerContainerEl);
})();
