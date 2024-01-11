function getDateSectionPortfolio() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
     
      const portfolioTitleContentful = data.items[3].fields.title;
      const portfolioSubTitleContentful = data.items[3].fields.subtitle;
      const portfolioHandbagContentful = data.includes.Asset[5].fields.file.url;
      const portfolioShadowContentful = data.includes.Asset[2].fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const portfolioHomeTitle = document.querySelector('.portfolio-title-white');
      const portfolioHomeSubTitle = document.querySelector('.portfolio-title-blue');
      const portfolioHandbag = document.querySelector('.portfolio-handbag');
      const portfolioShadow = document.querySelector('.portfolio-shadow');

      portfolioHomeTitle.textContent = portfolioTitleContentful;
      portfolioHomeSubTitle.textContent = portfolioSubTitleContentful;
      if (portfolioHandbag) portfolioHandbag.src = portfolioHandbagContentful;
      if (portfolioShadow) portfolioShadow.src = portfolioShadowContentful;
    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}
getDateSectionPortfolio()
function getDateContainer() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const assetId = data.items[3].fields.background.sys.id;
      return fetch(`https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${assetId}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`);
    })
    .then((response) => response.json())
    .then((data) => {
      const portfolioBackgroundContentful = data.fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const portfolioBackground = document.querySelector('.portfolio-work-container');
   

      if (portfolioBackground) {
        portfolioBackground.style.backgroundImage = `url(${portfolioBackgroundContentful})`;
      }

    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}
getDateContainer();
function getDateLetterPortfolio() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  let portfolioTitleLetterContentful;
  let portfolioTextLetterContentful;
  let portfolioImgContentful;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      portfolioTitleLetterContentful = data.items[6].fields.title;
      portfolioTextLetterContentful = data.items[6].fields.textDescription;
      portfolioImgContentful = data.items[6].fields.img.sys.id;
      return fetch(`https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${portfolioImgContentful}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`);
    })
    .then((response) => response.json())
    .then((data) => {
      const portfolioImgUrl = data.fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const portfolioTitleLetter = document.querySelector('.portfolio-work-letter-h3');
      const portfolioTextLetter = document.querySelector('.portfolio-work-letter-p');
      const portfolioImgLetter = document.querySelector('.portfolio-work-letter-img');

      portfolioTitleLetter.textContent = portfolioTitleLetterContentful;
      portfolioTextLetter.textContent = portfolioTextLetterContentful;
      portfolioImgLetter.src = portfolioImgUrl;

    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}

getDateLetterPortfolio();

getDateContainer();
function getDateLetterPortfolio2() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  let portfolioTitleLetterContentful;
  let portfolioTextLetterContentful;
  let portfolioImgContentful;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      portfolioTitleLetterContentful = data.items[5].fields.title;
      portfolioTextLetterContentful = data.items[5].fields.textDescription;
      portfolioImgContentful = data.items[4].fields.img.sys.id;;
      return fetch(`https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${portfolioImgContentful}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`);
    })
    .then((response) => response.json())
    .then((data) => {
      const portfolioImgUrl = data.fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const portfolioTitleLetter = document.querySelector('.portfolio-work-letter-h32');
      const portfolioTextLetter = document.querySelector('.portfolio-work-letter-p2');
      const portfolioImgLetter = document.querySelector('.portfolio-work-letter-img2');

      portfolioTitleLetter.textContent = portfolioTitleLetterContentful;
      portfolioTextLetter.textContent = portfolioTextLetterContentful;
      portfolioImgLetter.src = portfolioImgUrl;

    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}

getDateLetterPortfolio2();

function getDateLetterPortfolio3() {
  const url =
    "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  let portfolioTitleLetterContentful;
  let portfolioTextLetterContentful;
  let portfolioImgContentful;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      portfolioTitleLetterContentful = data.items[4].fields.title;
      portfolioTextLetterContentful = data.items[4].fields.textDescription;
      portfolioImgContentful = data.items[4].fields.img.sys.id;
      return fetch(`https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${portfolioImgContentful}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`);
    })
    .then((response) => response.json())
    .then((data) => {
      const portfolioImgUrl = data.fields.file.url;

      // Asegúrate de que los selectores sean correctos y tengan el punto (.) para clases
      const portfolioTitleLetter = document.querySelector('.portfolio-work-letter-h33');
      const portfolioTextLetter = document.querySelector('.portfolio-work-letter-p3');
      const portfolioImgLetter = document.querySelector('.portfolio-work-letter-img3');

      portfolioTitleLetter.textContent = portfolioTitleLetterContentful;
      portfolioTextLetter.textContent = portfolioTextLetterContentful;
      portfolioImgLetter.src = portfolioImgUrl;

    })
    .catch((error) => {
      console.error("Error al obtener datos de Contentful:", error);
    });
}

getDateLetterPortfolio3();