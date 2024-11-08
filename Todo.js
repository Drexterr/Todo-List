var list = document.getElementById('todolist');
var newBtn = document.getElementById('add-list');
var updatebtn = document.getElementById('update-top');
var input = document.getElementById('todoinput');
var deletebtn = document.getElementById('Remove-top');

/*var item1 = document.getElementById('List1');*/
var inputvalue = '';
input.addEventListener('input', function(e){
    inputvalue = e.target.value
});
input.addEventListener('keydown' , function(e){
    if( e.code === 13){
      alert('hello');
    }
})
function additem(){
    if( inputvalue !== '' &&  inputvalue !==  null && inputvalue !== undefined)
        { 
            var newlist = newnode();

            list.appendChild(newlist);
            input.value = ' ';
            inputvalue = " ";

        }
    else
    {
        alert('enter any value');
    }
}
function newnode(){
    
    var newlist = document.createElement('li')
    var textNode = document.createTextNode(inputvalue)
    newlist.appendChild(textNode);
    newlist.id = "List" + (list.childElementCount + 1);
    return newlist;

    
}

newBtn.addEventListener( 'click' , additem)

deletebtn.addEventListener('click' , function(){
    var item1 =list.firstElementChild;
    list.removeChild(item1);
})


updatebtn.addEventListener('click' , function(){
    var item1 = list.firstElementChild
    var newlist = newnode()
    list.replaceChild (newlist , item1)
} )