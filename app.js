
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { collection, addDoc, getFirestore, onSnapshot } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";



// const firebaseConfig = {
//     apiKey: "AIzaSyCgDcL7Lu0lAPl8Xg4L98raEV7ciD2KpKA",
//     authDomain: "todo-smit9.firebaseapp.com",
//   projectId: "todo-smit9",
//   storageBucket: "todo-smit9.appspot.com",
//   messagingSenderId: "386779277564",
//   appId: "1:386779277564:web:333e34fcdb34f5c1e7cf79"
// };



// const app = initializeApp(firebaseConfig);
// const db= getFirestore(app)



// const getTodos=()=>{

//      onSnapshot(collection(db, "todos"), (data) => {
//         data.docChanges().forEach((todo) => {
//             // console.log(todo)


//             console.log("todo",todo.doc.data());

//             })
       
//       });
      
      // 
      
      
// }
// getTodos()

// const addBTn=document.getElementById("add-btn")

// addBTn.addEventListener("click", todoApp)
// const delBTn=document.getElementById("delete-btn")
// delBTn.addEventListener("click",deleteAll )





// const edTodo=document.getElementById("editbtn")
// edTodo.addEventListener("click", editTodo)
// const delTodo=document.getElementById("del-todo")
// delTodo.addEventListener("click", deleteTodo)



// const todoApp =  ()=>{

function todoApp(){
    // try{
    
    let list=document.getElementById("list")
    let todo=document.getElementById("todo")
    let date= new Date()
    if(!todo.value || !todo.value.trim()){
        return
    }
    
    // const docRef = await addDoc(collection(db, "todos"), {
    //     value: todo.value,
    //     time: date.toLocaleTimeString()
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // }
    // catch(err){
    //     console.log(err)
    
    
    
    else{
        // text.innerHTML=""
        
        list.innerHTML+= `
        <div id=box>
        <li>
        
        <input type="text" name="" id="todo-input" " value=" ${todo.value}" disabled ">
        
        ${date.toLocaleTimeString()}
        <button id="editBtn" onclick="editTodo()" >Edit</button>
        <button class="button2" id="del-todo" onclick="deleteTodo()">Delete</button>
            </li>
            </div> 
            `
            
            
            
            
        // }
        todo.value=""
        
    }
    }
    

function deleteTodo(){
    event.target.parentNode.remove()
}


let edit=false
function editTodo(){
    if(edit){
        event.target.parentNode.childNodes[1].disabled=true
    
         event.target.parentNode.childNodes[1].blur()
         event.target.parentNode.childNodes[3].innerHTML="edit"
         console.log(event.target.parentNode.childNodes)
         edit=false
    }

    
    else{

        event.target.parentNode.childNodes[1].disabled=false
    
         event.target.parentNode.childNodes[1].focus()
         event.target.parentNode.childNodes[3].innerHTML="update"
         console.log(event.target.parentNode.childNodes)
         edit=true
    }
    }
    





function deleteAll(){

    list.innerHTML=""
}


// window.todoApp=todoApp;
// window.deleteTodo=deleteTodo;
// window.editTodo=editTodo;
// window.deleteAll=deleteAll;