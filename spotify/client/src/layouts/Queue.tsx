import MusicBar from "../components/MusicBar";

const Queue = () => {
  return (
    <div className="pl-[32px] pr-[32px] flex flex-col">
      <div className="mb-2">
        <div className="text-2xl font-bold text-white mb-2">Queue</div>
        <span className="h-8 text-subtext font-bold">Now Playing</span>
      </div>
      <table className="w-full h-auto text-white">
        <tbody className="text-center">
          <MusicBar hide={true} />
        </tbody>
      </table>
      <div className="mt-[32px] mb-[8px]">
        <span className="h-8 text-subtext font-bold">Next Up</span>
      </div>
      <table className="w-full h-auto text-white">
        <tbody className="text-center">
          <MusicBar hide={true} />
          <MusicBar hide={true} />
          <MusicBar hide={true} />
        </tbody>
      </table>
    </div>
  );
};

export default Queue;
