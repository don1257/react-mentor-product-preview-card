import './Card.css'
import productMobile from '../../assets/image-product-mobile.jpg'
import iconCart from '../../assets/icon-cart.svg'

const Card = () => {

    return (
        <>
            <div className='card-container'>

                <div className='card'>
                    <img
                        src={productMobile}
                    />
                    <div className='card-content'>
                        <div className='card-text-container'>
                            <p className='card-category-title'> P E R F U M E</p>
                            <p className='card-title'>Garbrielle Essence Eau De Parfum</p>
                            <p className='card-description'>A floral, solar, and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                            <div className='card-container-price'>
                                <p className='card-price'>$149.99</p>
                                <p className='card-reduce-price'>$169.99</p>
                            </div>
                            <button className='card-button'>
                                <img className='card-cart-svg' src={iconCart} alt="Cart" />
                                Add to Cart
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Card
