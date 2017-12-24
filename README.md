# maptools
Toolset to work with Map and "object as hash map", map and lookup.

Main purpose of using Map and "object as hash map" is to have a fast, O(1) search for items using given key/id.
Toolset is made of few, most frequently used functions to create and work with those maps.

#previous lib
Previously, hash-map library was used, however, i discovered that there is still that very special property "\_\_proto\_\_" in the object that can not be used as a key. For example if you assign it the following way: a['\_\_proto\_\_'] = '1'; you will not be able to get the value back a['\_\_proto\_\_'] will yield an object instead of '1';. I have the impression that this did work on some previous versions of Chrome/Node, however i can't be sure of that.
Therefore, whole concept of shielding values became 'not viable'.

Solution is to use ES6 Map wherever possible. And where not possible, for example if map is needed to be stored in the Redux store, i decided that null-prototyped object would be used. It solves the issue of a['constructor'] to not be null, however it does not allow to use object-spread operator and serialize-deserialize operations. To remedy that, i created 2 corresponding functions, extend and parse/sanitize.
parse/sanitize example
```js
const result = parse('{ 1: true }'); // alternatively: sanitize(JSON.parse('{ 1: true }'));
result['constructor']; // -> undefined
```
And finally, there is 'get' method to be used on unsanitized objects.

#creating a map
map creates 1-to-1 Map from array source. If key occurs more than once, the latest value in the array will be used.
```js
const array = [{id: 1, name: '1'}, {id: 2, name '2'}];
const result = map(array, item => item.id);
const result2 = map(array, item => item.id, item => item.name);

result.get(1); // -> produces first object
result2.get(1); // -> produces name field from first object
```

lookup creates 1-to-many Map from array source effectively grouping values by given key
```js
const array = [{key: 1, name: '1'}, {key: 2, name '2'}, {key: 1, name: '3'}];
const result = lookup(array, item => item.key);
const result2 = lookup(array, item => item.key, item => item.name);

result.get(1); // -> produces array with first and third objects
result2.get(1); // -> produces following array ['1', '3']
```

#creating an objectMap
the same methods, with same signatures are used to create maps and lookups, however, only number and string can be used as a key and, as i stated earlier, '\_\_proto\_\_' string can not be a key. Methods can be imported from 'maptools/objectMap'.

#merging the maps
merge operator does that for 2 instances of Map. Result is the new instance of the map.
If same id is present in both maps, value from second map will be in the result.
```js
const result = merge(map1, map2);
```

to merge two "object as map" instances, extend operator is used. Basically because it extends null-prototyped object with those new objects.
extend examples
```js
// first example
let src = { 1: true };
let result = extend({...src, 2: true});
// second example
let src = { 1: true };
let result = extend(src, {2: true});

result['constructor']; // -> undefined
```
