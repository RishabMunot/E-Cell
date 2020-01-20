<<<<<<< HEAD
(function ($) {
    "use strict";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    if (this.txt === 'DEVELOP' || this.txt === 'LEAD' || this.txt === 'INNOVATE')
        document.getElementById("slider-id").innerHTML = '<img src="./img/' + this.txt + '.png">';
    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        console.log(this.loopNum)
        if(this.loopNum==3) {
            var typewritter = document.getElementsByClassName('typewritter');
            var typewritterImg = document.getElementById('slider-id');
            typewritter[0].style.display = 'none';
            typewritterImg.style.display = 'none';
            document.getElementById('elastic').style.display = 'block';
            return;
        }
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        console.log(toRotate);
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
//tooltip 

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$('.counter').countUp();


$(document).ready(function(){
    $("#sub").click(function(){
      var name =  document.getElementById("name").value;
      var email =  document.getElementById("email").value;
      var msg =  document.getElementById("msg").value;
      $.get("https://script.google.com/macros/s/AKfycby9S61GX0h8zrZaOVh3E-J2EMFq07qIP_Z3l2q2SbaKy9xgiWM/exec", { name:name, email:email, msg:msg });
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
      alert("Message sent successfully");
    });
});

=======
(function ($) {
    "use strict";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    if (this.txt === 'DEVELOP' || this.txt === 'LEAD' || this.txt === 'INNOVATE')
        document.getElementById("slider-id").innerHTML = '<img src="./img/' + this.txt + '.png">';
    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        console.log(this.loopNum)
        if(this.loopNum==3) {
            var typewritter = document.getElementsByClassName('typewritter');
            var typewritterImg = document.getElementById('slider-id');
            typewritter[0].style.display = 'none';
            typewritterImg.style.display = 'none';
            document.getElementById('elastic').style.display = 'block';
            return;
        }
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        console.log(toRotate);
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
//tooltip 

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$('.counter').countUp();


$(document).ready(function(){
    $("#sub").click(function(){
      var name =  document.getElementById("name").value;
      var email =  document.getElementById("email").value;
      var msg =  document.getElementById("msg").value;
      $.get("https://script.google.com/macros/s/AKfycby9S61GX0h8zrZaOVh3E-J2EMFq07qIP_Z3l2q2SbaKy9xgiWM/exec", { name:name, email:email, msg:msg });
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
      alert("Message sent successfully");
    });
});

>>>>>>> 017a94c45cf1abd2c5baf11bfb2124905e8ea053
