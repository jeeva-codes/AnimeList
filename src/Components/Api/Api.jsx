import React, {useState, useEffect } from 'react'
function Api() {
  const [value,setValue]=useState(null)
  const [result,setResult]=useState()
  const [loading,setLoading]=useState(false)
  const API=`https://api.jikan.moe/v4/anime?q=${result}`

   async function dis(url) {
      setLoading(true)
      const res=await fetch(url)
      const info=await res.json()
      console.log(info)
      setValue(info)
     setLoading(false)
    }

      useEffect(() => {
        const handler = setTimeout(() => {
          if (result) {
            dis(API);
          }
        }, 500); // Debounce time in milliseconds
    
        return () => {
          clearTimeout(handler); // Cleanup the timeout on unmount or change
        };
      }, [result]);



          //  const { data } = value;                 
       const data = value ? value.data : []; 
   const search=(e)=>{
    setResult(e.target.value)
   }

  return (
    <div>
      
       <div className="api-container">
      <div className="input-container">
    <input type="text" placeholder='Enter Anime Name ( eg : Naruto )' value={result} onChange={search} />
      </div>
      <div className="suggestion">
        <h3>Top Search :</h3>
      <button onClick={()=>setResult("Naruto")}>Naruto</button>
      <button onClick={()=>setResult("One punch man")}>one punch man</button>
      <button onClick={()=>setResult("Bleach")}>Bleach</button>
      </div>
      <div className="display-container">
      <div className="cards">
      { data.length>0?(
      data.map((item) => {
        // Destructure the properties of each item
        const {
          mal_id,
          title,
          score, 
          type,
          episodes,
          url,
          genres,
          rating,
          title_japanese,
          images:{jpg:{image_url}}
        } = item;
        return(
          <div className="card" key={mal_id}>
          <h3 id='anime-title'>{title}</h3>
          <img src={image_url} alt="" />
          <div className="card-main">
            <div className="jap-name">
              <h3>japanese name </h3>
              <h2>{title_japanese}</h2>
            </div>
            <div className="ani-type">
            <h3>Type </h3>
            <h2>{type}</h2>
            </div>
            <div className="ani-episodes">
            <h3>episodes</h3>
            <h2>{episodes}</h2>
            </div>
            <div className="card-genre">
            <h3>Genre</h3>
            <ul >
            {genres.map((genre)=>{
            const {name} =genre
            return (<li>{name}</li>)
          })}
            </ul>
            </div>
            <div className="ratings">
            <h3>Ratings </h3>
            <h2>{rating}</h2>
            </div>
            <div className="anime-score">
            <h3>Score </h3>
            <h2>{score}</h2>
            </div>
            <div className="ani-link">
            <button><a href={url} target="_blank">more</a></button>
            
            </div>
           
           </div>
          </div>
          )}) 
          
        ):(<p id='empty-page'>No results found</p>)}
           </div>
           </div>
</div>

    </div>
  )
}

export default Api