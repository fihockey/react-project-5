import './card.scss';
import { Beer } from '../Data/types';

interface CardProps {
    beer: Beer
}
const Card = ({ beer }: CardProps) => {

    return (
        <div className="card_container">
            {beer.name}
            <img className="card_img" src={beer.image_url} alt={beer.name} />
        </div>
    )
}

export default Card;