const gulp = require("gulp");
const postcss = require("gulp-postcss");
const postcssPlugins = [require("autoprefixer")];
const concat = require("gulp-concat-css");

const _ = {
    src: `./src`,
    dest: `./dist`,
};

const compileCSS = function() {
    return gulp
        .src(`${_.src}/*.css`)
        .pipe(postcss(postcssPlugins))
        .pipe(concat(`style.css`))
        .pipe(gulp.dest(_.dest));
};

const watch = function(done) {
    gulp.watch([`${_.src}/*.css`, `${_.src}/**/*.css`], compileCSS);
    gulp.watch(`./goron.config.js`, compileCSS);

    done();
};

exports.default = compileCSS;
exports.compileCSS = compileCSS;
exports.watch = gulp.parallel(watch);
