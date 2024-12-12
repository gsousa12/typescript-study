import { Box, Button } from "@mui/material";
import { customStyle } from "./customButton.style";
import { CustomButtonProps } from "../../utils/interfaces";
import { useState } from "react";

function CustomButton({ onClick, ...props }: CustomButtonProps) {
  const [buttonStyle] = useState(props.active);

  return (
    <Box>
      {buttonStyle ? (
        <Button
          type={props.type ?? "button"}
          sx={customStyle.activeButton}
          onClick={onClick}
        >
          {props.title}
        </Button>
      ) : (
        <Button
          type={props.type ?? "button"}
          disabled={true}
          sx={customStyle.inactiveButton}
          onClick={onClick}
        >
          {props.title}
        </Button>
      )}
    </Box>
  );
}

export default CustomButton;
