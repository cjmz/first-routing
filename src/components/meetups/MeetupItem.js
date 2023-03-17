import { useContext } from "react";

import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li
      key={props.id}
      className="bg-white overflow-hidden rounded-xl drop-none transition-all hover:drop-shadow-2xl"
    >
      <Card>
        <div className="mb-2">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="p-2">
          <h3 className="pb-2 text-lg font-bold text-sky-700">{props.title}</h3>
          <address className="text-sm pb-2">{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className="p-2 mb-2 float-right text-sm">
          <button onClick={toggleFavoritesStatusHandler} className="uppercase font-bold bg-sky-700 py-2 px-4 rounded text-white hover:bg-sky-600">
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
