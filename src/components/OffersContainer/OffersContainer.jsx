import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import fetchProductsFunction from '../../services/fetchProductsFunction';
import styles from './OffersContainer.module.scss';

export default function OffersContainer() {
	const [offers, setOffers] = useState(null);
	const [offset, setOffset] = useState(0);
	const filterString = "is_offer";

	const showMoreProducts = () => {
		fetchProductsFunction(offset, setOffset, offers, setOffers, filterString);
	};

	useEffect(() => {
		fetchProductsFunction(offset, setOffset, offers, setOffers, filterString);
	}, []);


	return (
		<div className="container">
			<h2>Сезонні пропозиції </h2>
			<div className="row">
				{offers && offers.length > 0 ? offers.map(function (offer) {
					return (
						<div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={offer.id}>
							<div className="p-3 rounded bg-warning-subtle flex-column h-100">
								<ProductCard itemCard= {offer}/>
							</div>
						</div>
					);
				}) : "is loaded..."
				}
			</div>
			<div className="d-flex justify-content-end">
				<button onClick={showMoreProducts} className={styles.buttonShowMore}>
					Показати ще
				</button>
			</div>
		</div>
	)
}

