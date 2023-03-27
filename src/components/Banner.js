import React from "react";

export default function Banner(props) {
  const { page } = props;
// en fonction de la page sur laquelle nous nous trouvons, la classe appliquée sera différente, cela permet de changer l'image de la bannière sur les deux pages différentes
  const bannerClass = page === "home" ? "banner-home" : "banner-about";
  const filterClass = page === "home" ? "filter-home" : "filter-about";

  return (
    <div className={`banner ${bannerClass}`}>
      <div className={`filter ${filterClass}`}></div>
      {/* si la page est Home alors il y aura du texte en plus */}
      {page === "home" && (
        <p className="text-banner">Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
}
