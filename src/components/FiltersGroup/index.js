import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    changeTitleSearch,
    changeCategory,
    changeRating,
    activeCategoryId,
    activeRatingId,
    clearFilters,
  } = props

  const onClickClear = () => {
    clearFilters()
  }

  const onChangeSearch = event => {
    changeTitleSearch(event.target.value)
  }

  const getListItem = object => {
    const {name, categoryId} = object
    const onClickCategory = () => {
      changeCategory(categoryId)
    }

    const active = categoryId === activeCategoryId ? 'act' : ''

    return (
      <li>
        <p className={`category-list ${active}`} onClick={onClickCategory}>
          {name}
        </p>
      </li>
    )
  }

  const renderCategories = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => getListItem(each))
  }

  const getRatingItem = ratingObject => {
    const {ratingId, imageUrl} = ratingObject

    const activeR = ratingId === activeRatingId ? 'act' : ''

    const onClickRating = () => {
      changeRating(ratingId)
    }

    return (
      <li className="rating-list-container" onClick={onClickRating}>
        <img
          className="rating-image"
          src={imageUrl}
          alt={`rating ${ratingId}`}
        />
        <p className={`up ${activeR}`}> & up</p>
      </li>
    )
  }

  const renderRating = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => getRatingItem(eachRating))
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          className="input-element"
          type="search"
          placeholder="Search"
          onChange={onChangeSearch}
        />
        <BsSearch />
      </div>
      <ul className="category-container">
        <h1 className="category-head">Category</h1>
        {renderCategories()}
      </ul>
      <ul className="ratings-container">
        <h1 className="category-head">Rating</h1>
        {renderRating()}
      </ul>
      <div>
        <button className="clear-btn" type="button" onClick={onClickClear}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
