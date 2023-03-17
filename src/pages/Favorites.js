import { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No favorites yey.</p>;
  } else {
    content = <MeetupList meetupList={favoritesCtx.favorites} />;
  }

  return (
    <section className="container mx-auto py-4">
      <h1 className="pb-4 text-2xl font-bold text-sky-700">Favorites</h1>
      <div>
        {content}
      </div>
    </section>
  );
}

export default FavoritesPage;
