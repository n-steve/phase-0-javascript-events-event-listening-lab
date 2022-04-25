/*function addingEventListener() {
    const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}
*/
function addingEventListener(){
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}
addingEventListener(); //this is to call the outer function, tested and alert was "I was clicked"
//both versions work, as stated, as long as the event listener is inside the function addingEventListener. 