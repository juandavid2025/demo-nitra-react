import React from "react";
import Card from "../Card/Card";
import "./Attacks.css";

const Attack = () => {
  return (
    <div className="attacks-section">
      <Card
        img="https://i.imgur.com/E6ypD5I.png"
        name="Slash and bite"
        description="Quick and powerful hit which can easily leave a mark even in the strongest dwarf, destroying shields and taking down those who couldn't resist the pointed rock fight."
      />
      <Card
        img="https://i.imgur.com/nKGJCIy.png"
        name="Fire Mortar"
        description="Slow and long rage attack that melted and break the tougher land, it is as hot as planet's core, burning skin, shields and hair like paper. The worst nightmare of a pride beard."
      />
      <Card
        img="https://i.imgur.com/G7qDNoK.png"
        name="Rock Burst"
        description="Dust, rocks and ground are all combine to form the most painfull experience to any miner, with a loud scream and blow every sharp fragment is send to all directions. Simple as: avoid getting hit and tears would not be spilled."
      />
    </div>
  );
};

export default Attack;
