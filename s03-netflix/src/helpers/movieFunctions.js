// movie lerle ilgili verileri çektiğimiz file

const API_KEY = process.env.TMDB_KEY

export const getirMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`)
        const data = await res.json()
        console.log(data);
        
    } catch (error) {
        
    }
}
