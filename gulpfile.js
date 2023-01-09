        //головні модулі
import gulp from "gulp";

           //імпортуємо шляхи
import {path} from "./gulp/config/path.js";

//імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js";

// глобальна зміна для збереження основних даних
global.app = {
   isBuild: process.argv.includes('--build'),//якщо є ярлик - то це режим продакшн
   isDev: !process.argv.includes('--build'),// якщо немає ярлику -то це режим розробника
   path:path,
   gulp:gulp,
   plugins:plugins
}

//імпортування завдань
import{copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import{html} from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//спостережувач за змінами в файлах
function watcher(){
   gulp.watch(path.watch.files, copy);//  copy - замінити на gulp.series(copy, ftp) для миттєвої зміни на віддаленому сервері
   gulp.watch(path.watch.html, html);  //  html - замінити на gulp.series(html, ftp) для миттєвої зміни на віддаленому сервері
   gulp.watch(path.watch.scss, scss);//  scss - замінити на gulp.series(scss, ftp) для миттєвої зміни на віддаленому сервері
   gulp.watch(path.watch.js, js);//  js - замінити на gulp.series(js, ftp) для миттєвої зміни на віддаленому сервері
   gulp.watch(path.watch.images, images);//  images - замінити на gulp.series(images, ftp) для миттєвої зміни на віддаленому сервері
}

// виконується тільки один раз, немає необхідності перезапускати
export {svgSprive};

// змінна з послідовним виконанням завдань для шрифту
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//основні завдання 
const mainTasks = gulp.series(fonts, gulp.parallel(copy,html, scss, js, images));

//побудова сценаріїв для виконання задач series() - виконує завдання послідовно
const dev = gulp.series( reset, mainTasks, gulp.parallel( watcher, server));  //спочатку копіюєм а потім спостерігаєм
const build = gulp.series(reset, mainTasks); //завдання для режиму продакшн
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// єкспорт сценаріїв
export{ dev }
export { build }
export { deployZip }
export { deployFTP }

//запуск виконання завдань за замовченням
gulp.task('default', dev);