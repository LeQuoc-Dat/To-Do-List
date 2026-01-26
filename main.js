const btn_addToDo = document.querySelector(".btn_addToDo");
const content_toDoList = document.querySelector(".content");
const totalToDo = document.querySelector("#t_toDo");

btn_addToDo.addEventListener("click", createToDo)

let total = 0;

function createToDo(event)
{
    if (total === 5)
    {
        fillWarningEffect();
        return;
        
    }
    const frm_toDo = document.createElement('div');
    frm_toDo.classList.add('frm_toDo');

    const content_toDo = document.createElement('div');
    content_toDo.classList.add('content_toDo');

    const btn_delete = document.createElement('button');
    btn_delete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btn_delete.addEventListener("click", deleteToDo)
    btn_delete.classList.add('btn_deleteToDo');

    const input_toDoGoal = document.createElement("input"); 
    input_toDoGoal.classList.add('input_toDoGoal');

    const items_toDo_container = document.createElement('div');
    items_toDo_container.classList.add('items_toDo_container');



    const btn_addItem = document.createElement('i');
    btn_addItem.innerHTML = '<i class="fa-solid fa-file-circle-plus"></i>';
    btn_addItem.classList.add("btn_addItem");
    

    

    btn_addItem.addEventListener("click", (event)=>
    {
    const item_toDo = document.createElement('div');
    item_toDo.classList.add("item_toDo");
    const item_toDo_input = document.createElement('textarea');
    item_toDo_input.cols = 12;
    item_toDo_input.rows = 2;
    item_toDo_input.classList.add("item_toDo_input");
    //item_toDo_input.innerText = '234';
    //item_toDo_input.style.textDecoration = 'line-through';
    //item_toDo_input.disabled ="true;"


    const item_toDo_chck = document.createElement('input');
    item_toDo_chck.type = 'checkbox';
    item_toDo_chck.classList.add("item_toDo_chk");
    item_toDo_chck.addEventListener("click", 
        (event) =>
        {
            const checkTarget = event.target.closest('textarea');
            if(item_toDo_chck.checked)
            {
               
                //checkTarget.disabled = "true";
                console.log("checked" + checkTarget);
            }
            else
            {
                //checkTarget.disabled = "false";
                console.log("unchecked");
            }
        }
        
            
    );

    const btn_deleteItem = document.createElement('i');
    btn_deleteItem.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btn_deleteItem.classList.add('btn_deleteItem');
    btn_deleteItem.addEventListener("click", (event) =>
    {
        removeTarget = event.target.closest('.item_toDo');
        removeTarget.remove();
    })

    
    item_toDo.appendChild(item_toDo_input);
    item_toDo.appendChild(item_toDo_chck);
    item_toDo.appendChild(btn_deleteItem);
    items_toDo_container.appendChild(item_toDo);

    });
   
    content_toDo.appendChild(input_toDoGoal);
    content_toDo.appendChild(btn_addItem)
    content_toDo.appendChild(items_toDo_container);
    content_toDo.appendChild(btn_delete);
    
    frm_toDo.appendChild(content_toDo);

    content_toDoList.append(frm_toDo);
   
    total += 1;
    updateTotalToDo();
}

// remove to-do from the list
function deleteToDo(event)
{
    removeTarget = event.target.closest('.frm_toDo');
    removeTarget.remove()
    total -=1;
    updateTotalToDo();
   
}

//update current total to-do on the list 
function updateTotalToDo()
{
    totalToDo.textContent = `Total: ${total}/5`
}
function fillWarningEffect()
{
   totalToDo.classList.toggle("total_filled_warning");
   setTimeout(() => totalToDo.classList.toggle("total_filled_warning") , 300);
}
