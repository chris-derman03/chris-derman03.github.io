import { useEffect, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";

interface Props {
  className: string;
}

const NavImages = ({ className }: Props) => {
  const images = ["/img/header/geisel.png", "/img/header/dublin.png"];
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIdx((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 2000); // 2 seconds for fade-out
    }, 5000); // Switch image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Flex className={"navImagesContainer " + className}>
      {images.map((image, index) => (
        <Image
          key={index}
          className="navImage"
          alt={`Image ${index + 1}`}
          src={image}
          style={{
            opacity:
              index === currentImageIdx
                ? isFading
                  ? 0
                  : 1
                : index === (currentImageIdx + 1) % images.length && isFading
                ? 1
                : 0,
          }}
        />
      ))}
    </Flex>
  );
};

export default NavImages;
