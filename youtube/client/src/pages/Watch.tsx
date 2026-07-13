import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { CategoryPills } from "../components/CategoryPills";
import { categories } from "../data/HomeData";
import { useState } from "react";

const Watch = () => {
  const location = useLocation();
  const videoId = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("v");
  }, [location.search]);

  console.log(videoId);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="flex">
      <div className="w-[700px]"></div>
      <div className="overflow-x-hidden px-8 pb-4 w-[500px]">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Watch;
