"use strict";

let subMenu;

function menuMain() {
    $(".menu-main").click(function (e) {

        if (e.target.closest(".menu-item-has-children")) {
            const hasChildren = e.target.closest(".menu-item-has-children");
            showSubMenu(hasChildren); // need discussion

        }
    })
}


function goBack() {
    $(".go-back").click(function () {
        hideSubMenu();
    })
}

function menuTrigger() {

    $(".mobile-menu-trigger").click(function () {

        toggleMenu();
    })
}


function closeMenu() {
    $(".mobile-menu-close").click(function () {
        toggleMenu();
    })
}

function menuOverlay() {
    $(".menu-overlay").click(function () {
        toggleMenu();
    })
}
function toggleMenu() {
    $(".menu").toggleClass("active");
    $(".menu-overlay").toggleClass("active");
}

function showSubMenu(hasChildren) {

    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    $(".menu .mobile-menu-head").addClass("active");
    $(".menu .current-menu-title").text(menuTitle);
    $(".menu .mobile-menu-head").addClass("active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".mobile-menu-head").classList.remove("active");
    $(".menu .current-menu-title").text("");
    $(".menu .mobile-menu-head").removeClass("active");
}

window.onresize = function () {
    if (this.innerWidth > 991) {
        if ($(".menu").hasClass("active")) {
            toggleMenu();
        }

    }
}


function searchIcon() {
    $('#search-icon').click(function () {
        $('#search-icon').toggleClass("fa-times");
        $('.search-form').toggleClass("active");
        $(".menu").removeClass("fa-times");
    })
    $('.search-icons').keypress(function (event) {
        var id = event.keyCode;
        if (id == 13) {
            $('#search-icon').trigger('click');
        }
    });
}

window.onscroll = () => {
    $(".menu").removeClass("fa-times");

}


// for main menu 
$(document).ready(function () {
    var timeVal = $("#ToastTime").val();
    setTimeout(function () {
        if ($('.toast-notification').length > 0) {
            $('.toast-notification').remove();
        }
    }, parseInt(timeVal) * 100);

    if ($('.toast-notification').length > 0) {
        $(".toast-notification .close-toast").click(function (e) {
            e.preventDefault();
            $(".toast-notification").remove();
        });
    }


    $(".menu-item-has-children").click(function () {

        if ($(this).children(".sub-menu").hasClass("sub-menu-show")) {
            $(this).children(".sub-menu").removeClass("sub-menu-show");
            $(this).find(".fa-angle-down").removeClass("rotate-arrow");


        }
        else {
            $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show");
            $(this).children(".sub-menu").addClass("sub-menu-show");
            $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
            $(this).find(".fa-angle-down").addClass("rotate-arrow");


        }
    });
    $("#search-icon").click(function () {
        $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show");
        $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
    })

    $(".mobile-nav-toggle").click(function () {
        $(this).toggleClass("btn-close close-bars");
        $("body").toggleClass("overflow-hidden");
    });
    if ($(".modal-topic-list li").length > 0) {

        showfiltermodal()
    }
    if ($(".clear-filter-btn").length > 0) {
        clearmodalcontent()
    }
    $(".filters-content").click(function () {
        $("body").addClass("overflow-x-hidden")
    });
    if ($('#carousel-count').length > 0) {
        carouselCount()
    }
    if ($(".menu-main").length > 0) {

        menuMain()
    }
    if ($(".go-back").length > 0) {

        goBack()
    }
    if ($(".mobile-menu-trigger").length > 0) {

        menuTrigger()
    }
    if ($(".mobile-menu-close").length > 0) {
        closeMenu()
    }
    if ($(".menu-overlay").length > 0) {
        menuOverlay()
    }
    if ($('#search-icon').length > 0) {
        searchIcon()
    }
    if ($('#searchInput').length > 0) {
        lookupTable()
    }
    if ($('#video-player').length > 0) {
        videoPlayer()
    }
    // if ($('#searchInput').length > 0) {
    //   lookupfun()
    //  }
    if ($('.counter').length > 0) {
        counterNumber()
    }
});
// caroseul count full size img code starts here
$("#carousel-count .carousel-inner .carousel-item img").click(function () {
    var myModal = new bootstrap.Modal(document.getElementById('carousel-count-fullsize-img'))
    myModal.show();
    $("#carousel-count-fullsize-img img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
});
$("#carousel-count-fullsize-img .btn-close").click(function () {
    var myModal = new bootstrap.Modal(document.getElementById('carousel-count-fullsize-img'))
    myModal.hide();
});

$("#carousel-count .carousel-inner .carousel-item").on("keydown", function (event) {

    var id = event.keyCode;
    if (id == 13) {
        $("#carousel-count .carousel-inner .carousel-item img").trigger('click');
        $("#carousel-count-fullsize-img img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
    }
});
//showfilter code
function showfiltermodal() {
    $(".modal-topic-list li").click(function () {
        $(this).find("i").toggleClass("close-li-icon");
        $(this).attr("selected", "true");
        $(this).toggleAttribute("selected");
    })
}
function clearmodalcontent() {
    $(".clear-filter-btn").click(function () {
        $(".modal-topic-list li i").addClass("close-li-icon");
        $(".modal-topic-list li").removeAttr("selected");
    });
}

$(".modal-topic-list li").click(function () {
    if ($(this).attr("selected")) {
        $(this).removeAttr("selected");
    } else {
        $(this).attr("selected", "true");
    }
});

function carouselCount() {
    var totalItems = $('#carousel-count .carousel-item').length;

    var currentIndex = $('#carousel-count div.active').index() + 1;
    $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
    var myCarousel = document.getElementById('carousel-count');
    myCarousel.addEventListener('slid.bs.carousel', function () {
        currentIndex = $('#carousel-count div.active').index() + 1;
        $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
    })
}

//********************Lookup Table**********************

function lookupTable() {
    $(document).ready(function () {
        $('#searchInput').keyup(function () {
            var searchText = $(this).val().toLowerCase();
            var pattern = /^[A-Za-z0-9]*$/;
            var table = $('#allsearch-table');
            var rows = table.find('tr').slice(1);
            if (!pattern.test(searchText)) {
                $(this).val("");
                return;
            }
            var count = 0;
            rows.each(function () {
                var row = $(this);
                var found = false;

                row.find('td, th').each(function () {
                    var cellText = $(this).text().toLowerCase();
                    if (cellText.includes(searchText)) {
                        found = true;
                        return false;
                    }
                });

                if (found) {
                    row.show();
                    count++;
                } else {
                    row.hide();
                }
            });

            if (searchText.length == 0) {
                table.show();
                $('#searchResults').hide();
                $('#searchResultsFound').hide();
                $('#LookUpTableTitle').show();
            }
            else if (count === 0) {
                table.hide();
                $('#searchResults').show();
                $('#searchResultsFound').hide();
                $('#LookUpTableTitle').hide();
            } else {
                table.show();
                $('#searchResults').hide();
                $('#searchResultsFound').show();
                $('#LookUpTableTitle').show();
                $('#searchResultsFound').text(count + " " + $("#hiddenFoundTextValue").val());
            }
        });
    });
}

//********************Back to top**********************

$(document).ready(function () {
    var scrollTrigger = 4 * $(window).height(); // Calculate the scroll trigger based on four screen lengths

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollTrigger) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

//********************Video Player**********************
function videoPlayer() {
    $("#video-player .nav .nav-link").click(function () {
        if ($(".blue-bg div[id^='video']:not('.active')").length > 0) {
            $(".blue-bg div[id^='video']:not('.active')").each(function () {
                if ($(this).find("iframe").length > 0) {
                    var x = $(this).find("iframe").attr("src");
                    if (x.indexOf("youtube") != -1) {
                        var y = "&autoplay=0&mute=0";
                        $(this).find("iframe").attr("src", x + y);
                    }

                    if (x.indexOf("vimeo") != -1) {
                        var iframe = $(this).find("#vimeo-player")[0];
                        var player = $f(iframe);
                        player.api("pause");
                    }
                }
                if ($(this).find("video").length > 0) {
                    $(this).find("video")[0].pause();
                }
            });
        }
    });
}

$(function () {
    $(window).on('load', function () {
        $('[data-src]').each(function () {
            var $this = $(this),
                src = $(this).data('src');
            $this.attr('src', src);
        });
    });
});

//********************Counter Number**********************
function counterNumber() {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-target');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    $this.text(commaSeparateNumber(Math.floor(this.countNum)));
                },
                complete: function () {
                    $this.text(commaSeparateNumber(this.countNum));
                }
            }
        );
    });
}
function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}

