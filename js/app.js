'use strict'



let myform = document.getElementById('myform')
let tabel = document.getElementById('tabel')
let tbodyel = document.createElement('tbody')


tabel.appendChild(tbodyel)







Books.sell = [];

function Books(bookname,bookpages, bookprice){


this.bookname = bookname;
this.bookpages= bookpages;
this.bookprice= bookprice;

Books.sell.push(this);


}


myform.addEventListener('submit',handelsubmit )

function  handelsubmit(event){
 event.preventDefault();

 let bookname = event.target.bookname.value;
//  let bookpages =  event.target.bookpages.value;
 let bookprice = event.target.bookprice.value;

new Books(bookname, bookprice)
savetolocalstorage()


rendertabel();
}





function rendertabel(){

    readfromlocal()
    tbodyel.textContent = '';

for (let i = 0; i < Books.sell.length; i++) {
   
    

    let trel = document.createElement('tr');

    let tdel1 = document.createElement('td');

    tdel1.textContent  =  Books.sell[i].bookname;

    trel.appendChild(tdel1)


    // let tdel2 = document.createElement('td');

    // tdel2.textContent  =  Books.sell[i].bookpages;

    // trel.appendChild(tdel2)

    
    let tdel3 = document.createElement('td');

    tdel3.textContent  =  Books.sell[i].bookprice;

    trel.appendChild(tdel3)

    tbodyel.appendChild(trel)

}


}
rendertabel();


 function savetolocalstorage(){


     let data = JSON.stringify(Books.sell);
     localStorage.setItem('Books', data)

 }

 function readfromlocal(){

  let stringobj = localStorage.getItem('Books')
  let normaljob = JSON.parse(stringobj);

  if (normaljob !== null){

    Books.sell = normaljob;

  }


 }




 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 


  }

  getRandomInt()