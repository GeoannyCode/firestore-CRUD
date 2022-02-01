import { saveTask, getTasks, onGetTasks, deleteTask } from './firebase.js'

const taskform = document.getElementById('task-form')
const taskContainer = document.getElementById('tasks-container')

window.addEventListener('DOMContentLoaded', async () => {
  
  onGetTasks((querySnapshot)=>{
    let html = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data()
      html += `
        <div class="card text-dark bg-light mb-3";">
        <div class="card-header">${task.title}</div>
        <div class="card-body">
          <p class="card-text">${task.description}</p>
          <button type="button" class="btn btn-outline-dark"><i class="uil uil-edit-alt"></i></button>
          <button type="button" class="btn btn-outline-danger btn-delete" data-id="${doc.id}"><i class="uil uil-trash-alt"></i></button>
        </div> 
        </div>
      `;
    });

  taskContainer.innerHTML = html;

  const btnsDelete = taskContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach(btn => {
      btn.addEventListener('click', (event)=>{
       deleteTask(event.target.dataset.id)
      })
    })
  });
});

taskform.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = taskform['task-title']
  const description = taskform['task-description']

  saveTask(title.value, description.value)

  taskform.reset()
})
