(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,n,t){e.exports=t(359)},202:function(e,n,t){},357:function(e,n,t){},359:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(30),i=t.n(s),r=t(19),l=t(20),c=t(23),u=t(22),h=t(24),p=t(8),d=t(362),m=t(361),b=t(364),f=t(363),w=t(92),v=t.n(w),g=t(93),y=t.n(g),V=function(){return o.a.createElement("div",{className:y.a.noMatch},"404 page")},S=(t(202),function(e){function n(){return Object(r.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to React Typescript tutorial"),o.a.createElement("p",null,"This tutorial aims to create a step by step examples on how to build a scalable one-page application with functional programming pattern in mind"),o.a.createElement("p",null,"In the following lessons, we will extend counter from a single component to fully scalable MVVM app by using React as dom manipulation library"),o.a.createElement("p",null,"You can see the source code in Github:",o.a.createElement("a",{href:"https://github.com/Shwartz/react-ts-lessons"},"https://github.com/Shwartz/react-ts-lessons")),o.a.createElement("h4",null,"Lesson 1"),o.a.createElement("p",null,"Counter widget built based on ReactJS documentation"),o.a.createElement("h4",null,"Lesson 2"),o.a.createElement("p",null,"The same Counter widget however we moving out logic into a model."))}}]),n}(o.a.Component)),C=t(94),k=t.n(C),E=t(53),I=new k.a({highlight:function(e){return n=Object(E.highlight)(e,E.languages.javascript),'<pre class="language-javascript">'.concat(n,"</pre>");var n}}),T=function(e){var n,t=e.children;return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:(n=t,I.render(n))}})},j=function(e){return"\n```javascript\n".concat(e,"\n```\n")},O=function(){var e="\n\n### Description\n\nWe will use a Counter Widget with three methods such as Add, Remove, Input and show a Total amount after a calculation.\n\n### What will you learn\n\n - How to use the *`setState`* method for *`React.Component`*\n - Use of Arrow functions in *`Render()`* method and in props\n - Use of Typescript types for Stateless Components, interface definition and props\n\n\n### Source\n\n[https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-1](https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-1)\n\n\n## Methods in Class (React.Component)\n\n> *`React.Component`* is a Javascript Class.\n\n> *`Stateless Component`* is a function, with a return type of React element.\n\nIt is crucial to define Prototype methods in Javascript class with *`mehtodName(){}`*, instead of *`methodName = () => {}`*.\nSecond example will assign a default value by initialising a Class.\n\nLet's take a closer look at the setState method.\n\nAs per documentation:\n> *`this.props`* and *`this.state`* may be updated asynchronously; you should not rely on their values for calculating the next state.\n\n[ReactJS.org: State updates may be asynchronous](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)\n\n\n".concat(j("\n    ...\n    private add() {\n        const {inputValue, totalValue} = this.state;\n        const result = inputValue + totalValue;\n        this.setState(\n            {\n                inputValue,\n                totalValue: result\n            }\n        );\n    }\n    ...\n"),"\n\nsetState() API accepts Object and Function. The previous example use Object to update state. Nothing wrong with an example but it could fail in some situations (also described in the documentation).\n\nThe recommended way by using Function.\n\n").concat(j("\n    ...\n    private add() {\n        this.setState((currentState: IState) => {\n            const {inputValue, totalValue} = currentState;\n            const result = inputValue + totalValue;\n            return {inputValue, totalValue: result};\n        });\n    }\n    ...\n"),"\n\nCallback in *`setState`* according to API returns current State and Props. That means you will be safe in the asynchronous application.\n\nWhen using this approach, there is no need for *`this`* statement inside the callback.\n\n\nThere is nothing wrong to use *`setState`* with a passing Object. Use this approach when you do not depend on a current State.\n\n").concat(j("\n    ...\n    totalValue(value: number) {\n        this.setState({\n            inputValue: value\n        });\n    }\n    ...\n"),"\n\n## Render method\n\n>There are some rumours about performance issues when using arrow function inside the method you passing to a component. Since this is a sensitive subject, I suggest to read this article, and that should settle any doubts.\n> [React, Inline Functions, and Performance](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)\n\nThe recommended approach to defining all the State values at the top of the render() function\n\n").concat(j("\n    ...\n    render() {\n        const {inputValue, totalValue} = this.state;\n    ...\n"),"\n\nInstead of passing methods to another React component use callback in your component. This way you won't need to pass *`this`* around or even worse to use an ugly *`.bind(this)`*.\n\n\n").concat(j("\n    ...\n    add={() => {\n            this.add()\n        }}\n    ...\n"),"\n\nIn our case, we do not use a callback. Therefore we could write arrow function without closure.\n\n*`() => this.add() `*\n\nHowever, to make code consistent, I suggest using closers always like in the example above.\n\nFor a case when callback returns an argument, it would make sense to show returning type.\n\n").concat(j("\n    <InputWidget\n    ...\n        change={(val: number) => {\n            return this.totalValue(val)\n            }\n        }\n    />\n"),"\n\n## Stateless Components\n\nTo use the full power of a Typescript add types to all props. By adding types, you will help to avoid extra type check and depends on your favourite Editor/IDE it might show all types in advance which is pretty awesome.\n\nIn our widget, we have three callbacks and one static value, which is a number.\n\n").concat(j("\n    interface IProps {\n        change: (value: number) => void;\n        add: () => void;\n        remove: () => void;\n        inputValue: number;\n    }\n"),"\n\nTo use the full power of a Typescript add types to all props. By adding types, you will help to avoid extra type check and depends on your favourite Editor/IDE it might show all types in advance which is pretty awesome.\n\nIn our widget, we have three callbacks and one static value, which is a number.\n\n").concat(j("\n    <Button\n        ...\n        onClick={() => {\n            add();\n        }}\n    >\n"),"\n\nLet's explore onChange handler in the Input component\n\n").concat(j("\n    <Input\n        ...\n        onChange={({currentTarget}) => {\n            change(+currentTarget.value);\n        }}\n        ...\n    />\n"),"\nThe *`onChange`* returns *`React.ChangeEvent`* as an argument. We are interested in value which we can get from *`currentTarget.value`*. The problem is that this property return type is a string. So, we need to convert it to a number which is done by adding *`+`* sign.\n\n## Improvements\n\nSo, we have a cute tiny widget which can calculate some value. We can change the value what we want to add or remove from the total. What if we're going to reuse this widget inside in some other component?\n\nIn that case, we would need to copy over all the methods.\n\nWhat if we want the same component but instead of add or remove to have other operations? So, we would need to change a label and add new methods.\n\nThis approach could become messy as we would create similar but not the same Components and in some case, they would do one thing in other case something else.  How to write tests for this approach?\n\nLet's move to Lesson 2 and try to improve our Counter Widget.\n");return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null,e),o.a.createElement("p",{className:"end"},"~ ~ ~ end ~ ~ ~"))},x=t(54),L=t.n(x),_=function(e){var n=e.change,t=e.add,s=e.remove,i=e.inputValue;return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:L.a.buttons},o.a.createElement(p.a,{variant:"contained",onClick:function(){s()}},"Remove ",i),o.a.createElement(p.a,{variant:"contained",onClick:function(){t()}},"Add ",i)),o.a.createElement(p.d,{type:"number",value:i,onChange:function(e){var t=e.currentTarget;n(+t.value)},className:L.a.inputValue}))},W=t(38),N=t.n(W),R=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).state={inputValue:5,totalValue:0},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"add",value:function(){this.setState(function(e){var n=e.inputValue;return{inputValue:n,totalValue:n+e.totalValue}})}},{key:"remove",value:function(){this.setState(function(e){var n=e.inputValue;return{inputValue:n,totalValue:e.totalValue-n}})}},{key:"totalValue",value:function(e){this.setState({inputValue:e})}},{key:"render",value:function(){var e=this,n=this.state,t=n.inputValue,a=n.totalValue;return o.a.createElement("div",{className:N.a.lesson1},o.a.createElement("h1",null,"Lesson 1 - Simple Counter"),o.a.createElement("h3",null,"Counter Widget demo"),o.a.createElement("div",{className:N.a.codeDemo},o.a.createElement("p",{className:N.a.output},"Total: ",a),o.a.createElement(_,{add:function(){e.add()},remove:function(){e.remove()},inputValue:t,change:function(n){e.totalValue(n)}})),o.a.createElement(O,null))}}]),n}(a.Component),A="\n### Description\n\nThis is the same Counter Widget with the same methods. However, we are going to abstract Labels and Namings for the widget which would give as reusable Widget. We will introduce the Model which will keep methods for the widget separate to avoid copy/paste when re-using widget.\n\n### What will you learn\n\n - Create counter Class and move functionality outside Component\n - Handle communication between counter Class and Component\n\n### Source\n\n[https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-2](https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-2)\n\n## Counter Class\n\nLet's move all functionality outside to the Counter component.\n\n> The main advantage is that functionality doesn't depend on ReactJS and you can use directly to React Native or any other library or framework. Counter component won't change.\n\nA current example is just a small use case. However, imagine an enterprise level app in an agile dev environment where functionality changes are a day to day requirement.\n\n".concat(j("\nexport interface IScope {\n    inputValue: number;\n    totalValue: number;\n}\n\ntype TCallback = (scope: IScope) => void;\n    ...\n"),"\n\nBefore we start, let's add a definition for counter Object and Callback. Those two definitions will help us later, for tracking types.\n\nInterface for counter Object contains inputValue, and totalValue. Both are integers, in typescript integer type is called `number`.\n\nType TCallback, will take as argument our defined counter object, and won't return anything.\n\nAs you notice, we are using *`interface`* and *`type`*. There is a subtle difference between both.\n\n> *`Interface`* -  when you need to implement something. Should be Class, or just Object. Will help to understand the structure, and implementation rules.\n\n> *`Type`* - Just rules, mostly when the same definition is used more than one time in the code, but you do not have to implement anything.\n\nMore on the subject [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)\n\nTo extending functionality, and decouple from DOM, we need to implement a separate class with Observable pattern.\n\n> Observables are declarative - that is, you define a function for publishing values, but a function won't be executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.\n\nTo match basic observable, we need 4 methods *`get()`*, *`set()`*, *`subscribe()`*, *`clear()`* and of ourse *`constructor()`* to initialise class.\n\n").concat(j("\nclass Counter {\n    private listeners: TCallback[];\n    private scope: IScope;\n\n    constructor() {\n    }\n\n    set() {\n    }\n\n    get() {\n    }\n\n    subscribe() {\n    }\n\n    clear() {\n    }\n}    ...\n"),"\n\nScope and listeners initialised for privately handling class state.\n\nIn a *`constructor`*, we set *`initialScope`* which is mandatory.\n*`initialScope`* is mandatory, because we need initial values, to display counter first time on screen.\n\n").concat(j("\n...\nconstructor(initialScope: IScope) {\n    this.scope = initialScope;\n}\n...\n"),"\n\nThen methods *`set`* and *`get`* will handle scope updates.\n\n").concat(j("\n...\nset(scope: IScope) {\n    this.scope = scope;\n    this.listeners.forEach((listener) => {\n        listener(scope);\n    });\n}\n\nget() {\n    return this.scope;\n}\n...\n"),"\n\nNow, since we have *`subscribe()`* method, any time, we call *`set()`* method all listeners will receive notification callback, with a current scope as an argument.\n\nAlso *`get()`* method is useful when you need to know the current scope.\n\nIn context to React, we will use *`get()`* to initialise state in Component. And add the listener in *`subscribe()`* method, to setState.\n\n").concat(j("\n// example from Lesson2.tsx\n...\nthis.counter.update((scope: IScope) => {\n    this.setState(scope);\n});\n...\n"),"\n\nSo, here we are collecting listeners, with the *`subscribe()`* method.\n\nA listener is a callback function, which takes *`scope`* as an argument. Because we use this callback function in several places in the class. We define type *`Tcallback`* (T for a Type, I for an Interface)\n\nAll listeners, (because they can be more than one) we collecting in Array, for using later to notify them, on the scope update.\n\n").concat(j("\n...\nupdate(listener: TCallback) {\n    this.listeners = [...this.listeners, listener];\n}\n\nclear() {\n    this.listeners = [];\n}\n...\n"),"\n\nSince we have a method  *`subscribe()`* to add listeners, we need to create a method to remove them as well. Therefore there is *`clear()`* method to remove all the listeners. We can call it, before we are removing a component.\n\nTo avoid side effects, we are updating the entire Object, not a part of it.\n\n> Side effect - Object by nature is *Mutable*, and when anyone anywhere will make changes in the same Object, any reference to this Object, will also have changes. This means, your code is unpredictable, you don\u2019t know, what\u2019s actual value in Object at a particular state in the application. To avoid those problems, everything in code is \u201cinput and output\u201d. Output always return a new instance.\n\n> Regards to memory, and performance. Javascript garbage collector will destroy, all unused objects. Javascript is a speedy engine, still very questionable performance between creating a new object vs modifying an object. The current approach has apparent advantages versus controversial performance issues. I will copy the same article here: [React, Inline Functions, and Performance](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)\n\n> Very big object manipulation is out of this scope. In short, large datasets usually are managed by chunks, and there are more complex techniques involved.\n\nNow, we have a class, with getters and setters. However, regards to the counter, there is no counter functionality yet.\n\n\n").concat(j("\n...\nadd() {\n    const {inputValue, totalValue} = this.scope;\n    const result = inputValue + totalValue;\n    this.set({inputValue, totalValue: result});\n}\n\nremove() {\n    const {inputValue, totalValue} = this.scope;\n    const result = totalValue - inputValue;\n    this.set({inputValue, totalValue: result});\n}\n\ninputChange(value: number) {\n    const {totalValue} = this.scope;\n    this.set({inputValue: value, totalValue});\n}\n...\n"),"\n\n> There is a place for improvements but let's leave that for the Lesson3\n\nHere is a full class.\n\n").concat(j("\nexport interface IScope {\n    inputValue: number;\n    totalValue: number;\n}\n\ntype TCallback = (scope: IScope) => void;\n\nclass Counter {\n    private listeners: TCallback[] = [];\n    private scope: IScope;\n\n    constructor(initialScope: IScope) {\n        this.scope = initialScope;\n    }\n\n    add() {\n        const {inputValue, totalValue} = this.scope;\n        const result = inputValue + totalValue;\n        this.set({inputValue, totalValue: result});\n    }\n\n    remove() {\n        const {inputValue, totalValue} = this.scope;\n        const result = totalValue - inputValue;\n        this.set({inputValue, totalValue: result});\n    }\n\n    inputChange(value: number) {\n        const {totalValue} = this.scope;\n        this.set({inputValue: value, totalValue});\n    }\n\n    set(scope: IScope) {\n        this.scope = scope;\n        this.listeners.forEach((listener) => {\n            listener(scope);\n        });\n    }\n\n    get() {\n        return this.scope;\n    }\n\n    update(listener: TCallback) {\n        this.listeners = [...this.listeners, listener];\n    }\n\n    clear() {\n        this.listeners = [];\n    }\n}\n\nexport const counter = (initialScope: IScope) => new Counter(initialScope);\n"),"\n\n\nIn case you wonder about this line\n\n*`export const counter = (initialScope: IScope) => new Counter(initialScope);`*\n\nInitialising is done to avoid using *`new`* every time we are using a Counter component, kind of shortcut.\n\n\nIn Lesson2 class, we don't need to add any methods in `Component`. We will connect (don't want to use the word *`hook`* :)) `Counter Class` and `Component` together by joining *`counter.subscribe`* with  *`this.setState`*.\n\nIn Counter component, we initialise counter observable, with a new set of initial values. Next step is to add, those initial values to state Object in Component. Also, we need to subscribe to observable. This subscription will update state, any time we will make changes inside Observable.\n\n").concat(j("\n...\nconst initialState: IScope = {\n    inputValue: 5,\n    totalValue: 0\n};\n\nexport class Lesson2 extends Component<IProps> {\nstate: IScope;\ncounter = counter(initialState);\n\nconstructor(props: IProps) {\n    super(props);\n    this.state = this.counter.get();\n    this.counter.subscribe((scope: IScope) => {\n        this.setState(scope);\n    });\n}\n...\n"),"\n\nIn Lesson 1 our *`inputWidget`* had named methods which is ok if component are not used anywhere, but what if we want to use them for something else? Let's abstract them! For that we change method name from *`remove()`* to *`leftButtonHandler()`* and hard-coded button label *`Remove`* to *`{leftButtonLabel}`*\n\nThat way we can pass any name for a label and with any method, and we can make this component reusable somewhere else in the app with entirely different methods and labels.\n\n> Whenever you create a new component think if you can make it reusable.\n\n\n").concat(j("\n\n...\nrender() {\n    const {inputValue, totalValue} = this.state;\n\n    return (\n        <div className={styles.Lesson2}>\n            <h1>Lesson 2 - Simple Counter</h1>\n\n            <h3>Counter Widget Demo</h3>\n\n            <div className={styles.codeDemo}>\n                <p className={styles.output}>Total: {totalValue}</p>\n                <InputWidget\n                    leftButtonHandler={\n                        () => {\n                            this.counter.remove();\n                        }\n                    }\n                    rightButtonHandler={\n                        () => {\n                            this.counter.add();\n                        }\n                    }\n                    leftButtonLabel={`Remove`}\n                    rightButtonLabel={`Add`}\n                    inputChange={\n                        (value: number) => {\n                            this.counter.inputChange(value);\n                        }\n                    }\n                    inputValue={inputValue}\n                />\n            </div>\n\n            <Description />\n        </div>\n    );\n}\n...\n"),"\n\nNow, we have reusable, stateless component, with custom labels, and no more named methods.\n\n### Space to improve\n\nIn our tutorial, we are moving forward in small steps. Therefore some parts are missing, and you might notice that.\n\nFor example:\n- Counter class contains not necessary methods.\n- The *`get()`* method return same instance, should be `Object.freeze`.\n- Subscribe should return *`remove()`* method, in case you want to unsubscribe from Observable.\n\nOur target is to implement a functional approach, and some parts of code will become obsolete in the next few lessons.\n\n"),B=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null,A),o.a.createElement("p",{className:"end"},"~ ~ ~ end ~ ~ ~"))},H=t(97),D=function(){function e(n){Object(r.a)(this,e),this.listeners=[],this.scope=void 0,this.scope=n}return Object(l.a)(e,[{key:"add",value:function(){var e=this.scope,n=e.inputValue,t=n+e.totalValue;this.set({inputValue:n,totalValue:t})}},{key:"remove",value:function(){var e=this.scope,n=e.inputValue,t=e.totalValue-n;this.set({inputValue:n,totalValue:t})}},{key:"inputChange",value:function(e){var n=this.scope.totalValue;this.set({inputValue:e,totalValue:n})}},{key:"set",value:function(e){this.scope=e,this.listeners.forEach(function(n){n(e)})}},{key:"get",value:function(){return this.scope}},{key:"subscribe",value:function(e){this.listeners=[].concat(Object(H.a)(this.listeners),[e])}},{key:"clear",value:function(){this.listeners=[]}}]),e}(),M=function(e){return new D(e)},F=t(55),J=t.n(F),P=function(e){var n=e.leftButtonLabel,t=e.leftButtonHandler,s=e.rightButtonLabel,i=e.rightButtonHandler,r=e.inputValue,l=e.inputChange;return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:J.a.buttons},o.a.createElement(p.a,{variant:"contained",onClick:function(){t()}},n," ",r),o.a.createElement(p.a,{variant:"contained",onClick:function(){i()}},s," ",r)),o.a.createElement(p.d,{type:"number",value:r,onChange:function(e){var n=e.currentTarget.value;l(+n)},className:J.a.inputValue}))},z=t(39),q=t.n(z),U={inputValue:5,totalValue:0},G=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).counter=M(U),t.state=void 0,t.state=t.counter.get(),t.counter.subscribe(function(e){t.setState(e)}),t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.inputValue,a=n.totalValue;return o.a.createElement("div",{className:q.a.Lesson2},o.a.createElement("h1",null,"Lesson 2 - Simple Counter"),o.a.createElement("h3",null,"Counter Widget Demo"),o.a.createElement("div",{className:q.a.codeDemo},o.a.createElement("p",{className:q.a.output},"Total: ",a),o.a.createElement(P,{leftButtonLabel:"Remove",leftButtonHandler:function(){e.counter.remove()},rightButtonLabel:"Add",rightButtonHandler:function(){e.counter.add()},inputValue:t,inputChange:function(n){e.counter.inputChange(n)}})),o.a.createElement(B,null))}}]),n}(a.Component),K=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).state={selectedIndex:0},t.handleListItemClick=function(e,n){t.setState({selectedIndex:n})},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(d.a,{basename:"/react-ts-lessons"},o.a.createElement("div",{className:v.a.App},o.a.createElement(p.b,null),o.a.createElement(p.c,{container:!0,spacing:16},o.a.createElement(p.c,{item:!0,sm:4,xs:12},o.a.createElement(p.e,{component:"nav"},o.a.createElement(m.a,{to:"/"},o.a.createElement(p.f,{button:!0,selected:1===this.state.selectedIndex,onClick:function(n){return e.handleListItemClick(n,1)}},"Home")),o.a.createElement(m.a,{to:"/lesson-1"},o.a.createElement(p.f,{button:!0,selected:2===this.state.selectedIndex,onClick:function(n){return e.handleListItemClick(n,2)}},"Lesson 1 - Simple counter")),o.a.createElement(m.a,{to:"/lesson-2"},o.a.createElement(p.f,{button:!0,selected:3===this.state.selectedIndex,onClick:function(n){return e.handleListItemClick(n,3)}},"Lesson 2 - Simple counter")))),o.a.createElement(p.c,{item:!0,sm:8,xs:12},o.a.createElement("section",null,o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,path:"/",component:S}),o.a.createElement(f.a,{path:"/lesson-1",component:R}),o.a.createElement(f.a,{path:"/lesson-2",component:G}),o.a.createElement(f.a,{component:V})))))))}}]),n}(a.Component);t(357),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,n,t){e.exports={codeDemo:"Lesson1_codeDemo__zcOLr",output:"Lesson1_output__3XlSb"}},39:function(e,n,t){e.exports={codeDemo:"Lesson2_codeDemo__3N42R",output:"Lesson2_output__22E_1"}},54:function(e,n,t){e.exports={inputValue:"InputWidget_inputValue__GK9Hf",buttons:"InputWidget_buttons__2HfxO"}},55:function(e,n,t){e.exports={inputValue:"InputWidget_inputValue__3o0J0",buttons:"InputWidget_buttons__r5n5S"}},92:function(e,n,t){e.exports={App:"App_App__1OPrb"}},93:function(e,n,t){e.exports={noMatch:"NoMatch_noMatch__2EWDO"}}},[[195,2,1]]]);
//# sourceMappingURL=main.1b9233fc.chunk.js.map