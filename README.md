# JSON Course

Curso introductorio de JSON con ejemplos prácticos en JavaScript del navegador. Acompaña al video de YouTube: [https://youtu.be/lLsYjzpSDyA](https://youtu.be/lLsYjzpSDyA).

## Contenidos

El proyecto cubre, paso a paso:

1. **Object literal en JavaScript** — propiedades anidadas, arrays y tipos primitivos.
2. **`JSON.stringify`** — convertir un objeto JavaScript a una cadena JSON.
3. **Leer un archivo JSON local** con `fetch` + cadena de `.then()` (estilo clásico).
4. **Consumir una API REST** ([JSONPlaceholder](https://jsonplaceholder.typicode.com)) con `async / await` (estilo moderno).

Mostrar las dos formas de usar `fetch` (promesas vs async/await) es intencional, para que veas la equivalencia y elijas la que prefieras.

## Archivos

```
json_course/
├── index.html        # marca el lugar donde renderizar las listas
├── script.js         # lógica JS comentada (objetos, JSON, fetch)
├── people.json       # datos locales que consume el primer fetch
├── package.json      # solo declara live-server como dev dependency
└── README.md
```

## Ejecutar localmente

Necesitas Node.js instalado.

```bash
git clone https://github.com/fazt/json_course
cd json_course
npm install
npm start
```

`npm start` levanta [five-server](https://www.npmjs.com/package/five-server) (sucesor mantenido de `live-server`) en `http://localhost:5500`, sirviendo `index.html` con recarga automática al guardar.

Alternativa sin instalar nada:

```bash
npx five-server
```

## Resultado esperado

Al abrir la página deberías ver dos listas:

- **Friends** con los 5 nombres definidos en `people.json`.
- **Users** con los 10 usuarios devueltos por la API de JSONPlaceholder.

La consola del navegador muestra los `console.log` de las propiedades del objeto `person` y su versión `JSON.stringify`.

## Autor

- Web: [faztweb.com](https://faztweb.com)
- YouTube: [@FaztTech](https://www.youtube.com/@FaztTech)
- Twitter / X: [@fazttech](https://twitter.com/fazttech)
