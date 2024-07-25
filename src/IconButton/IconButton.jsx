import { Button } from "./IconButton.styled";

const IconButton = ({
  children = null,
  onClick = () => {
    console.log("click");
    return null;
  },
  ...allyProps
}) => {
  return (
    <Button type="button" onClick={onClick} {...allyProps}>
      {children}
    </Button>
  );
};

export default IconButton;
