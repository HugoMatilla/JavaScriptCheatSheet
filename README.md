
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

	Address: '100 main str`
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
One at a time in order.

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
Where the variables live, and how they relate to each other un memory.

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




