const galleryCollection = [
  {
    id: "image1",
    source: "./images/imageCollection1.jpg",
    altTag: "image1",
    className: "pictures",
  },
  {
    id: "image2",
    source: "./images/imageCollection2.jpg",
    altTag: "image2",
    className: "pictures",
  },
  {
    id: "image3",
    source: "./images/imageCollection3.jpg",
    altTag: "image3",
    className: "pictures",
  },
  {
    id: "image4",
    source: "./images/imageCollection4.jpg",
    altTag: "image4",
    className: "pictures",
  },
  {
    id: "image5",
    source: "./images/imageCollection5.jpg",
    altTag: "image5",
    className: "pictures",
  },
  {
    id: "image6",
    source: "./images/imageCollection6.jpg",
    altTag: "image6",
    className: "pictures",
  },
  {
    id: "image7",
    source: "./images/imageCollection7.jpg",
    altTag: "image7",
    className: "pictures",
  },
  {
    id: "image8",
    source: "./images/imageCollection8.jpg",
    altTag: "image8",
    className: "pictures",
  },
];

function displayGalleryImageOnLoad() {
  let bigImage = document.querySelector("#galleryDisplay");
  bigImage.src = galleryCollection[0].source;
  bigImage.alt = galleryCollection[0].altTag;
}

window.onload = displayGalleryImageOnLoad;

function changeDisplayGalleryImage(arrowDirection) {
  let bigImage = document.querySelector("#galleryDisplay");
  if (arrowDirection === "left") {
    let currentImageIndex;
    for (let i = 0; i < galleryCollection.length; i++) {
      if (bigImage.getAttribute("src") === galleryCollection[i].source) {
        currentImageIndex = i;
      }
    }
    if (currentImageIndex > 0) {
      let newImageIndex = currentImageIndex - 1;
      bigImage.src = galleryCollection[newImageIndex].source;
      bigImage.alt = galleryCollection[newImageIndex].altTag;
    }
  } else {
    let currentImageIndex;
    for (let i = 0; i < galleryCollection.length; i++) {
      if (bigImage.getAttribute("src") === galleryCollection[i].source) {
        currentImageIndex = i;
      }
    }
    if (currentImageIndex < (galleryCollection.length - 1)) {
      let newImageIndex = currentImageIndex + 1;
      bigImage.src = galleryCollection[newImageIndex].source;
      bigImage.alt = galleryCollection[newImageIndex].altTag;
    }
  }
}
