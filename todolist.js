 const mylist=JSON.parse(localStorage.getItem('mylist'))||[];
document.querySelector('.add').addEventListener('click',()=>{addtodo()});
function rendertodo()
{
  let htmlelement='';
  mylist.forEach((todo,index)=>{
    const{name,date}=todo;
    const html=`<div>${name}</div><div>${date}</div><button class="js-delete">Delete</button>`;
    htmlelement+=html;
  });
  document.querySelector('.js-tasks').innerHTML=htmlelement; //after  this because the above is just a string this is where html is added on page
  document.querySelectorAll('.js-delete').forEach
  ((deletevalue,index)=>{
    deletevalue.addEventListener('click',()=>{mylist.splice(index,1);
    rendertodo();
    savestorage();})
  })
}
function addtodo()
{
  let val=document.querySelector('.js-todo');
  const name=val.value;
  let val2=document.querySelector('.js-date');
  const date=val2.value;
  mylist.push({
    name,
    date});
  rendertodo();
  val.value='';
  val2.value='';
  savestorage();
}
function savestorage()
{
  localStorage.setItem('mylist',JSON.stringify(mylist));
}
