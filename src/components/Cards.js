import Card from "./Card.js";
import data from "../ressources/objects.json";

export default function Cards(props) {
  const { handleSetItem } = props;
  return (
    <div className="cards">
      {data.map(item => (
        <Card
          key={item.id}
          item={item}
          handleSetItem={handleSetItem}
        />
      ))}
    </div>
  );
}