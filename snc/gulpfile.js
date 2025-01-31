<<<<<<< HEAD
const gulp = require('gulp');
const concat = require('gulp-concat');

// ***********************
// Move JS Files to src/js
// ***********************

gulp.task('js', function () {
    return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js',
      'node_modules/owl.carousel2/dist/owl.carousel.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
      'node_modules/wowjs/dist/wow.min.js',
      'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
      'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
      'node_modules/jarallax/dist/jarallax.min.js',
      'node_modules/jarallax/dist/jarallax-video.min.js',
      'node_modules/jquery-waypoints/waypoints.min.js',
      'node_modules/counterup/jquery.counterup.min.js',
      'node_modules/jquery.easing/jquery.easing.min.js',
      'node_modules/jquery-countdown/dist/jquery.countdown.min.js'
    ])
        .pipe(gulp.dest("src/js"))
});

// *****************************
// Combine All js files into one
// *****************************

gulp.task('scripts', function () {
    return gulp.src([
    './src/js/default-assets/avoid.console.error.js',
    './src/js/default-assets/classy-nav.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'node_modules/wowjs/dist/wow.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    'node_modules/jquery-waypoints/waypoints.min.js',
    'node_modules/counterup/jquery.counterup.min.js',
    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
    'node_modules/jarallax/dist/jarallax.min.js',
    'node_modules/jarallax/dist/jarallax-video.min.js',
    './src/js/default-assets/jquery.scrollup.min.js',
    'node_modules/jquery-countdown/dist/jquery.countdown.min.js'
  ])
        .pipe(concat('confer.bundle.js'))
        .pipe(gulp.dest('./src/js/'))
});

// ************************************
// Move Font Awesome Fonts to src/fonts
// ************************************

gulp.task('fafonts', function () {
    return gulp.src([
      'node_modules/font-awesome/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// *******************************
// Move Elegent Icons to src/fonts
// *******************************
gulp.task('elefonts', function () {
    return gulp.src([
      'node_modules/elegant-icons/fonts/*'
    ])
        .pipe(gulp.dest('src/css/fonts'))
})

// *******************************
// Move ZMDI Icons to src/fonts
// *******************************
gulp.task('zmdifonts', function () {
    return gulp.src([
      'node_modules/material-design-iconic-font/dist/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// *******************
// Move CSS to src/css
// *******************

gulp.task('css', function () {
    return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
      'node_modules/elegant-icons/style.css',
      'node_modules/wowjs/css/libs/animate.css',
      'node_modules/magnific-popup/dist/magnific-popup.css',
      'node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
    ])
        .pipe(gulp.dest('src/css'))
})

=======
const gulp = require('gulp');
const concat = require('gulp-concat');

// ***********************
// Move JS Files to src/js
// ***********************

gulp.task('js', function () {
    return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js',
      'node_modules/owl.carousel2/dist/owl.carousel.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
      'node_modules/wowjs/dist/wow.min.js',
      'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
      'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
      'node_modules/jarallax/dist/jarallax.min.js',
      'node_modules/jarallax/dist/jarallax-video.min.js',
      'node_modules/jquery-waypoints/waypoints.min.js',
      'node_modules/counterup/jquery.counterup.min.js',
      'node_modules/jquery.easing/jquery.easing.min.js',
      'node_modules/jquery-countdown/dist/jquery.countdown.min.js'
    ])
        .pipe(gulp.dest("src/js"))
});

// *****************************
// Combine All js files into one
// *****************************

gulp.task('scripts', function () {
    return gulp.src([
    './src/js/default-assets/avoid.console.error.js',
    './src/js/default-assets/classy-nav.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'node_modules/wowjs/dist/wow.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    'node_modules/jquery-waypoints/waypoints.min.js',
    'node_modules/counterup/jquery.counterup.min.js',
    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
    'node_modules/jarallax/dist/jarallax.min.js',
    'node_modules/jarallax/dist/jarallax-video.min.js',
    './src/js/default-assets/jquery.scrollup.min.js',
    'node_modules/jquery-countdown/dist/jquery.countdown.min.js'
  ])
        .pipe(concat('confer.bundle.js'))
        .pipe(gulp.dest('./src/js/'))
});

// ************************************
// Move Font Awesome Fonts to src/fonts
// ************************************

gulp.task('fafonts', function () {
    return gulp.src([
      'node_modules/font-awesome/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// *******************************
// Move Elegent Icons to src/fonts
// *******************************
gulp.task('elefonts', function () {
    return gulp.src([
      'node_modules/elegant-icons/fonts/*'
    ])
        .pipe(gulp.dest('src/css/fonts'))
})

// *******************************
// Move ZMDI Icons to src/fonts
// *******************************
gulp.task('zmdifonts', function () {
    return gulp.src([
      'node_modules/material-design-iconic-font/dist/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// *******************
// Move CSS to src/css
// *******************

gulp.task('css', function () {
    return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
      'node_modules/elegant-icons/style.css',
      'node_modules/wowjs/css/libs/animate.css',
      'node_modules/magnific-popup/dist/magnific-popup.css',
      'node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
    ])
        .pipe(gulp.dest('src/css'))
})

>>>>>>> 017a94c45cf1abd2c5baf11bfb2124905e8ea053
gulp.task('default', ['js', 'scripts', 'css', 'fafonts', 'elefonts', 'zmdifonts']);