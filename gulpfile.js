        //головні модулі
import gulp from "gulp";

           //імпортуємо шляхи
import {path} from "./gulp/config/path.js";

// глобальна зміна для збереження основних даних
global.app = {
   path:path,
   gulp:gulp
}

//імпортування завдань
import{copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";

//спостережувач за змінами в файлах
function watcher(){
   gulp.watch(path.watch.files, copy);
}

//побудова сценаріїв для виконання задач series() - виконує завдання послідовно
const dev = gulp.series( reset, copy, watcher);  //спочатку копіюєм а потім спостерігаєм

//запуск виконання завдань за замовченням
gulp.task('default', dev);