import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
const Done = ({ isDone, onClick }) => {
  if (isDone)
    return <CheckIcon onClick={() => onClick(false)} color="green.900" />;
  return <SmallCloseIcon onClick={() => onClick(true)} color="light.800" />;
};

export default Done;
