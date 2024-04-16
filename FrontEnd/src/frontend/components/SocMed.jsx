import React from "react";
import { FacebookEmbed } from "react-social-media-embed";
import "../css-assets/SocMed.css";

const SocMed = () => {
  return (
    <div className="soc-med-container">
      <FacebookEmbed
        className="socgap"
        url="https://www.facebook.com/photo/?fbid=1002186437338989&set=pb.100063657141188.-2207520000"
        width="100%"
        height="auto"
      />
      <FacebookEmbed
        className="socgap"
        url="https://www.facebook.com/photo/?fbid=829072909224606&set=a.469015178563716"
        width="100%"
        height="auto"
      />
      <FacebookEmbed
        className="socgap"
        url="https://www.facebook.com/SDAFinancialAdvisors/photos/pb.100063657141188.-2207520000/1022037842020515/?type=3"
        width="100%"
        height={526}
      />
    </div>
  );
};

export default SocMed;
