import CardList from "../layouts/CardList";
import BarComponent from "../layouts/BarComponent";

const MainSection = () => {
  return (
    <>
      <div className="relative transition-all duration-1000 pb-8">
        <BarComponent />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900"></div> */}
      </div>
      <CardList />
      <CardList />
    </>
  );
};

export default MainSection;
