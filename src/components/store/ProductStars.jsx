import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductStars({ rating, count }) {
  const stars = Array(5).fill(0);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <span>{rating}</span>
      {stars.map((_, index) => (
        <span key={index}>
          {rating > index ? (
            <FaStar size={24} color="#F2C265" />
          ) : (
            <FaRegStar size={24} color="#a9a9a9" />
          )}
        </span>
      ))}
      <p style={{ marginLeft: 8 }}>({count} Stars)</p>
    </div>
  );
}