$(document).ready(function () {
    $('.breadcrumb li').each(function () {
        var content = $(this).text();
        var maxLength = 10;
        if (content.length > maxLength) {
            $(this).addClass('ellipsis');
        }
    });
});

//TOAST BLOCK COOKIES
$(document).ready(function () {
    if (document.cookie.indexOf("ToastPopupBlocked") < 0) {
        $("#exampleModal").show();
        $(".modal-backbg").show();
        $("#exampleModal").addClass("show");
    }
    else {
        $("#exampleModal").hide();
        $(".modal-backbg").hide();
    }
});

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}

$("#AllowToastPopup").click(function () {
    document.cookie = "ToastPopupBlocked=false; expires=Wed, 05 Aug 2028 23:00:00 UTC";
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

$("#BlockToastPopup").click(function () {
    document.cookie = "ToastPopupBlocked=true; expires=Wed, 05 Aug 2028 23:00:00 UTC";
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

$("#CloseToast").click(function () {
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});


//********************aAutocomplete****************************

    function autocomplete(inp, arr) {
      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      var currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener("input", function(e) {
          var a, b, i, val = this.value;
          /*close any already open lists of autocompleted values*/
          closeAllLists();
          if (!val) { return false;}
          currentFocus = -1;
          /*create a DIV element that will contain the items (values):*/
          a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          /*append the DIV element as a child of the autocomplete container:*/
          this.parentNode.appendChild(a);
          /*for each item in the array...*/
          for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              /*create a DIV element for each matching element:*/
              b = document.createElement("DIV");
              /*make the matching letters bold:*/
              b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
              b.innerHTML += arr[i].substr(val.length);
              /*insert a input field that will hold the current array item's value:*/
              b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
                  closeAllLists();
              });
              a.appendChild(b);
            }
          }
      });
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener("keydown", function(e) {
          var x = document.getElementById(this.id + "autocomplete-list");
          if (x) x = x.getElementsByTagName("div");
          if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
              /*and simulate a click on the "active" item:*/
              if (x) x[currentFocus].click();
            }
          }
      });
      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
    }
    
    /*An array containing all the country names in the world:*/
    var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    
    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById("myInput"), countries);
    