const SearchBar = ({term, onChangeTerm}) => {
  const handleSearch = (e) => {
    onChangeTerm(e.target.value)
  }
  return(
    <>
      <form className="p-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={term} onChange={handleSearch}/>
      </form>
    </>
  )
}

export default SearchBar
