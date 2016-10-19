// IEFF needs the global object and the jQuery reference
;(function(global, $) {
    
    var Greetr = function(firstName, lastName, language){
        // Create a new Function Constructor which has the same parameters as the called 
        // one from the client, but we return a new Object. The new object is created
        // because we call 'new' to  a Function Constructor
        return new Greetr.init(firstName, lastName, language);
    }
    
    // No access is possible here from outside the lobrarys
    var supportedLangs = ['en', 'es'];
    
    // Declaring and creating new variables that are not expose outside
    var greetings = {
        en:'Hello',
        es:'Hola'
    };
    
    var formalGreetings = {
        en:'Greetings',
        es:'Saludos'
    };
    
    var logMessages = {
        en:'Logged in',
        es:'Sesion iniciada'
    };
    
    Greetr.prototype = {
        // Exposed functions
        fullName: function() {
            return this.firstName +' '+ this.lastName;
        },
        
        validate: function(){
            if( supportedLangs.indexOf(this.language)==-1 ){
                throw "Invalid language"
            }
        },
        
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
            return this;
        },
        
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },
        
        HTMLgreeting: function(selector, formal){
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery selector'
            }
            
            var msg;
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }
            $(selector).html(msg);
            return this;
        }
        
    };
    
    Greetr.init     = function(firstName, lastName, language){
         // Keep 'this' safe to the future calls. We will always have this object in 'self'
        var self = this;
        // Default values
        self.firstName = firstName || '<Your first name here>';
        self.lastName = lastName || '<Your last name here>';
        self.language = language || "en"
        
        self.validate()
    }
    
    // 'Greetr.init.prototype' is the prototype of the init function. Every function
    // '.prototype' is where the prototype is. We wnat that our object prototype is
    // 'Greetr.prototype'  that we will define ourself.  
    // That way we point 'Greetr.init.prototype' to 'Greetr.prototype'.
    Greetr.init.prototype = Greetr.prototype;
    
    //Attach it to the global object to be accessed everywhere and Alias to G$
    global.Greetr = global.G$ = Greetr;
    
    
}(window, jQuery)); // we call teh function with the window(global) object and the jQuery reference