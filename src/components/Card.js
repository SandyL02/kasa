import { NavLink } from 'react-router-dom'

export default function Card(props) {

  const { item, handleSetItem } = props;

  const url = "/housing?id=" + props.item.id

  //handleSetItem n'est appelée qu'au clic sur une Card, et elle remontera jusqu'a ses parents Cards, Home et enfin Routing
  return (
    <NavLink to={url} className="card" onClick={() => handleSetItem(item)}>
      <div>
        <img src={props.item.cover} alt={props.item.title} />
        <h2>{props.item.title}</h2>
      </div>
    </NavLink>
  );
}