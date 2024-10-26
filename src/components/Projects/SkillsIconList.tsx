import { HStack, Tooltip, Image } from "@chakra-ui/react";

const iconMap: { [key: string]: string } = {
  "Neural Networks": "/img/nn.webp",
  "Deep Learning": "/img/deepNN.webp",
  "Hyperparameter Tuning": "/img/hypTune.webp",
  AGI: "/img/agi.webp",
  "Prompt Engineering": "/img/prompt_eng.webp",
  LLMs: "/img/transformer.webp",
  Python: "/img/python_logo.png",
  pandas: "/img/pandas.webp",
  PyTorch: "/img/pytorch.webp",
  sklearn: "/img/sklearn.webp",
  "React.js": "/img/react.webp",
  Vite: "/img/vite.webp",
  TypeScript: "/img/typescript.webp",
  JavaScript: "/img/js.webp",
  HTML: "/img/html.webp",
  CSS: "/img/css.webp",
  "Computer Architecture": "/img/comp_arch.webp",
  Jupyter: "/img/jupyter.webp",
  "Feature Engineering": "/img/feat_eng.webp",
  AWS: "/img/aws.webp",
  NumPy: "/img/numpy.webp",
  Matplotlib: "/img/matplotlib.webp",
  TensorFlow: "/img/tensorflow.webp",
  Keras: "/img/keras.webp",
  "Convolutional Neural Network": "/img/cnn.webp",
  "Machine Learning": "/img/ml.webp",
  Pygame: "/img/pygame.webp",
  "Event Loops": "/img/event_loop.webp",
  Circuits: "/img/circuit.webp",
  "Raspberry Pi": "/img/rasp.webp",
  Linux: "/img/linux.webp",
  "Linear Regression": "/img/Regression.webp",
  Statistics: "/img/stats.webp",
};

interface Props {
  skills: string[];
}

const SkillsIconList = ({ skills }: Props) => {
  return (
    <HStack gap={2}>
      {skills.map((skill, index) => (
        <Tooltip label={skill} hasArrow key={"icon_" + index} bg="#fff6ec">
          <span>
            <Image src={iconMap[skill] as string} boxSize={7} alt={skill} />
          </span>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default SkillsIconList;
