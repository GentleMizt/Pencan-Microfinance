    console.log('Hello');

    let bannerImages = [
        './dist/img/banner1.png',
        './dist/img/scnd-main-img.png'
      ];
      
      let currentImageIndex = 0;
      let bannerImage = document.querySelector('.banner img');
      
      function changeBannerImage() {
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        bannerImage.src = bannerImages[currentImageIndex];
      }
      
      setInterval(changeBannerImage, 2500);

    // setInterval(changeBannerImage, 3000);
    // const image = document.getElementById('image');
    // let images = ['./dist/img/banner1.png', './dist/img/scnd-main-img.png'];

    // setInterval(function(){
    //     let random = Math.floor(Math.random() * 2);
    //     image.src = images[random];
    // }, 800);