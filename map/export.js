 
const Export = (stage,obj) => {
  obj.json = stage.toJSON();
  let body =  JSON.stringify(obj);
  
 


   
    fetch("http://localhost:3000/map",
        {
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:body
        }).then((res)=>res.json()).then((res)=>{
   
      })
 
}

export default Export;