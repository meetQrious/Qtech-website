(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $("body").addClass("page-loaded");
      $(".preloader").delay(1000).fadeOut(0);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");
      var sticky_header = $(".main-header .sticky-header");
      if (windowpos > 180) {
        siteHeader.addClass("fixed-header");
        sticky_header.addClass("animated slideInDown");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        sticky_header.removeClass("animated slideInDown");
        scrollLink.fadeOut(300);
      }
    }
  }

  $(document).ready(function () {
    // Get the file name from the URL
    var fileName = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );

    // Set 'current' class to the link corresponding to the current file
    $('ul.navigation a[href="' + fileName + '"]')
      .parent()
      .addClass("current");

    // Update 'current' class on link click
    $("ul.navigation a").click(function (e) {
      // Remove 'current' class from all links
      $("ul.navigation li").removeClass("current");

      // Add 'current' class to the parent <li> of the clicked link
      $(this).closest("li").addClass("current");
    });

    function resetClasses() {
      $(".main-header .main-technology").removeClass("active-technology");
      $(".main-header  #data-visulization").addClass("active-technology");
      $(".main-header  .tech-practices-item-list").addClass(
        "inactive-technology-list"
      );
      $(".main-header  #data-visulization-content")
        .removeClass("inactive-technology-list")
        .addClass("active-technology-list");
    }
    $(".main-header .navigation .dropdown").mouseenter(() => {
      resetClasses();
    });
    resetClasses();
    $(".main-header  .main-technology").mouseenter(function (e) {
      //remove 'active-technology' class from all main technologies
      $(".main-header  .main-technology").removeClass("active-technology");
      //add active class on currently clicked technology
      $(this).addClass("active-technology");
      //hide all content-list
      $(".main-header  .tech-practices-item-list").addClass(
        "inactive-technology-list"
      );

      //active clicked list
      var clickedId = $(this).attr("id");

      $(`.main-header  #${clickedId}-content`)
        .removeClass("inactive-technology-list")
        .addClass("active-technology-list");
    });
  });

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    $(".mobile-menu .menu-box").mCustomScrollbar();

    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $(".mobile-menu")
        .removeClass("mobile-menu-hidden")
        .addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $(".mobile-menu")
          .removeClass("mobile-menu-visible")
          .addClass("mobile-menu-hidden");
      }
    );
  }

  //Search Popup
  if ($("#search-popup").length) {
    //Show Popup
    $(".search-toggler").on("click", function () {
      $("#search-popup").addClass("popup-visible");
      $("body").addClass("search-visible");
    });
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $("#search-popup").removeClass("popup-visible");
        $("body").removeClass("search-visible");
      }
    });
    //Hide Popup
    $(".close-search,.search-popup .overlay-layer").on("click", function () {
      $("#search-popup").removeClass("popup-visible");
      $("body").removeClass("search-visible");
    });
  }

  /////////////////////////////
  //Universal Code for All Owl Carousel Sliders
  /////////////////////////////

  if ($(".theme-carousel").length) {
    $(".theme-carousel").each(function (index) {
      var $owlAttr = {
        navText: [
          '<span class="icon fa fa-arrow-left"></span>',
          '<span class="icon fa fa-arrow-right"></span>',
        ],
      },
        $extraAttr = $(this).data("options");
      $.extend($owlAttr, $extraAttr);
      $(this).owlCarousel($owlAttr);
    });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).next(".acc-content").is(":visible")) {
        //return false;
        $(this).removeClass("active");
        $(this).next(".acc-content").slideUp(300);
        $(outerBox).children(".accordion").removeClass("active-block");
      } else {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  //Custom Seclect Box
  if ($(".custom-select-box").length) {
    $(".custom-select-box")
      .selectmenu()
      .selectmenu("menuWidget")
      .addClass("overflow");
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
   When document is Resized, do
   ========================================================================== */

  $(window).on("resize", function () { });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
  });
})(window.jQuery);

$(document).ready(function () {
  // Select the first element with the class custom-select-box
  var $selectBox = $(".custom-select-box2").first();

  if ($selectBox.length) {
    $selectBox.selectmenu().selectmenu("menuWidget").addClass("overflow");
  }
});

const fileInput = document.getElementById("attachment");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const fileSizeDisplay = document.getElementById("fileSizeDisplay");

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
    fileSizeDisplay.textContent = `File Size: ${getFileSize(
      fileInput.files[0].size
    )}`;
    document.querySelector(".choose-file-label").style.display = "none";
    document.getElementById("fileUploadText").style.display = "none";
    document.getElementById("fileUploadSize").style.display = "none";
    document.getElementById("dropFileIcon").style.display = "block";
    document.getElementById("dropFileIcon").style.cursor = "pointer";
  } else {
    fileNameDisplay.textContent = "";
    document.querySelector(".choose-file-label").style.display = "block";
  }
});

