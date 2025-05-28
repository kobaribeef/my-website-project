// IMPORTS
const gulp = require('gulp');


// TASK FUNCTIONS
function copyCSS(done){
    gulp.src('./styles/**/*.css')
        .pipe(gulp.dest('./_site/styles/'));
    done();
};

function copyJS(done){

    gulp.src('./js/**/*.js')
        .pipe(gulp.dest('./_site/js/'));
    done();
};

function copyPHP(done){
    gulp.src('./contact-submit.php')
        .pipe(gulp.dest('./_site/'));
    done();
};

function copyImages(done){
    gulp.src('./images/**/*.*')
        .pipe(gulp.dest('./_site/images/'));
    done();
};


// EXPORTS
exports.default = gulp.series(copyCSS, copyJS, copyPHP, copyImages);