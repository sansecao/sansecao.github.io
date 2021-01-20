(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{468:function(v,_,e){"use strict";e.r(_);var l=e(43),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"s-w-weaks-weakm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s-w-weaks-weakm"}},[v._v("#")]),v._v(" S-W-WeakS-WeakM")]),v._v(" "),e("p",[v._v("其实在平常的来发中这一块用的其实很少，但是感觉在现在的工作中，实际的开发过程中需要自己做到：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("不能只是了解一个知识点，然后再去用它，做项目每使用一项技术（框架，组件库，插件，新的语言体系），事先都得需要看项目中的可行性，存在哪些潜在风险，以及潜在风险是否有能力去修复，以及社区是否强大")])]),v._v(" "),e("li",[e("p",[v._v("如果可以保持技术的领先，最好让技术带领项目走，而不是项目带着技术走，不能因为技术儿影响项目的主要功能点，每一个项目总是会有某些不好完成的功能和效果，但是需求出来的时候至少心中要有实现的方案，所以要更多的学习，有些技术点不是不好实现，而是在遇到问题之前没有了解相关的技术，所以觉得某些功能实现不了")])])]),v._v(" "),e("p",[v._v("这是前段时间做完公文流转V1.0.0之后的一个比较明确的感想，扯远了，还是说今天的要弄懂的东西吧")]),v._v(" "),e("h2",{attrs:{id:"_1-set-集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-set-集合"}},[v._v("#")]),v._v(" 1. Set(集合)")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("Set本身是一种新的数据结构，类似于数组，但是成员是唯一且无序的，没有重复值，有一点值得注意：在Set内部判断两个是否相等的时候，认为"),e("code",[v._v("NaN")]),v._v("是等于"),e("code",[v._v("NaN")]),v._v("的")])]),v._v(" "),e("li",[e("p",[v._v("实例属性：")])])]),v._v(" "),e("ul",[e("li",[v._v("constructor:构造函数")]),v._v(" "),e("li",[v._v("size:元素数量")])]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("实例方法")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("操作方法")]),v._v(" "),e("ul",[e("li",[v._v("add(value)")]),v._v(" "),e("li",[v._v("delete(value)")]),v._v(" "),e("li",[v._v("has(value)")]),v._v(" "),e("li",[v._v("clear()")])])]),v._v(" "),e("li",[e("p",[v._v("遍历方法")]),v._v(" "),e("ul",[e("li",[v._v("keys()")]),v._v(" "),e("li",[v._v("values()")]),v._v(" "),e("li",[v._v("entries()")]),v._v(" "),e("li",[v._v("forEach()")])])])]),v._v(" "),e("p",[v._v("这个方法和相关的知识，平成用的还是挺多的，也没什么好说的，如果又不知道的，可以翻看之前的文章，写这一片文章主要也不是在了解这个方法，而是去了解和熟悉下面的几种方法")]),v._v(" "),e("h2",{attrs:{id:"_2-weakset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-weakset"}},[v._v("#")]),v._v(" 2. WeakSet")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("首先弄清楚一点，这四种数据结构都不是数组，Set的成员可以为任意类型的值，但是WeakSet的成员只能是对象")])]),v._v(" "),e("li",[e("p",[v._v("WeakSet对象中储存的对象值都是被弱引用的，也就是说，垃圾回收机制不考虑WeakSet对该对象的应用，如果没有其他的变量或者属性引用这个对象值，则这个对象会被垃圾回收掉（不会考虑对象还存在于WeakSet中），所以，WeakSet对象里面有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能是不一致的")])]),v._v(" "),e("li",[e("p",[v._v("属性：")])])]),v._v(" "),e("ul",[e("li",[v._v("constructor：构造函数任何一个具有Iterable接口的对象，都可以作为参数")])]),v._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[v._v("方法")])]),v._v(" "),e("ul",[e("li",[v._v("add(value)")]),v._v(" "),e("li",[v._v("has(value)")]),v._v(" "),e("li",[v._v("delete(value)")]),v._v(" "),e("li",[v._v("clear() "),e("font",{attrs:{color:"red"}},[v._v("已经被废弃")])],1)]),v._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("font",{attrs:{color:"red"}},[v._v("值得注意一点的是：ES6 规定 WeakSet 不可遍历，也没有办法拿到它包含的所有元素")])],1)]),v._v(" "),e("h2",{attrs:{id:"_3-map-字典"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-map-字典"}},[v._v("#")]),v._v(" 3. Map(字典)")]),v._v(" "),e("ol",[e("li",[v._v("Set(集合) 与 Map(字典) 的区别：")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("共同点：集合、字典可以储存不重复的值")])]),v._v(" "),e("li",[e("p",[v._v("不同点：集合是以"),e("code",[v._v("[value, value]")]),v._v("的形式储存元素，字典以 "),e("code",[v._v("[key, value]")]),v._v("的形式储存")])])]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("属性")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("constructor：构造函数 "),e("font",{attrs:{color:"red"}},[v._v("任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以当作map构造函数的参数")])],1)]),v._v(" "),e("li",[e("p",[v._v("size：返回字典中所包含的元素个数")])])]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("操作方法")])]),v._v(" "),e("ul",[e("li",[v._v("set(key, value)")]),v._v(" "),e("li",[v._v("get(key)")]),v._v(" "),e("li",[v._v("has(key)")]),v._v(" "),e("li",[v._v("claer()")])]),v._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[v._v("遍历方法")])]),v._v(" "),e("ul",[e("li",[v._v("keys()")]),v._v(" "),e("li",[v._v("values()")]),v._v(" "),e("li",[v._v("entries()")]),v._v(" "),e("li",[v._v("forEach")])]),v._v(" "),e("h2",{attrs:{id:"_4-weakmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-weakmap"}},[v._v("#")]),v._v(" 4. WeakMap")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("WeakMap对象是一组键值对的集合，其中的键是弱引用对象，而值可以任意")])]),v._v(" "),e("li",[e("p",[v._v("值得注意的是，WeakMap弱引用的只是键名，而不是键值，键值依然是正常引用")])]),v._v(" "),e("li",[e("p",[v._v("WeakMap中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一个对象，这个对象将会被垃圾回收机制回收（相对应的key就成为了无效的了），所以WeakMap的key是不可枚举的")])]),v._v(" "),e("li",[e("p",[v._v("属性")])])]),v._v(" "),e("ul",[e("li",[v._v("constructor：构造函数")])]),v._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[v._v("方法：")])]),v._v(" "),e("ul",[e("li",[v._v("has(key)")]),v._v(" "),e("li",[v._v("set(key, value)")]),v._v(" "),e("li",[v._v("get(key)")]),v._v(" "),e("li",[v._v("delete(key)")])]),v._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("Set")]),v._v(" "),e("ul",[e("li",[v._v("成员唯一、无序且不重复")]),v._v(" "),e("li",[v._v("[value, value]，键值与键名是一致的（或者说只有键值，没有键名）")]),v._v(" "),e("li",[v._v("可以遍历，方法有：add、delete、has")])])]),v._v(" "),e("li",[e("p",[v._v("WeakSet")]),v._v(" "),e("ul",[e("li",[v._v("成员都是对象")]),v._v(" "),e("li",[v._v("成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏")]),v._v(" "),e("li",[v._v("不能遍历，方法有add、delete、has")])])]),v._v(" "),e("li",[e("p",[v._v("Map")]),v._v(" "),e("ul",[e("li",[v._v("本质上是键值对的集合，类似集合")]),v._v(" "),e("li",[v._v("可以遍历，方法很多可以跟各种数据格式转换")])])]),v._v(" "),e("li",[e("p",[v._v("WeakMap")]),v._v(" "),e("ul",[e("li",[v._v("只接受对象作为键名（null除外），不接受其他类型的值作为键名")]),v._v(" "),e("li",[v._v("键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的")]),v._v(" "),e("li",[v._v("不能遍历，方法有get、set、has、delete")])])])]),v._v(" "),e("back-to-top"),v._v(" "),e("gitask")],1)}),[],!1,null,null,null);_.default=a.exports}}]);