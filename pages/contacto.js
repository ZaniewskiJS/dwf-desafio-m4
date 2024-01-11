function initContactComponent() {
  const contactEl = document.createElement("div");
  contactEl.className = "contact-container";

  contactEl.innerHTML = `
    <h2 class="contact-title">Escribime</h2>
    <form class="contact-form">
      <div class="contact-fields">
        <div class="contact-field">
          <label for="name" class="contact-label">Nombre</label>
          <input name="name" id="name" type="text" class="contact-input" placeholder="Tu nombre" />
        </div>
        <div class="contact-field">
          <label for="email" class="contact-label">Email</label>
          <input name="email" id="email" type="email" class="contact-input" placeholder="tuEmail@mail.com" />
        </div>
      </div>
      <div class="contact-field">
        <label for="msg" class="contact-label">Mensaje</label>
        <textarea name="msg" id="msg" class="contact-textarea"></textarea>
      </div>
      <button class="contact-button">
        Enviar
        <img src="./images/send.png" alt="Enviar" />
      </button>
    </form>
  `;

  const sectorContainer = document.querySelector(".contact-section");
  sectorContainer.appendChild(contactEl);

  const formEl = document.querySelector(".contact-form");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    const body = {
      to: "gonzalozanieski@outlook.com",
      message: `Nombre: ${value.name}
      Email: ${value.email}
      Mensaje: ${value.msg}`,
    };

    sendData(body);
    formEl.reset();
  });
}

function sendData(data) {
  fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
}

initContactComponent();