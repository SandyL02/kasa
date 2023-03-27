import Card from "./Card.js";
import data from "../ressources/objects.json";

export default function Cards(props) {
  const { handleSetItem } = props;
  return (
    <div className="cards">
      {/*pour chaque item contenu sur le fichier JSON, créé une Card avec ses propriétés uniques*/ }
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