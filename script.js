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
  {
    id: "image9",
    source: "./images/imageCollection9.jpg",
    altTag: "image9",
    className: "pictures",
  },
  {
    id: "image10",
    source: "./images/imageCollection10.jpg",
    altTag: "image10",
    className: "pictures",
  },
  {
    id: "image11",
    source: "./images/imageCollection11.jpg",
    altTag: "image11",
    className: "pictures",
  },
  {
    id: "image12",
    source: "./images/imageCollection12.jpg",
    altTag: "image12",
    className: "pictures",
  },
];

let blogs = [
  {
    title: "ABCD",
    description:
      "Intermolecular forces. The first of two papers in which Einstein proposed the (incorrect) theory that the interactions between all molecules are a universal function of distance, in analogy with the inverse-square force of gravity. Once parameterized, his theory makes reasonably accurate predictions for heavier hydrophobic molecules, but fails for lighter molecules.",
    imageSource: "./images/publicationImage.jpg",
    datePosted: "03/03/2024",
  },
  {
    title: "ABCD",
    description:
      "Intermolecular forces. The first of two papers in which Einstein proposed the (incorrect) theory that the interactions between all molecules are a universal function of distance, in analogy with the inverse-square force of gravity. Once parameterized, his theory makes reasonably accurate predictions for heavier hydrophobic molecules, but fails for lighter molecules.",
    imageSource: "./images/publicationImage.jpg",
    datePosted: "03/03/2024",
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
    if (currentImageIndex < galleryCollection.length - 1) {
      let newImageIndex = currentImageIndex + 1;
      bigImage.src = galleryCollection[newImageIndex].source;
      bigImage.alt = galleryCollection[newImageIndex].altTag;
    }
  }
}

function postBlogOnWebsite() {
  let titleFromInput = document.querySelector("#blogTitleInput");
  let descriptionFromInput = document.querySelector("#blogDescriptionInput");
  let imageFromInput = document.querySelector("#blogImageInput");
  let dateFromSystem = new Date();

  let newBlog = {
    title: titleFromInput.value,
    description: descriptionFromInput.value,
    imageSource: "./images/" + imageFromInput.files[0].name,
    datePosted:
      dateFromSystem.getMonth() +
      1 +
      "/" +
      dateFromSystem.getDate() +
      "/" +
      dateFromSystem.getFullYear(),
  };

  let newBlogItem = document.createElement("div");
  newBlogItem.className = "blogItem";

  let newBlogTitle = document.createElement("h4");
  newBlogTitle.className = "blogTitle";
  newBlogTitle.textContent = newBlog.title;

  let newBlogDescription = document.createElement("p");
  newBlogDescription.className = "blogDescription";
  newBlogDescription.textContent = newBlog.description;

  let newBlogImage = document.createElement("img");
  newBlogImage.className = "blogImage";
  newBlogImage.src = newBlog.imageSource;
  newBlogImage.alt = "Blog Image";

  let newBlogDate = document.createElement("span");
  newBlogDate.className = "blogDate";
  let newBlogDateItalic = document.createElement("i");
  newBlogDateItalic.textContent = "Date Posted: " + newBlog.datePosted;
  newBlogDate.appendChild(newBlogDateItalic);

  newBlogItem.appendChild(newBlogTitle);
  newBlogItem.appendChild(newBlogDescription);
  newBlogItem.appendChild(newBlogImage);
  newBlogItem.appendChild(newBlogDate);

  blogs.unshift(newBlog);

  let blogsListSection = document.querySelector("#blogsList");
  blogsListSection.prepend(newBlogItem);

  titleFromInput.value = "";
  descriptionFromInput.value = "";
  imageFromInput.value = null;
}

function toggleHamburgerMenuIcon() {
  let myNavbar = document.querySelector("#navbar");
  if (myNavbar.classList.length === 0) {
    myNavbar.className = "responsive";
  } else {
    myNavbar.classList.remove("responsive");
  }
}
