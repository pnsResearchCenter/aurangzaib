/*

libraries :
{
     jQuery: for manipulating the DOM [ http://jquery.com ]
     d3: like jQuery for SVG elements [  http://d3js.org/ ]

     Processing.js: for manipulating canvas elements [ http://processingjs.org ]
     Backbone.js: for managing client-side data structures [ http://backbonejs.org ]

     Underscore.js: powerful functional programming ideas [ http://underscorejs.org ]
     Twitter Bootstrap: accelerates UI styling and events [ http://twitter.github.com/bootstrap ]

     Modernizr: browser feature detection  [ http://modernizr.com ]
     MathJax: Latex math formulas in the browser [ http://www.mathjax.org ]

     HTML5 Boilerplate: Industry-standard starting point for HTML5-based sites [ http://html5boilerplate.com/ ]
     MooTools: Object oriented framework similar to jQuery [ http://mootools.net/ ]

     Prototype: framework [ http://prototypejs.org/ ]
     Dojo: framework [ http://dojotoolkit.org/ ]

     YUI: Framework for building interactive web app [ http://yuilibrary.com/ ]
     three.js: 3D rendering library using WebGL [ http://mrdoob.github.com/three.js/ ]

     Normalize.css: CSS to make elements look the same across browsers [ http://necolas.github.com/normalize.css/ ]
     MetroUICSS : great css based windows metro layouts [ http://metroui.org.ua/ ]

     less : The dynamic stylesheet language [ http://lesscss.org/ ]
}
*/


/// simple factorial function

function factorial(x) {
    var product = 1;
    if (x > 1) {
        product *= x;
        x--;
    }
    return product;
}

data[i++] *= 2;
data[i++] = data[i++] * 2; /* above both expressions are different */


/// this program shows how eval() works
var geval = eval(); // creating alias
var x = "global";

function f() {
    var x = "local";
    eval("x += 'changed' ");
    // direct call
    // here local var value will be changed b/c eval is used
}

function g() { // effect shown a/c to ecma5
    var y = "local";
    geval("y += 'changed' ");
    // here global var will be created and changed,
    // as alias is used, indirect call
}

