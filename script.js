console.log("script connected");
let rs_array = new Array;
let classcoll = new Object;
let indexstorage = new Array;
let classArray = new Array;
console.log(typeof( indexstorage));
let z = document.getElementById("main");
document.getElementById("sort").addEventListener("click", btnaction);
document.getElementById("tros").addEventListener("click",reversefun);

//----------------------------------- directly using array sort method-----------------------------------------//
// function comparefun(a,b) {
//  return( a.childNodes[3].innerText-b.childNodes[3].innerText);
// if (parseInt( a.childNodes[3].innerText.slice(3)) > parseInt( classArray[0].childNodes[3].innerText.slice(3))) return 1;
// if (parseInt( a.childNodes[3].innerText.slice(3)) == parseInt( classArray[0].childNodes[3].innerText.slice(3)))  return 0;
// if (parseInt( a.childNodes[3].innerText.slice(3)) < parseInt( classArray[0].childNodes[3].innerText.slice(3)))  return -1;
  
// }


// console.log(classcoll);



// classArray.sort(comparefun);
// console.log(parseInt( classArray[0].childNodes[3].innerText.slice(3)));
// console.log(classArray[1].childNodes[3].innerText);
// console.log(classArray[2].childNodes[3].innerText);
// console.log(classArray[3].childNodes[3].innerText);












//-------------------------Sorting Manually-----------------------------------------------------------------------------//


function rupeeSort() {
  classcoll = document.getElementsByClassName("c1");

  for(let g of classcoll)
{
  classArray.push(g);
  console.log(g.childNodes[3].innerText);
}


  for (let elem of classcoll) {
    let x = parseInt( elem.childNodes[3].innerText.slice(3));
    if(rs_array.length<classcoll.length)
    rs_array.push(x);
  }
  
  rs_array.sort();
  console.log(rs_array); 
}







function findFun(){
  // for (let a of classcoll) {


  //   for (let i = 0; i <rs_array.length; i++) {
  //     if (rs_array[i] == parseInt( a.childNodes[3].innerText.slice(3))) {

  //       console.log(i);
  //       if(indexstorage.length<classcoll.length)
  //       indexstorage.push(i);
       
  //            }
  //   }

  //   }
  //   console.log(indexstorage);
  console.log(rs_array);

for(let a of rs_array){
  for(let i=0;i<classcoll.length;i++){
    console.log(parseInt( classcoll[i].childNodes[3].innerText.slice(3)));
    if(parseInt( classcoll[i].childNodes[3].innerText.slice(3))== a){
      if(indexstorage.length<classcoll.length)
        indexstorage.push(i);
    }
  }
  
}console.log(indexstorage);
}


function  resetFun(){
  z.innerHTML = "";
  console.log(indexstorage);
  for (let k of indexstorage) {
    
     z.appendChild(classArray[k]);
     
    console.log(k);
    console.log(typeof(k));
  }

}


function btnaction() {
  console.log("into function");
  // z.removeChild.innerHTML = "";
  rupeeSort();
  console.log(rs_array);
  findFun();
  resetFun();
}


function reversefun() {
  console.log("into reverse function");
  // z.removeChild.innerHTML = "";
  rupeeSort();
  rs_array.reverse();
  console.log(rs_array);
  findFun();
  resetFun();

}

