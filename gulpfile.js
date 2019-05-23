const postcss = require("gulp-postcss"),
  gulp = require("gulp"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano");

gulp.task("serve", ["css"], () => {
  gulp.watch("./css/*.css", ["css"]);
});

gulp.task("css", () => {
  var plugin = [autoprefixer(), cssnano()];
  return gulp
    .src("./css/*.css")
    .pipe(postcss(plugin))
    .pipe(gulp.dest("./dest"));
});

gulp.task("default", ["serve"]);
