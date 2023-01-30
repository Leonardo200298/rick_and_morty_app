const getEpisodes =async () => {
    try{
        const url = "https://rickandmortyapi.com/api/episode"
        const res = await fetch(url);
        const ress = await res.json();
        const {results} = await ress;
        
        return results;
    }catch(error){
        console.log(error)
    }
   await getEpisodes()
}
export default getEpisodes;