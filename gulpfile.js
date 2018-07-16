//Use Strict for best practice
"use strict";
//Declare variables 
var gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  maps = require("gulp-sourcemaps"),
  del = require("del"),
  connect = require("gulp-connect"),
  minify = require("gulp-clean-css"),
  imagemin = require("gulp-imagemin"),
  browserSync = require("browser-sync").create();

// Copy images to dist/content
gulp.task('images', () => {
  return gulp
    .src("./images/*")
    .pipe(imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]
    ))
    .pipe(gulp.dest("./dist/content"));
})

// Concatenate, minify, and copy the JavaScript files into an all.min.js file
// that will then copied to the dist/scripts folder.
gulp.task('scripts', () => {
    return gulp
      .src(["js/**/*.js"])
      .pipe(maps.init())
      .pipe(concat("js/app.js"))
      .pipe(uglify())
      .pipe(rename("all.min.js"))
      .pipe(maps.write("."))
      .pipe(gulp.dest("dist/scripts"));
})

// Compiling the Sass to css
gulp.task("styles", () => {
    return gulp
      .src("sass/global.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(minify())
      .pipe(rename("all.min.css"))
      .pipe(maps.write("./"))
      .pipe(gulp.dest("dist/styles"))
      .on("end", browserSync.reload);
})

// Code will Clean up dist folder
gulp.task("build", ['clean', 'styles', 'scripts', 'images'], () => {
  return gulp
    .src(
      [
        "css/application.css",
        "js/app.min.js",
        "index.html",
        "img/**",
        "fonts/**"
      ],
      { base: "./" }
    )
    .pipe(gulp.dest("dist"));
});

// Run build, start the server on port 3000, watch for the changes to the sass files.
  gulp.task("default", ['build'], () => {
    browserSync.init({ server: { baseDir: "./" } });
    gulp.watch("sass/*", ["styles"])
    // serve to server
    connect.server({ port: 3000 });
  });

  // Delete the dist folder
  gulp.task('clean', () => {
      del(['dist']);
  })
