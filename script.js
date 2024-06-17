const myDiv = document.getElementById('myDiv');
const listItems = document.querySelectorAll('ul li');


const parent = listItems[0].parentNode;
const nextSibling = listItems[0].nextElementSibling;
const firstChild = parent.firstChild;

listItems.forEach(item => {
    
  });

  const newDiv = document.createElement('div');

  parent.appendChild(newDiv);

  const fragment = document.createDocumentFragment();
// Add elements to fragment
parent.appendChild(fragment);

myDiv.textContent = 'Updated content';

myDiv.style.color = 'red';
myDiv.classList.add('highlight');

myDiv.setAttribute('data-id', '123');

myDiv.addEventListener('click', handleClick);
button.addEventListener('mouseover', handleMouseOver);

function handleClick(event) {
  // Handle click event
}

function handleMouseOver(event) {
  // Handle mouse over event
}

console.log(window.innerWidth);
window.alert('Hello!');

<form>
  <input type="email" required>
  <button type="submit">Submit</button>
</form>

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]');
  if (!email.checkValidity()) {
    // Handle invalid input
  }
}

