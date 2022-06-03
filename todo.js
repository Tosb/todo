const headText =document.getElementById("head-text")
headText.style.borderBottom ="10px grey solid";
// console.log(headText.parentElement)

const heading =document.getElementsByClassName("heading")
heading[0].textContent +="to do today!"

const lists =document.getElementsByTagName("li")
// console.log(lists)
 Array.from(lists).forEach(element => {
     element.style.backgroundColor="white"
 })


 headText.addEventListener("click", (e)=>{
    //  console.log(e.target)
     alert("headerclicked")
 })

//  const handleDelet =document.querySelectorAll(".delete")
// //  console.log(handleDelet)
//  handleDelet.forEach(button => {
//      button.addEventListener("click", (e)=>{
//          const itemToRemove= e.target.parentElement
//          itemToRemove.remove(itemToRemove)
//         //  console.log(itemToRemove)
//      })
//  });

 const handleDelete= document.querySelector(".todos ul")
 handleDelete.addEventListener("click", (e)=>{
     if (e.target.className === "delete") {
         const itemToDelete= e.target.parentElement
         itemToDelete.remove(itemToDelete)
     }
 })

 const addTask = document.forms[1]
 addTask.addEventListener("submit", (e) =>{
    e.preventDefault()
     const inputValue= addTask.querySelector("#add-todo").value
    //  console.log(inputValue)
    const newLi = document.createElement("li");
    const newTask= document.createElement("span");
    const newDeleteButton= document.createElement("span");
    newTask.textContent= inputValue
    newDeleteButton.textContent= "delete"
    newTask.classList.add("task")
    newDeleteButton.classList.add("delete")
    newLi.appendChild(newTask);
    newLi.appendChild(newDeleteButton);
    const ul= document.querySelector(".todos ul")
    // console.log(ul)
    ul.appendChild(newLi);
    addTask.reset();

 })
const toggleButton= document.getElementById("toggle")
toggleButton.addEventListener("click", ()=>{
    const body= document.body
    body.classList.toggle("darkMode")
})

const button= document.getElementById("toggle")
button.addEventListener("click", ()=>{
    if (button.innerText === "Dark Theme") {
        button.innerText = "Light  Theme";
    } else{
        button.innerText= "Dark Theme"
    }
})

const searchBar= document.forms[0].querySelector("input")
searchBar.addEventListener("keyup", (e)=>{
    const searchTerm= e.target.value.toLowerCase()
    // console.log(searchTerm)
    const allTask= document.querySelectorAll(".todos li")
    allTask.forEach(task => {
        const taskName= task.firstElementChild.textContent.toLowerCase()
        if (taskName.indexOf(searchTerm) != -1) {
            task.style.display="flex"
        } else{
            task.style.display= "none"
        }
    })
})

