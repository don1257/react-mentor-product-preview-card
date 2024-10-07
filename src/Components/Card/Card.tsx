import './Card.css'
import productMobile from '../../assets/image-product-mobile.jpg'
import productDesktop from '../../assets/image-product-desktop.jpg'
import CartSVG from "../Svgs/CartSVG";
import {useEffect, useState} from "react";

const Card = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
