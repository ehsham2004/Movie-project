import React, { useEffect, useState } from 'react'

function Movie () {

    const url = "http://www.omdbapi.com/?s=avengers&apikey=d13d80ff"

    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
            async function data1(){
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setMovie(data.Search)
        }
        data1();
        console.log(data1)
    }, []);

    const handleClick = async () => {
        const link = `http://www.omdbapi.com/?${search}&apikey=d13d80ff`
        const res1 = await fetch(link)
        const data1 = await res1.json()
        console.log(data1);
        setMovie(data1.Search)
    }

  return (
    <>
    <input type="text" onChange={(e) => {
        setSearch(e.target.value)
    } } />

    <button onClick={handleClick}>Click Me</button>

    {movie?.map((pack) =>{
        const {Poster,Title,Year,imdbID} = pack
        return (
            <>
            <div className='back' key={imdbID}/>
            <div className="flex">
                <img src={Poster} style={{height:"400px" , width:"300px"}} alt="" />

            </div>
            <p>{Title}</p>
            <p>Movie</p>
            <p>Descripations</p >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque, libero fuga deserunt voluptas dolore corporis dignissimos sit eveniet cumque non hic, est voluptatem numquam architecto unde quam temporibus officia!</p>
            </>
        )
    })}
    </>
  )
}
    export default Movie


