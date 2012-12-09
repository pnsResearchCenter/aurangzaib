 /// libraries
 {
     // jQuery: for manipulating the DOM [ http://jquery.com ]
     // d3: like jQuery for SVG elements [  http://d3js.org/ ]
     // Processing.js: for manipulating canvas elements [ http://processingjs.org ]
     // Backbone.js: for managing client-side data structures [ http://backbonejs.org ]
     // Underscore.js: powerful functional programming ideas [ http://underscorejs.org ]
     // Twitter Bootstrap: accelerates UI styling and events [ http://twitter.github.com/bootstrap ]
     // Modernizr: browser feature detection  [ http://modernizr.com ]
     // MathJax: Latex math formulas in the browser [ http://www.mathjax.org ]
     // HTML5 Boilerplate: Industry-standard starting point for HTML5-based sites [ http://html5boilerplate.com/ ]
     // MooTools: Object oriented framework similar to jQuery [ http://mootools.net/ ]
     // Prototype: framework [ http://prototypejs.org/ ]
     // Dojo: framework [ http://dojotoolkit.org/ ]
     // YUI: Framework for building interactive web app [ http://yuilibrary.com/ ]
     // three.js: 3D rendering library using WebGL [ http://mrdoob.github.com/three.js/ ]
     // Normalize.css: CSS to make elements look the same across browsers [ http://necolas.github.com/normalize.css/ ]
     // MetroUICSS : great css based windows metro layouts [ http://metroui.org.ua/ ]
     // less : The dynamic stylesheet language [ http://lesscss.org/ ]
 }
 /// basic
{
     // object and array are mutable while #, bool and null are immutable
     // primitive type => #, bool and null
     // object type => object and array 
     // js has no disctinct b/w int and float
     {
         Math.pow(2, 53) // => 9007199254740992: 2 to the power 53
         Math.round(.6) // => 1.0: round to the nearest integer
         Math.ceil(.6) // => 1.0: round up to an integer
         Math.floor(.6) // => 0.0: round down to an integer
         Math.abs(-5) // => 5: absolute value
         Math.max(x, y, z) // Return the largest argument
         Math.min(x, y, z) // Return the smallest argument
         Math.random() // Pseudo-random number x where 0 <= x < 1.0
         Math.PI // π: circumference of a circle / diameter
         Math.E // e: The base of the natural logarithm
         Math.sqrt(3) // The square root of 3
         Math.pow(3, 1 / 3) // The cube root of 3
         Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
         Math.log(10) // Natural logarithm of 10
         Math.log(100) / Math.LN10 // Base 10 logarithm of 100
         Math.log(512) / Math.LN2 // Base 2 logarithm of 512
         Math.exp(3) // Math.E cubed
     }
     // since js supports "binary float type".its min resolution > 0.1, to
     // resolve this issue future js versions may support "decimal numeric type"
     // Date obj has 0 based months and 1 based days
 }
 /// object
 {
     // strings : immut so when they changed, new string is created & changes assigned to that. 
     // regex is a mehtod of searching text in a string. null is an object
     // undefined => system level, error-like absence of value
     // null => program level, intended absence of value
     // in clientside JS , window object is global main object
     // wrapper object => strings are not obj,they are primitive but still they have properties.
     // its because whenever we access any of string properties, a temp obj is created to 
     // resolve property-reference, after that, wrapper obj is discarded
     {
         var s = "hello";
         s.len = 4; // wrapper object will be created
         var t = s.len;
         console.log(t); // undef, strings are primitive and changes were done on wrapper obj
     }

     // objects are checked on the basis of reference and not on value or property basis.
     // if you use = for object or array assigning, it'll just pass reference and changing
     // any one of them will change both just like pointers. to avoid it, you must use full
     // loop copy method. objects are also called reference type
     // a === b is for reference checking.'for loop' is used for value and property checking
     // == do implicit b/f testing while === dont
     // parsing -- split file/input in bits of data that can be easily stored or manipulated.
     //
     // Object-to-primitive conversion => when object and primitive encounter with each
     // other by ==, + or != operators, object is converted to number. Except Date object,
     // which is converted to string.for all other operators, whenever object and number
     // encounter, object is always converted to number.
     // variable with no initializing is undef. 
     var a; // declare with var for local objects
 }
 /// hoisting :
 {
     // whenever a variable is defined, it remains until parent loop terminates. for e.g: 
     for(::: ) {
         var a;
         for(::: ) {
             var b;
         } // b should terminate here but wont
     } //a & b destruct here
     //
     // although b should be destructed a/f its function gone out of scope.
     // but it remains until its parent loop gone out of scope." so, it means that :
     // if a variable remains even after its loop ended. so it must be 
     // present even its loop hasn't started. Its hoisting
 }
 /// CallObject and property resolution :
 {
     //  in js, local variables are actually properties of object.
     //  we can refer to global object by "this"
     //  but it can't be used for call object. its language implem. detail.
     //  Call object => objects that are used by language to
     //  store the local variable and function parameters
     //
     // now we know local variables are actually properties of global call
     // objects. this notion creates a list/chain of objects in which these local
     // variables have been defined. when local variables are needed,
     // js searches them in the objects. Its called "property resolution"
     //
     // when variable isn't found in any object.its called "resolution error". every
     // function has its own "call object" to store its local variables and fn param.
     //
     // if there is no function in code => only 1 object(global) is there. 
     // if there is a function in code  => 2 objects(1 global, 1 call object) are there.
     // this creation of "call object" depends upon the level of nesting within function 
 }
 /// factorial  
 {
     function factorial(a) {
         for(var i = 0; i < a; i++) {
             a *= (a - 1);
         }
     }
     data[i++] *= 2;
     data[i++] = data[i++] * 2;
     // above both expressions are different 
 }
 /// this program shows how eval() works
 {
     var geval = eval(),
         // creating alias
         x = "global",
         f = function() {
             var x = "local";
             eval("x += 'changed' ");
             // direct call
             // here local var value will be changed b/c eval is used
         },
         g = function() { // effect shown a/c to ecma5
             var y = "local";
             geval("y += 'changed' ")
             // here global var will be created and changed,
             // as alias is used, indirect call
         };
 }
 /// function creation
 var anyfunction = function(argument) { // function statement method
         // :::::::
     };
 // when statement method is used, end at ;

 function anyfunction(argument) {
     // function expression method
     // :::::: ;
 }
 /// how to use for/in
 var a = {
     x: 1,
     y: 2,
     z: 3
 };

 var i = {};
 var b = 0;
 for(i[b++] in a) { // all a elements are save in i array
     // ::::::
 };

 /// format of exception throw
 if(x > 0) {
     throw new Error(" program is fucked");
 }
 try {
     var n = prompt(" please enter an integer # ");
     var f = factorial(n);
     alert(n + "! = ");

 } catch(ex) {
     alert(ex);
     // it will show which type of exception is captured
 } finally {
     //::::
     ;
 }

 /// "with" statement
 // 'with' is used to give an object temporary scope of some class
 with(document.form[0]) {
     address.value = "";
     // otherwise: document.form[0].address.value ;
 }
 // to avoid "with" // 'with' is deprecated in ecma5 , so alt method is :
 {
     var f = document.form[0];
     f.address.value = "";
 }

 /// methods to create an object
 {
     // By object literal
     var varname = {
         x: 0,
         y: 0
     };

     //  By "new" ctor invocation
     var varname = new Object();
     // object( ) can have arguments,
     // other classes can be used too like Date( )
     //  By object.create ( only ecma5)
     var varname = Object.create();

     // in object.create( ) method, providing no argument will create just
     // bare bone object, wont even have basic properties like toString( ) etc
     var abc = {};
     var abc = new Object();
     var abc = Object.create(Object.prototype);
     //  above three stats will create the basic standard object
     var abc = {
         x: 0,
         y: 0
     };
     var abc = Object.create({
         x: 0,
         y: 0
     });
 }

 /// time and date
 {
     var now = new Date(),
         // current date
         then = new Date(2010, 0, 1),
         // year,month,day
         later = new Date(2013, 3, 4, 17, 23, 33, 44); // yr,mn,dy,hr,mm,ss,ms
     now.getDate(); // getData( ) is imagined function
 }
 /// in order to emulate object.create( ) in ecma3 :
 { // g.cl.c

     function inherit(p) {

         if(p == null) return TypeError;
         // means that p is not an object but undef or null
         // (since == is used, so null and undef both covered)
         if(Object.create) return Object.create(p);
         // if ecma5 is used
         var t = typeof(p);
         // just for checking purpose
         if(t !== "object" && t !== "function") return TypeError;
         // should not be primitive
         // rechecking the type of p
         // method : 1

         function f() { // create a dummy function for ctor purpose
         }

         f.prototype = p;
         // inheriting the properties of p to f
         return new f();

         // method : 2
         return defineProperties({}, Object.getPrototypeOf(p));
         // return newly created object with prototype of p
         // inherit function is not a replacable for object.create ( ) as it can't :
         //  create object of null property
         //  have second argument
     }

     // another version

     function inherit(o, p) {
         if(0 === o) return TypeError;
         (Object.create) && (p = Object.create(object.prototype));
         ((typeof(o) === "object" || typeof(o) === "function")) && (defineProperty(p, Object.getPrototypeOf(o)));
     }

     // when you want to guard your object from unintended editing by any function,
     // you can use inherit( argu )
     var o = {
         x: "i dont wanna change"
     };

     Date(inherit(o));
     // Data ( inherit ( o ) ) // same as // var a = o ; Date ( a )
     // copy of o is used, no change in o
     // above func shows how use inherit( ) to use obj as read-only
 }
 /// using the associative array :
 {
     function addStock(prototype, stock, share) {
         prototype["stock"] = share;
     }

     // using above code, user can easily set value of its property, its not
     // possible with identifier notation ( property.stock ) because it cant set
     // value in runtime. its b/c expression method uses " " which is js datatype
     // ( string ), so expression can be eval. at runtime but identifier cant
 }

 /// in order to calculate total share using for/in:

 function getquote() {
     // function to get the quotation of shares
 }

 function totalShares(portfolio) {
     var total = 0.0;
     for(var stock in portfolio) { // shares is a enum property of portfolio
         var shares = portfolio.stock; // portfolio [ stock ] ;
         var price = getquote(shares);
         total += shares * price;
     }
     return total;
 }

 /// errors in inheritance :
 {
     var len;
     var object = new Object(Object.prototype);
     // suppose its an object
     len = object.p;
     // not an error, p is not a property
     len = object.p.l;
     // an error, l is not a property of p which itself not a property of object
     // to avoid above error
     if(object) if(object.p) if(object.p.l) {
         len = object.p.l;
     }
     // OR
     if(Object && Object.p && Object.p.l) {
         len = Object.p.l;
     }
 }

 /// how inheritance works :
 {
     var oneVar = {
         x: 0
     };
     var twoVar = inherit(oneVar);
     // twoVar has properties of oneVar as well as of Object.prototype
     twoVar.x = 5;
     // it wont effect prototype chain
     console.log(oneVar.x);

     // its value is still 0
     // it shows prototypal inheritance works while querying and not while setting
     /*
     consider case when "a" inherits "p" and "p" has a setter function. now when "a"
     creates a new own property of same name.then rather than creating new prop. the
     inherited property will be changed but once again, no change in prototypal object
     */
     // read-only property cant be inherited
 }

 /// silent errors
 { /* sometimes an object doesn't allow to add value to it or a property. like : */

     Object.prototype = 0;
     // it wont change it, as its unchangable
     /* in ecma3, its silent error, but in ecma5strict , it shows TypeError */

     // read-only property can be changed by defineProperty( ).
     // read-only inherited property can be hidden by defineProperty( ).
 }

 ///delete
 {
     /*
     deletes property not an object, obj is del by garb collec.
     { inherited, nonconfig. , non-exist, constant } cant be deleted

     deletion returns true for      => inherited , non-exist , const
     deletion returns TypeError for => nonconfig

     value of property can be deleted too
     global var cant be deleted

     object which inherits some property, now when prototypal object deletes the
     property,it also get removed from inherited objects
     */

     var o = {
         x: 0
     };
     delete o["solar panel"];
     //remove value of o
     delete o.x;
     // removes x from o
     delete o;
     // error, object are deleted by garb. collec
     delete Object.prototype;
     // TypeError, as nonconfig
     delete 1;
     // not del, returns true
     globalVar = 1; //created w/o var
     delete this.globalVar;
     // cant be del as global variable
 }

 /// checking if property exists
 { /* method1 :using "in" */
     var x = {
         o: 1
     };

     "toString" in x;
     // returns false as property is present but not enumerable
     "o" in x;
     // true
     // it returns true for own or inher. prop.
     /* method2 :using ownProperty( ) */
     x.ownProperty("o");
     // true
     x.ownProperty("toString");
     // false, only true for own prop
     /* method3 :using propertyIsEnumerable */
     x.propertyIsEnumerable("toString");
     // false, not own
     x.propertyIsEnumeralbe("some_nonenum_prop");
     // false,not enum prop
     // propertyIsEnumerable is true only for: own && enum
     // normally, user def prop are enum
     /* method4 :using !== undefined */
     var x = {
         a: 0
     };
     x.a !== undefined;
     // true , property exists
     // but there is a thing which above method cant distinguish
     var x = {
         a: 0,
         b: undefined
     };
     x.a !== undefined;
     // true
     x.b !== undefined;
     // false, it understand undefined prop to be non-exist
     "b" in x;
     // true, "in" can disting "undef prop" from "non-exist"
     x.b != undefined;
     // true, its a workaround for below statement
     x.b !== undefined;
     // false, strict checking
 }
 /// to skip own enum property
 {
     var o = {
         a: 1,
         b: 2,
         c: 3
     };

     var p;
     for(p in o) {
         if(o.OwnProperty(p)) continue;
         // if  (p.instanceof(o)) continue ;
         // if ( o[p] === "Object") continue ;
     }
 }

 /// to skip own enum function
 {
     var o = {
         a: 1,
         b: 2,
         c: 3
     };
     var p;
     for(p in o) {
         if(o[p] === "function") continue;
     }
 }

 /// to show list of "enum" properties
 {
     function enumList() {
         var o = {
             a: 1,
             b: 2,
             c: 3
         };
         for(p in o) { // only enum prop
             console.log(p);
         } // a,b,c will be shown but not toString
         // "in" shows 'own' and 'inherited' prop but not non-enum prop
     }
 }

 /// property extending :
 { /* copy all prop of a to b, same name prop are overwritten */

     function extend(a, b) {
         var prop;
         for(prop in a) {
             b[prop] = a[prop];
         }
     }
 }

 /// property merging :
 { /* copy all prop of a to b, b with same name prop are not overwritten */

     function merging(a, b) {
         var prop;
         for(prop in a) {
             if(b.ownProperty("prop")) { // inherited are not included
                 continue;
             }
             b[prop] = a[prop];
         }
     }
 }

 /// property restricting :
 { /* delete all prop of b which are not present in a  */
     {
         function restricting(a, b) {
             var prop;
             for(prop in b) { // either inherited or own
                 if(!(prop in a)) { // if this prop not present in a
                     delete b[prop];
                 }
             }
         }
     }
 }

 /// property subtracting :
 { /* delete all prop of b which are present in a  */

     function subtracting(a, b) {

         var prop;
         for(prop in a) { // either inherited or own
             if(prop in b /*b.ownProperty( "prop" )*/ ) {
                 delete b[prop];
             }
         }
     }
 }

 /// copy properties of a and b in new object, if properties are in common, copy values of a
 {
     function union(a, b) {

         // method - 1 :
         var p;
         extend(a, p);
         extend(b, p);
         return p;

         // mehtod - 2 :
         return extend(a, extend(b, {}));

         // first, properties of b are assigned to { } i.e. new object
         // then properties of a are also added in { }
         // this function is diff from book as we returned 2nd argument
         // while book returned 1st argument
     }
 }

 /// create new function which has properties common in a & b
 {
     function intersection(a, b) {
         var prop, intersectVar;
         for(prop in a) {
             // method 1 :
             if(prop in b) {
                 intersectVar.push(prop); // intersect[prop] = b[prop];
             }
             // method 2
             prop in b && intersectVar.push(prop);
         }
     }
 }

 ///function which returns array of enum properties of object :
 {
     function enumprop(a) {
         var array = [];

         for(var prop in a) {
             if(a.propertyIsEnumerable("prop")) {
                 array.push(prop);
             }
         }

         // ecma5 builtin functions :
         a.keys();
         // returns all own enum prop
         a.getOwnPropertyNames();
         // return all own prop whether non-enum or enum
     }
 }
 /// getter and setter accessor properties
 {
     var anObject = { // 'function' is replaced by 'get' and 'set'
         x: 1.0,
         // own, read and write data-property
         y: 1.0,

         get r() { // read-only
             return Math.sqrt(this.x * this.x, this.y * this.y);
         },

         // ',' is necessary at the end of getter and setter functions,
         // as they are treated as property
         set r(newValue) { // write-only, cant read
             var oldValue = Math.sqrt(this.x * this.x, this.y * this.y);
             var ratio = newValue / oldValue;
             this.x *= ratio;
             // x is accessed by this.x
             this.y *= ratio;
         },

         get theta() { // read only
             return Math.atan2(this.y, this.x);
             // returning slope
         }
         // get means 'read-only' property
         // set means 'write-only' propery
     };
 }

 // js has two type of properties :
 // 1 - data properties ( like a = { x:0 } )
 // 2 - accessor properties ( like getter and setter )
 /// an object with setter and getter accessor properties :
 {
     var serialnum() {
         $n: 0,
         // read/write, private, data-property
         get
         number() // accessor read-only property
         {
             return this.$n;
         },

         get
         next() // accessor read-only property
         {
             return this.($n++);
         },

         set
         number(n) // accessor write-only property
         {
             if(n > this.$n) { // just a condition
                 this.$n = n;
             } else throw(" only greater number can be set ");
         }
     };
 }

 /// another object with accessor property which returns randomly gen num :
 {
     var random() // object with getter-accessor-readonly property
     {
         get
         octet() {
             return Math.floor(Math.random * 256);
             // numbers from 0 to 255
         }, // notice ',' here
         get
         unsign_int() {
             return Math.floor(Math.random * 65536);
             // numbers from 0 to 2^16
         },

         get
         sign_int() {
             return Math.floor((Math.random * 65536) - (65536 / 2));
             // numbers from 0 to 2^16/2
         }
     }
 }

 /* object has :

 1 - name
 2 - data property : value , writable , enumarable , configurable
 3 - accessor property : get , set , enumerable , configurable

 */

 // ecma5 has 'property descriptor' object which defines either it is a
 // data-property or accessor-property. defines value/get, writable/set,
 // configurable, enumarable properties
 /// getOwnPropertyDescriptor
 {
     // it shows the values of property descriptor object that are 'own'
     var a = {
         x: 3
     };
     Object.getOwnPropertyDescriptor(a, "x");
     // data property
     // value:3 , writable:true , configurable:true , enumarable:true
     Object.getOwnPropertyDescriptor(random, "octet");
     // accessor property
     // get :true , set :false , configurable:true , enumarable:true
     Object.getOwnPropertyDescriptor({}, "x");
     // newly created object with Object.prototype
     // undefined, doesnt exist, all inher prop
     Object.getOwnPropertyDescriptor({}, "toString");
     // inherited property from Object.prototype
     // undefined, toString is inherited not own
 } /* to show values of property descriptor for inherited, getPrototypeOf( ) */


 /// defineProperty ( )
 {
     // syntax is : Object.defineProperty( object, "property", { attributes } )
     var a = object.create({ // creating object
         x: 0 // default attributes i.e read/write, enum, config
     });

     Object.defineProperty(a, "x", { // setting properties
         values: 12,
         writetable: false,
         enumerable: false,
         configurable: true
     });

     a.keys();
     // returns nothing as x is non-enumerable
     if(a.propertyIsEnumerable(x));
     // false, as property is own but not enumerable
     // changing property value
     a.x = 1;
     // false, as readonly, writable:false, TypeError
     // now set property to read and write
     Object.defineProperty(a, "x", { // a is object, x is property, writable is
         // attribute
         writable: true
     });
     a.x = 1;
     // true, as now read-write permission, writable:true
     Object.defineProperty(a, "x", { // changing prop
         writable: false,
         configurable: true
     });

     a.x = 3;
     // false, property cant be written b/c writable : false
     Object.defineProperty(a, "x", { // changing property using data property
         value: 3 // value changed from 0 to 3
     })

     // property is configurable, so for writable:false property,
     // value can still be changed by defineProperty( ) method
     Object.defineProperty(a, "x", { // changing property using accessor property
         get func() { // accessor property
             return 3;
         } // value of x changed using accessor property, although writable:false
     });

     // so, value of a property can still be changed even if
     // writable:false. using either configurable method or by accessor-prop method
     // defineProperty(  ) is used just for own property and not for inher property
 }

 /// multi arguments defineProperties( )
 {
     // till now we saw how use defineProperty( ) for single, already defined object.
     // but it can also be used for not-yet-defined objects
     var newObject = Object.defineProperties({}, { // new, empty object by literal
         // this is a way to create new object and then define its prop
         x: { // 1st property of newObject
             value: 3,
             writable: true,
             enumarable: false,
             configurable: true
         },

         y: { // 2nd property of newObject
             value: 12,
             writable: false,
             enumarable: true,
             configurable: true
         },
         z: { // 3rd property of newObject
             get r() { // read-only accessor property
                 return Math.random() * 12;
             }, enumarable: true
         }
     })

     // above code could also be created with the combination of Object.create( )
     // and Object.defineProperty( ) .
     // now, whenever we need to change properties
     Object.defineProperty(newObject, "x", {
         value: 33;
     }) // 'value' of 'x' of 'newObject' is changed
     /*
 if data-property is nonconfig, then changing its writable attribute from false
 to true is not allowed, but changing from true to false is allowed

 if object is configurable but not-writable :        its value 'can be' changed
 if object is nonconfig and not-writable :           its value 'can't be' changed
 */
 }

 /// better version for extend(  ), also copying the attributes
 {
     // defineProperty( ) can alter existing prop but can't create them unlike
     // defineProperties( )
     var proto = Object.getPrototypeOf(o);
     Object.defineProperty(proto, "extend", {
         // Object.prototype( ) can be used instd of Object.getPrototypeOf ( o )
         // when you know that object 'o' is inherited from Object.prototype( )
         configurable: true,
         enumerable: false,
         writable: false,
         value: {
             function(o) {
                 var name = Object.getOwnPropertyNames(o),
                     // all the own( enum as well as non-enum ) properties names
                 for(
                 var loopVar = 0;
                 loopVar < name.length;
                 loopVar++) {
                     if(name["loopVar"] in this) { // check if prop exists in obj
                         continue;
                         // if does, loop again
                     },

                     var description = Object.getOwnPropertyDescriptor(o),
                         // all attritubes
                         Object.
                         defineProperty(proto, "name[loopVar]", {
                             description
                         });
                     // name[loopVar] shows property name
                 }
             }
         }
         // prototype is an object from which objects inherit, base prototype is 'Object'
         // thats why we use Object.prototype( )
     });

     /*
 get prototype of object
 get all properties of desired object
 check if it already exists in our object
 if not, then clone its description to our object
 */
 }


 ///getter and setter for Object literal
 {
     // Object literal method dont have any way to define getter and setter
     // unlike Object.create ( )
     __lookupGetter__();
     // used to access the getter accessor-property
     __lookupSetter__();
     // used to access the setter accessor-property
     __defineGetter__();
     // used to set the getter accessor-property
     __defineSetter__();
     // used to set the _setter accessor-property
 }

 /// some concepts
 {
     // to check for own property :
     if(someObject.ownProperty(someObj));

     // to check for own instance :
     p.instanceof(o);
     p.isPrototypeOf(o);

     // to check for enum property :
     if(someObject.propertyIsEnumerable(someProp));

     // to query prototype in ecma5 :
     someObject.getPrototypeOf(objectName);
 }

 /// finding the class of an Object
 {
     // there is no way to find class but we can create our own function

     function classOf(o) {
         if(o === null) {
             throw "null";
         } // not needed in ecma5
         if(0 === o) { // if (o === undefined)
             throw "undefined";
         } // not needed in ecma5
         return Object.prototype.toString.call(o).slice(8, -1); // from the 8th of endside to 2nd last
     }

     classOf({}); // Object
     classOf(new f()); // Object
 }
 /// Object locking
 {
     Object.preventExtensions(); // it makes object non-extendable
     isExtensible(); // to find if object is Extensible or not
     // new properties cant be added or del in object
     Object.seal(); // it makes object non-extendable and non-config
     isSealed(); // to find if object is sealed or not
     // no new property can be added or del. cant change existing prop
     Object.freeze(); // object non-ext and non-config, data prop readonly
     isFrozen(); // to find if object is frozen or not
     // no new property can be added, existing cant be changed and all data
     // prop are readonly. if you have accessor prop, they are still workable
     // all above locking methods are useful for Own properties only.
     // all prototypal( from where you inherited ) properties are still out of lock
     // example of how to create a locked Object
     var myObject = Object.seal(Object.create(Object.freeze(x: 0), { // property x is frozen
         y { // property y is non-config
             value: 9,
             configurable: false,
             enumarable: false
         }
     }));
 }

 /// using JSON for stringify and parse the object
 {
     var myObject1 = Object.defineProperties({}, { // created bare object
         a { // defining property of myObject1
             value: 213,
             configurable: true,
             extendable: true,
             writable: false
         }
     });

     var myObject2 = JSON.stringify(myObject1); // myObject1 is converted to string
     var myObject3 = JSON.parse(myObject2); // deep copy of myObject1
     // functions, regex , errorObject can't be converted to JSONstring
     // works only for enumerable properties
     // things which cant be stringify are omitted from stringified object
     // toString ( ) can be used for functions, returning the sourcecode of function
     // JSON.stringify( ) vs toString( ) ?
     // since everything is an object, we can change the behaviour of large part of
     // system very easily b/c all are instanceof object type
     // closure => behaviour that carries data
     // js properties are runtime i.e properties can be changed, added or removed at runtime
 }

 /// array
 {
     var arrayName = []; // array literal method
     var arrayName2 = new Array(); // no argument
     var arrayName3 = new Array(4); // array size specified
     var arrayName4 = new Array(3, 4, 5, "chromebook", "ubuntu"); // elements specified
     // arrays are dynamic, they grow, shrink, delete in runtime.
     // no need to specify length in advance. doing so will create sparse-array
     // elements can be of different types as arrayName4
     // trailing comma is allowed and ignored
     // arrayName[  ] is used to read/write array
     // when its used as lvalue, its writing
     // when its used as rvalue, its reading
     var arrayName = [1];
     // arrayName[0] = 1
     arrayName[0] = 2;
     // value changed from 1 to 2
     return arrayName[0];
     // returns 2
     arrayName[arrayName[0]] = 3;
     // arrayName[2] = 3
     // creating and writing an Object
     var o = {};
     o[0] = "object";

     // creating and writing an Array
     var a = [];
     a[0] = "array";

     // Objects inherit from Object.prototype
     // Arrays inherit from Array.prototype
     // array index is converted to string
     //    array updates its length while object doesnt
     //    array take index in +ve numbers while object in expression form,
     //    associative array takes elements in expression form
     //    array are faster to access than object
     //    no 'out of bound' in js for Obj or array, only 'undefined'
     //    array also have getter and setter accessor properties
     // sparse-array : arrays which doesnt have contiguous indexes,
     // created by assigning size of array greater than its length. for e.g :
     var myArray[20] = 0; // size is 20 but length is 1
     // sparse-array are memory efficient( as contiguous ) but slower
     var myArray1 = [, , , , , ]; // not a sparse-array, elements present but undef
     var myArray2 = new Array(6); // sparse-array, 6 is size , length is 0
     // for dense array,     length = index + 1
     // for sparse-array,    length > index + 1
     var a = [1, 2, 3, 4];
     a.length = 2;
     // now a = [ 1, 2] ;
     // to make array length read-only
     Object.defineProperty(myArray, "length", {
         writable: false
     });

     // to refrain from deleting array
     Object.defineProperty(myArray, "length", {
         writable: false,
         configurable: false
     });
 }

 // using delete on array del the elements value but doesnt shrink the
 // length making the array sparse
 /// copy the values of an Object to an array :
 {
     //store the property names in an array
     //store the value on all the index of object to that index of array
     //loop it
     var key = Object.keys(o);
     var myArray = new Array();

     // method 1 : forEach( )
     key.forEach(function(value) { // value means key[i]
         if(!value) {
             continue;
         }
         myArray.push(o.value);
     });

     // method 2 : for( )
     for(var i = 0, len = key.length; i < len; i++) {
         if(!key[i]) {
             continue;
         }
         myArray.push(o[key[i]]);

         // myArray[i] = o[key[i]]; // but it will create sparse-array
         // key[ i ] is the property name of the object 'o'
         // i=>value, key[i]=>property, o=>object
         // len = key.length canbe used to avoid finding length in each loop
         // if (!key[i]) { // to avoid null, undef, non-existent
         // if(key[i] === undefined) // to avoid undefined
         // if(!(key[i] in o)) // to avoid non-existent
     }
 }
 /// skip numbers which are not positive integers :
 {
     for(var i in a) { // a is an array
         if(!(String(Math.floor(Math.abs(number(i))))) === i) continue;
         // first floor it then take +ve part then compare it
     }
 }
 /// using forEach
 {
     // forEach iterates through the array element automatically
     // it has some problems when used with expression-type(e-t) index
     {
         var myArray = [1, 2, 3, 4, 5];
         var someVar = 0;
         myArray.forEach(function(x) { // x is the value of elements in myArray
             someVar += x;
             // adding all array elements
         });
     }
 }

 /// using multi-dimension array :
 {
     for(var row = 0; row < myArray.length; row++) {
         for(var col = 0; col < myArray[row].length; col++) {
             myArray[row][col] = row * col;
         }
     }
     console.log(myArray[3][3]); // 9
 }

 /// Array.sort ( )
 {
     // when no comparefunction is provided, it sorts alphabatically
     // when comparefunction is provided :
     //  for -ve, sorts a before b
     //  for 0 , no sorting
     //  for +ve, sorts b before a

     function comparefunction(a, b) {
         return a - b; // sorts in ascending order
         // returns -ve if a is smaller or vice verse
         // so if a is smaller, return will be -ve and
         //'a' will be placed b/f 'b'
         // return b-a ; // sorts in descending order
     }

     function myFunc() {
         var numberArray = [1, 77, 2, 4];
         var stringArray = ["google", "apple", "microsoft", "samsung"];
         var mixArray = ["77", "1", "banana", "apple"];
         var mixNumArray = ["1", 55, "23", 88];

         numberArray.sort(); // sorted alphabetically
         numberArray.sort(comparefunction); // 1, 2, 4, 77
         stringArray.sort(); // sorted alphabetically
         stringArray.sort(comparefunction); // no effect
         mixArray.sort(); // sorted alphabetically
         mixArray.sort(comparefunction); // 1, 77, banana, apple
         mixNumArray.sort(); // sorted alphabetically
         mixNumArray.sort(comparefunction); // 1, 23, 55, 88
     }
 }

 /// Array.concat( )
 // it concates multiple arrays WITHOUT changing original array
 {
     var a = [1];
     var b = ["chrome"];
     var c = [10];

     a.concat(5);
     // returns [ 1, 5 ]
     a.concat(b, c);
     // returns [ 1, 5, "chrome", 10 ]
     b.concat(a, c);
     // returns [ "chrome", 1, 10 ]
 }

 /// Array.slice ( )
 {
     // creates subArray WITHOUT effecting orig array
     // first arg shows starting point referenced from 0
     // second arg shows # of element. NOT element #
     // -ve arg counts from end
     var a = [1, 4, 5, 6, 8, 3, 6, 3];
     a.slice(0, 4);
     // returns [ 1, 4, 5, 6 ]
     a.slice(5);
     // returns [ 3,6,3 ] from original
     a.slice(-3);
     // returns [ 3,6,3 ] from original
     a.slice();
     // returns whole array
 }

 /// Array.splice( )
 {
     // cuts out the segment or inserts elements, IT EFFECTS THE ORIGINAL ARRAY
     // it can have multiple arguments :
     // when only two arg, it deletes from 1st to (2nd-1) arg, starting from 0
     // when multiple arg, it adds a/f 1st arg and removes # of 2nd arg
     // and other arg are elements to be added
     // Syntax :
     // splice ( startpoint_toDel, #ofelements_toDel ) ;
     // splice ( point_toAdd, #ofelements_toDel, what_Add ) ;
     var a = [1, 2, 3, 4, 5];
     a.splice(0, 1); // deletes element 0
     // returns [ 1 ]
     // a = [ 2, 3, 4, 5 ]
     a.splice(-2); // deletes last 2 elements
     // returns [ 4, 5 ]
     // a = [ 2, 3 ]
     var a = [1, 2, 3];
     a.splice(0, 0, 'a'); // adds 'a' at 0th index, del nothing
     // returns [ ]
     // a = [ 'a' , 1, 2, 3 ]
     a.splice(3, 0, 'b', 'c');
     // returns []
     // a = [ 'a' , 1, 2, 'b' , 'c', 3 ]
     a.splice(3, 0, ['e', 'f']);
     // returns []
     // a = [ 'a' , 1, 2, [ 'e','f' ], 'b' , 'c', 3 ]
     a.splice(0, 5, 'k', 'l'); // 5 is the # of elements to del from left side
     // returns [ 'a', 1, 2, ['e', 'f'], 'b' ]
     // a = [ 'k', 'l' , 'c', 3 ]
     a.splice(0, 1, 'chrome');
     // returns ['k']
     // a = [ 'chrome', 'l', 'c', 3 ]
     // to replace element: splice( 0, 1, value )
 }

 /// push & pop
 {
     // push inserts to the last and increases array length
     // pop extracts from last and 'decrease array length'
     // these are unlike delete( ) which just removes element
     // value but doesnt reduce length, making array sparsed
     var a = [];
     // a = undefined
     a[0] = 1; // a = [ 1 ]
     a[1] = 2; // a = [ 1,2 ]
     a.push("3"); // a = [ 1,2,3 ]  // pushing from the end
     a.push("4", "5"); // a = [ 1,2,3,4,5 ]
     a.unshift("0"); // a = [ 0,1,2,3,4,5 ] // pushing from beginning
     delete a[0, 2]; // a = [ , 1, , 3, 4, 5 ] // sparse-array // returns nothing
     a = [1, 2, 3, 4, 5]; // define a again
     a.pull(); // a = [ 1, 2, 3, 4, ] //  removes elem from end but also returns its
     a.shift(); // a = [ , 2, 3, 4,  ] //  removes elem from start but also returns its
     var stack = [];
     stack.push(2, 4);
     // stack = [ 2, 4 ]
     // returns [  ]
     stack.pop();
     // stack = [ 2 ]
     // returns [ 4 ]
     stack.push([3, 3]);
     // stack = [ 2, 4, [3,3] ]
     // returns [ ]
     stack.pop();
     // stack = [ 2, 4 ]
     // returns [ [3, 3] ]
     stack.pop(stack.pop());
     // stack = [ ]
     // returns [ 2, 4 ]
 }

 /// unshift & shift
 {
     var stack = [];
     stack.unshift(1);
     // stack = [ 1 ]
     // returns [ ]
     stack.unshift(1, [3, 4], 4);
     // stack = [ 1, 1, [3, 4], 4 ]
     // returns [ ]
     stack.shift(stack.shift());
     // stack = [ [3,4],4 ]
     // returns [1,1]
     // toString ( ) : 
     var a = [2, [3, '3']];
     a.toString(); // similar to join( )
     // returns 2, 3, '3'
     // no braces or delimiters are included in o/p
     {
         // always use braces around single line loop
         // always use Object.create( ) for object creation
         // explicitly use ';' wherever req., dont leave it for language to correct
     }
 }

 /// ECMA5 methods :
 {
     //all ecma5 methods takes their 1st arg as a function to perform any action on array elements.
     //when array is sparsed, these func only run for existing elements.
     //this func can have 3 arg ( value, index, array name )
     //none of ecma5 array methods modify array
     // forEach (  )
     {
         // forEach( ) is used to iterate the loop and change each element your
         // specified func
         // no way is provided by forEach( ) to get out of the loop
         // unlike break for for/while loops to have a break, you need to use exceptions

         function foreach(value, index, array) {
             // wrapping forEach around exception model
             try {
                 value.forEach(index, array);
             } catch(e) {
                 if(e === foreach.
                 break) {
                     return;
                 } // end function
                 else {
                     throw e;
                 }
             }
             foreach.
             break = new Error("program is fucked");
         }
     }

     // using copy ( ) function
     {
         var o1 = {
             a: 1,
             b: 2
         };
         var o2 = copy(o1);
         // o2 looks like o1 now
     }

     // map
     {
         // same as forEach() but it should return values
         var a = [1, 2, 3];
         var b = a.map(function(value) {
             return value * value
         });
         //b = [ 1,2,3 ]
     }

     // filter returns the values a/c to the 'predicate function'
     { // g.cl.c
         var a = [2, 3, 4, 5, 15, 6];
         var b = a.filter(function(value) {
             return value < 4
         });
         // b = [ 2, 3 ]
         var a = [2, 3, 4, 5, 15, 6];
         var b = a.filter(function(value, index) {
             return(index % 2 === 0)
         });
         // b = [ 2,4,15] i.e even-index element
         // to remove sparse, null , undef from an array
         var a = a.filter(function(value) {
             if(value !== undefined && value != null) {}
         });
     }
     // 'every' returns true if "all" elements satisfy predicate condition
     {
         var a = [1, 2, 3, 4, 5];
         return a.every(function(value) {
             return(value < 6)
         });
         // true, all values < 6
         return a.every(function(value) {
             return(value % 2)
         });
         // false, all values are not even
     }

     // 'some' returns true if anyone element satisfy predicate condition
     { // g.cl.c
         var a = [1, 9, 6, 4, 99];
         a.some(function(value) {
             return(value < 6)
         });
         // true, 1and4 < 6
         a.some(function(value) {
             return(value === undefined)
             // return 0 === value
         });
         // false, none of elements is undefined
     }
 }

 /// mozilla version to copy objects
 {
     function copy(Object1) { // g.cl.c
         var Object2 = Object.create(Object.getPrototypeOf(Object1));
         // create an object2 with prototype from object1
         Object.getOwnPropertyNames(Object1).forEach(function(value) {
             // iterate on the properties
             var desc = Object1.getOwnPropertyDescriptor(Object1, value);
             // get attribute description i.e data or accessor
             Object.defineProperty(Object2, "value", desc);
             // modify attributes of object2 by object1
         });
         return Object2;
     }

     // get prototype
     // get property
     // get property description
     // define new object with above info
 }
 /// my version-1 to copy objects 
 {
     // method 1 :
     var a = copy(b);
     // method 2 : // g.cl.c
     Object.keys(b).forEach(function(value) {
         defineProperty(Object.create(Object.getPrototypeOf(b)), value, Object.getOwnPropertyDescriptor(b));
     });

     // in mozilla version we can use :
     // var desc = Object.getOwnPropertyDescriptor ( Object1 ) ;
     // as done in better version of extend ( ), instd of using forEach( )
 }
 /// reduce
 {

     // reduce is used to reduce the result by doing given operation in function 
     // this function is diff from function in forEach or map because its 1st arg is 
     // operation to perform and next is the value with which to start the operation
     var a = [1, 2, 3, 4, 5];
     a.reduce(function(x, y) {
         return x + y
     }, 0);

     // now this function will iterate on each value 
     // return [ 1+0, 2+1, 3+3, 4+6, 5+10 ]
     // when no init val provided
     // when no empty array is passed to reduce. TypeError is returned
     // reduceRight starts oper. from right to left side
     a.reduceRight(function(x, y) {
         return x + y
     }, 0);
     // a = [ 1+14, 2+12, 3+9, 4+5, 5+0]
 }

 /// indexOf 
 {
     //it searches for the index of specified value in the array
     //first argument is the value to find its index
     //second argument is the index from where to start
     //-ve 2nd arg. starts from end
     //lastIndexOf searches from the end
     var array = [1, 2, 3, 1, 5];
     var value = 1;

     function indexFinder(a, x) // x is the value to find its index
     {
         var array = new Array(); // array to save the indices
         for(var loop = 0; loop < a.length;) {
             loop = a.indexOf(x, loop);
             // lastIndexOf can be used to start from right to left
             // loop will be the starting point
             // above line is to ensure that it doesnt start from begining eachtime
             if(!loop) {
                 array.push(loop);
             }
             loop++;
         }
         return array;
     }

     // google closure compiler version :
     {
         var array = [1, 2, 3, 1, 5],
             value = 1,
             indexFinder = function(b, d) {
                 for(var c = [], a = 0; a < b.length;) {
                     (a = b.indexOf(d, a)) || c.push(a), a++
                 }
                 return c
             };
     }
     // using indexFinder
     console.log(indexFinder(array, index));
 }

 /// array-like object
 {
     // array is obj with special prop, its useful to know if obj is array or not
     Array.isArray([]); // true
     Array.isArray([7]); // true
     Array.isArray(7); // false
     Array.isArray({}); //false
     Array.isArray("array"); // false
     // array length is autoupdate
     // setting array length smaller truncate array 
     // objects with numeric index can be treated as array-like objects specially when they 
     // are readonly   
     // so we have object, array, array-like object
     // in order to check if an object is array like it should be :
     //    object type
     //    has finite length
     //    length>0 && length<2^32
     //    length is integer

     function arrayLikeObject(o) { // equivalent to isArray( )
         if(
         (o === "object") // checking if object type
         &&
         (o.length > 0) // length is > 0
         &&
         (o.length < 4294967296) // lenght is < 2^32
         &&
         (toString(Math.abs(Math.floor(number(o.length)))) === o.length)
         // length is integer
         );
     }

     // string are read-only(immutable) array. some methods for array-type
     // canbe use with string slice( ), splice( ), reverse( ), push( ),pull( )
     // can't be used, fail silent. typeOf ( ) returns string
     var myString = "Chrome";
     myString.charAt(0); // 'C'
     myString[0]; // 'C'
     Array.prototype.join.call(myString, " "); // " C h r o m e"
     // using Array.prototype for object : skipped
 }

 /// CHAP07 FUNCTIONS 
 {
     // when function is invoked on/thru object, then object is 'this'
     // 'this' is called 'invocation context'
     // funct for creating obj are ctor, func are obj and can be set
     // first class citizen => which can be
     //    constructed at runtime, passed as arg,
     //    return from func, assign to variable
     {
         var a = function() { // func assign to var, nameless func
                 return 2 * 2;
             }
         var a = (function(x) { // func def and invoc immediately
             return x * x; // def
         }(10)); // invoc
     }
     // when statement type fn def used, it creat a loc var and assign fn to it
     // express type func def is used when using for single time
     //    func are hoisted i.e. var defined can be used in that func before the
     //    def of that var. its only true for declaration statement func and not
     //    for express type, express fn shld be assigned to var, then it can be hoisted
     //    funct with no return are 'procedures'
     //declare/statement func cant appear in loop, conditional, with, try/catch
     //express func can appear
     { // syntax to add data-members ( property )
         var myObject = {
             property1: 1,
             property2: 2,
             add: function() { // method or member function
                 // var add = function ( ){ } ; // for simple function
                 this.result = this.property1 + this.property2;
             }
         }

         myObject.add(); // invocation type
         // myObject[ "add" ] // expression type, can be evaluated at runtime
         console.log(myObject.result);

         // method chaining : cascading multiple methods with each other but 
         // each method should return 'this' in order to cascade
         myObject.setX(32).setY(34).setFill(34); // cascaded
     }
     // when 'this' is invoked on "method" then its value is of that of object
     // when 'this' is invoked on "fn" then its either global obj(for non-strict)
     // or undef ( for strict JS mode )
     // nested loop cant use 'this' of parent loop. to have value of 'this'
     // save it in a var, usually 'self'
     { // using self and this
         var anObject {
             // no property, only defining method
             memberFunction() {
                 var self = this;
                 // 'this' has value of obj on which memberFunction( ) called
                 console.log(this === anObject); // true, b/c within method
                 someFunction(); // nested loop
             }

             function someFunction() {
                 console.log(this === anObject);
                 // false as nested loop can't have value of 'this'
                 console.log(self === anObject);
                 // true as value of this was saved in self
                 // local var value can be used in nest but not of 'this'
             }
         };
     }

     // ctor dont have return. it has implicit return which returns newly created 
     // obj at end of ctor. if return is used with no or primitve value, 
     // value is ignored and new object is returned
     // call( ) and apply( ) are two methods by which any function canbe used as 
     // a method even if its not defined in that object. i.e. 'this' is used explicitly
     // js dont have any checking for type of arguments, it even doesnt check for # of arg.
     // sometimes func can be invoked with lesser argu. for e.g
     {
         function objectToArray(object, array) { // func definition
             if(0 === array) { // array === undefined
                 array = []; // if array arg is not provided use new array
             }
             // array = array || [ ]
             for(var property in object) { // property is iterating enum-prop of object
                 array.push(property);
             }
         }

         // in this way optional arg can be tackled. remember to make optional arg always
         // 2nd otherwise user have to provide undef explicitly to ignore the arg
         // || return 1st value if true, 2nd if false
         var o = {
             1, 2, 3, 4, 5
         };
         objectToArray(o); // func invocation, 2ng arg not provided
     }
     // identifier 'arguments'
     {
         // identifier 'arguments' can be used to know if provided arg are more than 
         // intended param. its like array and it accesses arg in array element form 
         chrome(a, b); // invocation, 2 param provided

         function chrome() { // definition, no argu
             console.log(arguments[1]); // print value of chrome[1] i.e. b
         }

         // 'arguments' is not an array but it has length prop
         alert(arguments.length); // 2 in chrome example
         // leaving excess arg ( more than param ) is not problem as js make them 
         // undef but 'arguments' is useful in cases where you expect any # of args

         function greaterNum() { // it shows > #
             var max = Number.NEGATIVE_INFINITY; // near to -(infinity)
             for(var i = 0; i < arguments.length; i++) {
                 if(max < arguments.i) {
                     max = arguments.i;
                 }
             }
             return max; // max has >> # out of all param
         }

         console.log(greaterNum(6, 8, 2, 900, 30, 1000)); // any # of param
         // another use is to notify that param are > arg

         function abc(a, b, c) { // definition
             if(arguments.length != 3) { // 3 is # of arg
                 // alert("arguments are " + arguments.length + ", should be 3");
             }
         }

         // function which have variable arg are called 'variadic function' or 'varargs'
         // 'arguments' is object with length prop
         // in non-strict mode changing arguments[element] also changes param

         function non_strict(a) { // def
             arguments[0] = 33; // changing arg value, its unlike array
             return a;
         }

         var someVar = 30;
         non_strict(someVar); // invoc
         console.log(someVar); // 33 not 30
         // this is rectified in strictmode as values cant be assigned to arguments
     }
     // program to add the array-like elements
     {
         // checking that they 
         // all are # and not undef or null
         // first check that its an array like :
         //     is object
         //     length > 0 < 2^32
         //     length is integer
         // then check elements for undef or null 
         // add elements
         var isArrayLike = function(o) {
                 return("object" === o) // object type
                 &&
                 (0 < o.length && 4294967296 > o.length) // range 
                 &&
                 (o.length === toString(Math.floor(Math.abs(Number(o.length))))) // integer
             };
         addFucntion = function(o) {
             if(isArrayLike(o)) {
                 for(var i = 0, sum = 0; i < o.length; i++) {
                     var element = o.i;
                     if(element && isFinite(element)) {
                         sum += element;
                     }
                 }
                 return sum;
             } else throw new Error("not array like");
         }
     }

     // variadic function which checks for its arg and tries to add them
     {
         // above func worked just for arrayLikeObjects, this
         // func works for function( ), number etc
         // first check arguments.element for null,
         // then check if its array,function or number and add a/cly
         // if neither, throw new Error

         function flexSum() { // variadic
             var total;
             for(var i = 0; i < arguments.length; i++) {
                 var element = arguments.i,
                     n;
                 // checking for null
                 if(element == null) continue;
                 // checking for array
                 if(isArrayLike(element)) n = flexSum.apply(this, element); // recursion
                 // checking for function 
                 else if(typeOf element === "function") n = Number(element());
                 // otherwise it'll be a #
                 else n = Number(element);
                 // if none of above
                 if(isNan(n)) throw new Error("cant convert to #");
                 // add now
                 total += n;
             }
             return sum;
         }

         // loop sum method instd of recursion for arrayLikeObject
         for(var loop = 0; loop < element.length; loop++) { // its what i think
             if(element.loop == null) continue;
             n += element.loop;
         }
     }
     // function can be assigned to other var
     {
         var square = function(x) {
                 return x * x;
             }
         var s = square; // now s is equiv to square
         console.log(s(2)); // 4
     }
     // function used with obj is method
     {
         var o = {
             square: function(x) {
                 return x * x;
             }
         }; // method created
         var a = o.square(2); // prototypal inheritance
         console.log(a); // 4
     }
     // function can be element of array
     {
         var array = [function chrome(x) { // 1st element is a function
             return x * x;
         },
         3]; // 2nd element is a number
         chrome(array[1]); // 9
         array[0](array[1]); // 9, same as chrome(a[i]) ;
     }
     // func can be arg of another func
     {
         function multiply(x) {
             return x * x;
         }

         function multiAdd(multiply, d, e) { // func as arg of func
             return multiply(d) + multiply(e);
         }
     }
     /// avoiding globalVar conflicts 
     {
         // sometimes you define the var and have to use them in someOther place
         // where you dont know which var are global, so define them in func scope
         // this way only function name is global var but if you even want to hide
         // func global name, make it nameless with invocation immediately

         function abc() { // only fn name is global
             var x = 9; // localVar
             return x * x;
         }
         (function() { // no global var, nameless func with immediateInvocation
             return x * x;
         }(9)); // immediate invocation
         // notice ( ) wrapping around nameless function
         // 'patched extend( ) function' => skipped
     }

     /// Lexical(static) scoping and closure :
     {
         // f() and g() are two func, if f( ) invokes g() then :
         // lexical scope : f() wont have access to g() localVar as l.scope depends on block
         // dynamic scope : f() have access to g() localVar as d.scope depends on time
         //
         // Closure => special kind of object that combines two things: function and
         // environment in which that function was created. The envir consists of any
         //  local variables that were in-scope at the time that closure was created.
         //
         // def and invocation at once :
         {
             myVar = "global";

             function abcDisco() {
                 var myVar = "local";

                 function f() { // def
                     return myVar;
                 }
                 return f(); // invocation within function-local scope
                 /* nameless version
                (function () { return myVar; }("local"));
                */
             }
         }

         abcDisco(); // "local", only calling the func
     }
     // def in function scope then invocation at global scope
     {
         myVar = "global";

         function abcDisco() {
             var myVar = "local";

             function f() { // def
                 return myVar;
             }
             return f; // no invocation
         }

         abcDisco()();
         // calling and invocation out of scope where it was def, invoc at global scope
         /*
            // now think what would be diff in above fn and fn above it.
            // actually they are same even one has def and invocation at once
            // while other has def in function chain-scope and invoc in global
            // scope but still 'abcDisco()()' has value "local" because js binds
            // not on basis of invocation but on basis of def i.e var has value
            // where they are defined not where they are invoc. This is closure
        */
     }
     // another example of closure concept
     {
         function addThem(x) {
             return function(y) {
                 return x + y;
             }
         }

         var add5 = addThem(5); // add5 is a "function" with associative data '5'
         var add10 = addThem(10); // add10 is a "function" with associative data 10
         alert(add5(2)); // 5+2
         alert(add10(2)); // 10+2
         // closures share same function but have d/f environ( i.e data )
         // add5 and add10 are closures as they are fn with diff associative environ
         //
         // closure lets associate some data(environ) with function. similar to oop.
         // so closure can be used where object would have been used but just single fn.
         // confusion is that "how does nested function execute even after chain-scope 
         // doesnt exist anymore. in c-type lang. it indeed not behaves like closure
         // b/c var are at CPU stack. so scope-chain is a 'list of obj' not 'stack of binding'
     }
     // call-object and reference binding
     {
         // all the local var and fn param bind to call objects, when fn or loc var are out of scope,
         // there is no binding and g.collec is called and evenetually call obj is itself g.collec
         // but if fn returns those nested fn or store them externally. then there will be an external
         // reference to that and it also wont be g.collec unless that external var is g.collec
     }
     /// counter using function properties
     {
         // functions are objects , so they also have properties which can be associated to just 
         // that function
         functionCounter.counter = 0; // since var are hoisted, so initializing even b/f def

         function functionCounter() { // keeps track of counter assoc to functionCounter
             return functionCounter.counter++;
         }
     }
     /// counter using closure 
     {
         // above version has a bug that anyone can assign 0 to counter
         // so better version is to implement it by closure 
         //   
         var ClosureCounter = (function safeCounter(someVar) {
             // can be nameless if you dont want to have more closures
             return function f() {
                 return counter++;
             }
         }()); // invocation
         // 
         // above way of doing counter algo is better than assigning
         // property to function itself. In above case, functionCounter
         // behaves as a closure which is initialized by the return value of f( ) 
         // which itself returns the counter incremental value but this time
         // counter and its value are safe as they are only accessible by closure
         // only. its called closure as safeCounter( ) can be used by
         // other var too but each will have d/f environ. once safeCounter( )
         // is out of scope, var counter is private to ClosureCounter only
         // 
         var someInstance = safeCounter(23);
         // 23 is associated only to safeCounter( ) invoked on someInstance
         someInstance.f; // someInstance is now 24
     }
     /// counter using object and methods 
     {
         // using func as property is prone to bug of reseting the counter,
         // closure is save to implement but limited to just single function,
         // we can use object and methods to avoid this limitation
         var methodCounter = {
             var counter; // private property 
             countInc: function() { // method to increase property
                 return counter++;
             }
             reset: function() { // method to reset
                 return counter = 0;
             }
             countDec: function() { // method to decrease property
                 return counter--;
             }
         }

         var firstInstance = methodCounter(0); // initializing counter property by 0
         var secondInstance = methodCounter(10);

         firstInstance.countInc(); // firstInstance.counter = 1 ;
         secondInstance.countDec(); // secondInstance.counter = 9 ;
     }
     /// counter using closure and get,set 
     {
         function ClosureGetSetCounter = function(someVar) {
             return {
                 get count() {
                     return someVar++;
                 }
                 set count(someArg) {
                     if(someArg > someVar) {
                         return someVar = someArg;
                     }
                 }
             }
         }
         // this method is closure as function ClosureGetSetCounter( ) itself returns
         // function viz. count( ) getter and setter 
         var someInstance = ClosureGetSetCounter(9);
         someInstance.count; // someInstance is 10 now
         someInstance.count = 100; // someInstance is 100 now
         someInstance.count; // someInstance is 101 now 
     }
 }