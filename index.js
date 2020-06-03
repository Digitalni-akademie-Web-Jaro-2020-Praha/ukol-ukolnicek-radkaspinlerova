'use strict';

console.log('funguju!');

const tasks = ['Vyprat ponožky', 'Naučit se funkce vyššího řádu', 'Nakoupit na víkend', 'Udělat konečně úkol do JS', 'Vzít trio na výlet'];

const updateTasks = () => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    tasksElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
}
updateTasks()

const addNewTask = () => {
  const input = document.querySelector('#new-task').value;
  if (input === '') {
    alert("Zapiš úkol do prázdného pole a kliknutím na tlačítko ho přidej na seznam.");
  } else {
    updateTasks(tasks.push(input))
  }
}

const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', addNewTask);