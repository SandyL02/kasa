import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutData from "../ressources/about.json";

export default function About() {
  return (
    <div className="about">
      <Banner page="about" />
      {aboutData.map((aboutProps) => (
        <Collapse key={aboutProps.id} about={{ title: aboutProps.title, text: aboutProps.text, list: false }} />
      ))}
    </div>
  );
}
