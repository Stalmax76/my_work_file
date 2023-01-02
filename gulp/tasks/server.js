
export const server = (done) => {
   app.plugins.browsersync.init({
      server:{
         baseDir:`${app.path.build.html}`// папка з результатом проєкту
      },
      notify: false,  // сповіщення в браузері
      port: 3000, // порт для локального сервера
   });
}