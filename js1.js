//para usar el webpack abrir la consola de nodejs (PROMPT), ubicarse en el directorio, y dar el siguiente comando: webpack ./js1.js bundle.js
//donde bundle.js esta en el html en la instruccion: "<script type="text/javascript" src="bundle.js"></script>"   
//js1.js es quien recibe todo el paquete de js
//mayor informacion: http://webpack.github.io/docs/tutorials/getting-started/#installing-webpack






//muestra mensaje
//document.write("js1.js ejecutado");

//llamado a js2.js que esta empaquetado con el webpack
document.write(require("./js2.js"));