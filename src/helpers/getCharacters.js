 const getCharacters = async ()=>{
    try{
        const url = "https://rickandmortyapi.com/api/character"
        const res = await fetch(url);
        const ress = await res.json();
        const {results} = await ress;
        return results;
    }catch(error){
        console.log(error);
    }
}
export default getCharacters;