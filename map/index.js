fetch("http://localhost:3000/map",
  {
    method:"GET",
   }).then((res)=>res.json()).then((res)=>{
    let html = "";
    let group = document.querySelector(".list-group");

    if(res.length > 0){
      res.forEach(item => {


        html += `<div class="list-group-item">`;
        html += item.name;
        html += `</div>`;
    
    
          
    
    
    
          
        });
    }else{
      html += `<div class="list-group-item text-center">`;
      html += "no records found.";
      html += `</div>`;
    }
  

    group.innerHTML = html;
  console.log(res)
})