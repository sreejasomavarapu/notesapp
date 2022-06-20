import React, { useState } from 'react'

function Home() {
    const [list,setList]=useState([])
    const [inputData,setInputData]=useState("")
    const [update, setUpdate]=useState(false)
    const [updateid, setUpdateId]=useState("")
    function Create(){
        
        if(inputData && update){
            const temp=list.map((item)=>{
                    
                  
                        if (item.id === updateid ){
                            console.log({...item , value:inputData})
                            return     {...item , value:inputData}
                            
                        }
                        return item
                   
                })
            setList(temp)
            

        setUpdateId("")
        setUpdate(false)
        //console.log(itemtoupdate.value)
        setInputData("")

        }
        else if (inputData){
            const newInputData={
                id:new Date().getTime().toString(),
                value : inputData
            }
            setList([...list,newInputData])
            setInputData("")
        }
        console.log("inputData", list)

    }
    function deleteitem(id){
        const updatedList = list.filter((item)=>{
            return (
                item.id !== id
            )
        })
        setList(updatedList)

    }
    function removeall(){
        setList([])
    }
    function updateitem(id){
        const itemtoupdate = list.find((item)=>{
            return (
                item.id ===id
            )
        })
        setUpdateId(id)
        setUpdate(true)
        console.log(itemtoupdate.value)
        setInputData(itemtoupdate.value)
        //setList(...list, {id:itemtoupdate.id, value:itemtoupdate.value})

    }
   
  return (

    <div  style={{paddingLeft:550, paddingRight:550, paddingTop:100}}>
        { update ? <button type="button" className="btn btn-outline-success mb-3" onClick={()=>Create()}>Update</button> :
        <button type="button" className="btn btn-outline-primary mb-3" onClick={()=>Create()}>Create</button>}

        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the note" value={inputData} onChange={(e)=>setInputData(e.target.value)}></input>
        <table className="table table-primary table-striped">
            <tbody>
                {list.map((item)=>{

             return(
            <tr key={item.id}>
                <td>{item.value}</td>
                <td><button type="button" className="btn btn-secondary ms-auto" onClick={()=>updateitem(item.id)}>Update</button></td>
                <td><button type="button" className="btn btn-danger" style={{float:'right'}} onClick={()=>deleteitem(item.id)}>Delete</button></td>
            </tr>)
               })}
            </tbody>
        </table>
        <button className='btn btn-warning mx-auto' onClick={()=>removeall()}>Remove All</button>
    </div>
  )
}

export default Home