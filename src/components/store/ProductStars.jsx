import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function ProductStars({ rating, count }) {
  const stars = Array(5).fill(0);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <span>{rating.toFixed(1)}</span>
      {stars.map((_, index) => {
        const full = index + 1 <= Math.floor(rating);
        const half = rating - index >= 0.5 && rating - index < 1;

        return (
          <span key={index}>
            {full ? (
              <FaStar size={24} color="#F2C265" />
            ) : half ? (
              <FaStarHalfAlt size={24} color="#F2C265" />
            ) : (
              <FaRegStar size={24} color="#a9a9a9" />
            )}
          </span>
        );
      })}
      <p style={{ marginLeft: 8 }}>({count})</p>
    </div>
  );
}
