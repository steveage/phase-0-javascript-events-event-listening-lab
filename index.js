const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', addingEventListener);
}

function handleMouseClick() {
    alert('I was clicked!');
};