import dartSass from 'sass';  //сам предпроцесор
import gulpSass from 'gulp-sass'; // для запуска предпроцесора
import rename from 'gulp-rename'; //змінити назву вихідного файлу css

import cleanCss from 'gulp-clean-css'; // зжимає css файл
import webpcss from 'gulp-webpcss';  // працює- показує-виводить webp картинки
import autoprefixer from 'gulp-autoprefixer';  //добавляє вендорні префікси
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // групує медіа-позови

const sass = gulpSass(dartSass);

export const scss = () =>{
   return app.gulp.src(app.path.src.scss, {sourcemaps: true}) //карта вихідного файлу, щоб бачити де похибка
   .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
         title: "SCSS",
         message: "Error: <%= error.message %>"
      })
   ))
   .pipe(app.plugins.replace(/@img\//g, '../img/'))
   .pipe(sass({
      outputStyle:'expanded'
   }))
   .pipe(groupCssMediaQueries())
   .pipe(webpcss(
      {
         webpClass:".webp",
         noWebpClass:".no-webp"  // потрібно код на перевірку + конвертор webp-converter@2.2.3
      }
   ))
   .pipe(autoprefixer({
      grid: true, // підтримка грід
      overrideBrowserslist:["last 3 versions"],// кількість версій у браузера
      cascade: true //
   }))
   // розкоментувати, якщо потрібен дубль не зжатого файлу стилів
   .pipe(app.gulp.dest(app.path.build.css))
   .pipe(cleanCss()) // зжимаємо файл перед зберіганням
   .pipe(rename({
      extname:".min.css"
   }))
   .pipe(app.gulp.dest(app.path.build.css))
   .pipe(app.plugins.browsersync.stream());
}