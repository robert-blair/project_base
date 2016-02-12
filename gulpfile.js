const gulp = require('gulp');
//const gulpChanged = require("gulp-changed");

// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');
 const sourcemaps = require('gulp-sourcemaps');
// const del = require('del');


const gulp_postcss = require( "gulp-postcss" );
const cssnext = require( "postcss-cssnext" );
const lost = require('lost');
const rucksack = require('gulp-rucksack');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');




gulp.task('css',  () => {

    const srcCss = './stylesheets/source/**/*.css';
    const dstCss = './stylesheets';
        
    
    const processors =
        [
            cssImport,
            cssnext({}),
            lost,
            autoprefixer({ browsers: ['last 2 versions'] })
        ];

    return gulp.src(srcCss)
        .pipe(sourcemaps.init())
        .pipe(gulp_postcss(processors))
        .pipe(rucksack())
        .pipe(sourcemaps.write('./gulp_sourcemaps'))
        .pipe(gulp.dest(dstCss));
});

gulp.task('watch:css', () => {

    const watchCss = './stylesheets/source/**/.*.css';
    
    gulp.watch(watchCss, ['css']);
});


gulp.task('default', () => {

});