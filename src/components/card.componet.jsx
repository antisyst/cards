import './card.styles.scss';
import Completed from '../completed';
import Completed2 from '../completed-2';
import Footer from './footer/footer';

export default function Card() {
    return(
    <>
        <div className='card-component-body'>
            <h3 className='first-content'>Developed by <a href="">Ramazan Azimli</a></h3>
            <div className='card-component-body-container'>
            <div className='card-component-body_item'>
                <div className='card-component-body_item-top'>
                    <h1>$90<span>/month</span></h1>
                    <h2>Personal</h2>
                </div>
                <div className='card-component-body_item-middle'>
                    <li>
                        <p><Completed/> Access to 26192 icons</p>
                    </li>
                    <li>
                        <p><Completed/> Best choice for full-time jobs</p>
                    </li>
                    <li>
                        <p><Completed/> Lifetime updates</p>
                    </li>
                    <li>
                        <p><Completed/> Premium support</p>
                    </li>
                </div>
                <div className='card-component-body_item-bottom'>
                    <a href="#">Choose Plan</a>
                </div>
            </div>
            <div className='item-middle'>
                <div className='card-component-body_item-top'>
                    <h1 className='item-middle_h1'>$110<span>/month</span></h1>
                    <h2 className='item-middle_h2'>Developer</h2>
                </div>
                <div className='card-component-body_item-middle'>
                    <li>
                        <p className='item-middle_p'><Completed2/> Access to <span>34495</span> icons</p>
                    </li>
                    <li>
                        <p className='item-middle_p'><Completed2/> Best choice for full-time jobs</p>
                    </li>
                    <li>
                        <p className='item-middle_p'><Completed2/> Lifetime updates</p>
                    </li>
                    <li>
                        <p className='item-middle_p'><Completed2/> Premium support</p>
                    </li>
                </div>
                <div className='card-component-body_item-bottom'>
                    <a href="#" className='item-middle_button'>Choose Plan</a>
                </div>
            </div>
            <div className='card-component-body_item'>
                <div className='card-component-body_item-top'>
                    <h1>$140<span>/month</span></h1>
                    <h2>Designer</h2>
                </div>
                <div className='card-component-body_item-middle'>
                    <li>
                        <p><Completed/> Access to 40000+ icons</p>
                    </li>
                    <li>
                        <p><Completed/> Best choice for full-time jobs</p>
                    </li>
                    <li>
                        <p><Completed/> Lifetime updates</p>
                    </li>
                    <li>
                        <p><Completed/> Premium support</p>
                    </li>
                </div>
                <div className='card-component-body_item-bottom'>
                    <a href="#">Choose Plan</a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}