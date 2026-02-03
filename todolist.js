mylist=[];
function rendertodo()
{
  let htmlelement='';
  for(let i=0;i<mylist.length;i++)
  {
    const todo=mylist[i];
    const{name,date}=todo;
    const html=`<div>${name}</div><div>${date}</div><button class="js-delete" onclick="mylist.splice(${i},1);
             rendertodo();">Delete</button>`;
    htmlelement+=html;
  }
  document.querySelector('.js-tasks').innerHTML=htmlelement;
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
}
