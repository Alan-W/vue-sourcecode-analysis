<<<<<<< HEAD

```
vue-sourcecode-analysis
├─ .DS_Store
├─ .babelrc
├─ .flowconfig
├─ README.md
├─ examples
│  ├─ App.vue
│  ├─ components
│  │  ├─ child1.vue
│  │  └─ child2.vue
│  └─ main.js
├─ flow
│  ├─ compiler.js
│  ├─ component.js
│  ├─ global-api.js
│  ├─ modules.js
│  ├─ options.js
│  ├─ ssr.js
│  └─ vnode.js
├─ funcs
│  ├─ index.js
│  ├─ observer-list.js
│  ├─ observer-mode.js
│  ├─ observer.js
│  └─ subject.js
├─ package.json
├─ public
│  ├─ index.html
│  └─ main.js
├─ rollup.config.js
├─ src
│  ├─ compiler
│  │  ├─ codegen
│  │  │  ├─ events.js
│  │  │  └─ index.js
│  │  ├─ create-compiler.js
│  │  ├─ directives
│  │  │  ├─ bind.js
│  │  │  ├─ index.js
│  │  │  ├─ model.js
│  │  │  └─ on.js
│  │  ├─ error-detector.js
│  │  ├─ helpers.js
│  │  ├─ index.js
│  │  ├─ optimizer.js
│  │  ├─ parser
│  │  │  ├─ entity-decoder.js
│  │  │  ├─ filter-parser.js
│  │  │  ├─ html-parser.js
│  │  │  ├─ index.js
│  │  │  └─ text-parser.js
│  │  └─ to-function.js
│  ├─ core
│  │  ├─ components
│  │  │  ├─ index.js
│  │  │  └─ keep-alive.js
│  │  ├─ config.js
│  │  ├─ global-api
│  │  │  ├─ assets.js
│  │  │  ├─ extend.js
│  │  │  ├─ index.js
│  │  │  ├─ mixin.js
│  │  │  └─ use.js
│  │  ├─ index.js
│  │  ├─ instance
│  │  │  ├─ events.js
│  │  │  ├─ index.js
│  │  │  ├─ init.js
│  │  │  ├─ inject.js
│  │  │  ├─ lifecycle.js
│  │  │  ├─ proxy.js
│  │  │  ├─ render-helpers
│  │  │  │  ├─ bind-object-listeners.js
│  │  │  │  ├─ bind-object-props.js
│  │  │  │  ├─ check-keycodes.js
│  │  │  │  ├─ index.js
│  │  │  │  ├─ render-list.js
│  │  │  │  ├─ render-slot.js
│  │  │  │  ├─ render-static.js
│  │  │  │  ├─ resolve-filter.js
│  │  │  │  └─ resolve-slots.js
│  │  │  ├─ render.js
│  │  │  └─ state.js
│  │  ├─ observer
│  │  │  ├─ array.js
│  │  │  ├─ dep.js
│  │  │  ├─ index.js
│  │  │  ├─ scheduler.js
│  │  │  └─ watcher.js
│  │  ├─ util
│  │  │  ├─ debug.js
│  │  │  ├─ env.js
│  │  │  ├─ error.js
│  │  │  ├─ index.js
│  │  │  ├─ lang.js
│  │  │  ├─ options.js
│  │  │  ├─ perf.js
│  │  │  └─ props.js
│  │  └─ vdom
│  │     ├─ create-component.js
│  │     ├─ create-element.js
│  │     ├─ create-functional-component.js
│  │     ├─ helpers
│  │     │  ├─ extract-props.js
│  │     │  ├─ get-first-component-child.js
│  │     │  ├─ index.js
│  │     │  ├─ is-async-placeholder.js
│  │     │  ├─ merge-hook.js
│  │     │  ├─ normalize-children.js
│  │     │  ├─ resolve-async-component.js
│  │     │  └─ update-listeners.js
│  │     ├─ modules
│  │     │  ├─ directives.js
│  │     │  ├─ index.js
│  │     │  └─ ref.js
│  │     ├─ patch.js
│  │     └─ vnode.js
│  ├─ platforms
│  │  └─ web
│  │     ├─ compiler
│  │     │  ├─ directives
│  │     │  │  ├─ html.js
│  │     │  │  ├─ index.js
│  │     │  │  ├─ model.js
│  │     │  │  └─ text.js
│  │     │  ├─ index.js
│  │     │  ├─ modules
│  │     │  │  ├─ class.js
│  │     │  │  ├─ index.js
│  │     │  │  ├─ model.js
│  │     │  │  └─ style.js
│  │     │  ├─ options.js
│  │     │  └─ util.js
│  │     ├─ entry-compiler.js
│  │     ├─ entry-runtime-with-compiler.js
│  │     ├─ entry-runtime.js
│  │     ├─ entry-server-basic-renderer.js
│  │     ├─ entry-server-renderer.js
│  │     ├─ runtime
│  │     │  ├─ class-util.js
│  │     │  ├─ components
│  │     │  │  ├─ index.js
│  │     │  │  ├─ transition-group.js
│  │     │  │  └─ transition.js
│  │     │  ├─ directives
│  │     │  │  ├─ index.js
│  │     │  │  ├─ model.js
│  │     │  │  └─ show.js
│  │     │  ├─ index.js
│  │     │  ├─ modules
│  │     │  │  ├─ attrs.js
│  │     │  │  ├─ class.js
│  │     │  │  ├─ dom-props.js
│  │     │  │  ├─ events.js
│  │     │  │  ├─ index.js
│  │     │  │  ├─ style.js
│  │     │  │  └─ transition.js
│  │     │  ├─ node-ops.js
│  │     │  ├─ patch.js
│  │     │  └─ transition-util.js
│  │     ├─ server
│  │     │  ├─ compiler.js
│  │     │  ├─ directives
│  │     │  │  ├─ index.js
│  │     │  │  └─ show.js
│  │     │  ├─ modules
│  │     │  │  ├─ attrs.js
│  │     │  │  ├─ class.js
│  │     │  │  ├─ dom-props.js
│  │     │  │  ├─ index.js
│  │     │  │  └─ style.js
│  │     │  └─ util.js
│  │     └─ util
│  │        ├─ attrs.js
│  │        ├─ class.js
│  │        ├─ compat.js
│  │        ├─ element.js
│  │        ├─ index.js
│  │        └─ style.js
│  ├─ server
│  │  ├─ bundle-renderer
│  │  │  ├─ create-bundle-renderer.js
│  │  │  ├─ create-bundle-runner.js
│  │  │  └─ source-map-support.js
│  │  ├─ create-basic-renderer.js
│  │  ├─ create-renderer.js
│  │  ├─ optimizing-compiler
│  │  │  ├─ codegen.js
│  │  │  ├─ index.js
│  │  │  ├─ modules.js
│  │  │  ├─ optimizer.js
│  │  │  └─ runtime-helpers.js
│  │  ├─ render-context.js
│  │  ├─ render-stream.js
│  │  ├─ render.js
│  │  ├─ template-renderer
│  │  │  ├─ create-async-file-mapper.js
│  │  │  ├─ index.js
│  │  │  ├─ parse-template.js
│  │  │  └─ template-stream.js
│  │  ├─ util.js
│  │  ├─ webpack-plugin
│  │  │  ├─ client.js
│  │  │  ├─ server.js
│  │  │  └─ util.js
│  │  └─ write.js
│  ├─ sfc
│  │  └─ parser.js
│  └─ shared
│     ├─ constants.js
│     └─ util.js
└─ yarn.lock

```
=======
# vue-sourcecode-analysis
Vue2源码分析demo
>>>>>>> afc0b637e571ae9df83badd052972c40e04eedd1
