 
const Export = (stage) => {

   
    fetch("http://localhost:3000/map/66ee7c56320ea379501e1343",
        {
          method:"PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({svg:stage.toJSON()})
        }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })
 
}

export default Export;