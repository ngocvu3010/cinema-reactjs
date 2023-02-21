const SortMovieName = ({setSortMovieName}) => {
  const handleSort = (e) => {
    setSortMovieName(e.target.value)
  }

  return(
    <select className="ms-auto form-select p-2" onChange={handleSort} defaultValue={"asc"}>
      <option value="asc" >asc</option>
      <option value="desc">desc</option>
    </select>
  )
}

export default SortMovieName
