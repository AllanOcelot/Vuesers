# Vuesers
Vuesers is platform to view open source VueJS projects.
The idea is to add in a dash of extremely light social media - so users can contribute to projects, get feedback and hopefully build up a nice little community of passionate VueJS dev's across the globe, helping each other out.


## RoadMap
Vuesers is using [AgileSeason](https://agileseason.com/#/shared/board/d6594af8828cfd9b519f4bd536c8a828) for it's current roadmap / issue tracking. Agile Season is another open source VueJS project, check them out [here](https://github.com/agileseason/agileseason)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Designs
Designs for the frontend are compressed, MVP's designed in Figma. They should serve as MVP only, additional improvement's and tweaks will come on a priority basis. 


# Client
The client is a Vue3, Typescript project. I am attempting to learn Vue3 best practice, so feel free to feedback and improve, if there's a lesson to be learned.
## Project Setup ( Client )

```sh
npm install
```

### Compile and Hot-Reload for Development ( Client)

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production ( Client)

```sh
npm run build
```

# 'Server'
The Server is a simple Node Express app, it set's up endpoints to interact with an instance of [Pocketbase](https://github.com/pocketbase/pocketbase). Again, I'm learning Pocketbase - so any improvements to implementations etc are welcome.

```sh
node app.js
```


