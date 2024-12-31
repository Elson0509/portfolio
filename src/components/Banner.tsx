import "./banner.css";

const Banner = ({ imgPath }: { imgPath: string }) => {
  return (
    <div className="banner">
      <img src={imgPath} alt="featured project banner" />
    </div>
  );
};

export default Banner;