function getFileSize(bytes) {
  var fSExt = new Array("Bytes", "KB", "MB", "GB"),
    i = 0;
  while (bytes > 900) {
    bytes /= 1024;
    i++;
  }
  var exactSize = Math.round(bytes * 100) / 100 + " " + fSExt[i];
  return exactSize ?? "";
}

function handleSubmitSuccess() {
  const successDiv = document.getElementById("form-success");
  successDiv.classList.remove("display-none");
  setTimeout(() => {
    successDiv.classList.add("display-none");
  }, 4000);
}

function handleSubmitFail() {
  const successDiv = document.getElementById("form-unsuccess");
  successDiv.classList.remove("display-none");
  setTimeout(() => {
    successDiv.classList.add("display-none");
  }, 4000);
}

function handleSubmitCheckField(missingFields) {
  const successDiv = document.getElementById("form-required-fields");
  successDiv.innerText = `Please fill: ${missingFields.join(", ")}`;
  successDiv.classList.remove("display-none");
  setTimeout(() => {
    successDiv.classList.add("display-none");
  }, 4000);
}

document.getElementById("postForm").addEventListener("submit", contactUsForm);


function contactUsForm(event) {
  event.preventDefault(); // prevent form from reloading

  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const body = document.getElementById("body").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();
  const fileInput = document.getElementById("attachment");
  const selectedFiles = fileInput.files;

  const missingFields = [];
  if (!firstName) missingFields.push("First Name");
  if (!lastName) missingFields.push("Last Name");
  if (!email) missingFields.push("Email");
  if (!body) missingFields.push("Body");
  if (!mobile) missingFields.push("Mobile number");

  if (missingFields.length > 0) {
    handleSubmitCheckField(missingFields);
    return;
  }

  const formData = new FormData();
  formData.append("name", `${firstName} ${lastName}`);
  formData.append("email", email);
  formData.append("type", body);
  formData.append("mobile", mobile);
  formData.append("additional_msg", message);

  const applyRecipient = sessionStorage.getItem("apply_recipient");
  
  if (applyRecipient) {
    formData.append("recipient", applyRecipient);
    sessionStorage.removeItem("apply_recipient");
    sessionStorage.removeItem("apply_position");
  }

  if (selectedFiles.length > 0) {
    formData.append("attachment", selectedFiles[0]);
  }

  fetch("https://qrioustech.com/qtech-website/api/v1/contact-us", {
    method: "POST",
    body: formData,
  })
    .then(async (response) => {
  const data = await response.json();

  if (response.ok && data.status === "success") {
    clearFile();
    document.getElementById("postForm").reset();
    handleSubmitSuccess();
  } else {
    const errorDiv = document.getElementById("form-unsuccess");
    errorDiv.innerText = data.message || "Something went wrong";
    errorDiv.classList.remove("display-none");

    setTimeout(() => {
      errorDiv.classList.add("display-none");
    }, 4000);
  }
})
    .catch((error) => {
      console.error("Error:", error);
    });
}



function clearFile() {
  fileInput.value = ""; // Clear the file input
  fileNameDisplay.textContent = ""; // Clear the displayed file name
  document.querySelector(".choose-file-label").style.display = "inline-block"; // Show the choose file label
  document.getElementById("fileUploadText").style.display = "block"; // Show the upload text
  document.getElementById("fileUploadSize").style.display = "block"; // Show the upload text
  document.getElementById("dropFileIcon").style.display = "none";
  fileNameDisplay.textContent = "";
  fileSizeDisplay.textContent = "";
}

// Add this function to handle file removal
document.getElementById("dropFileIcon").addEventListener("click", () => {
  fileInput.value = ""; // Clear the file input
  fileNameDisplay.textContent = ""; // Clear the displayed file name
  document.querySelector(".choose-file-label").style.display = "inline-block"; // Show the choose file label
  document.getElementById("fileUploadText").style.display = "block"; // Show the upload text
  document.getElementById("fileUploadSize").style.display = "block"; // Show the upload text
  document.getElementById("dropFileIcon").style.display = "none";
  fileNameDisplay.textContent = "";
  fileSizeDisplay.textContent = "";
});


function loadTechInCenter() {
  const renderCardId = window.location.href.split("=")?.[1];

  if (renderCardId) {
    const renderCard = document.getElementById(renderCardId);
    setTimeout(() => {
      renderCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 1000);
  }
}