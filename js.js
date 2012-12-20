/// libraries
{
    // jQuery: for manipulating the DOM [ http://jquery.com ]
    //
    // Dojo: framework [ http://dojotoolkit.org/ ]
    //
    // d3: like jQuery for SVG elements [  http://d3js.org/ ]
    //
    // Processing.js: for manipulating canvas elements [ http://processingjs.org ]
    //
    // Backbone.js: for managing client-side data structures [ http://backbonejs.org ]
    //
    // Underscore.js: powerful functional programming ideas [ http://underscorejs.org ]
    //
    // Twitter Bootstrap: accelerates UI styling and events [ http://twitter.github.com/bootstrap ]
    //
    // Modernizr: browser feature detection  [ http://modernizr.com ]
    //
    // MathJax: Latex math formulas in the browser [ http://www.mathjax.org ]
    //
    // HTML5 Boilerplate: Industry-stand startpoint for HTML5 sites [ http://html5boilerplate.com/ ]
    //
    // MooTools: Object oriented framework similar to jQuery [ http://mootools.net/ ]
    //
    // Prototype: framework [ http://prototypejs.org/ ]
    //
    // YUI: Framework for building interactive web app [ http://yuilibrary.com/ ]
    //
    // three.js: 3D rendering library using WebGL [ http://mrdoob.github.com/three.js/ ]
    //
    // Normalize.css: make elem look same across browsers [ http://necolas.github.com/normalize.css/ ]
    //
    // MetroUICSS : great css based windows metro layouts [ http://metroui.org.ua/ ]
    //
    // less : The dynamic stylesheet language [ http://lesscss.org/ ]
}
//
/// CHAP 01,02
//
{
    /// basic
    {
        // object and array are mutable while #, bool and null are immutable
        // primitive type => #, bool and null
        // object type => object and array and function
        // js has no difference b/w int and float
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
}
//
/// CHAP 03 { TYPE AND VARS }
//
{
    {
        // regex is a method of searching text in a string.
        // null is an object
        // undefined => system level, error-like absence of value
        // null => program level, intended absence of value
        // in clientside js , window object is global main object
        //
        // wrapper object
        {
            //strings are not obj,they are primitive but still they have properties.
            // its because whenever we access any of string properties, a temp obj is created to
            // resolve property-reference, after that, wrapper obj is discarded
            //
            var s = "hello";
            s.len = 4; // wrapper object will be created
            var t = s.len;
            console.log(t); // undef, strings are primitive;changes done on wrap obj
        }

        // objects are checked on the basis of reference and not on value or property basis.
        // if you use = for object or array assigning, it'll just pass reference and changing
        // any one of them will change both just like pointers. to avoid it, you must use full
        // loop copy method. objects are also called reference type
        //
        // a === b is for reference checking.'for loop' is used for value and property checking
        // == do implicit b/f testing while === dont
        // parsing=>split file/input in bits of data that can be easily stored or manipulated.
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
        for(;;) {
            var a;
            for(;;) {
                var b;
            } // b should terminate here but wont
        } //a & b destruct here
        //
        // although b should be destructed a/f its function gone out of scope.
        // but it remains until its parent loop gone out of scope." so, it means that :
        // if a variable remains even after its loop ended. so it must be
        // present even its loop hasn't started. Its hoisting
    }
    /// Call-Object and property resolution :
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
}
//
/// CHAP 04 { EXPRESSION }
//
{
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
    /// eval( ) is Evil
    {
        var geval = eval(),
            // creating alias
            x = "global",
            // eval( )
            //
            f = function() {
                var x = "local";
                eval("x += 'changed' ");
                // direct call
                // here local var value will be changed b/c eval is used
            },
            // geval( )
            //
            g = function() { // effect shown a/c to ecma5
                var y = "local";
                geval("y += 'changed' ")
                // here global var will be created and changed,
                // as alias is used, indirect call
            };
    }
}
//
/// CHAP 05 { Statements }
//
{
    /// function and for/in
    {
        var anyfunction = function(argument) { // function statement method
                // :::::::
            };
        // when statement method is used, end at ;

        function anyfunction(argument) {
            // function expression method
            // :::::: ;
        }
        //
        var a = { // object
            x: 1,
            y: 2,
            z: 3
        };

        for(var b in a) { // b is iterating prop of a
            // ::::::
        };
    }
    /// format of exception throw
    {
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
    }
    /// "with" statement
    {
        // 'with' is used to give an object temporary scope of some class
        //
        with(document.form[0]) {
            address.value = "";
            // otherwise: document.form[0].address.value ;
        }
        // to avoid "with" as its deprecated in ecma5 :
        {
            var f = document.form[0];
            f.address.value = "";
        }
    }
}
//
/// CHAP 06 { OBJECT }
//
{
    /// methods to create an object
    {
        //
        // By object literal
        var varname = {
            x: 0,
            y: 0
        };
        //
        //  By ctor invocation
        var varname = new Object();
        // object( ) can have arguments,
        // other classes can be used too like Date( )
        //
        //  By object.create ( only ecma5)
        var varname = Object.create();
        //
        // in object.create( ) method, providing no argument will create just
        // bare bone object, wont even have basic properties like toString( ) etc
        var abc = {};
        var abc = new Object();
        var abc = Object.create(Object.prototype);
        //  above three stats create basic standard object
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
        //
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

        function inherit(o, p) { // p inherits o
            if(0 === o) return TypeError;
            (Object.create) && (p = Object.create(o.prototype));
            ((typeof(o) === "object" || typeof(o) === "function")) && (
            return defineProperties(p, Object.getPrototypeOf(o)));
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

    function totalShares(portfolio) { // portfolio is array
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
        var obj = {},
            // suppose its an object
            len = obj.p;
        // not an error, even though p is not a property
        len = obj.p.l;
        // an error, l is not a property of p which itself not a property of object
        // to avoid above error
        if(obj) if(obj.p) if(obj.p.l) len = obj.p.l;
        // OR
        if(obj && obj.p && obj.p.l) len = obj.p.l;
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
        //
        // consider case when "a" inherits from "p" and "p" has setter func. now when "a"
        // creates a new own property of same name.then rather than creating new prop. the
        // inherited property will be changed but once again, no change in prototypal object
        //
        // read-only property cant be inherited
    }

    /// silent errors
    { /* sometimes an object doesn't allow to add value to it or a property. like : */

        Object.prototype = 0;
        // it wont change it, as its unchangable
        /* in ecma3, its silent error, but in ecma5strict , it shows TypeError */

        // rd-only prop can be changed by defineProperty( ) by { value : }
        // rd-only inher prop can be hidden by defineProperty( ) by enumerable:false
    }
    ///delete
    {
        //
        // deletes property not an object, obj is del by garb collec.
        // { inherited, nonconfig. , non-exist, constant } cant be deleted
        //
        // deletion returns true for      => inherited , non-exist , const
        // deletion returns TypeError for => nonconfig
        //
        // value of property can be deleted too
        // global var cant be deleted
        //
        // when prototypal object deletes the property,
        // it also get removed from inherited objects
        var o = {
            x: 0
        };
        delete o["solarpanel"];
        //remove solarpanel property of o
        delete o.x;
        // removes property x from o
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
    { // method1 :using "in"
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
        for(p in o) if(o.OwnProperty(p)) continue;
        // if  (p.instanceof(o)) continue ;
        // if ( o[p] === "Object") continue ;
    }

    /// to skip own enum function
    {
        var o = {
            a: 1,
            b: 2,
            c: 3
        };
        var p;
        for(p in o) if(o.p === "function") continue;
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
            for(var prop in a) {
                b[prop] = a[prop];
            }
        }
    }

    /// property merging :
    { /* copy all prop of a to b, b with same name prop are not overwritten */

        function merging(a, b) {
            var prop;
            for(prop in a) {
                if(prop in b) { // if its own prop
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
                if(prop in b) {
                    delete b[prop];
                }
            }
        }
    }

    /// copy prop of a and b in new object, if prop are in common, copy values of a
    {
        function union(a, b) {

            // method - 1 :
            var p;
            extend(b, p);
            extend(a, p);
            return p;

            // method - 2 :
            return extend(a, extend(b, {}));

            // first, properties of b are assigned to { } i.e. new object
            // then properties of a are also added in { }
            // this function is diff from book as we returned 2nd argument
            // while book returned 1st argument
        }
    }
    /// array which has properties common in a & b
    {
        function intersection(a, b) {
            var array = new Array();
            for(var prop in a) {
                (prop in b) && (array.push(prop));
            }
        }
    }

    ///return array of enum properties :
    {
        function enumprop(o) {
            var array = new Array();
            for(var p in o) {
                o.propertyIsEnumerable("p") && array.push(p);
            }
            return array;
        }
        // a.keys() returns all own enum prop
        // a.getOwnPropertyNames() returns all own prop whether non-enum or enum
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
    // 1 - data properties ( like { x:0 } )
    // 2 - accessor properties ( like getter and setter )
    /// an object with setter and getter accessor properties :
    {
        var serialnum = {
            n: 0,
            // read/write, private, data-property
            get number() // accessor read-only property
            {
                return this.n;
            },
            get next() // accessor read-only property
            {
                return this.(n++);
            },

            set next(n) // accessor write-only property
            {
                this.$n = n;
            }
        };
    }

    /// another object with accessor property which returns randomly gen num :
    {
        var random = // object with getter-accessor-readonly property
        {
            get octet() {
                return Math.floor(Math.random * 256);
                // numbers from 0 to 255
            }, // notice ',' here
            get unsign_int() {
                return Math.floor(Math.random * 65536);
                // numbers from 0 to 2^16
            },

            get sign_int() {
                return Math.floor((Math.random * 65536) - (65536 / 2));
                // numbers from 0 to 2^16/2
            }
        }
        // object has :
        // 1 - name
        // 2 - data property : value , writable , enumarable , configurable
        // 3 - accessor property : get , set , enumerable , configurable
        //
        // ecma5 has 'property descriptor' object which defines :
        //      data-property or accessor-property,
        //      value/get, writable/set,
        //      configurable, enumerable
        //
        /// getOwnPropertyDescriptor
        {
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
            // till now we saw how use defineProperty( ) for already defined object.
            // but it can also be used for not-yet-defined objects
            var newObject = Object.defineProperties({}, { // new, empty object literal
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
            });

            // above code could also be created with the combination of Object.create( )
            // and Object.defineProperty( ) .
            // now, whenever we need to change properties
            //
            Object.defineProperty(newObject, "x", {
                value: 33
            }); // 'value' of 'x' of 'newObject' is changed
            //
            // if data-property is nonconfig, then changing its writable attribute from false
            // to true is not allowed, but changing from true to false is allowed
            // if object is configurable but not-writable :     its value 'can be' changed
            // if object is nonconfig and not-writable :        its value 'can't be' changed
        }

        /// different versions for object copy :
        {
            // algorithm :
            //      get prototype of object
            //      get all properties of desired object
            //      check if it already exists in our object
            //      if not, then clone its description to our object
            //
            // book version
            {
                // defineProperty( ) can alter existing prop but can't
                //  create them unlike defineProperties( )
                Object.defineProperty(Object.prototype, "extend", {
                    // Object.prototype( ) can be used instd of Object.getPrototypeOf ( o )
                    // when you know that object 'o' is inherited from Object.prototype( )
                    configurable: true,
                    enumerable: false,
                    writable: false,
                    value: function(o) {
                        var name = Object.getOwnPropertyNames(o);
                        // all the own( enum as well as non-enum ) properties names
                        var loopVar;
                        for(loopVar = 0; loopVar < name.length; loopVar++) {
                            if(name[loopVar] in this) { // check if prop exists in obj
                                continue;
                                // if does, loop again
                            }

                            var description = Object.getOwnPropertyDescriptor(o, name[loopVar]);
                            // all attritubes
                            Object.defineProperty(this, name[loopVar], description);
                            // name[loopVar] shows property name
                        }
                    }
                });
                // prototype is an object from which objects inherit, base prototype is 'Object'
                // thats why we use Object.prototype( )
            }
            // my version for book
            {
                var proto = defineProperties({}, "extend", {
                    configurable: true,
                    enumerable: false,
                    writable: false,
                    value: function(o) {
                        keys(o).forEach(function(values) {
                            defineProperty(proto, "values", Object.getOwnPropertyDescriptor(o, value));
                        });
                    }
                });
            }
        }
        // mozilla and g.cl.l(simplified) version
        {
            function copy(Object1) { // g.cl.c
                var Object2 = Object.create(Object.getPrototypeOf(Object1));
                Object.getOwnPropertyNames(Object1).forEach(function(value) {
                    var desc = Object1.getOwnPropertyDescriptor(Object1, value);
                    Object.defineProperty(Object2, "value", desc);
                });
                return Object2;
            }
        }
        // my version for mozilla
        {
            Object.keys(b).forEach(function(value) {
                defineProperty(Object.create(Object.prototype(b)), value, Object.getOwnPropertyDescriptor(b));
            });
        }
        // ecma5 version
        {
            var newObject = copy(o);
        }
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
        if(someObject.ownProperty(someProperty));

        // to check for own instance :
        p instanceof o;
        p.isPrototypeOf(o);

        // to check for enum property :
        if(someObject.propertyIsEnumerable(someProp));

        // to query prototype in ecma5 :
        someObject.getPrototypeOf(objectName);

        // to query enum-own property in ecma5
        keys(objectName);

        // to query own(enum or not) property in ecma5
        getOwnPropertyNames(objectName);
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
        //
        // new properties cant be added or del in object
        //
        Object.seal(); // it makes object non-extendable and non-config
        isSealed(); // to find if object is sealed or not
        //
        // no new property can be added or del. cant change existing prop
        //
        Object.freeze(); // object non-ext and non-config, data prop readonly
        isFrozen(); // to find if object is frozen or not
        //
        // no new property can be added, existing cant be changed and all data
        // prop are readonly. if you have accessor prop, they are still workable
        // all above locking methods are useful for Own properties only.
        // all prototypal( from where you inherited ) properties are still out of lock
        // example of how to create a locked Object
        //
        var myObject = Object.seal(Object.create(Object.freeze({
            x: 0
        }), { // property x is frozen
            y: { // property y is non-config
                value: 9,
                configurable: false,
                enumarable: false
            }
        }));
    }

    /// using jsON for stringify and parse the object
    {
        var myObject1 = Object.defineProperties({}, { // created bare object
            a: { // defining property of myObject1
                value: 213,
                configurable: true,
                extendable: true,
                writable: false
            }
        });

        var myObject2 = jsON.stringify(myObject1); // myObject1 is converted to string
        var myObject3 = jsON.parse(myObject2); // deep copy of myObject1
        //
        // functions, regex , errorObject can't be converted to jsONstring
        // works only for enumerable properties
        //
        // things which cant be stringify are omitted from stringified object
        //
        // toString ( ) can be used for functions, returning the sourcecode of function
        //
        // jsON.stringify( ) vs toString( ) ?
        //
        // since everything is an object, we can change the behaviour of large part of
        // system very easily b/c all are instanceof object type
        // closure => behaviour/function that carries data/environment
        // js prop are runtime i.e prop can be changed, added or removed at runtime
        //
    }
    //
    /// CHAP 07 { ARRAY }
    //
    {
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
            //
            // Objects inherit from Object.prototype
            // Arrays inherit from Array.prototype
            //
            // array index is converted to string
            //    array updates its length while object doesnt
            //    array take index in +ve numbers while object in expression form,
            //    associative array takes elements in expression form
            //    array are faster to access than object
            //    no 'out of bound' in js for Obj or array, only 'undefined'
            //    array also have getter and setter accessor properties
            //
            // sparse-array : arrays which doesnt have contiguous indexes,
            // created when arraySize > arrayLength. for e.g :
            //
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
            // using delete on array del the elements value but doesnt shrink the
            // length making the array sparse
        }
        /// copy the values of an Object to an array :
        {
            //store the property names in an array
            //store the value on all the index of object to that index of array
            //loop it
            //
            // method 1 :
            var key = Object.keys(o);
            var myArray = new Array();
            key.forEach(function(property) { // value means key[i]
                if(property) myArray.push(o.property);
            });
            //
            // method 2 :
            for(var property in o) {
                if(property) myArray.push(property);
            }
            //
            // myArray[i] = o[key[i]]; // but it will create sparse-array
            // i=>value, key[i]=>property, o=>object
            //
            // len = key.length canbe used to avoid finding length in each loop
            // if (!key[i]) { // to avoid null, undef, non-existent
            //
            // if(key[i] === undefined) // to avoid undefined
            // if(!(key[i] in o)) // to avoid non-existent
            //
            // o[key[i]] and o.key.i are same?
        }

        /// skip numbers which are not positive integers :
        {
            for(var i in a) { // a is an array
                if(!(toString(Math.floor(Math.abs(number(i))))) === i) continue;
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
            // forEach format for array :
            //
            // array.forEach( function(value, index){}) ;
        }

        /// using multi-dimension array :
        {
            // implementing by for, book
            {
                for(var row = 0; row < myArray.length; row++) {
                    for(var col = 0; col < myArray[row].length; col++) {
                        myArray[row][col] = row * col;
                    }
                }
                console.log(myArray[3][3]); // 9
            }
            // implementing by forEach, what i think
            {
                myArray.forEach(function(myArrayRow, rowIndex) {
                    value.forEach(function(myArrayRowCol, colIndex) {
                        myArrayRowCol = rowIndex * colIndex;
                    })
                });
                // myArrayRow is myArray[rowIndex]
                // myArrayCol is myArray[colIndex]
                // myArrayRowCol is myArray[rowIndex][colIndex]
                // rowIndex is row
                // colIndex is col
            }
            // implementing by for/in, what i think
            // note : for/in should be used with array
            // for/in is for object property iteration
            //
            // http://stackoverflow.com/questions/500504/javascript-for-in-with-arrays
            {
                for(a in myArray) {
                    for(b in myArray[a]) {
                        myArray[a][b] = a * b;
                    }
                }
            }
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
                //
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
            //
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
            //
            // cuts out the segment or inserts elements, IT EFFECTS THE ORIGINAL ARRAY
            // it can have multiple arguments :
            // when only two arg, it deletes from 1st to (2nd-1) arg, starting from 0
            // when multiple arg, it adds a/f 1st arg and removes # of 2nd arg
            // and other arg are elements to be added
            // Syntax :
            // splice ( startpoint_toDel, #ofelements_toDel ) ;
            // splice ( point_toAdd/del, #ofelements_toDel, what_Add ) ;
            //
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
            //
            // push inserts to the last and increases array length
            // pop extracts from last and 'decrease array length'
            // these are unlike delete( ) which just removes element
            // value but doesnt reduce length, making array sparsed
            //
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
                //

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

            // filter
            { // g.cl.c
                // returns the values a/c to the 'predicate function'
                var a = [2, 3, 4, 5, 15, 6];
                var b = a.filter(function(value) {
                    return value < 4
                });
                // b = [ 2, 3 ]
                var a = [2, 3, 4, 5, 15, 6];
                var b = a.filter(function(value, index) {
                    return(index % 2 === 0) && value
                });
                // b = [ 2,4,15] i.e even-index element
                // to remove sparse, null , undef from an array
                var a = a.filter(function(value) {
                    if(value !== undefined && value != null) return value;
                });
            }
            // predicate function
            {
                // 'every' returns true if "all" elements satisfy predicate condition
                {
                    var a = [1, 2, 3, 4, 5];
                    return a.every(function(value) {
                        return value < 6
                    });
                    // true, all values < 6
                    return a.every(function(value) {
                        return value % 2
                    });
                    // false, all values are not even
                }

                // 'some' returns true if anyone element satisfy predicate condition
                { // g.cl.c
                    var a = [1, 9, 6, 4, 99];
                    a.some(function(value) {
                        return value < 6
                    });
                    // true, 1and4 < 6
                    a.some(function(value) {
                        return value === undefined
                        // return 0 === value
                    });
                    // false, none of elements is undefined
                }
            }
        }
        /// reduce
        {
            //
            // reduce is used to reduce the result by doing given operation in function
            // this function is diff from function in forEach or map because its 1st arg is
            // operation to perform and next is the value with which to start the operation
            //
            var a = [1, 2, 3, 4, 5];
            a.reduce(function(x, y) {
                return x + y
            }, 0);

            // now this function will iterate on each value
            // return [ 1+0, 2+1, 3+3, 4+6, 5+10 ]
            // when no init val provided
            // when no empty array is passed to reduce. TypeError is returned
            // reduceRight starts oper. from right to left side
            //
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
            //
            var a = [1, 2, 3, 1, 5];
            var x = 1;

            function indexFinder(a, x) // x is the value to find its index
            {
                var array = new Array(); // array to save the indices
                for(var loop = 0; loop < a.length;) {
                    loop = a.indexOf(x /* value to search*/ , loop /* start point*/ );
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
            //
            // array length is autoupdate
            // setting array length smaller truncate array
            //
            // objects with numeric index can be treated as array-like objects specially when they
            // are readonly
            // so we have object, array, array-like object
            // in order to check if an object is array like it should be :
            //    object type
            //    has finite length
            //    length>0 && length<2^32
            //    length is integer
            //

            function arrayLikeObject(o) { // equivalent to isArray( )
                if(
                o === "object" // checking if object type
                &&
                o.length > 0 // length is > 0
                &&
                o.length < 4294967296 // lenght is < 2^32
                &&
                Math.floor(o.length) === o.length
                // length is integer
                );
            }
            //
            // string are read-only(immutable) array. some methods for array-type
            // canbe use with string but slice( ), splice( ), reverse( ), push( ),pull( )
            // can't be used, fail silent. typeof ( ) returns string
            //
            var myString = "Chrome";
            myString.charAt(0); // 'C'
            myString[0]; // 'C'
            Array.prototype.join.call(myString, " "); // " C h r o m e"
            // using Array.prototype for object : skipped
        }
    }
    //
    /// CHAP 08 { FUNCTIONS }
    //
    {
        //
        // when function is invoked on/thru object, then object is 'this'
        // 'this' is called 'invocation context'
        // funct for creating obj are ctor, func are 'obj with behaviour'
        //
        // first class citizen => which can be
        //    constructed at runtime, passed as arg,
        //    return from func, assign to variable
        //
        {
            var a = function() { // nameless func, func only def not invoked
                    return 2 * 2;
                };
            var b = (function(x) { // func def and invoc both at once
                return x * x; // def
            }(2)); // invoc
        };
        //
        // when statement type fn def used, it creates a local var and assign fn to it
        // express type func def is used when using for single time
        //
        // func are hoisted i.e. var defined can be used in that func before the
        // def of that var. its only true for declaration statement func and not
        // for express type, express fn shld be assigned to var, then it can be hoisted
        //
        // funct with no return are 'procedures'
        //
        //declare/statement func can not appear in loop, conditional, with, try/catch
        //express func can appear
        //
        { // syntax to add property in object
            var myObject = {
                property1: 1,
                property2: 2,
                add: function() {
                    this.result = this.property1 + this.property2;
                }
            }

            myObject.add(); // invocation type
            // myObject[ "add" ] // expression type, can be evaluated at runtime
            console.log(myObject.result); // 3
            //
            // method chaining : cascading multiple methods with each other but
            // each method should return 'this' in order to cascade
            // myObject.setX(32).setY(34).setFill(34); // cascaded
        }
        //
        // when 'this' is invoked on "method" then its value is of that of object
        // when 'this' is invoked on "fn" then its either global obj(for non-strict)
        // or undef ( for strict js mode )
        //
        // nested loop cant use 'this' of parent loop. to have value of 'this'
        // save it in a var, usually 'self'
        //
        // using self and this
        //
        {
            var anObject = {
                // no property, only defining method
                memberFunction: function() {
                    var self = this;
                    // 'this' has value of obj on which memberFunction( ) called
                    console.log(this === anObject); // true, b/c within method
                    someFunction(); // nested loop
                }
            };

            function someFunction() {
                console.log(this === anObject);
                // false as nested loop can't have value of 'this'
                console.log(self === anObject);
                // true as value of this was saved in self
                // local var value can be used in nest but not of 'this'
            }
        }
        //
        // ctor dont have return. it implicitly returns newly created
        // obj at end of ctor. if return is used with no or primitve value,
        // value is ignored and new object is returned
        //
        // js dont have any checking for type of arguments, it even doesnt check for # of arg.
        // sometimes func can be invoked with lesser argu. for e.g
        //
        {
            function objectToArray(someObject, array) { // func definition
                if(0 === array) { // array === undefined
                    array = []; // if array arg is not provided use new array
                }
                // array = array || [ ]
                for(var property in someObject) { // property is iterating enum-prop of object
                    if(Object.prototype.hasOwnProperty(someObject, property)) {
                        array.push(property);
                    }
                }
            }

            // in this way optional arg can be tackled. remember to make optional arg always
            // 2nd, otherwise user have to provide undef explicitly to ignore the arg
            // || return 1st value if true, 2nd if false
            var o = {
                1, 2, 3, 4, 5
            };
            objectToArray(o); // func invocation, 2ng arg not provided
        }
        // identifier 'arguments'
        {
            // arguments.length shows actual # of args provided
            // while 'callee.arguments.length' shows expected/intended # of args
            // identifier 'arguments' can be used to know if provided arg are more than
            // intended param. its like array and it accesses arg in array element form
            //
            chrome(a, b); // invocation, 2 param provided

            function chrome() { // definition, no argu intended
                console.log(arguments[1]); // print value of chrome[1] i.e. b
                // 'arguments' iterates on args in element form
            }

            // 'arguments' is not an array but it has length prop
            alert(arguments.length); // 2 in chrome example
            // leaving extra arg ( more than param ) is not problem as js make them
            // undef but 'arguments' is useful in cases where you expect any # of args

            function greaterNum() { // it shows > #
                var max = Number.NEGATIVE_INFINITY; // near to -(infinity)
                for(var i in arguments) {
                    if(max < arguments.i) { // arguments[i]
                        max = arguments.i;
                    }
                }
                return max; // max has >> # out of all param
            }

            console.log(greaterNum(6, 8, 2, 900, 30, 1000)); // any # of param
            //
            // another use is to notify that param are > arg

            function notifier(a, b, c) { // definition
                if(arguments.length != 3) { // 3 is # of arg
                    alert("arguments are " + arguments.length + ", should be 3");
                }
            }

            // function which have variable arg are called 'variadic function' or 'varargs'
            //
            // 'arguments' is object with length prop
            // in non-strict mode changing arguments[element] also changes param

            function non_strict_behaviour_of_arguments(a) { // def
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
            // add elements leaving undef or null

            function arrayAdder(o) {
                var isArrayLike = function(o) {
                        return "object" === typeof o && //
                        0 < o.length && Math.pow(2, 32) > o.length && //
                        Math.floor(o.length) === o.length
                    };

                function addFunction(o) {
                    if(isArrayLike(o)) {
                        for(var i = 0, sum = 0; i < o.length; i++) {
                            var element = o.i;
                            if(element && isFinite(element)) {
                                sum += element;
                            }
                        }
                        return sum;
                    } else throw new Error("moron! you are not array like");
                }
            }
        }

        // variadic func which checks for its arg and tries to add them
        {
            // arrayAdder( ) worked just for arrayLikeObjects,
            // flexSum( ) works for function( ), number etc
            //
            // first check arguments.element for null,
            // then check if its array,function or number and add a/cly
            // if neither, throw new Error

            function flexSum() {
                // variadic, no arg required, instd use 'arguments'
                var total;
                for(var i = 0; i < arguments.length; i++) {
                    var element = arguments.i,
                        // element of 'arguments'
                        n; // holds sum of each iteration
                    // 'element' can be function, array, null or number
                    // and we have to add them accordingly
                    //
                    // checking for null
                    if(element == null) continue;
                    // checking for array
                    if(isArrayLike(element)) n = flexSum.apply(this, element); // recursive sum
                    // checking for function
                    else if(typeof element === "function") n = Number(element());
                    // otherwise it'll be a #
                    else n = Number(element);
                    // now checking n
                    if(isNan(n)) throw new Error("cant convert to #");
                    // add now
                    total += n;
                }
                return total;
            }

            // loop sum method instd of recursion for arrayLikeObject addition
            element.forEach(function(value) {
                (value == null) &&
                continue, (n += value);
                // if value is null then 'continue', n+= value in any case
            });
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
                square: function(x) { // method created
                    return x * x;
                }
            };
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
        /// function as Namespace
        {
            // sometimes you define the var and have to use them in someOther place
            // where you dont know which var are global, so define them in func scope
            // this way only function name is global var but if you even want to hide
            // func global name, make it nameless with immediate invocation
            //
            // only fn name is global :
            var abc = function() {
                    var x = 9; // localVar
                    return x * x;
                }
                //
                // no global var, nameless func with immediate invocation :
            var abc = (function() { // abc is not global now
                return x * x;
            }(9)); // immediate invocation
            // notice ( ) wrapping around nameless function
            //
            // 'patched extend( ) function' => skipped
        }

        /// Lexical(static) scoping and closure :
        {
            // f() and g() are two func, if f( ) invokes g() then :
            // lexical scope : f() wont have access to g() localVar as l.scope depends on block
            // dynamic scope : f() have access to g() localVar as d.scope depends on time
            // js has lexical scoping
            //
            // Closure => behaviour carrying data
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
                    // nameless version :
                    //  return {(function () { return myVar; }("local"))};
                }
            }
            abcDisco();
            // "local", only calling the func
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
            // calling and invoking at global space
            //
            // now think what would be diff in above fn and fn above it.
            //
            // actually they are same even one has def and invocation at once
            // while other has def in function chain-scope and invoc in global
            // scope but still 'abcDisco()()' has value "local" because js binds
            // not on scope of invocation but on scope of def i.e var has value
            // where they are defined not where they are invoc. This is closure
            //
            // i.e. function holds some data as well as behaving on them
            // in other words, behaviour carrying environment
            //
            // closure is a function which returns a function which itself
            // returns data
            //
            { //  proper syntax of closure :

                function iAmClosure(value1) {
                    return {
                        function(value2) {
                            return value1 * value2;
                        }
                    };
                }
                // to use this closure :
                //
                var someVar = iAmClosure(9 /* value1 */ );
                //
                // now iAmClosure holds data i.e 9 for someVar
                // which will different for different variables
                //
                alert(someVar(8 /* value2 */ ));
                // 9 * 8
            }
        }
        // another example of closure concept
        {
            function addThem(x) {
                return {
                    function(y) { // immediate return for nameless function
                        return x + y;
                    }
                };
            }

            var add5 = addThem(5); // add5 is a "function" with associative data '5', 5 is x
            var add10 = addThem(10); // add10 is a "function" with associative data '10', 10 is x
            alert(add5(2)); // 2 is y // 5+2
            alert(add10(6)); // 6 is y // 10+6
            //
            // closures share same function but have d/f environ( i.e data ) for diff vars
            //
            // closure lets associate some data(environ) with function. similar to oop.
            // so closure can be used where object would have been used but just single fn.
            // problem is "how does nested function execute even after chain-scope
            // doesnt exist anymore
            //
            // in c-type lang. there is no closure as var are at CPU stack
            // so scope-chain is a 'stack of binding' unlike js(list of objects)
        }
        // call-object and reference binding
        {
            // all the 'local var and fn param' bind to call objects, when fn or loc var are out of scope,
            // there is no binding and g.collec is called and evenetually call obj is itself g.collec
            // but if fn returns their nested fn or store them externally. then there will be an external
            // reference to that and it wont be g.collec unless that external var is g.collec
        }
        // A Counter implementation :
        {
            /// counter using function properties
            {
                // functions are objects , so they also have properties which can be associated to just
                // that function
                functionCounter.counter = 0; // since var are hoisted, so initializing even b/f def

                function functionCounter() { // keeps track of counter assoc to functionCounter
                    var counter;
                    return functionCounter.counter++;
                }
            }
            /// counter using closure
            {
                // above version has a bug that anyone can assign 0 to counter
                // so better version is to implement it by closure
                //
                // named function version
                var closureCounter = function(counter) {
                        return function f() {
                            return counter++;
                        }
                    };
                //
                // above version of doing counter algo is better than assigning
                // property to function itself.
                //
                // In above case, closureCounter behaves as a closure which is
                // initialized by the return value of f( ) which itself returns
                // the counter incremental value but this time counter and its
                // value are safe as they are only accessible by closure.
                // its called closure as closureCounter( ) can be used by
                // other var too but each will have d/f environ. once closureCounter( )
                // is out of scope, var counter is private to closureCounter only
                //
                var someInstance = closureCounter(23);
                // 23 is associated only to "closureCounter( ) invoked on someInstance"
                someInstance.f; // someInstance is now 24
            }
            /// counter using object and methods
            {
                // using func as property is prone to bug of reseting the counter,
                // closure is save to implement but limited to just single function,
                // we can use function as Object to avoid these limitations

                function methodCounter() { // like factory function
                    var counter, // private property
                    countInc: function() { // method to increase property
                            return counter++;
                        }, reset: function() { // method to reset
                            return counter = 0;
                        }, countDec: function() { // method to decrease property
                            return counter--;
                        }
                };

                var firstInstance = methodCounter(0); // initializing counter property by 0
                var secondInstance = methodCounter(10);

                firstInstance.countInc(); // firstInstance.counter = 1 ;
                secondInstance.countDec(); // secondInstance.counter = 9 ;
            }
            /// counter using closure and accessor properties
            {
                function ClosureAccessorCounter(someVar) {
                    return {
                        get count() {
                            return someVar++;
                        }, set count(someArg) {
                            someVar = someArg;
                        }
                    };
                }
                // this method is closure as function ClosureAccessorCounter( ) itself returns
                // function viz. count( ) getter and setter
                //
                var someInstance = ClosureAccessorCounter(9);
                someInstance.count; // someInstance is 10 now
                someInstance.count = 100; // someInstance is 100 now
                someInstance.count; // someInstance is 101 now
            }
        }
        /// private property accessor method using closure
        {
            // closure have d/f environ with sharing same function.
            // so it can be used to access and set private property
            // privateVariable is only accessible thru get or set

            function closurePrivateAccessor(objectName, propertyName, predicate) {
                var privateVariable;
                objectName["get" + propertyName] = function() { // method to get value
                    return privateVariable;
                };
                objectName["set" + propertyName] = function(setValue) { // methed to set value
                    if(predicate) {
                        privateVariable = setValue;
                    } else {
                        return TypeError;
                    }
                };
            }

            var somePrivateObj = {
                someName: 0 // property
            };
            closurePrivateAccessor(somePrivateObj, someName, (function() { // calling closure
                return x === "string";
            }(x)));
            somePrivateObj.setsomeName("pns Research Center");
            console.log(somePrivateObj.getsomeName());
            somePrivateObj.setsomeName(33);
            // TypeError, only string allowed, as === used, no implicit conversion
            somePrivateObj["setsomeName"]("any thing"); // is it legal ?, expression method
        }
        /// breaking closure environment
        {
            // it means accidently sharing the variable among closures,
            // closures should not share the environment among each other,
            //  they should only share the behaviour
            //
            // consider this example in which array of constant function is create
            // without sharing the environment
            //
            {
                function correctClosure(v) {
                    // accepting param i.e. properly creating environment
                    //
                    return

                    function() { // nested loop
                        return v;
                        // nested function only returning environment
                        // and not its own created var
                    }
                }
                var correctVar[] = function() {
                        for(var i = 0; i < 10; i++) {
                            correctVar.i = correctClosure(i);
                            // each closure can have different environment
                            // in this case as its vars are not dependent on
                            // nested loop in function correctClosure( )
                        }
                    };
                var firstCorrectVar = correctClosure(32);
                var secondCorrectVar = correctClosure(11);
                // above both are correct closure as they have diff environment
            }
            //
            // now consider the case where v not provided by indiv closure but
            // its created within nested loop of func. so whatever be the
            // function, all closure will share same return value as nested
            // loop dont create private vars. i.e. var created in nested loop
            // are not environment, they are just var common to all closures.
            // var defined before nested loop or provided as arg is environment
            //
            {
                function falseClosure() { // no param
                    var falseVar[];

                    for(var i = 0; i < 10; i++) {
                        // this is a problem, but it can be rectified
                        // by providing 'i' as argument
                        falseVar.i = function() {
                            return i;
                        }
                        // assigning within nested loop
                        // so its not environment, it will be
                        // common to all closures
                    }
                    return falseVar;
                }
            }
            var firstFalseVar = falseClosure(); // no arg
            var secondFalseVar = falseClosure(); // no arg
            //
            // above both var will be same and they dont have their
            // private environment, so it spoils whole closure concept
            //
        }
        //
        // bottom line : closures should not depend upon the variables
        // of nested loop otherwise they wont have private environment
        //
    }
    //
    // 'this' is only accessible within object
    // for e.g. 'this' is usable within method but if method calls
    // another func. then 'this' wont be accessible in that func.
    //
    // to access 'this' in invoked func., 'this' value should be saved
    // in some var. same is true for 'arguments'
    //
    /// function as property, method, and ctor
    {
        // length property
        {
            // when length is invoked on arguments within func, it shows actual # of args
            // when length is invoked on function itself , it shows expected # of args

            function argChecker(someArgs) { // func to check args arity
                return someArgs.length === someArgs.callee.length;
            }
            // callee is deprecated in ecma5 strictmode
            // someArgs.length=>actual
            // someArgs.callee.length=>expected

            function anyfunction() {
                if(!argChecker(arguments)) {
                    console.log("Bitch! expected and actual args are not same");
                }
            }
        }
        // call( ) and apply( )
        {
            // call( ) and apply( ) are used to invoke a function as it were
            // a method of object. apply( ) is diff from call( ) in sense that
            // it takes arg in array form
            //
            object.prototype.toString.call(someObject).slice(8, -1);
            //
            // their 1st arg is :
            // strictmode : 'this' whether its null/undefined or primitive
            // nonstrict  : for null/undef=>globalObj, for primitive=>wrapperObj
            // other arguments are the values passed to the function which was
            // indirectly invoked
            //
            // monkey-patching :
            //
            // a way to patch method with additional usage using indir invoc
            // i.e. using call( ) or apply( ).
            //
            var someObject = {
                o: 99
            };

            function someAddition(a, b, c) { // a simple function
                return this.o + a + b + c;
                // 'this' will only have meanings when
                // its bind with some object
                //
            }

            // to use someAddition( args ) with someObject
            // method 1 :
            someObject.someAddition(2, 3, 4); // 99+2+3+4
            // method 2 :
            someAddition.apply(someObject, 2, 3, 4);
            // method 3 :
            someAddition.call(someObject, [2, 3, 4]);
        }
        // bind ( )
        {
            // its used to bind a function to an object
            // if g() is created by binding f() to object o, then g( ) is a method
            // of o and passing any values to g( ) are passed to f( )

            function internetExplorer(y) {
                return this.x + y; // 'this' is undef till func is not bound to obj
            }
            var someObject = {
                x: 80
            };
            var chrome = internetExplorer.bind(someObject);
            // chrome is a method of someObject
            //
            console.log(chrome(2)); // 2 is 'y' and 80 is 'this.x', so 80+2
            //
            // OR
            //
            var chrome = internetExplorer.bind(someObject, 2); // currying
            console.log(chrome());
            //
            // call( ) and apply( ) are used to temporarily invoking fn as method
            // but bind is used to create a method from a function
            // here internetExplorer() is a function while chrome( ) is a method
        }
        // partial application or currying
        {
            // when using bind( ) , the arguments after first one are also bound to
            // function, its called partial-application

            function f(y, z) { // a simple function
                return this.x + y + z;
            }
            var o = { // an object to bind with.
                x: 33
            };
            // bind to null
            var m1 = f.bind(null, 2); // this.x is null , y is 2 , z is undefined
            // bind to number
            var m2 = f.bind(4, 2); //  this.x is 4 , y is 2 , z is undefined
            // bind to object
            var m3 = f.bind(o, 2); // this.x is 33, y is 2, z is undefined
            // bind to string
            var m4 = f.bind("google", " ", "chrome"); // this.x=>'google',y=>' ',z=>undef
            //
            // now invoking the method
            //
            m1(3); // null + 2 + 3 => 5
            m2(3); // 4 + 2 + 3 => 9
            m3(3); // 33 + 2 + 3 => 38
            m4(); // "google chrome"
        }
        // toString(anyfunction()); // returns sourcecode of anyfunction( )
        //
        /// function ctor
        {
            // function can be created by :
            //
            // function f( ){ } // expression type
            // var f = function( ){ } // declaration type
            // var f = new Function(" ") ; // ctor type
            //
            // function created with expression or declaration type use scope
            // where they are defined but ctor type always use global scope
            //
            someVar = "globalVar";

            function expressionType() { // expression type
                var someVar = "localVar";
                return

                function() {
                    return someVar;
                }
            }

            function ctorType() { // ctor type
                var someVar = "localVar";
                return
                new Function("return someVar");
            }
            // invoking both functions
            //
            expressionType()(); // localVar
            ctorType()(); // globalVar
            //
            // its because new Function() creates global-scoped function
            // while expres. or declar. creates local-scope function
        }
        // callable objects
        {
            // as some objects are array-like. some objects are function-like too
            // they are called callable-objects all functions are callable but
            //  not all callable-objects are function.
            // regex objects are callable but are deprecated. dont use them
            // some vendor makes them behave as function, some as object

            function isArrayLike(o) { // check if object is array-like
                return {
                    o && "object" === typeof o && // checking null and type
                    0 < o.length && Math.pow(2, 32) > o.length && // length range
                    Math.floor(o.length) === o.length // integer
                };
            }

            function isFunctionLike(o) { // check if object is function-like
                return Object.prototype.toString.call(o) === "[object Function]";
            }
        }
    }
}
//
/// CHAP 09 { CLASSES AND MODULES }
//
{
    //
    // instance vs static methods
    {
        // instance methods are for per object i.e. each for an object
        // static methods are for per class i.e. each for a class
        //
        // instance methods are copied to prototype
        // static methods are copied to constructor i.e class
        //
        // to access instance method, instance must be created
        // to access static method, directly class can be invoked
        //
        // instance method in a class :
        {
            function Calculator { // Class
            }
            Calculator.prototype.multiply = function(a, b) {
                return a * b;
            };
            // now using instance method :
            var instance = new Calculator(2, 3);
            instance.multiply();
        }
        //
        // static method in a class :
        {
            function Calculator() { // Class
            }
            Calculator.multiply(a, b) { // static method
                return a * b;
                //
                // instead of Calculator.prototype, only Calculator is used
                // accessible directly through class w/o creating instance
                // i.e. method is created in class not in prototype object of class
            }
            // now to use multiply, we dont need to create instance
            Calculator.multiply(2, 3);
        }
    }
    //
    // use of constructor :
    {
        // ctor function and class are same thing
        // infact class is a function which initializes objects
        // and such func which init obj is also called ctor
        //

        function someConstructor(a, b) {
            this.a = a;
            this.b = b;
            this.someMethod: function() {}
        }
        // creating instance:
        //
        var someInstance = new someConstructor(2, 3);
        //
        // why we used 'new' ?
        // why not :
        someInstance = someConstructor(2, 3); // its called factory function
        // the reason is every object has some prototype , like
        //
        var someInstance2 = new Object(2, 3);
        // its equiv to :
        var someInstance2 = {
            2, 3
        };
        //
        // so for objects having prototype 'Object', its ok to not use new, just use {}
        // but if you want to have prototype other than 'Object', use new following by classname
        //
        // infact, every new instance is ultimately has prototype 'Object' even if the instance
        // is created from some other class but that other class itself has prototype 'Object'.
    }
    //
    // Object literal vs Constructor
    //
    {
        // creating and using :
        {
            //
            // object literal :
            //
            var iAmObject = {
                property: " i am an object property",
                method: function {
                    alert("i am a function of object");
                };
            }
            iAmObject.method();
            //
            // a constructor :
            //
            var iAmCtor = function(property) {
                    this.property: property,
                    this.method: function() {
                        alert(" i am a method of ctor ");
                    }
                };
            iAmCtor.method(); // wrong, it cant be done
            var iAmUsingCtor = new iAmCtor(23);
            iAmUsingCtor.method(); // correct way of using methods of ctor
        }
    }
    //
    // factory function vs constructor
    //
    {
        // factory functions are used to create objects but they can return anything
        // ctor func returns the instance of its class and use 'new' in instantiation
        //
        // factory function and its use
        {
            function factoryFunction(var1, var2) {
                var o = { // an object is created unlike constructor
                    a: var1,
                    b: var2,
                }
                return o; // not necessary, can return anything unlike ctor
            }
            var someObj1 = factoryFunction(2, 3);
            // no use of 'new'
            // not sure if a new instance of factoryFunction will be created
            // or not, depending upon return type of factoryFunction
        }
        // constructor function
        {
            function constructorfunction(var1, var2) {
                this.var1 = var1;
                this.var2 = var2;
                this.someMethod = function() {}
                // no return needed, implicitly returns instance of the class
            }
            var someObj2 = new constructorfunction(2, 3); // 'new' is used
        }
    }
    //
    // Range ( )  :
    //
    {
        // create a class Range which has some builtin methods while also allowing
        // object to have their private properties
        //
        // defining the class

        function MyClass1() {} // a dummy class for comparison purpose

        function Range(from, to) { // class name starts from capital, "constructor object"
            this.from = from;
            this.to = to;
            // private properties
        }
        // define Range prototype
        //
        // below are instance methods which will be shared by all objects inherit from
        // proto object
        //
        // two obj are of same class only if they inherit from same proto object
        //
        Range.prototype.isInclude = function(number) {
            return this.from <= number && this.to >= number;
        };
        Range.prototype.foreach = function(f) { // f is array
            var loop;
            for(loop = this.from; loop <= this.to; loop++) {
                f(loop); // invoking f at loop
            }
        };
        Range.prototype.toString = function() {
            return "(" + this.from + "," + this.to + ")";
        };
        Range.prototype.isEqual = function(that) {
            return(that.from === this.from) && // testing initial
            (that.to === this.to) && // testing final
            (that.prototype === Range) && // prototype object of 'that' is instanceof Range
            (that !== null);
        };
        Range.prototype.compareTo = function(that) {
            var a;
            if(!(that instanceof Range)) {
                alert("Cant compare different types");
                return NaN;
            } else {
                return(a = ((this.to - this.from) - (that.to - that.from))) > 1 ? //
                ("greater by " + a) : //
                ("lesser by " + -a);
            }
        };
        //
        // creating instances
        //
        var firstInstance = new Range(9, 10); // "Instance Object"
        firstInstance.isInclude(6); // true
        secondInstance = new Range(22, 310);
        alert(firstInstance.compareTo(secondInstance));​
    }
    //      1 - constructor object : its actually class function
    //      2 - prototype object : its the base if a class
    //      3 - instance object : its the instance created by new, inherits from prototype object
    //
    // simple class
    //
    {
        function extend(source, destination) {
            var property;
            for(property in source) {
                if(property) {
                    destination.property = source.property;
                }
            }
        }

        function simpleClass(property, method, static) {
            if(property) {
                extend(property, constructor);
            }
            if(method) {
                extend(method, constructor.prototype);
            }
            return constructor;
        }
        // calling simpleClass
        //
        var someInstance = simpleClass(
        // constructor
        (function(from, to) {
            this.from = from;
            this.to = to;
        }),
        // method
        {
            // no simpleClass.prototype.method, as constructor.prototype
            // is being defining here inside simpleClass invocation
            isInclude: function(number) {
                return this.from <= number && this.to >= number;
            },
            foreach: function(f) { // f is array
                for(var loop = this.from; loop <= this.to; loop++) {
                    f(loop); // invoking f at loop
                }
            },
            toString: function() {
                return "(" + this.from + "," + this.to + ")";
            }
        },
        // instance
        // creating new instance
        {
            upto: function(lowerLimit, higherLimit) {
                return new someInstance(lowerLimit, higherLimit);
            }
        });​
        //
        // so actually this whole func is same as Range but its all wrapped-in
        //
    }
    //
    // Complex numbers Class
    //
    {
        // jsLint and g.cl.c checked for bugs
        // creating a class for complex numbers operation
        // this class has :
        //      private properties
        //      instance methods
        //      static properties
        //      static methods
        //      using instance methods by instantiation
        //      using static methods by just invoking class
        //
        //
        // --------------> creating class

        function ComplexNumbers(real, imaginary) {
            this.real = real || {};
            this.imaginary = imaginary || {};
            //
            // only private instance properties defined inside class
            // all instance/static methods will be defined outside class
            //
            // private prop are defined inside of class for convenience
            // so that initialization can be done during construction of instance
        }
        //
        // --------------> defining instance methods :
        //
        ComplexNumbers.prototype = {
            constructor = ComplexNumbers;
            //
            addition = function(that) {
                return new ComplexNumbers( // adding complex qntty
                this.real + that.real, this.imaginary + that.imaginary);
            };
            subtract = function(that) {
                return new ComplexNumbers( // subt complex qntty
                this.real - that.real, this.imaginary - that.imaginary);
            };
            multiply = function(that) {
                return new ComplexNumbers( // (a+jb)(c+jd) = (ac-bd), (ad+cd)
                this.real * that.real - this.imaginary * that.imaginary, // real part
                this.real * that.imaginary + this.real * that.imaginary // imaginary part
                );
            };
            negative = function() {
                return new ComplexNumbers(-this.real, -this.imaginary);
            };
            magnitude = function() { // magnitude is dist b/w point and origin
                return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
            };
            toString = function() {
                // return the stringified form of instance property
                return "(" + this.real + "+" + "j" + b + ")";
            };
            isEqual = function(that) {
                return this.real === that.real && // testing real qntty
                this.imaginary === that.imaginary && // testing imaginary qntty
                that.prototype === ComplexNumbers; // testing both's prototype
            };
            getName = function() {
                return this.name;
                // 'name' is non-standard implementation to find class name
                // its not supported by all vendors, only in spider monkey
            };
        }
        //
        // --------------> defining static property :
        //
        // return class property null qntty
        ComplexNumbers.ZERO = new ComplexNumbers(0, 0);
        // return class property unity real qntty
        ComplexNumbers.ONE = new ComplexNumbers(1, 0);
        // return class property unity imaginary qntty
        ComplexNumbers.IODA = new ComplexNumbers(0, 1);
        //
        // --------------> defining static methods :
        //
        ComplexNumbers.toString = function(real, imaginary) {
            return "(" + real + "+" + "j" + imaginary + ")";
            // stringified form of static property,
            // note: toString is invoked on ComplexNumbers instd of ComplexNumbers.prototype
            // thats the diff b/w static and instance methods
            // note : static methods dont usually use 'this' invocation context
        };
        //
        // --------------> using the ComplexNumbers class
        //
        // creating instance
        var someInstance = new ComplexNumbers(33, 44); // 33+j44
        // invoking instance method
        someInstance.addition(new ComplexNumbers(2, 1));
        alert(someInstance.magnitude());
        // invoking static method
        alert(ComplexNumbers.toString(11, 88)); // 11+j88
        // using static property, no need for instantiation
        console.log(isEqual(someInstance, ComplexNumbers.IODA));
    }
    //
    // in c++ , the property in method can be used as local var, so you dont need to use 'this'
    // but in js, its not supported
    // js dont have private or protected unlike c++, instead, convention is used
    // like, to show that some property shouldnt be changed, name them with CAPITAL letters
    //
    // js classes are dynamic i.e its properties and method can be defined
    // in runtime called 'augmenting'
    //
    // augment a conjugate static method in ComplexNumbers
    //
    ComplexNumbers.conjugate = function(real, imaginary) {
        return new ComplexNumbers(real, -imaginary);
    }
    // above method is autoly added to ComplexNumbers and its instances
    //
    // properties can be added to Object.prototype so that its available to all
    // instances, but its safer to defineProperty enumerable:false for them
    //
    // in clientside, HTMLelement is a class where you can augment any method
    // which you wanna use in html, but its not implemented yet in IE
    //
    // Finding class
    {
        // classOf( ) we created is usedful only for builtin/core types, but when we define our
        // own class, it wont work on that and return "Object"
        //
        // these are techniques to find class of any object :
        //      instanceof
        //      constructor property
        //      isPrototypeOf
        //      name of constructor function
        //
        // instanceof
        {
            objectName instanceof className
            // className is actually constructor function
            //
            // constructor is the public face or name of a class but true identity of any
            // class is its prototype. so despite the use of constructor with instanceof,
            // js checks class o.b.o from which proto it inherits, not from which ctor its created
        }
        //
        // isPrototypeOf( )
        {
            // ctor function or classname is not important, prototype is important, so
            // to avoid constructorfunction(i.e. className), use isPrototypeOf()
            ComplexNumbers.prototype.isPrototypeOf(real); // true
        }
        //
        // constructor property
        {
            // isPrototypeOf( ) and instanceof dont allow to query. just allow to test.
            // In browser, array created in one frame is not instanceof 'Array' of other window
            // this problem also persists for constructor property

            function classFinder(x) {
                switch(x.constructor) {
                case Number:
                    return "Number";
                case String:
                    return "String";
                case Date:
                    return "Date";
                case ComplexNumbers:
                    return "ComplexNumbers";
                case regex:
                    return "regex";
                }
            }
            // expressions following 'case' are functions
            // expressions following 'typeof' are strings
            //
            // problem with above technique :
            //      doesnt work in different frames
            //      its not necessary that all objects have constructor property
        }
        //
        // constructor name
        {
            // instanceof/isPrototypeOf is false for "same objects in different frames"
            // but the "name of their prototype" will be same irrespective of frames
            //
            // algo to find name of class
            //      use typeof(): for primitive and return that
            //      use classOf( ) : for native objects
            //      use getName(): if ctor has name, return it,otherwise return "Object"
            //

            function classOf(someObject) {
                return Object.prototype.toString.apply(someObject).slice(8, -1);
            } // works for native someObjects

            function getName(someObject) {
                return this.name;
                // i didnt put regex implementation here
                //
            } // works for user-def someObjects

            function classFinder(someObject) {
                var Type, Class, Name;
                // Type will be used for primitive
                // Class will be used for native someObjects
                // Name will be used for ctor having name
                // note : ctor are actually named function
                //
                // for undefined
                if(undefined === someObject) {
                    return "undefined";
                }
                //
                // for non-existing
                if(isNan(someObject)) { // someObject !== someObject
                    return "Nan";
                }
                //
                // for primitive
                if("Object" !== (Type = typeof(someObject))) { // numbers, strings
                    return Type;
                }
                //
                // for native someObject
                if("Object" !== (Class = classOf(someObject))) { // as user-def classes return "Object"
                    return Class;
                }
                //
                // for user-def someObject
                if(someObject.constructor && // does constructor exist ?
                typeof someObject.constructor === "function" && // as classname is a ctor function
                (Name = getName(someObject))) { // Name shouldnt be undef or null
                    return Name;
                }
                //
                // if none is true
                else {
                    return "Object";
                }
            }
            // this technique also has problems as if constructor function is not created,
            // this function cant find name of class
        }

        // Duck typing
        {
            // instead of asking : "whats the class of this object?"
            // ask : "what this object can do ? "
            // so if an object can behave( have same properties and method ) of some specific
            // class, then we can say that this object is from that class even if its prototypal
            //  obj is not same
            //
            // remember we made isArrayLike( ), which checks diff attributes for array and let it
            // array like w/o checking its class. although true array has autoupdate length with shortening
            // the length causes element truncation. so depending upon requirements, you set the
            // isArrayLike( ) conditions and upon fulfilment of these conditions, you suppose its of
            // some specific class
            //
            // one approach is to assume that all methods are defined,so no checking, if any non-existing
            // method occurs, it will create error
            // second approach is to check method names but dont check for class names
            //
            // arg1 is your object
            // arg2 can be string , function, object
            // if arg2 is string  then suppose its a method name and check for type of method
            // if arg2 is a function, suppose its constructor, make arg2 a prototypal object
            // if arg2 is object, then check if a method in arg2 is present in our object

            function duckTypeCheck(arg1) { // variadic function
                for(var i = 1; i < arguments.length; i++) {
                    //
                    // arguments.forEach cant be used here as 'continue'
                    // is used which wont work in forEach
                    //
                    var arg2 = arguments.i;
                    switch(typeof arg2) { // either string, func or object
                    case 'string':
                        if(typeof arg1[arg2 /* i.e method */ ] !== "function") {
                            return false;
                        }
                        continue;
                    case 'function':
                        // means its ctor, so make it proto obj
                        // and go to next case then check there if
                        // arg1 object has same methods as this proto obj
                        // as in duck typing we dont find class
                        arg2 = arg2.prototype;
                    case 'object':
                        for(var methods in arg2) {
                            if(typeof arg2.methods !== "function") {
                                continue;
                                // if this prop is not a method in prototypal object
                                // so dont check this property in arg1, just iterate
                                // for next property
                            }
                            if(typeof arg1.methods !== "function") {
                                return false;
                                // i.e. property which is a method in prototypal object
                                // is not a method in our object
                            }
                        }
                    }
                    return true; // i.e. arg1 implements everything
                }
                // this function only tests for the method name matching,
                // it doesnt tell does these methods actually do the same
                // operation? its for flexibility
                //
                // this function doesnt work for native objects as they have some
                // non-enum prop. but it can be solved using getOwnPropertyNames()
            }
        }
        // finding own property
        {
            // when you use instanceof( ), it checks for all prop either own or inherit
            // but for own only :
            someObject.ownProperty(property);
            // but if ownProperty is a name of some var :
            Object.prototype.ownProperty.call(someObject, property);
            // above is a better and safe option
        }
        //
        // mozilla - js oop
        //
        {
            //
            // js is prototype base, it doesnt have class, class role,is done by prototypal object
            // js doesnt need seperate ctor, intsead anything defined in class get
            // executed when new obj is formed
            //
            // you can create property either inside class(this.property) or
            // outside(classname.prototype.property)
            // js has singleclass inheritance unlike c++
            //
            // in c++, inheritance:
            class baseClass: {} // parent
            class inheritClass: baseClass // child
            //  in js inheritance:

            function baseClass {}

            function inheritClass {
                baseClass.call(this);
                inheritClass.prototype = new baseClass()
            }
            //
            // inherit class instance will also be instance of base class
            //encapsulation :
            // every class inherits the methods of its parent and only needs to define
            // things it wishes to change
            //
            var SomeClass = function {
                    // :::
                }
            return SomeClass instanceof Function; // true
            return SomeClass.prototype instanceof Object; // true
            //
            // someClass belongs to Function as class is a function , called specialization
            // someClass proto object belongs to Object, called composition
            //
            // polymorphism : two classes having same property or method but in their own scope
            // its only true when two classes dont have parent/child relation
        }
        //
        // prototype chain
        //
        {
            var o = new someObj();
            var a = new someArray();

            // proto chain of o--->someObj---->Object---->null
            // proto chain of a--->someArray-->Array----->Object---->null
        }
        //
        // Set
        //
        {
            function Set() {
                this.values = {}; // its an object
                this.n = 0; // # of values in a set
            }
            Set.prototype = { // instance methods :
                //
                constructor = Set;
                //
                add = function() { // adding values or elements in a set
                    arguments.forEach(function(someArg) {
                        str = Set._v2s(someArg);
                        if(!Object.prototype.hasOwnProperty(this.values, str)) {
                            // safer than => this.values.hasOwnProperty(str)
                            this.values[str] = someArg;
                            this.n += 1;
                        }
                    });
                    return this; // for cascading
                };
                //
                remove = function() { // removing values or elements in a set
                    arguments.forEach(function(someArg) {
                        var v = someArg,
                            str = Set._v2s(v);
                        if(Object.prototype.hasOwnProperty(this.values, str)) {
                            delete this.values[str];
                            this.n -= 1;
                        }
                    });
                    return this;
                };
                //
                contains = function(value) { // testing if value exists in set
                    return Object.prototype.hasOwnProperty(this.values, Set._v2s(value));
                };
                //
                size = function() { // return size of set
                    return this.n;
                };
                //
                foreach = function(someFunction, arg) { // foreach implementation
                    // iterate someFunction on each property of this.value
                    //
                    var property;
                    for(property in this.values) {
                        if(Object.prototype.hasOwnProperty(this.values, Set._v2s(property))) {
                            return someFunction.call(this.values[property], arg);
                        }
                    }
                };
            } ;
            Set._v2s = function(arg) {
                // its a static function, b/c its not included with every instance
                // its just for class use, no instance can use it
                //
                switch(arg) {
                case undefined:
                    return 'u';
                case null:
                    return 'n';
                case true:
                    return 't';
                case false:
                    return 'f';
                default:
                    switch(typeof arg) {
                    case 'number':
                        return '#' + arg;
                    case 'string':
                        return '"' + arg;
                    }
                }
            };
        }
        //
        // Topics skipped :
        //      Enumerated type
        //      standard conversion
        //      method borrowing
        //      Constructor overloading
        //      Property descriptor
        //
        // class constructor
        {
            function someClass() {
                this.someProp = {};
            }

            alert(someClass.prototype.constructor);
            // means show me the constructor
            // function of prototype of class someClass
        }
        //
        // private properties
        //
        {
            // if properties are encapsulated in closure
            // they become safer .

            function Range(from, to) {
                this.from = function() {
                    return from
                };
                this.to = function() { // function carrying behaviour
                    return to
                }
            }
            Range.prototype.isInclude = function(value) {
                return this.from() <= value && this.to() >= to
            };
            Range.prototype.foreach = function(someFunction) {
                for(var i = this.from(), max = this.to(); i < max; i++) someFunction(i)
            };
            Range.prototype.toString = function() {
                return "(" + this.from() + "..." + this.to() + " )"
            };
            var someInstance = new Range(2, 3);
            // but this closure way is not completely safe as :
            someInstance.from = function() {
                return 0; // value of this.from is changed now to 0
            };
            alert(someInstance.from()); // 0 instead of 2
        }
        //
        // defining Subclass :
        //
        {
            // Subclass :
            // Subclass inherits all the instance methods of superclass plus also defines
            // its own instance method
            //
            // abstract class
            // Subclass can have Subclasses too, in these cases, its good to have abstract
            // classes i.e. having methods without implementation. implementation of these
            // abstract class methods is provided in concrete subclass methods
            //
            // in order to create subclass from superclass:
            //    1- inherit "prototype" of superclass
            //    2- override constructor properties
            //
            // 'b' is subclass and 'a' is superclass :
            b.prototype = inherit(a.prototype); // inherit prototype
            b.prototype.constructor = b; // override ctor properties
            //
            // creating subclass :
            //
            {
                function createSubclass(superclass, subclass, methods, statics) {
                    subclass.prototype = inherit(superclass.prototype);
                    subclass.prototype.constructor = subclass;

                    if(methods) subclass.prototype = methods;
                    if(statics) subclass = statics;

                    return subclass;
                }

                function inherit(p) {
                    if(null === p || 0 === p) return TypeError;
                    if(Object.create) {
                        return Object.create(p);
                    }
                    if(typeof p === "function" || typeof p === "object") {
                        return defineProperties({}, getPrototypeOf(p));
                    }
                }
            }
            //
            // Inheritance :
            //
            {
                // Defining custom methods : SingletonSet example
                //
                {
                    // SingletonSet is a subset of Set which has only one readonly member
                    // add,remove are readonly, foreach invokes for this.member and contains
                    // checks for this.member only
                    // size returns 1 and isEqual checks for prototype,size,member
                    // other methods are same as Set class
                    //

                    function extend(a, b) {
                        for(var property in a) {
                            b[property] = a[property];
                        }
                    }

                    function SingletonSet(member) {
                        this.member = member;
                    }
                    SingletonSet.prototype = inherit(Set.prototype);
                    // now we have to implement some custom methods, so we cant do :
                    // SingletonSet.prototype.constructor = SingletonSet;
                    // instead :
                    extend(SingletonSet.prototype, {
                        constructor: SingletonSet,
                        add: function() {
                            throw "readonly";
                        },
                        remove: function() {
                            throw "readonly"
                        },
                        contains: function(args) {
                            return this.member === args;
                        },
                        foreach: function(someFunction, args) {
                            someFunction.apply(this.member, args);
                            // no for loop as only single property
                        },
                        isEqual: function(args) {
                            return args instanceof Set && //
                            1 === args.size && //
                            this.member === args.member;
                        },
                        size: function() {
                            return 1;
                        }
                    });
                    // other methods are same as Set class
                    // SingletonSet inherits from Set dynamically i.e.
                    // new methods added to Set are also added to SingletonSet
                    //
                    // whenever you need to change some implementation of superclass
                    // while making other intact. then firstly inherit prototype of
                    // superclass and then making changes using extend(subclass.prototype,:::)
                }
            }
            //
            // Method-chaining and Constructor-chaining :
            //
            {
                // Method-chaining :
                // when sublclass B overrides method of superclass A method, then sometimes
                // the overriding method of B needs to invoke over-ridden method of A
                //
                // Constructor-chaining :
                // when constructor of B needs to invoke constructor of A
                //
                // creating a generic subclass
                //

                function inherit(o) {
                    if(null === o || undefined === o) {
                        return TypeError;
                    }
                    if(Object.create) {
                        return Object.create(o);
                    }
                    if(typeof o === "function" || typeof o === "object") {
                        return defineProperties({}, getPrototypeOf(p));
                    }
                }

                function condition(value) {
                    // this is just an example of condition function
                    // it can be any condition
                    //
                    return typeof value === "string";
                }

                function CustomSubClass(superclass, condition) {
                    var subclass = function() { // constructor chaining
                            superclass.apply(this, arguments);
                            // superclass ctor is used a function for subclass
                        };
                    var a = subclass.prototype = inherit(superclass.prototype);
                    a.constructor = a;

                    a.add = function() {
                        arguments.forEach(function(value) {
                            if(!condition(value)) {
                                throw "condition not satisfied on " + value;
                            }
                        });

                        superclass.prototype.add.apply(this, arguments);
                        // Method-chaining
                        // i.e. inheriting all of the remaining implementation
                        //  of add function defined in superclass
                    };
                    return subclass;
                }

                // CustomSubClass is generic so that whenever you want to change the superclass,
                // just changed that in param, no need to changed anywhere in function
                //

                function condition1(value) {
                    return value !== null;
                }
                var iAmAClass = CustomSubClass(Set, condition1);
                //
                // this is called class factories, which is only possible due to
                // dynamic nature of js, its not possible in static type language
            }
        }
        //
        // composition
        //
        {
            // instead of creating and inheriting several Subclasses for different purposes,
            // we can create a single composition class and create instances of this classes
            // for different purposes rather than creating seperate subclasses
            //
            // in order to create a composite class from Set class
            //
        }
        //
        // Class augmentation vs Object augmentation :
        //
        {
            // class augmentation / classical inheritance
            {
                // in classical languages, you create a class and when you need its object to
                // behave differently you inherit a class from the base and make some changes
                // in subclass

                function SuperClassical(property) {
                    this.property = property;
                    this.methods = function() {
                        return this.property;
                    };
                }
                var new obj1 = new SuperClassical(99);
                alert(obj1.methods()); // 99
                //
                // now if a want to change behavious of method
                // i'll inherit a subclass, like

                function SubClassical() {
                    var a = SubClassical.prototype = inherit(SuperClassical);
                    a.constructor = a;
                }
                a.methods = function() {
                    return "i am " + this.property + " !!!";
                };
                // now create an instance
                var obj2 = new SubClassical(99);
                alert(obj2.methods); // "i am 99 !!!"
            }
            // Object augmentation / parasitic inheritance
            //
            {
                // in js object augmentation, above problem can be solved
                // at object level w/o creating new class
                //

                function SuperClassical(property) {
                    this.property = property;
                    this.methods = function() {
                        return this.property;
                    };
                }
                var obj1 = new SuperClassical(99);
                // alert(obj1.methods()); // 99
                //
                // now if i want to change object behaviour
                // without changing superClassical class
                //
                obj1.methods = function() {
                    return "i am " + this.property + " !!!";
                };
                var obj3 = obj1;
                obj3.property = 100;
                alert(obj3.methods());​
                //
                // this way, i only have to augment object w/o
                // creating any new class. its power due to class-less
                // model of js
            }
        }
        //
        // ecma5 and classes :
        //
        {
            // ecma3 way of Range class:
            {
                function Range(from, to) {
                    this.from = from;
                    this.to = to;
                }
                Range.prototype = {
                    isInclude = function(number) {};
                    foreach = function(f) {};
                    toString = function() {};
                    isEqual = function(that) {};
                    compareTo = function(that) {};
                }
            }
            //
            // ecma5 way of Range class:
            {
                // can work for ctor as well as factory function

                function Range(from, to) {
                    var property = {
                        from: {
                            // property descriptor
                            value: from,
                            enumarable: true,
                            configurable: false,
                            extendable: false
                        },
                        to: {
                            // property descriptor
                            value: to,
                            enumarable: true,
                            configurable: false,
                            extendable: false
                        }
                        // now creating object :
                        if(this instanceof Range) {
                            // initialization using constructor
                            return defineProperties(this, property);
                        } else {
                            // initialization using factory function
                            return Object.create(Range.prototype, property);
                            // here 'this' cant use as its not instanceof Range
                        }
                    }
                }
                // defining instance methods :
                Object.defineProperties(Range.prototype, {
                    isInclude: function(v) {
                        return this.from < v && this.to > v;
                    },
                    toString: function() {
                        return this.from + "..." + this.to;
                    },
                    foreach: function(someFunction, args) {
                        for(var i = this.from; i <= this.to; i++) {
                            someFunction(i, args);
                        }
                    },
                    isEqual: function(that) {
                        return that.from === this.from && //
                        that.to === this.to && //
                        that instanceof Range && //
                        null !== that;
                    },
                    compareTo: function(that) {
                        if(!(that instanceof Range)) return "Not comparable";
                        else if(that.from === this.from && that.from > this.from) return that + ">" + this;
                        else if(that.from === this.from && that.from < this.from) return that + "<" + this;
                    }
                });
                // if you want to change any method at runtime :
                //
                // defineProperty(object,"propertyname",{ changes } ) ;
                //
                defineProperty(Range.prototype, "isInclude", {
                    enumerable: false
                });
            }
            // ecma5 better version of Range :
            {
                // in above case, the property descriptor are sort of cluttering the class
                // another way is to define freezeProp and hideProp functions
                //

                function Range(from, to) {
                    this.from = from;
                    this.to = to;
                    freezeProp(this);
                    // now members are non-config and non-writ.
                }
                Range.prototype = {
                    hideProp({ // methods are non-enum
                        constructor: Range,
                        isInclude: function(number) {},
                        foreach: function(f) {},
                        toString: function() {},
                        isEqual: function(that) {},
                        compareTo: function(that) {}
                    });
                }
            }
            //
            // these functions can be defined somewhere else to keep class
            // definition elegant and much like ecma3
            //

            function freezeProp(o) {
                var property = (1 === arguments.length) ? //
                Object.getOwnPropertyNames(o) : //
                Array.prototype.slice.call(arguments, 1);
                //
                // setting the properties
                //
                // property is an array having all properties of object o
                // now iterate at each prop using forEach and make it
                // non-writ. and non-config.
                //
                property.forEach(function(n) {
                    if(!Object.prototype.getOwnPropertyDescriptor(o, n).configurable) return;
                    // if its non-config already
                    //
                    else Object.defineProperty(o, n, {
                        writable: false,
                        configurable: false
                    });
                });
                return o;
            }

            function hideProp(o) {
                var property = (1 === arguments.length) ? //
                Object.getOwnPropertyNames(o) : //
                Array.prototype.splice.call(arguments, 1);
                //
                // setting the properties
                //
                property.forEach(function(n) {
                    if(!Object.prototype.getOwnPropertyDescriptor(o, n).configurable) return;
                    else Object.defineProperty(o, n, {
                        enumerable: false
                    });
                });
                return o;
            }
            // when you need to find how much time a
            // function take:
            var beforeTime = new Date();
            //  :::: whatever function
            var afterTime = new Date();
            console.log(afterTime - beforeTime);
            //
            // builtin ways in ecma5 for prevention :
            Object.freeze(Range.from);
            Object.freeze(Range.isInclude());
        }
        //
        // modules
        //
        {
            // modules should not define globalVar to minimize conflict
            // try to create a class by associating it some other builtin class and then define
            //
            // function and
            // var as class property and methods. in this way, program will be
            // less poluted as most of the things wont be accessible directly but they are in deep nesting
            //
            // rather than defining different implementation of Set class, make them associate with a class
            // so that any implementation will be assecible through that class only
            //
            var set = {};
            set.subClasses.Set = function() {
                // :::
            }
            for instances
            var someInstance = new set.subClasses.Set(33);
            // instead of :
            var someInstance = new Set(33); // wrong
            // but if you are using a particular class too often, then :
            var Set = set.Subclasses.Set;
            // now it will be perfectly right :
            var someInstance = new set(33); // right
        }

        // Private namspace :
        //
        {
            function Set() {
                this.values = {};
                this.n = 0;
            }
            Set.prototype = {
                add: function() {},
                remove: function() {},
                contains: function(value) {},
                size: function() {},
                foreach: function(someFunction, arg) {}
            };
            Set._v2s = function(arg) {}; // static
            //
            // here Set._v2s is a function which we dont want to be part of public
            // API, user if API shouldnt use it, its just a helper function
            // so to avoid user to use it, define it inside of private namspace
            //
            var Set = (function() {
                function Set() {
                    this.values = {};
                    this.n = 0;
                }
                set.prototype = {
                    add: function() {},
                    remove: function() {},
                    contains: function() {},
                    size: function() {},
                    foreach: function() {}
                };

                function _v2s() {} // a local private function
                //
                // now we need to return Set unlike implementation w/o private Namespace
                // as in this case, invocation is done where definition done
                //
                return Set;
            }());
        }
