import classes from './Hero.module.css';
import heroImg from '../../assets/hero-image-food.jpeg';

function Hero() {
    return (
        <section className={classes.hero}>
            <img src={heroImg} alt="A table full of delicious food" />
            <div className={classes.summary}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your favorite meal from our broad selection of
                    available meals and enjoy a delicious lunch or dinner at
                    home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients,
                    just-in-time and of course by experienced chefs!
                </p>
            </div>
        </section>
    );
}

export default Hero;
