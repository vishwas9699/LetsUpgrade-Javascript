let busdata = [
    // {
    // name:'',
    // soruce:'',
    // destination:'',
    // contactNumber:'',
    // capacity:'',
    // }
]
if(localStorage.getItem("busdata")==null){
    localStorage.setItem("busdata",JSON.stringify(busdata))
} 
function displayBusdata(busArray){
    let tablebusdata = " ";
    busArray.forEach(function(obj,index) {
    let currentrow=`<tr>
    <td>${index+1}</td>
    <td>${obj.name}</td>
    <td>${obj.soruce}</td>
    <td>${obj.destination}</td>
    <td>${obj.contactNumber}</td>
    <td>${obj.capacity}</td>
    </td>
    </tr>`
    tablebusdata+=currentrow
});
document.getElementsByClassName('tdata')[0].innerHTML=tablebusdata
}

displayBusdata(busdata)

function AddBusInfor(event){
    event.preventDefault()
    let data={}
    let name=document.getElementById('addname').value
    let src=document.getElementById('addsrc').value
    let des=document.getElementById('adddes').value
    let contact=document.getElementById('addnum').value
    let capacity=document.getElementById('addcapacity').value
   
    // console.log(name,src,des,contact,capacity)
   
    data.name=name;
    data.soruce=src
    data.destination=des;
    data.contactNumber=Number(contact);
    data.capacity=Number(capacity)
   
    // console.log(busdata)
    let busdata = JSON.parse(localStorage.getItem("busdata"))
    busdata.push(data)
    // console.log(busdata)
    localStorage.setItem("busdata",JSON.stringify(busdata))

    displayBusdata(busdata)

   document.getElementById('addname').value=''
   document.getElementById('addsrc').value=''
   document.getElementById('adddes').value=''
   document.getElementById('addnum').value=''
   document.getElementById('addcapacity').value=''
}

function searchSrc(){
    let src=document.getElementById('srcData').value
    let busdata = JSON.parse(localStorage.getItem('busdata'))
    console.log(src)
    let searchsrc= busdata.filter(function(busdata){
        return busdata.soruce.toUpperCase().indexOf(src.toUpperCase())!=-1
    })
    console.log(searchsrc)
    displayBusdata(searchsrc)
}

function searchDes(){
    let des=document.getElementById('desData').value
    console.log(des)
    let busdata = JSON.parse(localStorage.getItem('busdata'))
    let searchdes= busdata.filter(function(busdata){
        return busdata.destination.toUpperCase().indexOf(des.toUpperCase())!=-1
    })
    console.log(searchdes)
    displayBusdata(searchdes)
}