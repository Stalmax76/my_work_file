
// отримуєм імя проєкту
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // можливи використовувати імя проєкту
const srcFolder =`./src`;

//об'єкт для збереження інформації шляху
export const path={

   // об'єкти 
   //об'єкт шляхів готового результату
   build:{
      files:`${buildFolder}/files/`},
   //об'єкт шляхів вихідних файлів
   src:{
files:`${srcFolder}/files/**/*.*`,
   },
   watch:{},// об'єкт шляхів спостереження

   //свойства
   clean:buildFolder,    // clean така як результат роботи
   buildFolder:buildFolder,// папка з результатом
   srcFolder:srcFolder,    // папка з вихідними файлами
   rootFolder:rootFolder,// ім'я поточного проєкту
   ftp:``//шлях на віддалений сервер
}