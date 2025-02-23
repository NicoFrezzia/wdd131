const myBtn = document.getElementById('myBtn');

myBtn.addEventListener('click', function() {
  this.preventDefault();

  console.log('Button clicked');    
});