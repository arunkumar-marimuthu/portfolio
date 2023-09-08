import React,{ useState,useEffect}from 'react'


function searchbar({values,}) {

    const [query,setQuery] = useState('');
    const filteredItems = values.filter((val)=>{
        val.name.includes(query);
    })
    useEffect(()=>{

},[query] )

  return (
<input type="text" value={query} onClick={(e)=>{setQuery(e.target.value)}}/>
  )
}

export default searchbar