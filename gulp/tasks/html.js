import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"; //обробка картинок
import versionNumber from "gulp-version-number"; // плагін проти кешування

export const html = () => {
   return app.gulp.src(app.path.src.html)
   .pipe(fileinclude())
   .pipe(app.plugins.replace(/@img\//g,'img/'))
   .pipe(webpHtmlNosvg())
   .pipe(
      versionNumber({
         'value': '%DT%',
         'append':{
            'key':'_v',
            'cover': 0,
            'to':[
               'css',
               'js',
            ]
         },
         'output':{
            'file': 'gulp/version.json'
         }
      })
   )
   .pipe(app.gulp.dest(app.path.build.html))
}