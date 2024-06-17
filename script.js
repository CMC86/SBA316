// script.js

document.addEventListener("DOMContentLoaded", function() {
    const topGif = document.getElementById('top-gif');
    
    // Center horizontally
    topGif.style.display = 'block';
    topGif.style.marginLeft = 'auto';
    topGif.style.marginRight = 'auto';
    
    // Set width and height
    topGif.style.width = '75%'; // Set your desired width
    topGif.style.height = 'auto'; // Maintain aspect ratio
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const topGif = document.getElementById('top-gif');
    const gifContainer = document.querySelector('.centered-container');
    const centeredGif = document.getElementById('centered-gif');
  
    // Cache elements using querySelector or getElementById
    const myDiv = document.getElementById('myDiv');
    const listItems = document.querySelectorAll('ul li');
    const button = document.querySelector('button');
    const form = document.getElementById('myForm'); // Reference to the form element
  
    // Parent-child-sibling relationship navigation
    const parent = listItems[0].parentNode;
    const nextSibling = listItems[0].nextElementSibling;
    const firstChild = parent.firstChild;

    
  
    // Iterating over a collection of elements
    listItems.forEach(item => {
      // Log each list item's text content
      console.log(item.textContent);
    });
  
    // Create a new div element and append it
    const newDiv = document.createElement('div');
    newDiv.textContent = 'New Div Element';
    parent.appendChild(newDiv);
  
    // Using DocumentFragment or cloneNode to create templated content
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 3; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `New Item ${i + 1}`;
      fragment.appendChild(listItem);
    }
    parent.appendChild(fragment);
  
    // Modifying HTML or text content in response to user interaction
    myDiv.textContent = 'Updated content';
  
    // Modifying style or CSS classes in response to user interactions
    myDiv.style.color = 'red';
    myDiv.classList.add('highlight');
  
    // Modifying attributes of an element in response to user interaction
    myDiv.setAttribute('data-id', '123');
  
    // Registering event listeners and defining associated event handler functions
    myDiv.addEventListener('click', handleClick);
    button.addEventListener('mouseover', handleMouseOver);
  
    function handleClick(event) {
      console.log('Div clicked');
      // Example: Change background color on click
      myDiv.style.backgroundColor = 'yellow';
    }
  
    function handleMouseOver(event) {
      console.log('Button hovered');
      // Example: Change button text on hover
      button.textContent = 'Hovered!';
    }
  
    // Using Browser Object Model (BOM) properties or methods
    console.log(window.innerWidth);
    window.alert('I Like Turtles!');
  
    // Including form and input with HTML attribute validation
    form.addEventListener('submit', handleSubmit);
  
    function handleSubmit(event) {
      event.preventDefault();
      const email = form.querySelector('input[type="email"]');
      if (!email.checkValidity()) {
        // Handle invalid input
        console.log('Invalid email!');
      } else {
        console.log('Valid email!');
      }
    }
  
    // Committing changes to Git repository and README file
  
    // Add additional code and functionality as needed
  });
  