
### Full Stack TechDegree Project 8 (Front-End Website with Gulp.js)
#How to Install dependencies
`npm install` to install dependencies.

### Gulp Script Commands
##### Commands

`gulp build` command properly runs the `clean`, `scripts`, `styles`, and `images` tasks.

`gulp images` command copies the optimized images to the `dist/content`.

`clean` task fully completes before the `scripts`, `styles`, and `images` tasks are ran.

`gulp scripts` command generates JavaScript source maps.

`gulp styles` command compiles the project’s SCSS files into CSS, and concatenates and minifies into an `all.min.css` file in `dist/styles`.

`gulp styles` command generates CSS source maps.

`gulp` command properly runs the `build` task as a dependency.

`gulp` command serves the project using a local webserver

`gulp clean` command deletes all of the files and folders in the `dist` folder.


### Exceeds expectations portion 

The `gulp` command will also listen for changes to any `.scss` file. When there is any change to any `.scss` file, the `gulp styles` command is run, the files are then compiled, concatenated, and minified to the dist folder, and the browser reloads, which will then display the changes
