import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Housing from '../pages/Housing';

export default function Routing() {
  const [selectedItem, setSelectedItem] = useState();

  function handleSetItem(item) {
    setSelectedItem(item);
  }
//handleSetItem est transmis d'enfant en enfant, dès que l'on a cliqué sur une Card, sa valeur change et prend l'item de la Card cliquée en props, ce qui permettra d'afficher la bonne page Housing pour chaque Card
  return (
    <Routes>
      <Route path="/" element={<Home handleSetItem={handleSetItem} />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing" element={<Housing item={selectedItem} />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
    </Routes>
  );
}





