tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        headerFont: ["HeaderFont", "sans-serif"], // Add your custom font
        speedFont: ["SpeedFont", "sans-serif"], // Add your custom font
        confortFont: ["ConfortFont", "sans-serif"], // Add your custom font
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #EA8943 17.81%, #EA4343 99.71%)",
        "nav-gradient":
          "linear-gradient(118deg, rgba(255, 255, 255, 0.15) 16.07%, rgba(0, 0, 0, 0.00) 103.5%)",
      },
      colors: {
        navg: "linear-gradient(90deg, #EA8943 17.81%, #EA4343 99.71%)",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector('a[href="./detail.html"]')
    .addEventListener("click", function (e) {
      // Prevent the default action if you need to execute other logic first
      e.preventDefault();
      // Manually navigate to the detail page
      window.location.href = this.href;
    });

  const filterBtn = document.getElementById("filter-btn");
  const body = document.querySelector("body");
  const filter = document.querySelector(".filter-overlay");
  const filterClose = document.querySelector(".close-filter");

  filterBtn.addEventListener("click", function (e) {
    console.log("a");
    e.preventDefault(); // Prevent default anchor behavior
    body.style.overflow = "hidden";
    filter.classList.toggle("show"); // Show or hide the overlay
  });

  filterClose.addEventListener("click", function (e) {
    body.style.overflow = "auto";
    e.preventDefault(); // Prevent default anchor behavior
    filter.classList.toggle("show"); // Show or hide the overlay
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-btn");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".search-overlay");
  const closeBtn = document.querySelector(".close-btn");
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    body.style.overflow = "hidden";
    overlay.classList.toggle("show"); // Show or hide the overlay
  });

  closeBtn.addEventListener("click", function (e) {
    body.style.overflow = "auto";
    e.preventDefault(); // Prevent default anchor behavior
    overlay.classList.toggle("show"); // Show or hide the overlay
  });

  var images = document.querySelectorAll(".hover_img");
  var currentIndex = 0; // Start with the first image
  var backgroundCurrent = document.querySelector(
    ".header_bg .background-current"
  );
  var backgroundNext = document.querySelector(".header_bg .background-next");
  var autoRotate; // Declare autoRotate variable for interval

  function updateBackground(imagePath) {
    // Pre-load image to ensure smooth transition
    var img = new Image();
    img.onload = function () {
      backgroundNext.style.backgroundImage = `linear-gradient(to right, #000000, rgba(14, 14, 14, 0)), url(${imagePath})`;
      // Begin transition to next background
      backgroundNext.style.opacity = "1";

      // After transition, move next background to current and prepare for next change
      setTimeout(() => {
        backgroundCurrent.style.backgroundImage =
          backgroundNext.style.backgroundImage;
        backgroundNext.style.opacity = "0";
      }, 2000); // Ensure this matches the CSS transition time
    };
    img.src = imagePath;
  }

  function setActiveImage(index, manualHover = false) {
    // Update the active state for the images
    images.forEach((img) => {
      img.classList.remove("active");
    });
    images[index].classList.add("active");
    // Update background and title
    var bgImage = images[index].getAttribute("data-bg");
    var titleText = images[index].getAttribute("data-title");
    updateBackground(bgImage);
    document.getElementById("title-text").textContent = titleText;
  }

  // Hover functionality
  images.forEach(function (img, index) {
    img.addEventListener("mouseover", function () {
      clearInterval(autoRotate);
      setActiveImage(index, true); // true indicates this is a manual hover action
    });
    img.addEventListener("mouseout", function () {
      startAutoRotate(); // true indicates this is a manual hover action
    });
  });

  // Auto-rotate functionality
  function startAutoRotate() {
    autoRotate = setInterval(function () {
      currentIndex = (currentIndex + 1) % images.length;
      setActiveImage(currentIndex);
    }, 2500); // Adjust time as needed
  }

  // Initialize auto-rotate
  startAutoRotate();

  // Optionally, you could add logic to resume auto-rotate if mouse leaves the images area
});

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".m_hover_img");
  var currentIndex = 0; // Start with the first image
  var mobile_backgroundCurrent = document.querySelector(
    ".m_header_bg .background-current"
  );
  var mobile_backgroundNext = document.querySelector(
    ".m_header_bg .background-next"
  );
  var autoRotate; // Declare autoRotate variable for interval

  function updateBackground(imagePath) {
    // Pre-load image to ensure smooth transition
    var img = new Image();
    img.onload = function () {
      mobile_backgroundNext.style.backgroundImage = `linear-gradient(
              to right,
              #000000 0%,
              rgba(14, 14, 14, 0) 15%
            ),
            linear-gradient(to top, #000000 0%, rgba(14, 14, 14, 0) 15%),
            url(${imagePath})`;
      mobile_backgroundNext.style.opacity = "1";

      // After transition, move next background to current and prepare for next change
      setTimeout(() => {
        mobile_backgroundCurrent.style.backgroundImage =
          mobile_backgroundNext.style.backgroundImage;
        mobile_backgroundNext.style.opacity = "0";
      }, 2000); // Ensure this matches the CSS transition time
    };
    img.src = imagePath;
  }

  function setActiveImage(index, manualHover = false) {
    // Update the active state for the images
    images.forEach((img) => img.classList.remove("active"));
    images[index].classList.add("active");

    // Update background and title
    var bgImage = images[index].getAttribute("data-bg");
    var titleText = images[index].getAttribute("data-title");
    updateBackground(bgImage);
    document.getElementById("m-title-text").textContent = titleText;
  }

  // Hover functionality
  images.forEach(function (img, index) {
    img.addEventListener("mouseover", function () {
      clearInterval(autoRotate);
      setActiveImage(index, true); // true indicates this is a manual hover action
    });
    img.addEventListener("mouseout", function () {
      startAutoRotate(); // true indicates this is a manual hover action
    });
  });

  // Auto-rotate functionality
  function startAutoRotate() {
    autoRotate = setInterval(function () {
      currentIndex = (currentIndex + 1) % images.length;
      setActiveImage(currentIndex);
    }, 2500); // Adjust time as needed
  }

  // Initialize auto-rotate
  startAutoRotate();

  // Optionally, you could add logic to resume auto-rotate if mouse leaves the images area
});

document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const itemDivs = document.querySelectorAll(".n-left");
  const smallerImages = document.querySelectorAll(".netflix_img");
  let currentImageIndex = 0;

  const resetAnimations = () => {
    itemDivs.forEach((div) => {
      div.style.animation = "none";
    });
  };

  // Function to change the image and apply the loading animation
  const changeImageAndAnimate = () => {
    // Reset animation on all divs
    resetAnimations();

    // Trigger animation on the current div
    itemDivs[currentImageIndex].style.animation =
      "loadingAnimation 3s linear forwards";

    // Change the main image
    const newImgSrc = smallerImages[currentImageIndex].getAttribute("data-img");
    mainImage.src = newImgSrc;

    // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % smallerImages.length;
  };

  // Immediately trigger the first animation and image change without waiting
  changeImageAndAnimate();

  // Continue with the rest as per the interval
  setInterval(changeImageAndAnimate, 3000); // Change image and update background every 3 seconds
});
