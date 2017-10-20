# CounterJS
An extremely simple, super lightweight and no trills attached JavaScript plugin for handling countdowns or timer operations.

## Use Cases
1. Simplest of all - a basic counter that counts down from a given ceiling value.
2. A series of counters in different locations on the page. 

**There are two ways basic methods in which to use this plugin**. 

1. HTML.
2. JavaScript instantiation.

A little note:

_JQuery is super great at what it is does, a marvellous library and I do not knock it. However, not everyone wishes to use it. Due to this, the ability to use the plugin without jQuery is catered for! A library with zero dependencies is the simplest and most straightforward for just plug and play._


## How to get started

### The HTML Way 

#### Basic Installation

```html

<span id="counter" data-counter-begin="10"></span>

```
#### Installation with Custom Rate

The rate in this example is explicity defined as 500ms. What does this achieve? This instructs the plugin to allow for a 500ms gap between counts. 1000ms (1 second) is the default.

```html

<span id="counter" data-counter-begin="10" data-counter-rate="500"></span>

```

#### Installation with Delay

If you wish to delay the execution of the countdown for a defined period of time. This is the markup needed to achieve this.

```html

<span id="counter" data-counter-begin="10" data-counter-delay="5000"></span>

```

The above example simply counts from 10, only after the delay period of 5 seconds has passed.


### The JavaScript Way 

#### Basic Installation

For this JavaScript installation, you will required a basic HTML tag with the ID you wish to transform into a counter element.

```html

<span id="counter"></span>

```

Once you have defined your HTML, it is time to apply the JavaScript.


```javascript

var countdown = new CounterJS("#counter");

```


#### Installation with Custom Configuration

```html

<span id="counter"></span>

```

Once you have defined your HTML, it is time to apply the JavaScript.


```javascript

var countdown = new CounterJS("#counter", { rate: 10, start: 5000 });

```


##

