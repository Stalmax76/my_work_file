import webp from "gulp-webp";
import imagemin from "gulp-imagemin";


export const images = () =>{
   return app.gulp.src(app.path.src.images,{sourcemaps: true})
   .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
         title: "IMAGES",
         message: "Error: <%= error.message %>"
      })
   ))
   .pipe(app.plugins.newer(app.path.build.images))  //перевіряємо папку з результатом на оновлення
    .pipe(webp())  // створюєм картинку з розширенням webp
    .pipe(app.gulp.dest(app.path.build.images)) //вигружаємо створені картинки в папку з результатом
   .pipe(app.gulp.src(app.path.src.images))  //повторно отримуєм доступ до папки  вихідних файлів
   .pipe(app.plugins.newer(app.path.build.images))  // знову перевіряємо папку з результатом на оновлення

      //завдання для зжимання розміру картинки
   .pipe(imagemin({                      
      progressive:true,
      svgPlugins: [{removeViewBox: false}],
      interlaced: true,
      optimizationLevel: 3  // 0 to 7
   }))
   .pipe(app.gulp.dest(app.path.build.images)) // вигружаємо оптимізовані картинки в папку з результатом
    .pipe(app.gulp.src(app.path.src.svg)) //отримуєм доступ до картинок з розширенням svg
    .pipe(app.gulp.dest(app.path.build.images))// копіюєм їх до папки з результатом


   .pipe(app.plugins.browsersync.stream()); // оновлюєм браузер
}