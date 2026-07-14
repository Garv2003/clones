import PlayListBar from "../components/PlayListBar";

const BarComponent = () => {
  return (
    <div className="px-6 relative z-10 mt-4">
      <div className="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6">
        <PlayListBar />
        <PlayListBar />
        <PlayListBar />
        <PlayListBar />
        <PlayListBar />
        <PlayListBar />
      </div>
    </div>
  );
};

export default BarComponent;
