const todoText = document.getElementById('todo-text');
const tasksUl = document.getElementById('tasks-ul');

function addTasks() 
{
    if (todoText.value === '') 
    {
        alert("enter the tasks");
    }
     else 
    {
        console.log(todoText.value.trim());
        const liTag = document.createElement('li');
        const spanTag=document.createElement('span');
        const textNode= document.createTextNode(todoText.value.trim());
        spanTag.appendChild(textNode);
        spanTag.addEventListener('click',(e)=> {
            e.target.classList.toggle('completed');
        });
        const spanRemove=document.createElement('span');
        spanRemove.classList.add('Remove');
        spanRemove.innerHTML='&times;';
        spanRemove.addEventListener('click',(e)=>{
            console.log(e.target.parentElement);
            const li=e.target.parentElement;
            li.parentElement.removeChild(li);
        });
        liTag.appendChild(spanTag);
        liTag.appendChild(spanRemove);
        tasksUl.appendChild(liTag);
        todoText.value='';
    }
}
