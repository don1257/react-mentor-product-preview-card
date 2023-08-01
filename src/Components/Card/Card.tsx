import './Card.css'
import productMobile from '../../assets/image-product-mobile.jpg'
import productDesktop from '../../assets/image-product-desktop.jpg'
import iconCart from '../../assets/icon-cart.svg'
import CartSVG from "../Svgs/CartSVG";

const Card = () => {

    const isMobile = window.innerWidth <= 767;

    return (
        <>
            <div className='card-container'>

                <div className='card'>
                    <img
                        src={isMobile ? productMobile : productDesktop}
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
                                <CartSVG/>
                                <p style={{margin: 0, marginLeft: '0.75em'}}> Add to Cart </p>
                            </button>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default Card
