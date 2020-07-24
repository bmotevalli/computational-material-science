import Home from "../containers/Home/Home";
import VaspPage from "../containers/Vasp/Vasp";
import LammpsPage from "../containers/Lammps/Lammps";
import MolecularViz from "../containers/MolecularViz/MolecularViz";
import MachineLearning from "../containers/MachineLearning/MachineLearning";
import PrePostProcess from "../containers/PrePostProcess/PrePostProcess";

export const ROUTES = {
  MAINVIEW: {
    HOME: { PATH: "/home", COMP: Home },
    VASP: { PATH: "/vasp", COMP: VaspPage },
    LAMMPS: { PATH: "/lammps", COMP: LammpsPage },
    MOLVIZ: { PATH: "/moleviz", COMP: MolecularViz },
    ML: { PATH: "/moleviz", COMP: MachineLearning },
    PREPOSTPROC: { PATH: "/prepostprocess", COMP: PrePostProcess },
  },
};

export const SIDE_MENU = {
  CLOSED: "50px",
  OPENED: "150px",
};
