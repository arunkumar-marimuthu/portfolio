
import React,{ useState } from 'react';


const data = [
    {
    name:"arun",
    number:"9080934590"
    },
    {
        name:"kumar",
        number:"9080934590"
        },
        {
            name:"vijay",
            number:"9080934590"
            },
            {
                name:"rahulo",
                number:"9080934590"
                },
                {
                    name:"jai",
                    number:"9080934590"
                    }
]


function Pagination() {

    const [values,setValues] = useState(data);

    //pagination
    const [currentPage,setCurrentPage] = useState(1)
    const pageRecords = 3;
    const lastIndex =currentPage * pageRecords;
    const firstIndex = lastIndex - pageRecords;
    const pageData = values.slice(firstIndex,lastIndex);
    const npage = Math.ceil(values.length/pageRecords);
    const numbers = [...Array(npage+1).keys()].slice(1);

    const curpage = (n) =>{
        setCurrentPage(n);
    }

    const previousPage = () =>{

        if(currentPage !== 1){
            setCurrentPage(currentPage - 1);
        }
       
    }

    const nextPage = () =>{
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1);
        }
       
    }
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",marginTop:"10%"}}>

    <div>
        <table style={{border:"1px solid",height:"200px"}}>
            <thead style={{border:"1px solid",backgroundColor:"black",color:"whitesmoke"}}> 
                <th style={{border:"1px solid",padding:"10px"}}>
                     Name
                </th>
                <th style={{border:"1px solid",padding:"10px"}}>
                    Number
                </th>
            </thead>
            <tbody style={{border:"1px solid" }}>
             {pageData.map((val,i) => (
               <tr key={i} style={{padding:"50px 50px"}}>
                <td style={{border:"1px solid",padding:"10px",width:"100px"}}>{val.name}</td>
                <td style={{border:"1px solid",padding:"10px"}}>{val.number}</td>
               </tr>
              ))}

             
              
            </tbody>
        </table>
        </div>
        </div>
 
 <div style={{display:"flex",justifyContent:"center",marginTop:"5%"}}>
 <button style={{width:"80px",padding:"10px",backgroundColor:"black",color:"whitesmoke"}} onClick={previousPage}>Previous</button>
 {numbers.map((n,index)=>(
               <button key={index} style={{width:"30px",padding:"10px",  backgroundColor: currentPage === n ? "yellow" : ""}}    onClick={()=>curpage(n)}>{n}</button>
              ))}
              <button  style={{width:"80px",padding:"10px",backgroundColor:"black",color:"whitesmoke" }} onClick={nextPage}>Next</button>
 </div>
       
 </>
  )
}

export default Pagination
