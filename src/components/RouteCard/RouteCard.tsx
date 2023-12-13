import RouteCardStyled from "./RouteCardStyled";
import { RouteDataStructure } from "../../store/features/routes/types";
import Button from "../Button/Button";

interface RouteCardProps {
  route: RouteDataStructure;
}

const RouteCard = ({
  route: { image, name, duration, zone, price },
}: RouteCardProps): React.ReactElement => {
  return (
    <RouteCardStyled>
      <div className="route-card">
        <img
          className="route-card__image"
          src={image}
          alt={name}
          width="250"
          height="215"
        />
        <dl className="route-card__info first-detail">
          <dt className="route-card__details">Name:</dt>
          <dd className="route-card__detail">{name}</dd>
        </dl>
        <dl className="route-card__info">
          <dt className="route-card__details">Duration:</dt>
          <dd className="route-card__detail">{duration}h</dd>
        </dl>
        <dl className="route-card__info">
          <dt className="route-card__details">Zone:</dt>
          <dd className="route-card__detail">{zone}</dd>
        </dl>
        <dl className="route-card__info">
          <dt className="route-card__details">Price:</dt>
          <dd className="route-card__detail">{price}€ per person</dd>
        </dl>
        <div className="buttons">
          <Button
            type="button"
            children={
              <img
                className="button-map"
                alt="icon of a map"
                src="../public/images/map.webp"
              />
            }
          />
          <Button
            type="button"
            children={
              <img
                className="button-trash"
                alt="icon of a trash"
                src="../public/images/trash.webp"
              />
            }
          />
        </div>
      </div>
    </RouteCardStyled>
  );
};

export default RouteCard;
