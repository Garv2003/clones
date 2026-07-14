import Card from "../components/Card";
const Section = () => {
  return (
    <>
      <div className="flex flex-col p-[16px] pt-0 gap-5">
        <div className="font-bold text-2xl text-white">Made For Garv</div>
        <div className="grid grid-cols-5 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Section;
