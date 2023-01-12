export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch("Esto esta hardcodeado")}>Buscar</button>
      </div>
   );
}
