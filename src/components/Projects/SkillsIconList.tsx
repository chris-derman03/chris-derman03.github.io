import { HStack, Tooltip, Image } from "@chakra-ui/react";

const iconMap: { [key: string]: string } = {
  "Neural Networks": "/public/img/nn.webp",
  "Deep Learning": "/public/img/deepNN.webp",
  "Hyperparameter Tuning": "/public/img/hypTune.webp",
  AGI: "/public/img/agi.webp",
  "Prompt Engineering": "/public/img/prompt_eng.webp",
  LLMs: "/public/img/transformer.webp",
  Python: "/public/img/python_logo.png",
  pandas: "/public/img/pandas.webp",
  PyTorch: "/public/img/pytorch.webp",
  sklearn: "/public/img/sklearn.webp",
  "React.js": "/public/img/react.webp",
  Vite: "/public/img/vite.webp",
  TypeScript: "/public/img/typescript.webp",
  JavaScript: "/public/img/js.webp",
  HTML: "/public/img/html.webp",
  CSS: "/public/img/css.webp",
  "Computer Architecture": "/public/img/comp_arch.webp",
  Jupyter: "/public/img/jupyter.webp",
  "Feature Engineering": "/public/img/feat_eng.webp",
  AWS: "/public/img/aws.webp",
  NumPy: "/public/img/numpy.webp",
  Matplotlib: "/public/img/matplotlib.webp",
  TensorFlow: "/public/img/tensorflow.webp",
  Keras: "/public/img/keras.webp",
  "Convolutional Neural Network": "/public/img/cnn.webp",
  "Machine Learning": "/public/img/ml.webp",
  Pygame: "/public/img/pygame.webp",
  "Event Loops": "/public/img/event_loop.webp",
  Circuits: "/public/img/circuit.webp",
  "Raspberry Pi": "/public/img/rasp.webp",
  Linux: "/public/img/linux.webp",
  "Linear Regression": "/public/img/Regression.webp",
  Statistics: "/public/img/stats.webp",
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
