import React,{useState} from 'react'

const App = () => {
  const[inputData,setInputData]=useState("");
  const[items,setItems]=useState([]);
  const additems=()=>{
    if(!inputData){

    }else
    { setItems([...items,inputData]);
      setInputData('');

    }
     
  }


  const delet=(id)=>{
    const updated = items.filter((elem,ind)=>{
      return ind!==id ;
    
    });
    setItems(updated );
  
  }
  const remove=()=>{
    
    setItems([]);

  }

  
  
  return (
    <>
    <div className="main-div">
        <div className="sub-div">
          {/* ============= */}
               <figure>
               <img src="img.jpg"  width="40px"/>
               <figcaption> Add your list here ✌️ </figcaption>
               </figure>
          {/* ============= */}
          {/* ============= */}
          <div className="add-items">
            <input className="ip" value={inputData}  onChange={(e)=> setInputData(e.target.value)}type="text" placeholder=" 📝 Add items "/>
            <h3 className="addbtn" onClick={additems} title="add items"> + </h3>
          </div>
          {/* ============= */}
          {/* ============= */}

          <div className="show-items">
            {
              items.map((ele, ind)=>{
                 return(
                   <>
                   <div className="each-items" key={ind}>
                   <h3> {ele} </h3>
                   <button  onClick={()=>delet(ind)}className="btn" tile="delet items "> dlt </button>
                   </div>
                   </>
                 )
              })
            }
            
          </div>
           {/* ============= */}
          {/* ============= */}

             <div className="remove">
               <button onClick={remove}  className="remove-btn"> Remove All </button>
             </div>

             
        </div>
    </div>
    </>
  )
}

export default App
