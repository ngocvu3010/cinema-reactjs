import './sidebar.scss'

const Sidebar = ({categories, selectCategories, setSelectCategories}) => {

  const categoryFilter = (category_id) => {
    const newSelectedCategory = () => {
      if (selectCategories.includes(category_id)) {
        return selectCategories.filter(item => item !== category_id)
     } else{
       return [...selectCategories, category_id]
     }
    }

    setSelectCategories(newSelectedCategory)
  }

  return(
    <>
      {categories && categories.length ? (
        <ul className="list-group">
          {categories.map((category) => (
            <li key={category.id} className="d-flex justify-content-between align-items-center">
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" onChange={() => categoryFilter(category.id)} checked={selectCategories.includes(category.id)}/>
                  </div>
                </div>
                <label className="form-control transparent-bg">{category.name}</label>
              </div>
            </li>
          ))}  
        </ul>
      ): (
        <p>loading...</p>
      )}
    </>
  )
}

export default Sidebar
