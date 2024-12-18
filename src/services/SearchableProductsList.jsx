import { useState } from 'react'

const SearchableProductsList = ({ products }) => {
  const [searchText, setSearchText] = useState('')
  const foundProducts = filterProducts(products, searchText)
  return (
    <>
      <SearchInput
        placeholder="Я шукаю ..."
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />
      {/* <ProductsList
        products={foundProducts}
        emptyHeading={`Немає результатів для “${searchText}”`}
      /> */}
    </>
  )
}

export default SearchableProductsList
