(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{420:function(s,t,n){s.exports=n.p+"assets/img/1660704875650-b24ba3d8-fe50-4946-b851-db6a0079a467.8533e9ab.png"},421:function(s,t,n){s.exports=n.p+"assets/img/1660706380471-e0479d70-3641-4f5b-938a-7da3987eb72d.e9c7045f.png"},422:function(s,t,n){s.exports=n.p+"assets/img/1660716964366-d1619cd1-6a15-444e-9f60-141d6daa2cbf.d8b02956.png"},423:function(s,t,n){s.exports=n.p+"assets/img/1660717462584-69ab37b5-5c23-4c47-adb2-dbfbc4aea126.da778928.png"},424:function(s,t,n){s.exports=n.p+"assets/img/1660805345438-db702d6c-f5f7-48b9-8d35-1ee2d4df9e5b.e5a580ff.png"},486:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、初始化项目"}},[s._v("#")]),s._v(" 1、初始化项目")]),s._v(" "),t("p",[s._v("创建一个文件夹，执行"),t("code",[s._v("npm init -y")]),s._v("命令，此命令会以"),t("strong",[s._v("默认配置")]),s._v("创建一个"),t("code",[s._v("package.json")]),s._v("文件。如不想使用默认配置，则执行"),t("code",[s._v("npm init")]),s._v("，它会交互式的让用户填写相应配置。\n有了"),t("code",[s._v("package.json")]),s._v("之后，我们就可以基于这个文件来管理当前项目：诸如依赖，项目名称，版本号等项目信息。\n"),t("img",{attrs:{src:n(420),alt:"1.png"}})]),s._v(" "),t("h2",{attrs:{id:"_2、创建js文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建js文件"}},[s._v("#")]),s._v(" 2、创建"),t("code",[s._v("js")]),s._v("文件")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("js")]),s._v("文件中写入下面代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\n\nconsole.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"usr-bin-env-node这行代码有什么用呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usr-bin-env-node这行代码有什么用呢"}},[s._v("#")]),s._v(" "),t("code",[s._v("#!/usr/bin/env node")]),s._v("这行代码有什么用呢？")]),s._v(" "),t("p",[t("code",[s._v("**#!/usr/bin/env node**")]),t("strong",[s._v("这行代码是告诉系统在命令行访问此文件时，会在系统环境变量中寻找")]),t("code",[s._v("**node**")]),t("strong",[s._v("解释器来执行此文件")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("#!")]),s._v("用于指定这个脚本文件的解释程序，它通常在"),t("code",[s._v("Linux")]),s._v("或"),t("code",[s._v("Unix")]),s._v("中脚本文件的第一行出现，被称为"),t("code",[s._v("**Shebang**")]),t("strong",[s._v("。")]),s._v(" "),t("code",[s._v("**/usr/bin/env node**")]),t("strong",[s._v("是告诉系统可以在")]),t("code",[s._v("**$PATH**")]),t("strong",[s._v("中查找")]),t("code",[s._v("**node**")]),s._v("**解释器，**不同用户不同的脚本解释器可能安装在不同的目录下。而不管脚本解释器安装在哪个目录下，在全局可以执行的话总归是要将其可执行文件的目录放到系统"),t("code",[s._v("PATH")]),s._v("环境变量中。"),t("strong",[s._v("从而可以解决各个用户的各个脚本解释器路径不同的问题。")])])]),s._v(" "),t("p",[s._v("此时，我们已经可以尝试在"),t("code",[s._v("git bash")]),s._v("中访问(运行)此"),t("code",[s._v("js")]),s._v("文件了。但这还不够，一直通过文件路径访问此"),t("code",[s._v("js")]),s._v("文件会显得非常冗余。我们需要像"),t("code",[s._v("vue-cli")]),s._v("那样，通过简单执行即可执行(访问)相应文件。")]),s._v(" "),t("p",[t("img",{attrs:{src:n(421),alt:"2.png"}})]),s._v(" "),t("h2",{attrs:{id:"_3、注册命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、注册命令"}},[s._v("#")]),s._v(" 3、注册命令")]),s._v(" "),t("p",[s._v("在项目"),t("code",[s._v("package.json")]),s._v("中添加"),t("code",[s._v("bin")]),s._v("字段")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" // package.json\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hx"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.js"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"为什么要添加bin字段呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要添加bin字段呢"}},[s._v("#")]),s._v(" 为什么要添加"),t("code",[s._v("bin")]),s._v("字段呢？")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-json#bin",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm官网对bin的描述"),t("OutboundLink")],1),s._v(" "),t("code",[s._v("bin")]),s._v("字段是**命令名到本地文件名的映射。**当我们使用"),t("code",[s._v("npm")]),s._v("来安装包时，如果该包的"),t("code",[s._v("package.json")]),s._v("中存在"),t("code",[s._v("bin")]),s._v("字段，就会在"),t("code",[s._v("node")]),s._v("对应的环境变量("),t("code",[s._v("node")]),s._v("可执行文件路径)下创建与"),t("code",[s._v("**bin**")]),t("strong",[s._v("字段属性相同名称的")]),t("code",[s._v("**windows**")]),t("strong",[s._v("命令脚本")]),s._v("。此时，我们在命令行界面输入"),t("code",[s._v("**windows**")]),t("strong",[s._v("命令脚本的名称")]),s._v("，就可以执行对应的文件了。如果这个对应的文件不是以"),t("code",[s._v("#!/usr/bin/env node")]),s._v("开头，那么它将不会执行。")]),s._v(" "),t("h3",{attrs:{id:"对于本地项目来说-添加bin字段之后-我们怎样操作才能像上面那样执行对应的命令呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于本地项目来说-添加bin字段之后-我们怎样操作才能像上面那样执行对应的命令呢"}},[s._v("#")]),s._v(" 对于本地项目来说，添加"),t("code",[s._v("bin")]),s._v("字段之后，我们怎样操作才能像上面那样执行对应的命令呢？")]),s._v(" "),t("p",[t("strong",[s._v("我们可以执行")]),t("code",[s._v("**npm link**")]),t("strong",[s._v("将命令挂载到全局，")]),t("code",[s._v("**npm unlink**")]),t("strong",[s._v("取消挂载")])]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[s._v("npm link your-lib")]),s._v(": 将当前项目中"),t("code",[s._v("node_modules")]),s._v("下指定的库文件链接到"),t("code",[s._v("node")]),s._v("全局 "),t("code",[s._v("node_modules")]),s._v("下的库文件")]),s._v(" "),t("li",[t("code",[s._v("npm link")]),s._v(": 将当前项目链接到"),t("code",[s._v("node")]),s._v("全局"),t("code",[s._v("node_modules")]),s._v("中作为一个库文件，并解析"),t("code",[s._v("bin")]),s._v("配置创建可执行文件，添加到系统环境变量中。")]),s._v(" "),t("li",[t("code",[s._v("npm unlink")]),s._v(": 删除当前项目对应的全局"),t("code",[s._v("node_modules")]),s._v("软链接，并删除环境变量中的可执行文件。")]),s._v(" "),t("li",[t("code",[s._v("npm unlink your-lib")]),s._v(": 删除当前项目对应的全局"),t("code",[s._v("node_modules")]),s._v("软链接，以及删除当前项目对应的"),t("code",[s._v("your-lib")]),s._v("依赖")])])]),s._v(" "),t("p",[s._v("此时，我们已经可以通过执行命令来执行对应的文件了。")]),s._v(" "),t("p",[t("img",{attrs:{src:n(422),alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"_4、解析命令行参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、解析命令行参数"}},[s._v("#")]),s._v(" 4、解析命令行参数")]),s._v(" "),t("p",[s._v("目前为止，我们的脚手架只能打印"),t("code",[s._v("Hello World!")]),s._v("，这还远远不够！我们需要让它捕获用户的输入，并作出不同的执行逻辑。\n想要捕获用户的输入，我们可以借助"),t("code",[s._v("nodejs")]),s._v("中全局对象的"),t("code",[s._v("argv")]),s._v("属性。")]),s._v(" "),t("p",[t("img",{attrs:{src:n(423),alt:"image.png"}})]),s._v(" "),t("p",[t("code",[s._v("process.argv")]),s._v("会返回一个数组。数组前两项是固定的："),t("strong",[s._v("第一项为")]),t("code",[s._v("**node.exe**")]),t("strong",[s._v("的所在路径；第二项是打印")]),t("code",[s._v("**process.argv**")]),s._v("**文件的所在路径。**剩余的为用户的输入。\n现在，我们可以对用户的输入进行处理了。\n接下来，我们修改代码，让脚手架能做以下处理：")]),s._v(" "),t("ul",[t("li",[s._v("当用户输入"),t("code",[s._v("-V, --version")]),s._v("时，我们打印"),t("code",[s._v("package.json")]),s._v("中的版本号("),t("code",[s._v("version")]),s._v("属性)。")]),s._v(" "),t("li",[s._v("当用户输入"),t("code",[s._v("-H, --help")]),s._v("时，我们可以打印脚手架的帮助信息。")]),s._v(" "),t("li",[s._v("当用户输入"),t("code",[s._v("ls")]),s._v("时，我们打印当前目录的普通文件(文件名不是以"),t("code",[s._v(".")]),s._v("开头)")]),s._v(" "),t("li",[s._v("当用户输入"),t("code",[s._v("ls -a")]),s._v("时，我们打印当前目录的所有文件")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token hashbang comment"}},[s._v("#!/usr/bin/env node")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" argv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("arg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" argv\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-H'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--help'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Usage: hx <...args>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'args:'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t-H, --help\\t\\t打印帮助信息'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t-V, --version\\t\\t打印项目版本号'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\tls\\t\\t打印当前目录普通文件'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\tls -a\\t\\t打印当前目录所有文件'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-V'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--version'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./package.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" files "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readdirSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cwd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("startsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("我们运行脚手架\n"),t("img",{attrs:{src:n(424),alt:"image.png"}})]),s._v(" "),t("p",[s._v("发现已经成功的对用户的输入进行了处理。\n但是，就目前为止还有很多弊端。每当我们增加一个指令时，都需要去手动修改与"),t("code",[s._v("--help")]),s._v('相关操作；脚手架还没有提供获取"指令帮助信息"的指令，如果提供的话，每一个指令都需要在逻辑操作代码中去嵌入获取帮助信息的操作。无疑，这是重复而又烦恼的。')])])}),[],!1,null,null,null);t.default=e.exports}}]);