
// отримуєм імя проєкту
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // можливи використовувати імя проєкту
const srcFolder =`./src`;

//об'єкт для збереження інформації шляху
const path={

   // об'єкти 
   build:{},//об'єкт шляхів готового результату
   src:{},//об'єкт шляхів вихідних файлів
   watch:{},// об'єкт шляхів спостереження

   //свойства
   clean:buildFolder,    // clean така як результат роботи
   buildFolder:buildFolder,// папка з результатом
   srcFolder:srcFolder,    // папка з вихідними файлами
   rootFolder:rootFolder,// ім'я поточного проєкту
   ftp:``//шлях на віддалений сервер
}