let library = [
    {
        author:'John Jad',
        title:'My 20 days arround',
        description:'some text description of the book and some more information about the book',
        bookImage:'interface.png',
        pages: 200,
        read:"false"
    },
    {
        author:'John Jade',
        title:'My 20 days arround',
        description:'some text description of the book and some more information about the book',
        bookImage:'interface.png',
        pages: 200,
        read:"true"
    },
    {
        author:'John Jade',
        title:'My 20 days arround',
        description:'some text description of the book and some more information about the book',
        bookImage:'interface.png',
        pages: 200,
        read:"true"
    }
];

let a= formData();
function addBook(a){
let obj = {
     author:a[0],
     title:a[1],
     description:a[2],
     bookImage:a[3],
     pages:a[4],
     read:a[5]
 }
 library.push(obj);
 console.log(library);
 }

// addBook(a);





let btn = document.querySelector('.btn');
let form = document.querySelector('form');
btn.addEventListener('click',function(){
    form.classList.toggle('formdisp');
});


let formButton = document.querySelector('.form-button');

formButton.addEventListener('click',formData);
formButton.addEventListener('click',function(){
    addBook(a);
        
});


function formData(){
    let result = [];
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let bookImage = document.getElementById('bookImage').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    result.push(author);
    result.push(title);
    result.push(description);
    result.push(bookImage);
    result.push(pages);
    result.push(read);
    return result;
}



    
    



clearForm = document.querySelector('.clearForm');

clearForm.addEventListener('click',function(){
    let author = document.getElementById('author').value = '';
    let title = document.getElementById('title').value = '';
    let description = document.getElementById('description').value = '';
    let bookImage = document.getElementById('bookImage').value = '';
    let pages = document.getElementById('pages').value = '';
   let read = document.getElementById('read').value = '';
    
});

// render(library);


function render(lib){
    
    let container = document.querySelector('.container');
    
    for(let i=0; i<lib.length;i++){
    
    let content = document.createElement('div');
    content.setAttribute('class','content');
    container.appendChild(content);
    
    let right = document.createElement('div');
    right.setAttribute('class','right');
    content.appendChild(right);
    
    let author = document.createElement('p');
    author.setAttribute('class','author');
    right.appendChild(author);
    author.innerHTML = lib[i].author;
    
    let title = document.createElement('h1');
    title.setAttribute('class','title');
    right.appendChild(title);
    title.innerHTML = lib[i].title;
    
    let description = document.createElement('p');
    description.setAttribute('class','desc');
    right.appendChild(description);
    description.innerHTML = lib[i].description;
    
    let pages = document.createElement('p');
    pages.setAttribute('class','pages');
    right.appendChild(pages);
    pages.innerHTML = 'Pages: '+ lib[i].pages;
    
    let read = document.createElement('p');
    read.setAttribute('class','read');
    right.appendChild(read);
    read.innerHTML = lib[i].read;
    
    let left = document.createElement('div');
    left.setAttribute('class','left');
    content.appendChild(left);
    
    let bkImg = document.createElement('img');
    bkImg.setAttribute('class','img');
    left.appendChild(bkImg);
    bkImg.src = lib[i].bookImage;
    
    let bookDelete = document.createElement('button');
    bookDelete.innerHTML = "Delete Book";
    bookDelete.setAttribute('class','deleteBook');
    right.appendChild(bookDelete);
    
    let b = document.querySelectorAll('.deleteBook');
    b[i].onclick = function(){
        library.splice(i,1);
        b[i].parentNode.parentNode.style = 'display:none';
    }
    
    let markRead = document.createElement('button');
    markRead.innerHTML = 'Mark as Read';
    markRead.setAttribute('class','readBook');
    right.appendChild(markRead);
    
    markRead.addEventListener('click',function(){
        let read = document.querySelectorAll('.read');
       if(library[i].read === 'false'){
           read[i].innerHTML = 'Read:'+'true';
           library[i].read === 'true';
       }else{
           read[i].innerHTML = 'Read:' +'true';
       }
    })
    }
    }

    render(library);