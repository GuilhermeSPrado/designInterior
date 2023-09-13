const videoContainer=document.querySelector('#right-column')
const iframe=document.querySelector('video')


iframe.addEventListener('mouseenter',function(){iframe.play()})
iframe.addEventListener('mouseout',function(){iframe.pause()})

    const imageContainer = document.querySelector('.image-container');
    const images = imageContainer.querySelectorAll('img');
    const arrows = imageContainer.querySelectorAll('.arrow');
    let currentImageIndex = 0;

    // Esconda todas as imagens, exceto a primeira
    for (let i = 1; i < images.length; i++) {
      images[i].style.opacity = 0;
    }

    // Adicione event listeners para as setas
    arrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
        // Esconda a imagem atual
        images[currentImageIndex].style.opacity = 0;

        // Atualize o índice da imagem atual
        if (arrow.classList.contains('arrow-left')) {
          currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        } else {
          currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        // Exiba a nova imagem
        images[currentImageIndex].style.opacity = 1;
      });
    });