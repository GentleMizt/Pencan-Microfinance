    window.addEventListener("load", function() {
        let loader = document.getElementById('preloader');
        console.log('load event triggered');
        loader.style.display = 'none';
    });

    let bannerImages = [
        './dist/Cimg/banner1.png',
        './dist/Cimg/scnd-main-img.png'
      ];
      
      let currentImageIndex = 0;
      let bannerImage = document.querySelector('.banner img');
      
      function changeBannerImage() {
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        bannerImage.src = bannerImages[currentImageIndex];
      }
      
      setInterval(changeBannerImage, 2500);
