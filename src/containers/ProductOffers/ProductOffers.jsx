import ProductCard from '../../components/ProductCard/ProductCard'
import useProducts from '../../hooks/useProducts'
import styles from './ProductOffers.module.scss'

const filter = 'is_offer'
const limit = 4

export default function NewProducts() {
  const { allProducts, loadMoreProducts, loading } = useProducts({
    filter,
    limit,
  })

  return (
    <div className="container">
      <h2>Новинки </h2>
      <div className="row">
        {allProducts.length > 0 &&
          allProducts.map((offerProduct) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                key={offerProduct.id}
              >
                <div className="rounded flex-column h-100">
                  <ProductCard product={offerProduct} />
                </div>
              </div>
            )
          })}
        {loading && 'Завантаження...'}
      </div>
      <div className="d-flex justify-content-end">
        <button
          onClick={() => loadMoreProducts()}
          className={styles.buttonShowMore}
        >
          Показати ще
        </button>
      </div>
    </div>
  )
}
