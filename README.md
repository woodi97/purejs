# template.vanilla

## `Warning`

Please do not set module option of tsconfig.json as `commonJS`.
It prevents tree-shaking which is conducted by webpack automatically.

## How to setup VanillaTS Project?

1. Install typeScript by using npm on command line (npm install typescript — save -dev)
2. Create “tsconfig.json”(or just type on command line”tsc init”, then tsconfig.json would be created).
3. Write the “tsconfig.json” like below. In my case, I added my file inside public file so I indicated outDir which means creating file inside the folder on this path when compiling tsfile.

```json:tsconfig.json
{
  "compilerOptions": {
    "outDir": "./public/js",
    "allowJs": true,
    "target": "es5",
    "module": "commonJS",
    "moduleResolution": "node"
  },
  "include": ["script.ts"]
}
```

4. Change extension to “.ts”. In my case, as I created script.js, so I changed it to script.ts.

5. Compile this “.ts”file on command line.(If you want to compile once, you can just type “tsc ‘your ts.file’”. If you want to compile several times, you can use -w option ”tsc ‘your ts.file -w’ then tsc keep watching and changing immediately when you change your ts.file)
   Then script.js after compiling would be generated where is indicated path by outDir. The reason why I indicated outDir is to avoid messing the files because if we don’t indicate the outDir, the js file would be generated next to ts.file (In my case, it’s not working so I used differnt way. I’ll share later).

```ts:script.ts
const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const popularUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&${apiKey}`;
const genreUrl = `${baseUrl}/genre/movie/list?${apiKey}`;
const searchUrl = `${baseUrl}/search/movie?${apiKey}&query=`;
```

6. Check your src inside index.html. You should select as a source match with outDir path because this index file use the js file after compiling.

```html:index.html
[index.html(you don't need type="module" unless it's necessary to import and export file es6 way)]
<script type="module" src="./js/script.js"></script>
```

7. Done! add scripts in package.json

```json:package.json
"scripts": {
    "tsc:w": "tsc -w --outDir ./public/js”
  },
```
