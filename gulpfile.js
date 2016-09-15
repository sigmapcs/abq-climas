/*
 Sass supports four different output styles.

 :nested
 :compact
 :expanded
 :compressed
 */
const gulp = require('gulp'),
	browserSync = require('browser-sync').create();
sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug'),
	jade = require('gulp-jade'),
	compressor = require('gulp-compressor'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat');

const imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin'),
	unCSS = require('gulp-uncss'),
	cleanCSS = require('gulp-clean-css'),
	webp = require('gulp-webp'),
	pngquant = require('imagemin-pngquant'),
	dir = {
		src: 'dev',
		dist: 'dist',
		nm: 'node_modules',
		js: '/dev/js',
		css: 'dev/css'
	},
	files = {
		CSS: [

		],
		mCSS: 'estilos.min.css',
		JS: [
			`${dir.src}/js/jquery-3.1.0.min.js`,
			`${dir.src}/js/jquery.slides.min.js`
		],
		mJS: 'scripts.min.js',
		fonts: [`${dir.nm}/font-awesome/fonts/*.*`],
		statics : [
			`${dir.src}/humans.txt`,
			`${dir.src}/sitemap.xml`
		]
	},
	opts = {
		pug: {
			pretty : true,
			locals : {
				title : 'Maratón',
				files : files
			}
		},
		sass : { outputStyle: 'compressed' },
		es6 : { presets : ['es2015'] },
		imagemin : {
			progressive : true,
			use : [ pngquant() ]
		},
		svgmin : {
			plugins : [
				{ convertColors : false },
				{ removeAttrs : { attrs : ['fill'] } }
			]
		},
		uncss : { html : [`${dir.dist}/*.html`] },
		cleancss : {
			keepSpecialComments: 0,
			advanced: true
		},
		autoprefixer : {
			browsers : ['last 5 versions'],
			cascade : false
		},
		htmlmin : {collapseWhitespace: true}
	};

gulp.task('sass', ()=>{
	gulp.src('./dev/scss/*.scss')
		.pipe(sourcemaps.init())
		// .pipe(plumber())
		.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		// .pipe(cleanCSS({compatibility: 'ie8'}))
		// .pipe( unCSS(opts.uncss))
		// .pipe(cleanCSS(opts.cleancss))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.stream());
});

gulp.task('jade', ()=>{
	gulp.src('./dev/jade/*.jade')
		.pipe(plumber())
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/'))
		.on('end', browserSync.reload);
});

gulp.task('pug', ()=> {
	gulp.src('./dev/pug/*.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/'))
		.on('end', browserSync.reload);
});

gulp.task('es5', () => {
	gulp.src('./dev/es5/*.js')
		.pipe(sourcemaps.init())
		// .pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js/'))
		.on('end', browserSync.reload);
});

gulp.task('es6',() => {
	return gulp.src('./dev/es6/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		// .pipe(uglify())
		// .pipe(concat('main.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/js/'))
		.on('end', browserSync.reload);
});

gulp.task('javascript', function() {
	return gulp.src('dev/es6/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'));
});



gulp.task('html', ()=> {
	return gulp.src('dist/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
});

gulp.task('img', () =>
	gulp.src('dev/img/**/*.+(png|jpeg|jpg|gif)')
		.pipe(imagemin({
			progressive : true
		}))
		.pipe(gulp.dest('dist/img'))
);

gulp.task('webp', () => {
	gulp
		.src('dev/img/**/*.+(png|jpeg|jpg)')
		.pipe( webp() )
		.pipe( gulp.dest('dist/img/webp') );
});

gulp.task('cCSS', ()=>{
	return gulp.src(files.CSS)
		.pipe(concat('all.css'))
		.pipe( unCSS(opts.uncss))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist/css'));
});
gulp.task('cJS', ()=>{
	return gulp.src(files.JS)
		.pipe(concat(files.mJS))
		// .pipe( unCSS(opts.uncss))
		.pipe( uglify() )
		.pipe(gulp.dest('./dist/js'));
});
gulp.task('cALL', ['cCSS','cJS']);
gulp.task('finalizar', ['cCSS','cJS','html']);
gulp.task('image',['img','webp']);


gulp.task('default', () => {
	browserSync.init({
		server:  "./dist"
	});
	gulp.watch('./dev/scss/**/*.scss', ['sass']);
	gulp.watch('./dev/jade/**/*.jade', ['jade']);
	gulp.watch('./dev/pug/**/*.pug', ['pug']);
	gulp.watch('./dev/es6/**/*.js',['es6']);
	gulp.watch('./dev/es5/**/*.js', ['es5']);
});
