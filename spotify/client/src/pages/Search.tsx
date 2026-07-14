import GenreCard from "../components/GenreCard";
import CardList from "../layouts/CardList";
import { genrelist } from "../assets/data/_data";

const Search = () => {
  return (
    <>
      <div className="flex-col">
        <CardList />
        <div className="grid grid-cols-6 gap-2 w-full p-[16px]">
          {genrelist.map((genre, i) => (
            <GenreCard
              key={i}
              title={genre.title}
              path={genre.path}
              image={genre.image}
              background={genre.background}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
