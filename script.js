// *code formatted using Prettier VS Code Extension

// an immutable constant array containing objects with information for gallery images
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

// a mutable array containing objects with information for blogs
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

// a function to display the first image of the galleryCollection array on the bigger gallery display section
function displayGalleryImageOnLoad() {
  let bigImage = document.querySelector("#galleryDisplay");
  bigImage.src = galleryCollection[0].source;
  bigImage.alt = galleryCollection[0].altTag;
}

// execute the displayGalleryImageOnLoad function as soon as the webpage loads
window.onload = displayGalleryImageOnLoad;

// a function to switch between available images in the galleryCollection array and display them on the bigger gallery display section
function changeDisplayGalleryImage(arrowDirection) {
  let bigImage = document.querySelector("#galleryDisplay");

  // execute the following code if the user clicks "left" arrow button
  if (arrowDirection === "left") {
    let currentImageIndex;

    // find and get the index of the current image displayed on the bigger gallery display section
    for (let i = 0; i < galleryCollection.length; i++) {
      if (bigImage.getAttribute("src") === galleryCollection[i].source) {
        currentImageIndex = i;
      }
    }

    // get the previous image in the array and set the required img tag attribute values
    if (currentImageIndex > 0) {
      let newImageIndex = currentImageIndex - 1;
      bigImage.src = galleryCollection[newImageIndex].source;
      bigImage.alt = galleryCollection[newImageIndex].altTag;
    }
  }
  // execute the following code if the user clicks "right" arrow button
  else {
    let currentImageIndex;

    // find and get the index of the current image displayed on the bigger gallery display section
    for (let i = 0; i < galleryCollection.length; i++) {
      if (bigImage.getAttribute("src") === galleryCollection[i].source) {
        currentImageIndex = i;
      }
    }

    // get the next image in the array and set the required img tag attribute values
    if (currentImageIndex < galleryCollection.length - 1) {
      let newImageIndex = currentImageIndex + 1;
      bigImage.src = galleryCollection[newImageIndex].source;
      bigImage.alt = galleryCollection[newImageIndex].altTag;
    }
  }
}

// a function to take and store user input for creating a blog and displaying it on the screen inside the blogs section
function postBlogOnWebsite() {
  let titleFromInput = document.querySelector("#blogTitleInput");
  let descriptionFromInput = document.querySelector("#blogDescriptionInput");
  let imageFromInput = document.querySelector("#blogImageInput");
  let dateFromSystem = new Date();

  // create a new blog object and set the attribute values to user entered values
  let newBlog = {
    title: titleFromInput.value,
    description: descriptionFromInput.value,
    imageSource: imageFromInput.value,
    datePosted:
      dateFromSystem.getMonth() +
      1 +
      "/" +
      dateFromSystem.getDate() +
      "/" +
      dateFromSystem.getFullYear(),
  };

  // create div element for the new blog and add appropriate class name
  let newBlogItem = document.createElement("div");
  newBlogItem.className = "blogItem";

  // create h4 element and set appropriate class name and text content
  let newBlogTitle = document.createElement("h4");
  newBlogTitle.className = "blogTitle";
  newBlogTitle.textContent = newBlog.title;

  // create p element and set appropriate class name and text content
  let newBlogDescription = document.createElement("p");
  newBlogDescription.className = "blogDescription";
  newBlogDescription.textContent = newBlog.description;

  // create img element and set appropriate class name, src and alt
  let newBlogImage = document.createElement("img");
  newBlogImage.className = "blogImage";
  newBlogImage.src = newBlog.imageSource;
  newBlogImage.alt = "Blog Image";

  // create span element and set appropriate class name
  let newBlogDate = document.createElement("span");
  newBlogDate.className = "blogDate";

  // create i element and set appropriate text content
  let newBlogDateItalic = document.createElement("i");
  newBlogDateItalic.textContent = "Date Posted: " + newBlog.datePosted;

  // append i element to span element
  newBlogDate.appendChild(newBlogDateItalic);

  newBlogItem.appendChild(newBlogTitle); // append h4 element to div element
  newBlogItem.appendChild(newBlogDescription); // append p element to div element
  newBlogItem.appendChild(newBlogImage); // append img element to div element
  newBlogItem.appendChild(newBlogDate); // append span element to div element

  // add the new blog object at the first of blogs array
  blogs.unshift(newBlog);

  let blogsListSection = document.querySelector("#blogsList");
  blogsListSection.prepend(newBlogItem); // append the div element to the blogsList section as the first child

  // clear user inputs after adding the new blog item
  titleFromInput.value = "";
  descriptionFromInput.value = "";
  imageFromInput.value = null;
}

// a function to toggle the hamburger menu on and off on mobile view
function toggleHamburgerMenuIcon() {
  let myNavbar = document.querySelector("#navbar");
  if (myNavbar.classList.length === 0) {
    myNavbar.className = "responsive";
  } else {
    myNavbar.classList.remove("responsive");
  }
}
