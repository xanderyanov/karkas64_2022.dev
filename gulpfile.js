"use strict";

var gulp = require("gulp");
var pug = require("gulp-pug");
var del = require("del");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var concat = require("gulp-concat");
var concatCss = require("gulp-concat-css");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var rigger = require("gulp-rigger");
var uglify = require("gulp-uglify");
var path = require("path");
var plumber = require("gulp-plumber");
var data = require("gulp-data");
var fs = require("fs");
var rename = require("gulp-rename");
var less = require("gulp-less");
// var path = require("path");

gulp.task("pug", function () {
	return gulp
		.src("src/*.pug")
		.pipe(
			data(function (file) {
				return JSON.parse(fs.readFileSync("src/assets/data/data.json"));
			})
		)
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest("build"));
});

gulp.task("css", function () {
	return gulp
		.src("src/assets/less/apps.less")
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("build/assets/css/"));
});

// эту папку надо самостоятельно копировать в корень диска, на котором проект - и не придется менять пути, например в файле fonts.less указывающем на путь к icomoon (иначе сделать нельзя)
gulp.task("assets", function () {
	return gulp.src("assets/**/*.*").pipe(gulp.dest("build/assets"));
});

var vendorsCssFiles = [
	'node_modules/normalize.css/normalize.css',
	'node_modules/sweetalert/dist/sweetalert.css',
	'node_modules/swiper/css/swiper.min.css',
	'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
	'node_modules/bootstrap/dist/css/bootstrap.min.css',
	'node_modules/bootstrap-icons/font/bootstrap-icons.css',
	//'src/assets/libs/bootstrap-icons.css',
];

gulp.task("vendorsCss", function () {
	return (
		gulp
		.src(vendorsCssFiles, {
			base: "assets/css"
		})
		// .pipe(rigger()) //Прогоним через rigger

		.pipe(sourcemaps.init()) //Инициализируем sourcemap
		.pipe(concatCss("vendors.css"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("build/assets/css"))
	);
});

gulp.task("bsIcons", function () {
	return gulp.src("node_modules/bootstrap-icons/font/fonts/*.*").pipe(gulp.dest("build/assets/fonts"));
});

gulp.task("image", function () {
	return (
		gulp
		.src("src/assets/img/**/*.*") //Выберем наши картинки
		// .pipe(
		// 	imagemin({
		// 		//Сожмем их
		// 		progressive: true,
		// 		svgoPlugins: [{ removeViewBox: false }],
		// 		use: [pngquant()],
		// 		// interlaced: true,
		// 	})
		// )
		.pipe(gulp.dest("build/assets/img"))
	);
});

var vendorsJsFiles = [
	"node_modules/jquery/dist/jquery.min.js",
	"node_modules/bootstrap/dist/js/bootstrap.min.js",
	"node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js",
	"node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
	"node_modules/sweetalert/dist/sweetalert.min.js",
	"node_modules/swiper/js/swiper.min.js",
];

gulp.task("vendorsJs", function () {
	return (
		gulp
		.src(vendorsJsFiles, {
			base: "assets/js"
		})
		// .pipe(rigger()) //Прогоним через rigger
		.pipe(plumber())
		.pipe(sourcemaps.init()) //Инициализируем sourcemap
		.pipe(concat("vendors.js"))
		.pipe(uglify()) //Сожмем наш js
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("build/assets/js"))
	);
});

var myjsfiles = [
	'src/assets/js/var.js',
	'src/assets/js/main.js',
	'src/assets/js/barnhouse.js',
	'src/assets/js/start.js',
	'src/assets/js/__resize.js'
];

gulp.task("myJs", function () {
	return (
		gulp
		.src(myjsfiles, {
			base: "assets/js"
		})
		.pipe(plumber())
		.pipe(sourcemaps.init()) //Инициализируем sourcemap
		.pipe(concat("app.js")) // в какой файл объединить
		// .pipe(uglify()) //Сожмем наш js
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("build/assets/js"))
	);
});

gulp.task("fonts", function () {
	return gulp.src("node_modules/font-awesome/fonts/**/*.*").pipe(gulp.dest("build/assets/fonts"));
});

gulp.task("icomoon", function () {
	return gulp.src("src/assets/icomoon/**/*.*").pipe(gulp.dest("build/assets/icomoon"));
});

// gulp.task("video", function () {
// 	return gulp.src("src/assets/video/**/*.*").pipe(gulp.dest("build/assets/video"));
// });

gulp.task("clean", function () {
	return del("build");
});

gulp.task(
	"build",
	gulp.series(
		"clean",
		gulp.parallel("css", "vendorsCss", "pug", "image", "vendorsJs", "myJs", "fonts", "icomoon", "bsIcons")
	)
);

gulp.task("watch", function () {
	gulp.watch("src/assets/less/*.less*", gulp.series("css")).on("uplink", function (filepath) {
		remember.forget("css", path.resolve(filepath));
		delete cached.caches.styles[path.resolve(filepath)];
	});
	gulp.watch("src/assets/img/**/*.*", gulp.series("image")).on("uplink", function (filepath) {
		remember.forget("image", path.resolve(filepath));
		delete cached.caches.image[path.resolve(filepath)];
	});
	gulp.watch("src/assets/js/*.js*", gulp.series("myJs")).on("uplink", function (filepath) {
		remember.forget("myJs", path.resolve(filepath));
		delete cached.caches.myJs[path.resolve(filepath)];
	});
	gulp.watch("src/**/*.pug", gulp.series("pug"));
});

gulp.task("dev", gulp.series("build", "watch"));