/// function creation
var anyfunction = function (argument) { // function statement method
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
for (i[b++] in a) { // all a elements are save in i array
    // ::::::
};

/// format of exception throw
if (x > 0) {
    throw new Error(" program is fucked");
}
try {
    var n = prompt(" please enter an integer # ");
    var f = factorial(n);
    alert(n + "! = ");

} catch (ex) {
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
    var now = new Date();
    // current date
    var then = new Date(2010, 0, 1);
    // year,month,day
    var later = new Date(2013, 3, 4, 17, 23, 33, 44);
    // year,month,day,hr,mm,ss,ms
    now.getDate(); // getData( ) is imagined function
}


/// in order to emulate object.create( ) in ecma3 :

function inherit(p) {

    if (p == null) return TypeError;
    // means that p is not an object but undef or null
    // (since == is used, so null and undef both covered)
    if (Object.create) return Object.create(p);
    // if ecma5 is used
    var t = typeof (p);
    // just for checking purpose
    if (t !== "object" && t !== "function") return TypeError;
    // should not be primitive
    // rechecking the type of p
    // method : 1

    function f() { // create a dummy function for ctor purpose
    }
    f.prototype = p;
    // inheriting the properties of p to f
    return new f();

    // method : 2
    return defineProperties({}, {
        Object.getPrototypeOf(p)
    });
    // return newly created object with prototype of p
    // inherit function is not a replacable for object.create ( ) as it can't :
    //  create object of null property
    //  have second argument
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
    for (var stock in portfolio) { // shares is a enum property of portfolio
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
    if (object) if (object.p) if (object.p.l) {
        len = object.p.l;
    }
    // OR
    if (Object && Object.p && Object.p.l) {
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
    for (p in o) {
        if (o.OwnProperty(p)) continue;
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
    for (p in o) {
        if (o[p] === "function") continue;
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
        for (p in o) { // only enum prop
            console.log(p);
        } // a,b,c will be shown but not toString
        // "in" shows 'own' and 'inherited' prop but not non-enum prop
    }
}

/// property extending :
{ /* copy all prop of a to b, same name prop are overwritten */

    function extend(a, b) {
        var prop;
        for (prop in a) {
            b[prop] = a[prop];
        }
    }
}

/// property merging :
{ /* copy all prop of a to b, b with same name prop are not overwritten */

    function merging(a, b) {
        var prop;
        for (prop in a) {
            if (b.ownProperty("prop")) { // inherited are not included
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
            for (prop in b) { // either inherited or own
                if (!(prop in a)) { // if this prop not present in a
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
        for (prop in a) { // either inherited or own
            if (prop in b /*b.ownProperty( "prop" )*/ ) {
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
        for (prop in a) {
            if (prop in b) {
                intersectVar.push(prop); // intersect[prop] = b[prop];
            }
        }
    }
}

///function which returns array of enum properties of object :
{
    function enumprop(a) {
        var array = [];

        for (var prop in a) {
            if (a.propertyIsEnumerable("prop")) {
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
        get number() // accessor read-only property
        {
            return this.$n;
        },

        get next() // accessor read-only property
        {
            return this.($n++);
        },

        set number(n) // accessor write-only property
        {
            if (n > this.$n) { // just a condition
                this.$n = n;
            } else throw (" only greater number can be set ");
        }
    };
}

/// another object with accessor property which returns randomly gen num :
{
    var random() // object with getter-accessor-readonly property
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
    if (a.propertyIsEnumerable(x));
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
            get function () { // read-only accessor property
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
        value {
            function (o) {
                var name = Object.getOwnPropertyNames(o),
                    // all the own( enum as well as non-enum ) properties names
                for (var loopVar = 0; loopVar < name.length; loopVar++) {
                    if (name["loopVar"] in this) { // check if prop exists in obj
                        continue;
                        // if does, loop again
                    }

                    var description = Object.getOwnPropertyDescriptor(o),
                        // all attritubes
                        Object.defineProperty(proto, "name[loopVar]", {
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
    if (someObject.ownProperty(someObj));

    // to check for own instance :
    p.instanceof(o);
    p.isPrototypeOf(o);

    // to check for enum property :
    if (someObject.propertyIsEnumerable(someProp));

    // to query prototype in ecma5 :
    someObject.getPrototypeOf(objectName);
}

/// finding the class of an Object
{

    // there is no way to find class but we can create our own function

    function classOf(o) {

        if (o === null) throw ('null'); // not needed in ecma5
        if (o === undefined) throw ('undefined'); // not needed in ecma5
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
    key.forEach(function (value) { // value means key[i]
        if (!value) {
            continue;
        }
        myArray.push(o.value);
    });

    // method 2 : for( )
    for (var i = 0, len = key.length; i < len; i++) {
        if (!key[i]) {
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
    for (var i in a) { // a is an array
        if (!(String(Math.floor(Math.abs(number(i))))) === i) continue;
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
        myArray.forEach(function (x) { // x is the value of elements in myArray
            someVar += x;
            // adding all array elements
        });
    }
}

/// using multi-dimension array :
{
    for (var row = 0; row < myArray.length; row++) {
        for (var col = 0; col < myArray[row].length; col++) {
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

    function () {
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
            } catch (e) {
                if (e === foreach.
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
        var b = a.map(function (value) {
            return value * value
        });
        //b = [ 1,2,3 ]
    }

    // filter returns the values a/c to the 'predicate function'
    {
        var a = [2, 3, 4, 5, 15, 6];
        var b = a.filter(function (value) {
            return (value < 4)
        });
        // b = [ 2, 3 ]
        var a = [2, 3, 4, 5, 15, 6];
        var b = a.filter(function (value, index) {
            return (index % 2 === 0)
        });
        // b = [ 2,4,15] i.e even-index element
        // to remove sparse, null , undef from an array
        {
            var a = a.filter(function (value) {
                if (value !== undefined && value != null)
            });
        }
    }
    // 'every' returns true if "all" elements satisfy predicate condition
    {
        var a = [1, 2, 3, 4, 5];
        return a.every(function (value) {
            return (value < 6)
        });
        // true, all values < 6
        return a.every(function (value) {
            return (value % 2)
        });
        // false, all values are not even
    }

    // 'some' returns true if anyone element satisfy predicate condition
    {
        var a = [1, 9, 6, 4, 99];
        return a.some(function (value) {
            return (value < 6)
        });
        // true, 1and4 < 6
        return a.some(function (value) {
            return (value === undefined)
        });
        // false, none of elements is undefined
    }
}

/// mozilla version to copy objects
{
    function copy(Object1) {

        var Object2 = Object.create(Object.getPrototypeOf(Object1));
        // create an object2 with prototype from object1
        var key = Object.getOwnPropertyNames(Object1);
        // get properties from object1
        key.forEach(function (value) { // iterate on the properties
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
    // method 2 :
    var a = Object.create(Object.getPrototypeOf(b));
    var key = Object.keys(b);
    key.forEach(function (value) {
        if (!value) continue;
        var desc = Object.getOwnPropertyDescriptor(b);
        defineProperty(a, value, {
            desc
        });
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
    a.reduce(function (x, y) {
        return x + y
    }, 0);
    // now this function will iterate on each value 
    // a = [ 1+0, 2+1, 3+3, 4+6, 5+10 ]
    // when no init val provided
    // when no empty array is passed to reduce. TypeError is returned
    // reduceRight starts oper. from right to left side
    a.reduceRight(function (x, y) {
        return x + y
    }, 0);
    // a = [ 1+14, 2+12, 3+9, 4+5, 5+0]
}