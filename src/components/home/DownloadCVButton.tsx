import { Button, Link } from "@chakra-ui/react";
import resume from "../../assets/cv/resume.pdf";
import { color } from "../../styles/color";

const DownloadCVButton = () => {
  return (
    <Link href={resume} download="Resume">
      <Button backgroundColor={color.green}>DownLoad CV</Button>
    </Link>
  );
};

export default DownloadCVButton;
