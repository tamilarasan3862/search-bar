function Searchiterms({arr}){
    return(
        <div className="search-iterms">
        {
          arr.map((user)=>{
            return(<div className="iterm">{user.name}</div>)
          })
        }
      </div>
    );
}
export default Searchiterms;