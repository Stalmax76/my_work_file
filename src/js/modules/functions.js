

// перевірка підтримки webp, добавлення класу webp чи no-webp для html
export function isWebp(){
   // перевірка
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function (){
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
      
   }
   //добавляєм  класу webp чи no-webp для html
   testWebP(function(support){
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   })
}