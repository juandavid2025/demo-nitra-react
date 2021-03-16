import React from "react";
import "./Title.css";

const title = () => {
  return (
    <div className="container">
      <img
        className="title-image"
        src="https://external-preview.redd.it/3J2joJCggECnzDMbYXPd00TKQdIZcwlshMp_wBO1YAo.png?format=pjpg&auto=webp&s=eb0db2c131f56af0bf80fdfee1d8be9e7fa71824"
        alt="Monster"
      ></img>
      <h1>Dreadnought Hiveguard</h1>
      <p>
        The Dreadnought Hiveguard is an interrupted progression in the
        Dreadnought metamorphosis. Currently R&D is not in agreement on what the
        final form would be like but everyone agrees that it is bad enough.
        Besides its own attacks, the Hiveguard is able to summon reinforcements
        to aid it in battle.
      </p>
    </div>
  );
};

export default title;
