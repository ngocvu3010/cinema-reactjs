import {MOVIES_PER_PAGE} from '../../constants/index'

function Pagination({totalMovies, setSelectedPage, selectedPage}) {
  const totalPage = Math.ceil(totalMovies/MOVIES_PER_PAGE)

  const handleSelectPage = (page) => {
    const newPage = page < 1 ? 1 : page > totalPage ? totalPage : page
    setSelectedPage(newPage)
  }

  const activePaginate = (index) => {
    return selectedPage === (index + 1) ? " paginate-active " : ""
  }
  return(
    <>
      <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={() => handleSelectPage(selectedPage - 1)} >
            Previous
          </button>
        </li>
        {[...Array(totalPage)].map((_,index)=>
          <li key={index} className="page-item">
            <button className={`${activePaginate(index)} "page-link"`} onClick={() => handleSelectPage(index + 1)}>{index + 1}</button>
          </li>
        )}
        <li className="page-item">
          <button className="page-link" onClick={() => handleSelectPage(selectedPage + 1)}>
            Next
          </button>
        </li>
      </ul>
      </nav>
    </>
  );
}

export default Pagination
