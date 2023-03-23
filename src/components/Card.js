import { NavLink } from 'react-router-dom'

export default function Card(props) {

  const { item, handleSetItem } = props;

  const url = "/housing?id=" + props.item.id
  return (
    <NavLink to={url} className="card" onClick={() => handleSetItem(item)}>
      <div >
        <img src={props.item.cover} alt={props.item.title} />
        <h2>{props.item.title}</h2>
      </div>
    </NavLink>
  );
}