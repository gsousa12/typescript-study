import { Box, Button } from "@mui/material";
import { customStyle } from "./customButton.style";
import { CustomButtonProps } from "../../utils/interfaces";
import { useState } from "react";

<<<<<<< HEAD
function CustomButton({ onClick, ...props }: CustomButtonProps) {
  const [buttonStyle] = useState(props.active);
=======
function CustomButton({ ...props }: CustomButtonProps) {
  const [buttonStyle] = useState(props.active); // Define o estado inicial
>>>>>>> 3614df627b28156636ec815351fc9f73838d2679

  return (
    <Box>
      {buttonStyle ? (
<<<<<<< HEAD
        <Button
          type={props.type ?? "button"}
          sx={customStyle.activeButton}
          onClick={onClick}
        >
=======
        <Button type={props.type ?? "button"} sx={customStyle.activeButton}>
>>>>>>> 3614df627b28156636ec815351fc9f73838d2679
          {props.title}
        </Button>
      ) : (
        <Button
          type={props.type ?? "button"}
          disabled={true}
          sx={customStyle.inactiveButton}
<<<<<<< HEAD
          onClick={onClick}
=======
>>>>>>> 3614df627b28156636ec815351fc9f73838d2679
        >
          {props.title}
        </Button>
      )}
    </Box>
  );
}

export default CustomButton;
