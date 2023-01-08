import replace from "gulp-replace"; // пошук та зміна
import plumber from "gulp-plumber"; // обробка помилок
import notify from "gulp-notify";// сповіщення та підказки
import browsersync from "browser-sync"; //локальний сервер
import newer from "gulp-newer";  //перевірка оновлень, обробляє тільки ті картинки яких немає в папці з результатом

//збераєм об'єкт
export const plugins ={
   replace: replace,
   plumber: plumber,
   notify: notify,
   browsersync: browsersync,
   newer: newer
}