(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{503:function(s,a,t){s.exports=t.p+"assets/img/1688369980605-6f3a6273-4fa1-4718-8328-d47508384d5a.efe41f5a.png"},504:function(s,a,t){s.exports=t.p+"assets/img/1688370604177-8ddc59c2-714b-46be-bf02-0686d3a52e09.bc19960c.png"},505:function(s,a,t){s.exports=t.p+"assets/img/1689839296678-6900a5af-7ca0-4b42-96c8-9074b8d3680f.9d1beca8.png"},506:function(s,a,t){s.exports=t.p+"assets/img/1688371902679-f9fa40f0-c7cc-4ca0-903e-804639eed9bc.e4e77248.png"},507:function(s,a,t){s.exports=t.p+"assets/img/1688372187805-c3624e80-e830-4ae4-82cf-285ceb4ce04f.8788a9a1.png"},508:function(s,a,t){s.exports=t.p+"assets/img/1688372380417-d16f2cc7-9154-485a-8249-839d989f9141.4398abdc.png"},509:function(s,a,t){s.exports=t.p+"assets/img/1688372534880-5ded78b6-5f65-4a5e-a7e7-d1ebefadd9ba.707bfebf.png"},510:function(s,a,t){s.exports=t.p+"assets/img/1688372663800-2ac67b8e-f701-4727-b915-a24bfd72531a.3e2fd9c0.png"},511:function(s,a,t){s.exports=t.p+"assets/img/1688373509110-6898447f-e831-43f7-b555-8aaa52789743.e5f5b7f8.png"},512:function(s,a,t){s.exports=t.p+"assets/img/1688373612559-f274b3c9-060d-429c-9ccd-bf092ed0a0f6.43b757e9.png"},513:function(s,a,t){s.exports=t.p+"assets/img/1688373680612-e8c3f77c-d511-496f-a777-7004795c41ff.910b6caf.png"},593:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"认识-source-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识-source-map"}},[s._v("#")]),s._v(" 认识 source-map")]),s._v(" "),a("ul",[a("li",[s._v("什么是 source-map ?")])]),s._v(" "),a("p",[s._v("source-map 是指从 "),a("strong",[s._v("已转换的代码")]),s._v("，映射到 "),a("strong",[s._v("原始的源文件")]),s._v("。")]),s._v(" "),a("ul",[a("li",[s._v("为什么需要 source-map ?")])]),s._v(" "),a("p",[s._v("目前，前端运行在浏览器中的代码实际上和我们编写的代码是由差异的。如代码丑化，es6 -> es5，代码行号、列号等。当我们编写的代码出现问题时，调试编译后的代码找出问题所在就显得很困难了。所以我们需要使用 source-map，来将源文件代码 与 编译后的代码关联起来。\n通过 source-map，可以使浏览器 重建原始源 并在调试器中 显示重建的原始源。")]),s._v(" "),a("h3",{attrs:{id:"使用-source-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-source-map"}},[s._v("#")]),s._v(" 使用 source-map")]),s._v(" "),a("ol",[a("li",[s._v("浏览器启用 JavaScript / CSS 源代码映射。")])]),s._v(" "),a("p",[s._v("在浏览器控制台的设置中即可选择。"),a("img",{attrs:{src:t(503),alt:"image.png"}})]),s._v(" "),a("ol",[a("li",[s._v("在转换后的代码，最后添加一个注释，它指向 source-map 文件。")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//# sourceMappingURL=xxx.map")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"source-map-文件分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-map-文件分析"}},[s._v("#")]),s._v(" source-map 文件分析")]),s._v(" "),a("p",[s._v("source-map 文件格式如下。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"397_ff21a8.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"mappings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wIAEAA,QAAQC,IAAI,2BAEZ,QAJc,Y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sources"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack://webpack-test/./src/title.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourcesContent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"const title = '我是title.js'\\n\\nconsole.log('title.js => console.log')\\n\\nexport default title\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"names"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩后的名字 a.xx 对应的 压缩前的名字 ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourceRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:t(504),alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"webpack-配置生成-source-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置生成-source-map"}},[s._v("#")]),s._v(" webpack 配置生成 source-map")]),s._v(" "),a("p",[s._v("通过 webpack 配置中的 devtool 字段可以配置不同形式的 source-map。\n"),a("img",{attrs:{src:t(505),alt:"image.png"}}),s._v(" "),a("strong",[s._v("此外，需要知道的是有三个值不会生成 source-map：")])]),s._v(" "),a("ol",[a("li",[a("code",[s._v("false")]),s._v("：不使用 source-map。")]),s._v(" "),a("li",[a("code",[s._v("none")]),s._v("：不写"),a("code",[s._v("devtool")]),s._v("值，"),a("code",[s._v("production")]),s._v("模式下的默认值。不生产 source-map。")]),s._v(" "),a("li",[a("code",[s._v("evel")]),s._v("："),a("code",[s._v("development")]),s._v("模式下的默认值。它不生产 source-map，但是它会在 eval 执行的代码中，添加"),a("code",[s._v("//# sourceURL=xxx")]),s._v("指向源文件。")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(506),alt:"image.png"}})]),s._v(" "),a("h4",{attrs:{id:"常见值介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见值介绍"}},[s._v("#")]),s._v(" 常见值介绍")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("**devtool: 'source-map'**")])])]),s._v(" "),a("p",[s._v("生成一个独立的 source-map 文件，并且在打包后的文件中有一个注释指向 source-map 文件。\n"),a("img",{attrs:{src:t(507),alt:"image.png"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[a("code",[s._v("devtool: 'eval-source-map'")])])])]),s._v(" "),a("p",[s._v("会生成 source-map，但是 source-map 是以 DataUrl 添加到** eval 函数里面最后**。"),a("code",[s._v("sourceMappingURL=xxx")]),s._v(" "),a("img",{attrs:{src:t(508),alt:"image.png"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[a("code",[s._v("devtool: 'inline-source-map'")])])])]),s._v(" "),a("p",[s._v("会生成 source-map，但是 source-map 是以 DataUrl 添加到 "),a("strong",[s._v("打包后的文件的后面")]),s._v("。\n"),a("img",{attrs:{src:t(509),alt:"image.png"}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[a("code",[s._v("devtool: 'cheap-source-map'")])])])]),s._v(" "),a("p",[s._v("会生成 source-map，但"),a("strong",[s._v("它没有生成列映射")]),s._v("。它会比 "),a("code",[s._v("devtool: 'source-map'")]),s._v("更加高效。\n"),a("img",{attrs:{src:t(510),alt:"image.png"}})]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("strong",[a("code",[s._v("devtool: 'cheap-module-source-map'")])])])]),s._v(" "),a("p",[s._v("如果说打包后的代码会经过类似"),a("code",[s._v("babel-loader")]),s._v("之类的loader 处理过的话，则使用"),a("code",[s._v("cheap-module-source-map")]),s._v("更好映射出原始代码，不然会有一些细微差别（相比于"),a("code",[s._v("cheap-source-map")]),s._v("）。下面就是行数不一样。\n"),a("img",{attrs:{src:t(511),alt:"image.png"}})]),s._v(" "),a("ol",[a("li",[a("strong",[a("code",[s._v("devtool: 'hidden-source-map'")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:t(512),alt:"image.png"}})]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("strong",[a("code",[s._v("devtool: 'nosources-source-map'")])])])]),s._v(" "),a("p",[s._v("控制台中能生成正确的错误信息，包括错误对应源文件的行数。但是点进去就不行了。\n"),a("img",{attrs:{src:t(513),alt:"image.png"}})]),s._v(" "),a("h4",{attrs:{id:"推荐实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐实践"}},[s._v("#")]),s._v(" 推荐实践")]),s._v(" "),a("p",[s._v("开发阶段、测试阶段："),a("code",[s._v("source-map")]),s._v(" 或者 "),a("code",[s._v("cheap-module-source-map")])]),s._v(" "),a("p",[s._v("发布阶段："),a("code",[s._v("false")]),s._v("、缺省值")])])}),[],!1,null,null,null);a.default=r.exports}}]);