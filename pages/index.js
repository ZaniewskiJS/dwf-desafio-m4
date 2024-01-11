function getDateWelcome(){
    const url = "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.items[10])
    // Manejar los datos obtenidos de Contentful

    const WelcomeHello = data.items[10].fields.tilte;
    const WelcomeName = data.items[10].fields.subTitle;
    const rocketId = data.items[10].fields.rocket.sys.id;
    const shadowId = data.items[10].fields.shadow.sys.id;
    const welcomeTitleWhite = document.querySelector('.welcome-title-white');
    const welcomeTitleLightBlue = document.querySelector('.welcome-title-blue');
    const welcomeImgRocket = document.querySelector('.welcome-rocket');
    const welcomeImgShadow = document.querySelector('.welcome-shadow');
    
    welcomeTitleWhite.textContent = WelcomeHello;
    welcomeTitleLightBlue.textContent = WelcomeName;

    // Obtener la URL de la imagen para el cohete
    const rocketUrl = `https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${rocketId}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`;
    fetch(rocketUrl)
      .then(response => response.json())
      .then(assetData => {
        const imageUrl = assetData.fields.file.url;
        welcomeImgRocket.src = imageUrl;
      })
      .catch(error => {
        console.error('Error al obtener la imagen del cohete de Contentful:', error);
      });

    // Obtener la URL de la imagen para la sombra
    const shadowUrl = `https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${shadowId}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`;
    fetch(shadowUrl)
      .then(response => response.json())
      .then(assetData => {
        const imageUrl = assetData.fields.file.url;
        welcomeImgShadow.src = imageUrl;
      })
      .catch(error => {
        console.error('Error al obtener la imagen de la sombra de Contentful:', error);
      });
  })
  .catch(error => {
    console.error('Error al obtener datos de Contentful:', error);
  });

}
function getDateProfile(){
  const url = "https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/entries?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28";

  fetch(url)
    .then(response => response.json())
    .then(data => {

    
      const profileTitle = data.items[7].fields.title;
      const profileText = data.items[7].fields.text;

      const profileH2 = document.querySelector('.profile-title');
      const profileP = document.querySelector('.profile-text');

      profileH2.textContent = profileTitle;
      profileP.textContent = profileText;

      const profileId = data.items[7].fields.imgProfile.sys.id;
      const profileUrl = `https://cdn.contentful.com/spaces/x30xxn98mul8/environments/master/assets/${profileId}?access_token=z0Xy22fZ6u1OhVmLC6GH5vOSnFC812-1cZnr4dI0A28`;
      fetch(profileUrl)
        .then(response => response.json())
        .then(assetData => {
          const imageUrl = assetData.fields.file.url;
          const imgProfile = document.querySelector('.profile-large');
          const imgProfile2 = document.querySelector('.profile-little');
          imgProfile.src = imageUrl;
          imgProfile2.src = imageUrl;
        })
        .catch(error => {
          console.error('Error al obtener la imagen del perfil de Contentful:', error);
        });

    })
    .catch(error => {
      console.error('Error al obtener datos de Contentful:', error);
    });

}
function main(){
getDateWelcome()
getDateProfile()
}
main()
