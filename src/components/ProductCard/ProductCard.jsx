import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from 'react-rating-stars-component';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './ProductCard.module.scss';

export default function ProductCard({ itemCard }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
	};


	return (
		<div className="card">
			<div className={`card-icon ${styles.cardImage}`}>
				<div className={styles.heart} onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
					{isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="grey" />}
				</div>
				<img src={itemCard.image || `./images/imageNotFound.png`} alt="product image" />
			</div>
			<div className="card-body">
				<h5 className={`card-title mt-3 ${styles.title}`}>{itemCard.name}</h5>
				<div className={`card-text ${styles.text}`}>
					<a className={styles.manufacturerLink} href="#">{itemCard.manufacturer}</a>
					<br />
					<div className="d-flex justify-content-between mt-3">
						<span className={styles.isAvailable}>{itemCard.is_available ? 'В наявності' : 'Товар відсутній'}</span>
						<Rating
							count={5}
							value={itemCard.rating}
							size={24}
							activeColor="#ffd700"
							edit={false}
							isHalf={true}
						/>
						<span>({itemCard.reviews})</span>
					</div>
					<div className="d-flex justify-content-between">
						<div>
							<span className={styles.regularPrice} >{itemCard.regular_price} ₴</span>
							<br />
							<span className={styles.salePrice}>{itemCard.sale_price} ₴</span>
						</div>
						<Link className={styles.btn} to={`#`}>В кошик</Link>
					</div>
				</div>
			</div>
		</div>

	)
}

