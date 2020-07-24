import React, { Component } from "react";
import AppCard from "../../components/UI/Cards/AppCard";
import vaspImg from "../../assets/vasp_logo.png";
import lammpsImg from "../../assets/maxresdefault.jpg";
import molvizImg from "../../assets/molviz.png";
import MLImg from "../../assets/ML.jpeg";
import MiscImg from "../../assets/Misc.jpg";
import classes from "./Home.module.css";
import * as ST from "../../settings/settings";

class Home extends Component {
  state = {
    Modules: [
      {
        title: "VASP",
        textBody: "This app helps to create input files for a vasp analysis.",
        srcImg: vaspImg,
        link: ST.ROUTES.MAINVIEW.VASP.PATH,
        comp: ST.ROUTES.MAINVIEW.VASP.COMP,
      },
      {
        title: "LAMMPS",
        textBody:
          "This app helps to create input files for classical molecular simulation using lammps.",
        srcImg: lammpsImg,
        link: ST.ROUTES.MAINVIEW.LAMMPS.PATH,
        comp: ST.ROUTES.MAINVIEW.LAMMPS.COMP,
      },
      {
        title: "Molecule Visualizer",
        textBody: "This app helps to visualize molecule/soil structures.",
        srcImg: molvizImg,
        link: ST.ROUTES.MAINVIEW.MOLVIZ.PATH,
        comp: ST.ROUTES.MAINVIEW.MOLVIZ.COMP,
      },
      {
        title: "ML for Material Science",
        textBody:
          "This app contains a series of case studies where machine learning is used in material science. The aim is to provide users with some of the best practices of application of Machine Learning into the field of material science.",
        srcImg: MLImg,
        link: ST.ROUTES.MAINVIEW.ML.PATH,
        comp: ST.ROUTES.MAINVIEW.ML.COMP,
      },
      {
        title: "Miscellaneous",
        textBody:
          "This app contains a series of scripts that are useful to perform various type of pre/post processings for some atomistic simulation tasks.",
        srcImg: MiscImg,
        link: ST.ROUTES.MAINVIEW.PREPOSTPROC.PATH,
        comp: ST.ROUTES.MAINVIEW.PREPOSTPROC.COMP,
      },
    ],
  };
  render() {
    const cards = this.state.Modules.map((card, index) => {
      return (
        <AppCard
          key={card.title}
          srcImg={card.srcImg}
          cardTitle={card.title}
          cardTxt={card.textBody}
          link={card.link}
          comp={card.comp}
        />
      );
    });
    return (
      <div className="row" style={{ padding: "50px" }}>
        {cards.map((card) => {
          return card;
        })}
      </div>
    );
  }
}

export default Home;
