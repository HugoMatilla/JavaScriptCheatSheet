
#General Concepts
## Syntax parsers
A program that reads your code and determine what it does and if its grammar is correct.

## Lexical environments
Where something sits physically in the code you write.

Place where the parts of your code sits, is important.

## Execution contexts
A wrapper to help manage the code that is running.


## Name/Value pair
A name which maps to a unique value
```javascript

	Address: '100 main str'
```	

## Object
A collection of name value pairs.
```javascript

	Address:
		{
		Street:'Main',
		Number:100,
		Apartment:{
			Floor: 3,
			Number:301
		}
	}
```

## Global Environment and The Global Object

**Global = not inside a function**

## Execution Context

* Global Object = Window Object in browsers.
* 'this' = Window Object in browsers.
* Link to the Outer Environment	
* Your code

## Creation Phase: 

* Global Object
* 'this'
* Outer Environment	
* "Hoisting" Setup Memory Space for Variables and functions 
	* Functions are set to memory entirely (name and code).
	* Variables are set to a placeholder called _undefined_. Becuase the JS engine won't know the space until it executes it. All variables are initialy set to _undefined_.

```javascript

	b();
	console.log(a);

	var a = 'Hello World'

	function   b(){
	    console.log('Called b');
	}
	// Returns
	> 'Called b'
	> undefined

```

## Execution Phase
Executes the code line by line.

## Single Threaded Synchronous Execution
One at a time, in order.

## Function invocation 
Execute, run a function.

## Execution Stack

When a function is called a new execution context is created and put at the top of the execution stack.

```javascript

	function b() {}
	function a() { b()}
	a();
```

The execution stack is.

* b() Execution Context (create and execute)
* a() Execution Context (create and execute)
* Global Execution Context (created and code executed)

## Variable environments.
Where the variables live, and how they relate to each other in memory.

## Scope Chain
Functions use outer environments to find variables that are not in its execution contexts.
```javascript
	
	function b() {
		console.log(myVar);
	}

	function a() {
		var myVar = 2;
		b();
	}

	var myVar = 1;
	a();
	//Returns
	> 1
	//'b' outers environment is the global environment. 
```

```javascript

	function a() {
	    
	    function b() {
	        console.log(myVar);
	    }
	    
		b();
	}

	var myVar = 1;
	a();

	//Returns
	> 2
	//'b' outers environment is the 'a' environment.

```

## Scope
Scope is where a variable is available in your code 

## ES6 let
Block scoping: define a variable that it is only available in its block(if block, for loop block...), and can not be used until is declared.

## Asynchronous
More than one at a time.
Event Queue is processed after the execution stack is empty.

```javascript

	// long running function
	function waitThreeSeconds() {
	    var ms = 3000 + new Date().getTime();
	    while (new Date() < ms){}
	    console.log('finished function');
	}

	function clickHandler() {
	    console.log('click event!');   
	}

	// listen for the click event
	document.addEventListener('click', clickHandler);


	waitThreeSeconds();
	console.log('finished execution');
	//Returns if clicked
	> finished function
	> finished execution // The execution task is empty
	> click event

```	
#3 Types and Operators
##Dynamic Typing
Variable types are figured out while the code is running.

##Primitive Types
Data that represent a single value (not an object)

1. `undefined`: lack of exixtence (do not set to this value)
2. `null`: lack of exixtence
3. `boolean`
4. `number`: Floating point
5. `string`
6. `symbol`: ES6 

##Operators
A special function written differently as common functions. 

* Infix notation `3 + 4` used in javascript  
* Prefix notation `+3 4`  
* Postfix notation `3 4+`  

## Precedence and Associativity
Precedence: Which Operator function gets called first.

