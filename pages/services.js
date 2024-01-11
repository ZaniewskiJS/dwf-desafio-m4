document.addEventListener('DOMContentLoaded', function () {
  getDateService();
});

function getDateService() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const serviceTitle = data.items[9].fields.title;
      const subTitle = data.items[9].fields.subtitle;
      const serviceHandbagContentful = data.includes.Asset[5].fields.file.url;
      const serviceShadowContentful = data.includes.Asset[0].fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const serviceWelcomeTitle = document.querySelector('.service-welcome-title-white');
      const serviceWelcomeSubTitle = document.querySelector('.service-welcome-title-blue');
      const serviceHandbag = document.querySelector('.service-welcome-handbag');
      const serviceShadow = document.querySelector('.service-welcome-shadow');

      // Verifica que los elementos existan antes de asignar propiedades
      if (serviceWelcomeTitle) serviceWelcomeTitle.textContent = serviceTitle;
      if (serviceWelcomeSubTitle) serviceWelcomeSubTitle.textContent = subTitle;
      if (serviceHandbag) serviceHandbag.src = serviceHandbagContentful;
      if (serviceShadow) serviceShadow.src = serviceShadowContentful;
    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}

function getDateServiceHome() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      const serviceTitleContentful = data.items[9].fields.title;
      const servieSubTitleConteful = data.items[9].fields.subtitle;
      const serviceBackgroundContentful = data.includes.Asset[1].fields.file.url;
      const serviceTitleLetterContenful = data.items[2].fields.title;
      const serviceTextLetterContentful = data.items[2].fields.textDescription;
      const serviceImgLettersContentful = data.includes.Asset[15].fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const serviceBackground = document.querySelector('.service-home-container');
      const serviceTitle = document.querySelector('.service-home-white');
      const serviceSubtitle = document.querySelector('.service-home-lightblue');
      const serviceTitleLetter = document.querySelector('.service-home-letter-h3');
      const serviceTextLetter = document.querySelector('.service-home-letter-p');
      const serviceImgLetter = document.querySelector('.service-home-letter-img');
  
      
      if (serviceBackgroundContentful) {
        serviceBackground.style.backgroundImage = `url(${serviceBackgroundContentful})`;
      }
      if(serviceImgLetter){
        serviceImgLetter.src=serviceImgLettersContentful;
      }
      serviceTitle.textContent = serviceTitleContentful;
      serviceSubtitle.textContent = servieSubTitleConteful;
      serviceTitleLetter.textContent = serviceTitleLetterContenful;
      serviceTextLetter.textContent = serviceTextLetterContentful;
    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}
getDateServiceHome();



function getDateServiceHome2() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    
     console.log(data.items[1].fields.img)
      const serviceTitleLetterContenful = data.items[1].fields.title;
      const serviceTextLetterContentful = data.items[1].fields.textDescription;
      const serviceImgLettersContentful = data.includes.Asset[7].fields.file.url;
    
      // Asegúrate de que este selector sea correcto
      const serviceTitleLetter2 = document.querySelector('.service-home-letter-h32'); // Asegúrate de que este selector sea correcto
      const serviceTextLetter2 = document.querySelector('.service-home-letter-p2'); // Asegúrate de que este selector sea correcto
      const serviceImgLetter2 = document.querySelector('.service-home-letter-img2'); // Asegúrate de que este selector sea correcto
  
    
      if(serviceImgLetter2){
        serviceImgLetter2.src=serviceImgLettersContentful;
      }
   
      serviceTitleLetter2.textContent = serviceTitleLetterContenful;
      serviceTextLetter2.textContent = serviceTextLetterContentful;
    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}
getDateServiceHome2()
function getDateServiceHome3() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const serviceTitleLetterContentful = data.items[2].fields.title;
      const serviceTextLetterContentful = data.items[2].fields.textDescription;
      const serviceImgLettersContentful = data.includes.Asset[11].fields.file.url;
      const serviceImgLettersContentful2 = data.includes.Asset[4].fields.file.url;
      const serviceImgLettersContentful3 = data.includes.Asset[14].fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const serviceTitleLetter3 = document.querySelector('.service-home-letter-h33'); // Añade el selector correcto aquí
      const serviceTextLetter3 = document.querySelector('.service-home-letter-p3'); // Añade el selector correcto aquí
      const serviceImgLetter1 = document.querySelector('.service-home-letter-img31'); // Añade el selector correcto aquí
      const serviceImgLetter2 = document.querySelector('.service-home-letter-img32'); // Añade el selector correcto aquí
      const serviceImgLetter3 = document.querySelector('.service-home-letter-img33'); // Añade el selector correcto aquí

      if(serviceImgLetter1){
        serviceImgLetter1.src=serviceImgLettersContentful2;
      }
      if(serviceImgLetter2){
        serviceImgLetter2.src=serviceImgLettersContentful3;
      }
      if(serviceImgLetter3){
        serviceImgLetter3.src=serviceImgLettersContentful;
      }
     
      serviceTitleLetter3.textContent = serviceTitleLetterContentful;
      serviceTextLetter3.textContent = serviceTextLetterContentful;
    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}

getDateServiceHome3(); // Llama a la función correcta
function getDateServiceHome4() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const WatchTitleContentful = data.items[8].fields.title;
      const WatchMarcoId = data.items[8].fields.marco.sys.id;
      const WatchArrowId = data.items[8].fields.img.sys.id;

      const WatchText = document.querySelector('.watch-text');
      const WatchMarco = document.querySelector(".marco");
      const WatchFlecha = document.querySelector(".arrow");

      WatchText.textContent = WatchTitleContentful;

      // Obtener la URL de la imagen de Marco
      fetch(`https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${WatchMarcoId}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`)
        .then((response) => response.json())
        .then((data) => {
          WatchMarco.src = data.fields.file.url;
        });

      // Obtener la URL de la imagen de Flecha
      fetch(`https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${WatchArrowId}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`)
        .then((response) => response.json())
        .then((data) => {
          WatchFlecha.src = data.fields.file.url;
        });
    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}

getDateServiceHome4();

