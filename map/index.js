fetch("http://localhost:3000/map",
  {
    method: "GET",
  }).then((res) => res.json()).then((res) => {
    let html = "";
    let group = document.querySelector(".list-group");
    if (res.length > 0) {
      res.forEach(item => {
        html += `<div class="list-group-item d-flex">`;
        html += item.name;
        html += `<a class="btn btn-sm btn-outline-primary ms-auto" href="view.html?id=${item._id}">View</a>`;
        html += `<a class="btn btn-sm btn-outline-primary ms-1" href="update.html?id=${item._id}">Update</a>`;
        html += `<button type="button" class="btn btn-sm btn-outline-danger ms-1" data-type="delete" data-id="${item._id}">Delete</button>`;
        html += `</div>`;
      });
    } else {
      html += `<div class="list-group-item text-center">`;
      html += "no records found.";
      html += `</div>`;
    }
    group.innerHTML = html;
 


    
  document.querySelectorAll('[data-type="delete"]').forEach((item)=>{

   

    item.addEventListener("click",(e)=>{

      if(confirm("Are you sure ?")){
        fetch(`http://localhost:3000/map/${e.target.dataset.id}`, { method: "DELETE"}).then((res) => res.json()).then((res) => {
 

          location.reload();
  
        })
      }



    })
    
  })
  })

