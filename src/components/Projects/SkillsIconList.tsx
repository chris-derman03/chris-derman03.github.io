import { HStack, Icon, Tooltip, Image } from "@chakra-ui/react";
import { IconType } from "react-icons";

import PythonIcon from "/public/img/python_logo.png";
import RegressionIcon from "/public/img/Regression.webp";
import ViteLogo from "/public/img/vite.webp";
import TypeScriptLogo from "/public/img/typescript.webp";
import HTMLLogo from "/public/img/html.webp";
import JSLogo from "/public/img/js.webp";
import CSSLogo from "/public/img/css.webp";
import SKLearnLogo from "/public/img/sklearn.webp";
import AWSLogo from "/public/img/aws.webp";
import COMPARCHIcon from "/public/img/comp_arch.webp";
import NNIcon from "/public/img/nn.webp";
import PandasIcon from "/public/img/pandas.webp";
import DeeoNNIcon from "/public/img/deepNN.webp";
import HypTuneIcon from "/public/img/hypTune.webp";
import AGIIcon from "/public/img/agi.webp";
import LLMIcon from "/public/img/transformer.webp";
import PromptEngIcon from "/public/img/prompt_eng.webp";
import NumpyLogo from "/public/img/numpy.webp";
import TensorflowLogo from "/public/img/tensorflow.webp";
import KerasLogo from "/public/img/keras.webp";
import CNNIcon from "/public/img/cnn.webp";
import MLIcon from "/public/img/ml.webp";
import JupyterLogo from "/public/img/jupyter.webp";
import ReactLogo from "/public/img/react.webp";
import PYGameLogo from "/public/img/pygame.webp";
import PytorchLogo from "/public/img/pytorch.webp";
import FeatEngIcon from "/public/img/feat_eng.webp";
import MatplotlibLogo from "/public/img/matplotlib.webp";
import EventLoopIcon from "/public/img/event_loop.webp";
import CircuitIcon from "/public/img/circuit.webp";
import RaspIcon from "/public/img/rasp.webp";
import LinuxLogo from "/public/img/linux.webp";
import StatsIcon from "/public/img/stats.webp";

const iconMap: { [key: string]: string } = {
  "Neural Networks": NNIcon,
  "Deep Learning": DeeoNNIcon,
  "Hyperparameter Tuning": HypTuneIcon,
  AGI: AGIIcon,
  "Prompt Engineering": PromptEngIcon,
  LLMs: LLMIcon,
  Python: PythonIcon,
  pandas: PandasIcon,
  PyTorch: PytorchLogo,
  sklearn: SKLearnLogo,
  "React.js": ReactLogo,
  Vite: ViteLogo,
  TypeScript: TypeScriptLogo,
  JavaScript: JSLogo,
  HTML: HTMLLogo,
  CSS: CSSLogo,
  "Computer Architecture": COMPARCHIcon,
  Jupyter: JupyterLogo,
  "Feature Engineering": FeatEngIcon,
  AWS: AWSLogo,
  NumPy: NumpyLogo,
  Matplotlib: MatplotlibLogo,
  TensorFlow: TensorflowLogo,
  Keras: KerasLogo,
  "Convolutional Neural Network": CNNIcon,
  "Machine Learning": MLIcon,
  Pygame: PYGameLogo,
  "Event Loops": EventLoopIcon,
  Circuits: CircuitIcon,
  "Raspberry Pi": RaspIcon,
  Linux: LinuxLogo,
  "Linear Regression": RegressionIcon,
  Statistics: StatsIcon,
};

interface Props {
  skills: string[];
}

const SkillsIconList = ({ skills }: Props) => {
  return (
    <HStack gap={2}>
      {skills.map((skill, index) => (
        <Tooltip label={skill} hasArrow key={"icon_" + index}>
          <span>
            <Image src={iconMap[skill] as string} boxSize={7} alt={skill} />
          </span>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default SkillsIconList;
