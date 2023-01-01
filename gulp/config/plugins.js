import replace from "gulp-replace"; // пошук та зміна
import plumber from "gulp-plumber"; // обробка помилок
import notify from "gulp-notify";// сповіщення та підказки

//збераєм об'єкт
export const plugins ={
   replace:replace,
   plumber:plumber,
   notify:notify
}