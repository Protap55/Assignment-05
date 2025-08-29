1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementById() finds a single component by its one of a kind ID.
getElementsByClassName() finds a live collection of components by their course title.
querySelector() finds the primary component that matches a CSS selector.
querySelectorAll() finds all components that coordinate a CSS selector.


2. How do you create and insert a new element into the DOM?

ans: To form and include a unused component to the DOM, you to begin with use document.createElement() to form it, and after that you utilize a strategy like appendChild() to stay it interior an existing component on the page.


3. What is Event Bubbling and how does it work?

ans: Occasion bubbling is when an occasion, like a tap, begins on the component you clicked and after that voyages upwards through all of its parent components to the best of the Report Question Demonstrate (DOM).
4. What is Event Delegation in JavaScript? Why is it useful?

ans: Occasion appointment may be a plan design where you put a single event audience on a parent component rather than on each one of its child components. It's valuable since it's more productive and works naturally for unused components included to the page afterward.

5. What is the difference between preventDefault() and stopPropagation() methods?

ans: preventDefault() stops the browser's default activity for an occasion. Think of it as telling the browser, "Do not do what you'd ordinarily do here." For illustration, it avoids a connect from exploring or a shape from submitting.
stopPropagation() stops an occasion from bubbling up the DOM tree. It's like telling the occasion, "Do not travel any assist." This keeps a tap on a child component from too activating a press handler on a parent component.