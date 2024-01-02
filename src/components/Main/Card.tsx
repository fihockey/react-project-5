import './card.scss';
import { Beer } from '../Data/types';

interface CardProps {
    beer: Beer
}
const Card = ({ beer }: CardProps) => {

    return (
        <div className="card_container">
            <div className="card_main-info">
                {beer.name}
                <img className="card_img" src={beer.image_url} alt={beer.name}/>
            </div>
            <div className="card_tagline">{beer.tagline}</div>
        </div>
    )
}

export default Card;