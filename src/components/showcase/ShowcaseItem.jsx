import classes from "./ShowcaseItem.module.css";

export default function ShowcaseItem({ item }) {
  return (
    <div className={classes.item}>
      <img src={item.image}></img>
      <h2>{item.title}</h2>
    </div>
  );
}
