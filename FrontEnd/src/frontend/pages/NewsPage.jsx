import React from "react";
import { Container } from "react-bootstrap";
import "../css-assets/NewsPage.css";

import News from "../components/News";
import VideoPlayer from "../components/VideoPlayer";
import SocMed from "../components/SocMed";
import NewsBanner from "../components/NewsBanner";

function NewsPage() {
  return (
    <div>
      <NewsBanner />
      <News />

      <h1 className="VideoSdaText" style={{ textAlign: "center" }}>
        2021 STO.DOMINGO APPRECIATION
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <VideoPlayer src="/SdaVideo.mp4" width={1040} height={760} />
      </div>
    </div>
  );
}

export default NewsPage;
