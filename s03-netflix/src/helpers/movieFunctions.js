// movie lerle ilgili verileri çektiğimiz file

const API_KEY = process.env.TMDB_KEY

// istediğimiz her türlü filmi (upcoming, popular vs getiren fonk)
export const getirMovies = async (type) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`)
        const {results} = await res.json()
        // console.log(results);
        return results
    } catch (error) {
        console.log(error);
        
    }
}

// aldığı filmin id sine göre,o filmin videosunu basmak için, youtube un istediği key i getiren Fontdiner_Swanky. bu key iframe e gömülecek
export const getirVideoKey = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)

    const data = await res.json()
    console.log(data.results[0].key);
    
    return data.results[0].key
}
