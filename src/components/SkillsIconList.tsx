import { Tooltip, Image, Flex } from "@chakra-ui/react";

const iconMap: { [key: string]: string } = {
  "Neural Networks": "/img/nn.webp",
  "Deep Learning": "/img/deepNN.webp",
  "Hyperparameter Tuning": "/img/hypTune.webp",
  AGI: "/img/agi.webp",
  "Prompt Engineering": "/img/prompt_eng.webp",
  LLMs: "/img/transformer.webp",
  Python: "/img/python.webp",
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
  "Convolutional Neural Networks": "/img/cnn.webp",
  "Machine Learning": "/img/ml.webp",
  Pygame: "/img/pygame.webp",
  "Event Loops": "/img/event_loop.webp",
  Circuits: "/img/circuit.webp",
  "Raspberry Pi": "/img/rasp.webp",
  Linux: "/img/linux.webp",
  "Linear Regression": "/img/Regression.webp",
  Statistics: "/img/stats.webp",
  "C++": "/img/cpp.webp",
  SQL: "/img/sql.webp",
  C: "/img/c.webp",
  Java: "/img/java.webp",
  R: "/img/r.webp",
  MATLAB: "/img/matlab.webp",
  "Reinforcement Learning": "/img/reinforcement.webp",
  "Principal Component Analysis": "/img/pca.webp",
  KNN: "/img/knn.webp",
  Perceptrons: "/img/perceptron.webp",
  "Gradient Descent": "/img/grad_descent.webp",
  "Support Vector Machines": "/img/svm.webp",
  "Naive Bayes": "/img/nb.webp",
  "Maximum Likelihood Estimation": "/img/mle.webp",
  "Decision Trees": "/img/d_tree.webp",
  "Random Forests": "/img/rand_forest.webp",
  PySpark: "/img/spark.webp",
  seaborn: "/img/seaborn.webp",
  SciPy: "/img/scipy.webp",
  Dask: "/img/dask.webp",
  "D3.js": "/img/d3.webp",
  PostgreSQL: "/img/postgresql.webp",
  "Web Scraping": "/img/webscraping.webp",
  "ARM32 Assembly": "/img/arm32.webp",
  UNIX: "/img/unix.webp",
  "Apache Airflow": "/img/airflow.webp",
};

interface Props {
  skills: string[];
  size?: number;
  justify?: string;
}

const SkillsIconList = ({ skills, size = 7, justify }: Props) => {
  return (
    <Flex gap={4} wrap="wrap" justify={justify}>
      {skills.map((skill, index) => (
        <Tooltip
          label={skill}
          hasArrow
          key={"icon_" + index}
          bg="#fff6ec"
          color="black"
        >
          <span>
            <Image
              src={iconMap[skill] as string}
              boxSize={size}
              alt={skill}
              borderRadius={10}
            />
          </span>
        </Tooltip>
      ))}
    </Flex>
  );
};

export default SkillsIconList;
