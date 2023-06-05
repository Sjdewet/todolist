let list = [
    {
        id: 1,
        name: 'wake up',
        createdDate: '2 June 2023',
        completed:''
    },
    {
        id: 2,
        name: 'shower',
        createdDate: '2 June 2023',
        completed:''
    },
    {
        id: 3,
        name: 'get dressed',
        createdDate: '2 June 2023',
        completed:''
    },
    {
        id: 4,
        name: 'brush teeth',
        createdDate: '2 June 2023',
        completed:''
    },
    {
        id: 5,
        name: 'eat',
        createdDate: '2 June 2023',
        completed:''
    },
    {
        id: 6,
        name: 'go to school',
        createdDate: '2 June 2023',
        completed:''
    },
    {
          id: 7,
        name: 'come home and die in my sleep',
        createdDate: '2 June 2023',
        completed:''
    },
]

document.querySelector('#add').onclick = function(){
    if(document.querySelector('#input').value.length < 4)
    {
        alert("Must be 4 letters or more")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <input type="checkbox" id="checkbox">
                <span id="taskname">
                    ${document.querySelector('#input').value}
                </span>
                <button class="delete">
                    <i>X</i>
                </button>
            </div>
        `;
        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
  }