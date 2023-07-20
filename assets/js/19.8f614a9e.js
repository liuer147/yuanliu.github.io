(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{431:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"认识-source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识-source-map"}},[a._v("#")]),a._v(" 认识 source-map")]),a._v(" "),s("ul",[s("li",[a._v("什么是 source-map ?")])]),a._v(" "),s("p",[a._v("source-map 是指从 "),s("strong",[a._v("已转换的代码")]),a._v("，映射到 "),s("strong",[a._v("原始的源文件")]),a._v("。")]),a._v(" "),s("ul",[s("li",[a._v("为什么需要 source-map ?")])]),a._v(" "),s("p",[a._v("目前，前端运行在浏览器中的代码实际上和我们编写的代码是由差异的。如代码丑化，es6 -> es5，代码行号、列号等。当我们编写的代码出现问题时，调试编译后的代码找出问题所在就显得很困难了。所以我们需要使用 source-map，来将源文件代码 与 编译后的代码关联起来。\n通过 source-map，可以使浏览器 重建原始源 并在调试器中 显示重建的原始源。")]),a._v(" "),s("h3",{attrs:{id:"使用-source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-source-map"}},[a._v("#")]),a._v(" 使用 source-map")]),a._v(" "),s("ol",[s("li",[a._v("浏览器启用 JavaScript / CSS 源代码映射。")])]),a._v(" "),s("p",[a._v("在浏览器控制台的设置中即可选择。"),s("img",{attrs:{src:"/webpack/1688369980605-6f3a6273-4fa1-4718-8328-d47508384d5a.png",alt:"image.png"}})]),a._v(" "),s("ol",[s("li",[a._v("在转换后的代码，最后添加一个注释，它指向 source-map 文件。")])]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//# sourceMappingURL=xxx.map")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"source-map-文件分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-map-文件分析"}},[a._v("#")]),a._v(" source-map 文件分析")]),a._v(" "),s("p",[a._v("source-map 文件格式如下。")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"file"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"397_ff21a8.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"mappings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wIAEAA,QAAQC,IAAI,2BAEZ,QAJc,Y"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"sources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack://webpack-test/./src/title.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"sourcesContent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"const title = '我是title.js'\\n\\nconsole.log('title.js => console.log')\\n\\nexport default title\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"names"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"console"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"log"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 压缩后的名字 a.xx 对应的 压缩前的名字 ")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"sourceRoot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[s("img",{attrs:{src:"/webpack/1688370604177-8ddc59c2-714b-46be-bf02-0686d3a52e09.png",alt:"image.png"}})]),a._v(" "),s("h3",{attrs:{id:"webpack-配置生成-source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置生成-source-map"}},[a._v("#")]),a._v(" webpack 配置生成 source-map")]),a._v(" "),s("p",[a._v("通过 webpack 配置中的 devtool 字段可以配置不同形式的 source-map。\n"),s("img",{attrs:{src:"/typescript/1689839296678-6900a5af-7ca0-4b42-96c8-9074b8d3680f.png",alt:"image.png"}}),a._v(" "),s("strong",[a._v("此外，需要知道的是有三个值不会生成 source-map：")])]),a._v(" "),s("ol",[s("li",[s("code",[a._v("false")]),a._v("：不使用 source-map。")]),a._v(" "),s("li",[s("code",[a._v("none")]),a._v("：不写"),s("code",[a._v("devtool")]),a._v("值，"),s("code",[a._v("production")]),a._v("模式下的默认值。不生产 source-map。")]),a._v(" "),s("li",[s("code",[a._v("evel")]),a._v("："),s("code",[a._v("development")]),a._v("模式下的默认值。它不生产 source-map，但是它会在 eval 执行的代码中，添加"),s("code",[a._v("//# sourceURL=xxx")]),a._v("指向源文件。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/webpack/1688371902679-f9fa40f0-c7cc-4ca0-903e-804639eed9bc.png",alt:"image.png"}})]),a._v(" "),s("h4",{attrs:{id:"常见值介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见值介绍"}},[a._v("#")]),a._v(" 常见值介绍")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("**devtool: 'source-map'**")])])]),a._v(" "),s("p",[a._v("生成一个独立的 source-map 文件，并且在打包后的文件中有一个注释指向 source-map 文件。\n"),s("img",{attrs:{src:"/webpack/1688372187805-c3624e80-e830-4ae4-82cf-285ceb4ce04f.png",alt:"image.png"}})]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[s("code",[a._v("devtool: 'eval-source-map'")])])])]),a._v(" "),s("p",[a._v("会生成 source-map，但是 source-map 是以 DataUrl 添加到** eval 函数里面最后**。"),s("code",[a._v("sourceMappingURL=xxx")]),a._v(" "),s("img",{attrs:{src:"/webpack/1688372380417-d16f2cc7-9154-485a-8249-839d989f9141.png",alt:"image.png"}})]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[s("code",[a._v("devtool: 'inline-source-map'")])])])]),a._v(" "),s("p",[a._v("会生成 source-map，但是 source-map 是以 DataUrl 添加到 "),s("strong",[a._v("打包后的文件的后面")]),a._v("。\n"),s("img",{attrs:{src:"/webpack/1688372534880-5ded78b6-5f65-4a5e-a7e7-d1ebefadd9ba.png",alt:"image.png"}})]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[s("code",[a._v("devtool: 'cheap-source-map'")])])])]),a._v(" "),s("p",[a._v("会生成 source-map，但"),s("strong",[a._v("它没有生成列映射")]),a._v("。它会比 "),s("code",[a._v("devtool: 'source-map'")]),a._v("更加高效。\n"),s("img",{attrs:{src:"/webpack/1688372663800-2ac67b8e-f701-4727-b915-a24bfd72531a.png",alt:"image.png"}})]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("strong",[s("code",[a._v("devtool: 'cheap-module-source-map'")])])])]),a._v(" "),s("p",[a._v("如果说打包后的代码会经过类似"),s("code",[a._v("babel-loader")]),a._v("之类的loader 处理过的话，则使用"),s("code",[a._v("cheap-module-source-map")]),a._v("更好映射出原始代码，不然会有一些细微差别（相比于"),s("code",[a._v("cheap-source-map")]),a._v("）。下面就是行数不一样。\n"),s("img",{attrs:{src:"/webpack/1688373509110-6898447f-e831-43f7-b555-8aaa52789743.png",alt:"image.png"}})]),a._v(" "),s("ol",[s("li",[s("strong",[s("code",[a._v("devtool: 'hidden-source-map'")])])])]),a._v(" "),s("p",[s("img",{attrs:{src:"/webpack/1688373612559-f274b3c9-060d-429c-9ccd-bf092ed0a0f6.png",alt:"image.png"}})]),a._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[s("strong",[s("code",[a._v("devtool: 'nosources-source-map'")])])])]),a._v(" "),s("p",[a._v("控制台中能生成正确的错误信息，包括错误对应源文件的行数。但是点进去就不行了。\n"),s("img",{attrs:{src:"/webpack/1688373680612-e8c3f77c-d511-496f-a777-7004795c41ff.png",alt:"image.png"}})]),a._v(" "),s("h4",{attrs:{id:"推荐实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐实践"}},[a._v("#")]),a._v(" 推荐实践")]),a._v(" "),s("p",[a._v("开发阶段、测试阶段："),s("code",[a._v("source-map")]),a._v(" 或者 "),s("code",[a._v("cheap-module-source-map")])]),a._v(" "),s("p",[a._v("发布阶段："),s("code",[a._v("false")]),a._v("、缺省值")])])}),[],!1,null,null,null);s.default=r.exports}}]);