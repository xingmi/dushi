var gulp = require('gulp');
// var cheerio  = require('gulp-cheerio');
var getTime = new Date().getTime();
// var replace = require('gulp-replace');
var imageMin = require('gulp-imagemin');

// gulp.task('default', function() {
//     return gulp.src('./*.html')
//         .pipe(replace(/.js/g, '.js?v='+getTime))
//         .pipe(gulp.dest('./'));
// });

gulp.task('image',function(){
    gulp.src('resource/images/project/*/*/*.jpg')
        .pipe(imageMin({
          accurate: true,//高精度模式
          quality: "high",//图像质量:low, medium, high and veryhigh;
          method: "smallfry",//网格优化:mpe, ssim, ms-ssim and smallfry;
          min: 70,//最低质量
          loops: 0,//循环尝试次数, 默认为6;
          progressive: false,//基线优化
          subsample: "default"//子采样:default, disable;
        }))
        .pipe(gulp.dest('distImage/images'))
})