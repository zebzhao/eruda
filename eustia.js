// Built by eustia.
(function(root, factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define([], factory);
    } else if (typeof module === 'object' && module.exports)
    {
        module.exports = factory();
    } else { root._ = factory(); }
}(this, function ()
{
    var _ = {};

    if (typeof window === 'object' && window._) _ = window._;

    /* ------------------------------ isUndef ------------------------------ */

    var isUndef = _.isUndef = (function ()
    {
        /* Check if value is undefined.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is undefined|
         *
         * ```javascript
         * isUndef(void 0); // -> true
         * isUndef(null); // -> false
         * ```
         */

        function exports(val)
        {
            return val === void 0;
        }

        return exports;
    })();

    /* ------------------------------ inherits ------------------------------ */

    var inherits = _.inherits = (function ()
    {
        /* Inherit the prototype methods from one constructor into another.
         *
         * |Name      |Type    |Desc       |
         * |----------|--------|-----------|
         * |Class     |function|Child Class|
         * |SuperClass|function|Super Class|
         *
         * ```javascript
         * function People(name)
         * {
         *     this._name = name;
         * }
         * People.prototype = {
         *     getName: function ()
         *     {
         *         return this._name;
         *     }
         * };
         * function Student(name)
         * {
         *     this._name = name;
         * }
         * inherits(Student, People);
         * var s = new Student('RedHood');
         * s.getName(); // -> 'RedHood'
         * ```
         */

        var objCreate = Object.create;

        function noop() {}

        function exports(Class, SuperClass)
        {
            if (objCreate) return Class.prototype = objCreate(SuperClass.prototype);

            noop.prototype  = SuperClass.prototype;
            Class.prototype = new noop();
        }

        return exports;
    })();

    /* ------------------------------ has ------------------------------ */

    var has = _.has = (function ()
    {
        /* Checks if key is a direct property.
         *
         * |Name  |Type   |Desc                            |
         * |------|-------|--------------------------------|
         * |obj   |object |Object to query                 |
         * |key   |string |Path to check                   |
         * |return|boolean|True if key is a direct property|
         *
         * ```javascript
         * has({one: 1}, 'one'); // -> true
         * ```
         */

        var hasOwnProp = Object.prototype.hasOwnProperty;

        function exports(obj, key)
        {
            return hasOwnProp.call(obj, key);
        }

        return exports;
    })();

    /* ------------------------------ noop ------------------------------ */

    var noop = _.noop = (function ()
    {
        /* A no-operation function.
         *
         * ```javascript
         * noop(); // Does nothing
         * ```
         */

        function exports() {}

        return exports;
    })();

    /* ------------------------------ isObj ------------------------------ */

    var isObj = _.isObj = (function ()
    {
        /* Check if value is the language type of Object.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is an object|
         *
         * [Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
         *
         * ```javascript
         * isObj({}); // -> true
         * isObj([]); // -> true
         * ```
         */

        function exports(val)
        {
            var type = typeof val;

            return !!val && (type === 'function' || type === 'object');
        }

        return exports;
    })();

    /* ------------------------------ allKeys ------------------------------ */

    var allKeys = _.allKeys = (function ()
    {
        /* Retrieve all the names of object's own and inherited properties.
         *
         * |Name  |Type  |Desc                       |
         * |------|------|---------------------------|
         * |obj   |object|Object to query            |
         * |return|array |Array of all property names|
         *
         * > Members of Object's prototype won't be retrieved.
         *
         * ```javascript
         * var obj = Object.create({zero: 0});
         * obj.one = 1;
         * allKeys(obj) // -> ['zero', 'one']
         * ```
         */

        function exports(obj)
        {
            var ret = [], key;

            for (key in obj) ret.push(key);

            return ret;
        }

        return exports;
    })();

    /* ------------------------------ idxOf ------------------------------ */

    var idxOf = _.idxOf = (function ()
    {
        /* Get the index at which the first occurrence of value.
         *
         * |Name       |Type  |Desc                |
         * |-----------|------|--------------------|
         * |arr        |array |Array to search     |
         * |val        |*     |Value to search for |
         * |[fromIdx=0]|number|Index to search from|
         *
         * ```javascript
         * idxOf([1, 2, 1, 2], 2, 2); // -> 3
         * ```
         */

        function exports(arr, val, fromIdx)
        {
            return Array.prototype.indexOf.call(arr, val, fromIdx);
        }

        return exports;
    })();

    /* ------------------------------ keys ------------------------------ */

    var keys = _.keys = (function (exports)
    {
        /* Create an array of the own enumerable property names of object.
         *
         * |Name  |Type  |Desc                   |
         * |------|------|-----------------------|
         * |obj   |object|Object to query        |
         * |return|array |Array of property names|
         */

        exports = Object.keys || function (obj)
        {
            var ret = [], key;

            for (key in obj)
            {
                if (has(obj, key)) ret.push(key);
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ identity ------------------------------ */

    var identity = _.identity = (function ()
    {
        /* Return the first argument given.
         *
         * |Name  |Type|Desc       |
         * |------|----|-----------|
         * |val   |*   |Any value  |
         * |return|*   |Given value|
         *
         * ```javascript
         * identity('a'); // -> 'a'
         * ```
         */

        function exports(val)
        {
            return val;
        }

        return exports;
    })();

    /* ------------------------------ objToStr ------------------------------ */

    var objToStr = _.objToStr = (function ()
    {
        /* Alias of Object.prototype.toString.
         *
         * |Name  |Type  |Desc                                |
         * |------|------|------------------------------------|
         * |value |*     |Source value                        |
         * |return|string|String representation of given value|
         * 
         * ```javascript
         * objToStr(5); // -> '[object Number]'
         * ```
         */

        var ObjToStr = Object.prototype.toString;

        function exports(val)
        {
            return ObjToStr.call(val);
        }

        return exports;
    })();

    /* ------------------------------ isArr ------------------------------ */

    var isArr = _.isArr = (function (exports)
    {
        /* Check if value is an `Array` object.
         *
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |val   |*      |The value to check                |
         * |return|boolean|True if value is an `Array` object|
         *
         * ```javascript
         * isArr([]); // -> true
         * isArr({}); // -> false
         * ```
         */

        exports = Array.isArray || function (val)
        {
            return objToStr(val) === '[object Array]';
        };

        return exports;
    })({});

    /* ------------------------------ isFn ------------------------------ */

    var isFn = _.isFn = (function ()
    {
        /* Check if value is a function.
         *
         * |Name  |Type   |Desc                       |
         * |------|-------|---------------------------|
         * |val   |*      |Value to check             |
         * |return|boolean|True if value is a function|
         *
         * Generator function is also classified as true.
         *
         * ```javascript
         * isFn(function() {}); // -> true
         * isFn(function*() {}); // -> true
         * ```
         */

        function exports(val)
        {
            var objStr = objToStr(val);

            return objStr === '[object Function]' || objStr === '[object GeneratorFunction]';
        }

        return exports;
    })();

    /* ------------------------------ isStr ------------------------------ */

    var isStr = _.isStr = (function ()
    {
        /* Check if value is a string primitive.
         *
         * |Name  |Type   |Desc                               |
         * |------|-------|-----------------------------------|
         * |val   |*      |Value to check                     |
         * |return|boolean|True if value is a string primitive|
         *
         * ```javascript
         * isStr('eris'); // -> true
         * ```
         */

        function exports(val)
        {
            return objToStr(val) === '[object String]';
        }

        return exports;
    })();

    /* ------------------------------ isNum ------------------------------ */

    var isNum = _.isNum = (function ()
    {
        /* Checks if value is classified as a Number primitive or object.
         *
         * |Name  |Type   |Desc                                 |
         * |------|-------|-------------------------------------|
         * |value |*      |Value to check                       |
         * |return|boolean|True if value is correctly classified|
         */

        function exports(val)
        {
            return objToStr(val) === '[object Number]';
        }

        return exports;
    })();

    /* ------------------------------ isArrLike ------------------------------ */

    var isArrLike = _.isArrLike = (function ()
    {
        /* Check if value is array-like.
         *
         * |Name  |Type   |Desc                       |
         * |------|-------|---------------------------|
         * |value |*      |Value to check             |
         * |return|boolean|True if value is array like|
         *
         * > Function returns false.
         *
         * ```javascript
         * isArrLike('test'); // -> true
         * isArrLike(document.body.children); // -> true;
         * isArrLike([1, 2, 3]); // -> true
         * ```
         */

        var MAX_ARR_IDX = Math.pow(2, 53) - 1;

        function exports(val)
        {
            if (!has(val, 'length')) return false;

            var len = val.length;

            return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
        }

        return exports;
    })();

    /* ------------------------------ each ------------------------------ */

    var each = _.each = (function ()
    {
        /* Iterates over elements of collection and invokes iteratee for each element.
         *
         * |Name    |Type        |Desc                          |
         * |--------|------------|------------------------------|
         * |obj     |object array|Collection to iterate over    |
         * |iteratee|function    |Function invoked per iteration|
         * |[ctx]   |*           |Function context              |
         *
         * ```javascript
         * each({'a': 1, 'b': 2}, function (val, key) {});
         * ```
         */

        function exports(obj, iteratee, ctx)
        {
            var i, len;

            if (isArrLike(obj))
            {
                for (i = 0, len = obj.length; i < len; i++) iteratee.call(ctx, obj[i], i, obj);
            } else
            {
                var _keys = keys(obj);
                for (i = 0, len = _keys.length; i < len; i++)
                {
                    iteratee.call(ctx, obj[_keys[i]], _keys[i], obj);
                }
            }

            return obj;
        }

        return exports;
    })();

    /* ------------------------------ createAssigner ------------------------------ */

    var createAssigner = _.createAssigner = (function ()
    {
        /* Used to create extend, extendOwn and defaults.
         *
         * |Name    |Type    |Desc                          |
         * |--------|--------|------------------------------|
         * |keysFn  |function|Function to get object keys   |
         * |defaults|boolean |No override when set to true  |
         * |return  |function|Result function, extend...    |
         */

        function exports(keysFn, defaults)
        {
            return function (obj)
            {
                each(arguments, function (src, idx)
                {
                    if (idx === 0) return;

                    var keys = keysFn(src);

                    each(keys, function (key)
                    {
                        if (!defaults || isUndef(obj[key])) obj[key] = src[key];
                    });
                });

                return obj;
            };
        }

        return exports;
    })();

    /* ------------------------------ defaults ------------------------------ */

    var defaults = _.defaults = (function (exports)
    {
        /* Fill in undefined properties in object with the first value present in the following list of defaults objects.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |obj   |object|Destination object|
         * |*src  |object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        exports = createAssigner(allKeys, true);

        return exports;
    })({});

    /* ------------------------------ ajax ------------------------------ */

    var ajax = _.ajax = (function ()
    {
        /* Perform an asynchronous HTTP request.
         *
         * |Name   |Type  |Desc        |
         * |-------|------|------------|
         * |options|object|Ajax options|
         *
         * Available options:
         *
         * |Name         |Type         |Desc                  |
         * |-------------|-------------|----------------------|
         * |url          |string       |Request url           |
         * |data         |string object|Request data          |
         * |dataType=json|string       |Response type         |
         * |success      |function     |Success callback      |
         * |error        |function     |Error callback        |
         * |complete     |function     |Callback after request|
         *
         * ### get
         *
         * Shortcut for type = GET;
         *
         * ### post
         *
         * Shortcut for type = POST;
         *
         * |Name    |Type         |Desc            |
         * |--------|-------------|----------------|
         * |url     |string       |Request url     |
         * |data    |string object|Request data    |
         * |success |function     |Success callback|
         * |dataType|function     |Response type   |
         *
         * ```javascript
         * ajax({
         *     url: 'http://example.com',
         *     data: {test: 'true'},
         *     error: function () {},
         *     success: function (data)
         *     {
         *         // ...
         *     },
         *     dataType: 'json'
         * });
         *
         * ajax.get('http://example.com', {}, function (data)
         * {
         *     // ...
         * });
         * ```
         */

        function exports(options)
        {
            defaults(options, exports.setting);

            var type = options.type,
                url = options.url,
                data = options.data,
                dataType = options.dataType,
                success = options.success,
                error = options.error,
                complete = options.complete,
                xhr = options.xhr();

            xhr.onreadystatechange = function ()
            {
                if (xhr.readyState !== 4) return;

                var result;

                var status = xhr.status;
                if ((status >= 200 && status < 300) || status === 304)
                {
                    result = xhr.responseText;
                    try {
                        if (dataType === 'json') result = JSON.parse(result);
                    } catch (e) {}
                    success(result, xhr);
                } else
                {
                    error(xhr);
                }

                complete(xhr);
            };

            if (type === 'GET')
            {
                data = serialize(data);
                url += url.indexOf('?') > -1 ? '&' + data : '?' + data;
            } else
            {
                if(isObj(data)) data = serialize(data);
            }

            xhr.open(type, url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            type === 'GET' ? xhr.send() : xhr.send(data);

            return xhr;
        }

        exports.setting = {
            type: 'GET',
            success: noop,
            error: noop,
            complete: noop,
            dataType: 'json',
            data: {},
            xhr: function ()
            {
                return new window.XMLHttpRequest();
            },
            timeout: 0
        };

        exports.get = function ()
        {
            return exports(parseArgs.apply(null, arguments));
        };

        exports.post = function ()
        {
            var options = parseArgs.apply(null, arguments);
            options.type = 'POST';

            return exports(options);
        };

        function parseArgs(url, data, success, dataType)
        {
            if (isFn(data))
            {
                success = data;
                data = {};
            }

            return {
                url: url,
                data: data,
                success: success,
                dataType: dataType
            };
        }

        function serialize(data)
        {
            var ret = [];

            each(data, function (val, key)
            {
                ret.push(key + '=' + encodeURIComponent(val));
            });

            return ret.join('&');
        }

        return exports;
    })();

    /* ------------------------------ extend ------------------------------ */

    var extend = _.extend = (function (exports)
    {
        /* Copy all of the properties in the source objects over to the destination object.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |obj   |object|Destination object|
         * |...src|object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        exports = createAssigner(allKeys);

        return exports;
    })({});

    /* ------------------------------ extendOwn ------------------------------ */

    var extendOwn = _.extendOwn = (function (exports)
    {
        /* Like extend, but only copies own properties over to the destination object.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |obj   |object|Destination object|
         * |*src  |object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        exports = createAssigner(keys);

        return exports;
    })({});

    /* ------------------------------ values ------------------------------ */

    var values = _.values = (function ()
    {
        /* Creates an array of the own enumerable property values of object.
         *
         * |Name  |Type  |Desc                    |
         * |------|------|------------------------|
         * |obj   |object|Object to query         |
         * |return|array |Array of property values|
         *
         * ```javascript
         * values({one: 1, two: 2}); // -> [1, 2]
         * ```
         */

        function exports(obj)
        {
            var ret = [];

            each(obj, function (val) { ret.push(val) });

            return ret;
        }

        return exports;
    })();

    /* ------------------------------ contain ------------------------------ */

    var contain = _.contain = (function ()
    {
        /* Check if the value is present in the list.
         *
         * |Name  |Type   |Desc                                |
         * |------|-------|------------------------------------|
         * |array |array  |Target list                         |
         * |value |*      |Value to check                      |
         * |return|boolean|True if value is present in the list|
         *
         * ```javascript
         * contain([1, 2, 3], 1); // -> true
         * ```
         */

        function exports(arr, val)
        {
            if (!isArrLike(arr)) arr = values(arr);

            return idxOf(arr, val) >= 0;
        }

        return exports;
    })();

    /* ------------------------------ isMatch ------------------------------ */

    var isMatch = _.isMatch = (function ()
    {
        /* Check if keys and values in src are contained in obj.
         *
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |obj   |object |Object to inspect                 |
         * |src   |object |Object of property values to match|
         * |return|boolean|True if object is match           |
         *
         * ```javascript
         * isMatch({a: 1, b: 2}, {a: 1}); // -> true
         * ```
         */

        function exports(obj, src)
        {
            var _keys = keys(src),
                len = _keys.length;

            if (obj == null) return !len;

            obj = Object(obj);

            for (var i = 0; i < len; i++)
            {
                var key = _keys[i];
                if (src[key] !== obj[key] || !(key in obj)) return false;
            }

            return true;
        }

        return exports;
    })();

    /* ------------------------------ loadJs ------------------------------ */

    var loadJs = _.loadJs = (function ()
    {
        /* Inject script tag into page with given src value.
         *
         * |Name|Type    |Desc           |
         * |----|--------|---------------|
         * |src |string  |Script source  |
         * |cb  |function|Onload callback|
         *
         * ```javascript
         * loadJs('main.js', function ()
         * {
         *     // Do something...
         * });
         * ```
         */

        function exports(src, cb)
        {
            var script = document.createElement('script');
            script.src = src;
            script.onload = function ()
            {
                var isNotLoaded = script.readyState &&
                    script.readyState != "complete" &&
                    script.readyState != "loaded";

                cb && cb(!isNotLoaded);
            };
            document.body.appendChild(script);
        }

        return exports;
    })();

    /* ------------------------------ matcher ------------------------------ */

    var matcher = _.matcher = (function ()
    {
        /* Return a predicate function that checks if attrs are contained in an object.
         *
         * |Name  |Type    |Desc                              |
         * |------|--------|----------------------------------|
         * |attrs |object  |Object of property values to match|
         * |return|function|New predicate function            |
         *
         * ```javascript
         * var objects = [
         *     {a: 1, b: 2, c: 3 },
         *     {a: 4, b: 5, c: 6 }
         * ];
         * filter(objects, matcher({a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6 }]
         * ```
         */

        function exports(attrs)
        {
            attrs = extendOwn({}, attrs);

            return function (obj)
            {
                return isMatch(obj, attrs);
            };
        }

        return exports;
    })();

    /* ------------------------------ now ------------------------------ */

    var now = _.now = (function (exports)
    {
        /* Gets the number of milliseconds that have elapsed since the Unix epoch.
         *
         * ```javascript
         * now(); // -> 1468826678701
         * ```
         */

        exports = Date.now || function ()
        {
            return new Date().getTime();
        };

        return exports;
    })({});

    /* ------------------------------ optimizeCb ------------------------------ */

    var optimizeCb = _.optimizeCb = (function ()
    {
        /* Used for function context binding.
         */

        function exports(fn, ctx, argCount)
        {
            if (isUndef(ctx)) return fn;

            switch (argCount == null ? 3 : argCount)
            {
                case 1: return function (val)
                {
                    return fn.call(ctx, val);
                };
                case 3: return function (val, idx, collection)
                {
                    return fn.call(ctx, val, idx, collection);
                };
                case 4: return function (accumulator, val, idx, collection)
                {
                    return fn.call(ctx, accumulator, val, idx, collection);
                }
            }

            return function ()
            {
                return fn.apply(ctx, arguments);
            };
        }

        return exports;
    })();

    /* ------------------------------ safeCb ------------------------------ */

    var safeCb = _.safeCb = (function (exports)
    {
        /* Create callback based on input value.
         */

        exports = function (val, ctx, argCount)
        {
            if (val == null) return identity;

            if (isFn(val)) return optimizeCb(val, ctx, argCount);

            if (isObj(val)) return matcher(val);

            return function (key)
            {
                return function (obj)
                {
                    return obj == null ? undefined : obj[key];
                }
            };
        };

        return exports;
    })({});

    /* ------------------------------ map ------------------------------ */

    var map = _.map = (function ()
    {
        /* Create an array of values by running each element in collection through iteratee.
         *
         * |Name    |Type        |Desc                          |
         * |--------|------------|------------------------------|
         * |obj     |array object|Collection to iterate over    |
         * |iteratee|function    |Function invoked per iteration|
         * |[ctx]   |*           |Function context              |
         * |return  |array       |New mapped array              |
         *
         * ```javascript
         * map([4, 8], function (n) { return n * n; }); // -> [16, 64]
         * ```
         */

        function exports(obj, iteratee, ctx)
        {
            iteratee = safeCb(iteratee, ctx);

            var _keys = !isArrLike(obj) && keys(obj),
                len = (_keys || obj).length,
                results = Array(len);

            for (var i = 0; i < len; i++)
            {
                var curKey = _keys ? _keys[i] : i;
                results[i] = iteratee(obj[curKey], curKey, obj);
            }

            return results;
        }

        return exports;
    })();

    /* ------------------------------ toArr ------------------------------ */

    var toArr = _.toArr = (function ()
    {
        /* Convert value to an array.
         *
         * |Name  |Type |Desc            |
         * |------|-----|----------------|
         * |val   |*    |Value to convert|
         * |return|array|Converted array |
         *
         * ```javascript
         * toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
         * toArr('abc'); // -> ['abc']
         * toArr(1); // -> []
         * toArr(null); // -> []
         * ```
         */

        function exports(val)
        {
            if (!val) return [];

            if (isArr(val)) return val;

            if (isArrLike(val) && !isStr(val)) return map(val);

            return [val];
        }

        return exports;
    })();

    /* ------------------------------ Class ------------------------------ */

    var Class = _.Class = (function ()
    {
        /* Create JavaScript class.
         *
         * |Name     |Type    |Desc                             |
         * |---------|--------|---------------------------------|
         * |methods  |object  |Public methods                   |
         * |[statics]|object  |Static methods                   |
         * |return   |function|Function used to create instances|
         *
         * ```javascript
         * var People = Class({
         *     initialize: function (name, age)
         *     {
         *         this.name = name;
         *         this.age = age;
         *     },
         *     introduce: function ()
         *     {
         *         return 'I am ' + this.name + ', ' + this.age + ' years old.'.
         *     }
         * });
         *
         * var Student = People.extend({
         *     initialize: function (name, age, school)
         *     {
         *         this.callSuper(People, 'initialize', arguments);
         *
         *         this.school = school;
         *     },
         *     introduce: function ()
         *     {
         *         return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.'.
         *     }
         * }, {
         *     is: function (obj)
         *     {
         *         return obj instanceof Student;
         *     }
         * });
         *
         * var a = new Student('allen', 17, 'Hogwarts');
         * a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
         * Student.is(a); // -> true
         * ```
         */

        function exports(methods, statics)
        {
            return Base.extend(methods, statics);
        }

        function makeClass(parent, methods, statics)
        {
            statics = statics || {};

            var ctor = function ()
            {
                var args = toArr(arguments);

                return this.initialize
                       ? this.initialize.apply(this, args) || this
                       : this;
            };

            inherits(ctor, parent);
            ctor.prototype.superclass = parent;

            ctor.extend = function (methods, statics)
            {
                return makeClass(ctor, methods, statics);
            };
            ctor.inherits = function (Class)
            {
                inherits(Class, ctor);
            };
            ctor.methods = function (methods)
            {
                extend(ctor.prototype, methods);
                return ctor;
            };
            ctor.statics = function (statics)
            {
                extend(ctor, statics);
                return ctor;
            };

            ctor.methods(methods).statics(statics);

            return ctor;
        }

        var Base = exports.Base = makeClass(Object, {
            className: 'Base',
            callSuper: function (parent, name, args)
            {
                var superMethod = parent.prototype[name];

                if (!superMethod) return;

                return superMethod.apply(this, args);
            },
            toString: function ()
            {
                return this.className;
            }
        });

        return exports;
    })();

    /* ------------------------------ Select ------------------------------ */

    var Select = _.Select = (function (exports)
    {
        /* Simple wrapper of querySelectorAll to make dom selection easier.
         *
         * ### constructor
         *
         * |Name    |Type  |Desc               |
         * |--------|------|-------------------|
         * |selector|string|Dom selector string|
         *
         * ### find
         *
         * Get desdendants of current matched elements.
         *
         * |Name    |Type  |Desc               |
         * |--------|------|-------------------|
         * |selector|string|Dom selector string|
         *
         * ### each
         *
         * Iterate over matched elements.
         *
         * |Name|Type    |Desc                                |
         * |----|--------|------------------------------------|
         * |fn  |function|Function to execute for each element|
         *
         * ```javascript
         * var $test = new Select('#test');
         * $test.find('.test').each(function (idx, element)
         * {
         *     // Manipulate dom nodes
         * });
         * ```
         */

        exports = Class({
            className: 'Select',
            initialize: function (selector)
            {
                this.length = 0;

                if (!selector) return this;

                if (isStr(selector)) return rootSelect.find(selector);

                if (selector.nodeType)
                {
                    this[0] = selector;
                    this.length = 1;
                }
            },
            find: function (selector)
            {
                var ret = new Select;

                this.each(function ()
                {
                    mergeArr(ret, this.querySelectorAll(selector));
                });

                return ret;
            },
            each: function (fn)
            {
                each(this, function (element, idx)
                {
                    fn.call(element, idx, element);
                });

                return this;
            }
        });

        var rootSelect = new exports(document);

        function mergeArr(first, second)
        {
            var len = second.length,
                i = first.length;

            for (var j = 0; j < len; j++) first[i++] = second[j];

            first.length = i;

            return first;
        }

        return exports;
    })({});

    /* ------------------------------ $safeEls ------------------------------ */

    var $safeEls = _.$safeEls = (function ()
    {
        /* Convert value into an array, if it's a string, do querySelector.
         *
         * |Name  |Type                |Desc             |
         * |------|--------------------|-----------------|
         * |value |element array string|Value to convert |
         * |return|array               |Array of elements|
         *
         * ```javascript
         * $safeEls('.test'); // -> Array of elements with test class
         * ```
         */

        function exports(val)
        {
            return toArr(isStr(val) ? new Select(val) : val);
        }

        return exports;
    })();

    /* ------------------------------ delegate ------------------------------ */

    var delegate = _.delegate = (function (exports)
    {
        /* Event delegation.
         *
         * ### add
         *
         * Add event delegation.
         *
         * |Name    |Type    |Desc          |
         * |--------|--------|--------------|
         * |el      |element |Parent element|
         * |type    |string  |Event type    |
         * |selector|string  |Match selector|
         * |cb      |function|Event callback|
         *
         * ### remove
         *
         * Remove event delegation.
         *
         * ```javascript
         * var container = document.getElementById('container');
         * function clickHandler()
         * {
         *     // Do something...
         * }
         * delegate.add(container, 'click', '.children', clickHandler);
         * delegate.remove(container, 'click', '.children', clickHandler);
         * ```
         */

        function retTrue()  { return true }
        function retFalse() { return false }

        function trigger(e)
        {
            var handlers = this.events[e.type],
                handler,
                handlerQueue = formatHandlers.call(this, e, handlers);

            e = new delegate.Event(e);

            var i = 0, j, matched, ret;

            while ((matched = handlerQueue[i++]) && !e.isPropagationStopped())
            {
                e.curTarget = matched.el;
                j = 0;
                while ((handler = matched.handlers[j++]) && !e.isImmediatePropagationStopped())
                {
                    ret = handler.handler.apply(matched.el, [e]);

                    if (ret === false)
                    {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }
        }

        function formatHandlers(e, handlers)
        {
            var current = e.target,
                ret     = [],
                delegateCount = handlers.delegateCount,
                selector, matches, handler, i;

            if (current.nodeType)
            {
                for (; current !== this; current = current.parentNode || this)
                {
                    matches = [];
                    for (i = 0; i < delegateCount; i++)
                    {
                        handler = handlers[i];
                        selector = handler.selector + ' ';
                        if (matches[selector] === undefined)
                        {
                            matches[selector] = contain(this.querySelectorAll(selector), current);
                        }
                        if (matches[selector]) matches.push(handler);
                    }
                    if (matches.length) ret.push({ el: current, handlers: matches});
                }
            }

            if (delegateCount < handlers.length)
            {
                ret.push({
                    el: this,
                    handlers: handlers.slice(delegateCount)
                });
            }

            return ret;
        }

        exports = {
            add: function (el, type, selector, fn)
            {
                var handler = {
                        selector: selector,
                        handler : fn
                    },
                    handlers;

                if (!el.events) el.events = {};

                if (!(handlers = el.events[type]))
                {
                    handlers = el.events[type] = [];
                    handlers.delegateCount = 0;
                    el.addEventListener(type, function (e)
                    {
                        trigger.apply(el, arguments);
                    }, false);
                }

                selector ? handlers.splice(handlers.delegateCount++, 0, handler)
                         : handlers.push(handler);
            },
            remove: function (el, type, selector, fn)
            {
                var events = el.events;

                if (!events || !events[type]) return;

                var handlers = events[type],
                    i = handlers.length,
                    handler;

                while (i--)
                {
                    handler = handlers[i];

                    if ((!selector || handler.selector == selector) && handler.handler == fn)
                    {
                        handlers.splice(i, 1);
                        if (handler.selector)
                        {
                            handlers.delegateCount--;
                        }
                    }
                }
            },
            Event: Class({
                className: 'Event',
                initialize: function Event(e) { this.origEvent = e },
                isDefaultPrevented: retFalse,
                isPropagationStopped: retFalse,
                isImmediatePropagationStopped: retFalse,
                preventDefault: function ()
                {
                    var e = this.origEvent;

                    this.isDefaultPrevented = retTrue;
                    if (e && e.preventDefault) e.preventDefault();
                },
                stopPropagation: function ()
                {
                    var e = this.origEvent;

                    this.isPropagationStopped = retTrue;
                    if (e && e.stopPropagation) e.stopPropagation();
                },
                stopImmediatePropagation: function ()
                {
                    var e = this.origEvent;

                    this.isImmediatePropagationStopped = retTrue;
                    if (e && e.stopImmediatePropagation) e.stopImmediatePropagation();
                    this.stopPropagation();
                }
            })
        };

        return exports;
    })({});

    /* ------------------------------ $event ------------------------------ */

    var $event = _.$event = (function (exports)
    {
        /* bind events to certain dom elements.
         *
         * ```javascript
         * function clickHandler()
         * {
         *     // Do something...
         * }
         * $event.on('#test', 'click', clickHandler);
         * $event.off('#test', 'click', clickHandler);
         * ```
         */

        exports = {
            on: eventFactory('add'),
            off: eventFactory('remove')
        };

        function eventFactory(type)
        {
            return function (nodes, event, selector, handler)
            {
                nodes = $safeEls(nodes);

                if (isUndef(handler))
                {
                    handler = selector;
                    selector = undefined;
                }

                each(nodes, function (node)
                {
                    delegate[type](node, event, selector, handler);
                });
            };
        }

        return exports;
    })({});

    /* ------------------------------ raf ------------------------------ */

    var raf = _.raf = (function (exports)
    {
        /* Shortcut for requestAnimationFrame.
         *
         * Use setTimeout if native requestAnimationFrame is not supported.
         *
         * ```javascript
         * var id = raf(function tick()
         * {
         *     // Animation stuff
         *     raf(tick);
         * });
         * raf.cancel(id);
         * ```
         */

        var raf = window.requestAnimationFrame,
            cancel = window.cancelAnimationFrame;

        var lastTime = 0,
            vendors = ['ms', 'moz', 'webkit', 'o'];

        for (var i = 0, len = vendors.length; i < len && !raf; i++)
        {
            raf = window[vendors[i] + 'RequestAnimationFrame'];
            cancel = window[vendors[i] + 'CancelAnimationFrame'] ||
                     window[vendors[i] + 'CancelRequestAnimationFrame'];
        }

        raf = raf || function(cb)
        {
            var curTime = now();

            var timeToCall = Math.max(0, 16 - (curTime - lastTime)),
                id = setTimeout(function() { cb(curTime + timeToCall) }, timeToCall);

            lastTime = curTime + timeToCall;

            return id;
        };

        cancel = cancel || function(id) { clearTimeout(id) };

        raf.cancel = cancel;

        exports = raf;

        return exports;
    })({});

    return _;
}));