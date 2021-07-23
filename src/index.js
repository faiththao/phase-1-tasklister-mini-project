document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset()
  })
});

function buildToDo(todo){
  let li = document.createElement('li');
  let buttn = document.createElement('button');
  buttn.addEventListener('click', handleDelete)
  buttn.textContent = 'x';
  li.textContent = `${todo}`;
  li.appendChild(buttn);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove()
}