Associativity: What order Operator functions get called: left or right or right to left
```javascript

	var a = 2, b = 3, c = 4
	a = b = c
	//all equals to 4
```
[Operator precedence and Associativity table](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Coercion
Converting a value to one type to another

```javascript
	
	var a = 1 + '2';
	// 12
```

## Comparasion Operators
Use `===` 99% of the time unlesss you want to coarce and you know what you spect of the coarce.

[Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## Default values

```javascript

	function greet(name){
		name = name || '<Your name here>'
		console.log('Hello ' + name)
	}

	greet();
```

#Objects and Functions

##Objects and Dots

```javascript
	
	var person = new Object();

	person["firstname"] = "Tony";

	var firstNameProperty = "firstname";

	//Computed member access
	console.log(person[firstNameProperty]);

	//Member access
	console.log(person.firstname);

	// An object inside another object (subobjects).
	person.address = new Object();
	
	// Left to right Associativity. Person then address then street.
	person.address.street = "111 Main St.";
	
	console.log(person.address.street);
	
	//Same thing
	console.log(person["address"]["street"]);

```

##Object literals

Shorthand using curly braces. 
```javascript

	var person = { 
    	firstname: 'Tony', // They can be initialized
    	address: {
        	street: '111 Main St.',
    	}
	};

```

```javascript
	
	var Tony = { 
    	firstname: 'Tony',
    	address: {
        	street: '111 Main St.',
    	}
	};

	function greet(person) {
    	console.log('Hi ' + person.firstname);
	}

	greet(Tony);

	// Creating an object on the fly
	greet({ 
	    firstname: 'Mary', 
	    lastname: 'Doe' 
	});

	// Add new properties on the fly
	Tony.address2 = {
    	street: '333 Second St.'
	}
```

## NameSpace

A container for variables and functions.

Faking name spacing Containt objects, methods and properties inside a container object.

```javascript

	var greet = 'Hello!';
	var greet = 'Hola!'; 

	console.log(greet); // Get Hola!

	var english = {};
	var spanish = {};

	english.greet = 'Hello!';
	spanish.greet = 'Hola!';

	console.log(english);
```

## JSON and Object literals
A JSON is an Object

An Object can not be JSON

Properties have to be wrapped in cuotes

No functions as values

```javascript

	{ 
		"firstname": "Mary", 
		"isAProgrammer": true 
	}
```

```javascript

	var objectLiteral = {
	    firstname: 'Mary',
	    isAProgrammer: true
	}

	console.log(JSON.stringify(objectLiteral));

	var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
```

## Functions and Objects

**First class functions.**
They can:

* Assign variables to have a values that is a function
* Pass functions as parameters
* Create functions on the fly

Fucntions are special Objects.

They can have 

* Primitives
* Objects
* Other functions

	Only for functions
* **Name**: Can be optional: _annonymous_
* **Code**: is invocable.

```javascript

	function greet() {
    	console.log('hi');   
	}

	greet.language = 'english';
	console.log(greet.language); // 'english'
```

##Functon Statements and Expression
**Expression**: unit of code that results in a value

**Statement**: Does not return a value ie. `if statement`

Function statement
```javascript

	//This function has a name, but is not assigned
	function greet() { 
    	console.log('hi');   
	}

	greet();

```

Function expression 
```javascript

	//This function has no name, but is assigned to a variable
	var anonymousGreet = function() {
    	console.log('hi');   
	}	


	anonymousGreet();


```

Pass a function to a function

```javascript

	function log(a) {
	   a();    
	}

	log(function() {
	    console.log('hi');   
	});
```

## By Value vs. by Reference

**Primitive** values are passed **by value**, are copied in a new memory address.

**Objects** are passed **by reference**, a new pointer is created pointing to the same address.

`=` Operator sets up a new memory space (new address)

```javascript

	var c = { greeting: 'hi' };
	var d;
	d = c; // d and c point to the same address

	c = { greeting: 'howdy' }; / // d and c not point anymore to the same address
	console.log(c);
	console.log(d);
```

##Objects, Functions and 'this'

Calling  `this` from a function,  will point always to the `Window` object.

```javascript
	
	function a() {
	    console.log(this);
	}

	var b = function() {
	    console.log(this);   
	}

	a();
	b();
```

Object literal with mehtods. (functions inside an objects are called methods)

```javascript

	var c = {
	    name: 'The c object',
	    log: function() {
	    	this.name = 'Updated c object';
	        console.log(this);  // Point to the 'c' object
	    }
	}

	c.log(); // Will show the c object where in its 'name' property will be 'Updated c object';
```

Creating a function inside an object and using `this` inside it will point to the `Window` object instead to the object.
To fix this we can use the `self` pattern.

```javascript

	var c = {
	    name: 'The c object',
	    log: function() {
	        var self = this;
	        
	        self.name = 'Updated c object';
	        console.log(self);
	        
	        var setname = function(newname) {
	        	this.name = newname; // Here 'this' points to the 'Window' object instead of to 'c'
	            self.name = newname; // Here 'this' points to 'c'  
	        }
	        setname('Updated again! The c object');
	        console.log(self);
	    }
	}

	c.log();
```


