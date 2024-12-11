import { Box, Button } from "@mui/material";
import { customStyle } from "./customButton.style";
import { CustomButtonProps } from "../../utils/interfaces";
import { useState } from "react";

function CustomButton({ ...props }: CustomButtonProps) {
  const [buttonStyle] = useState(props.active); // Define o estado inicial

  return (
    <Box>
      {buttonStyle ? (
        <Button type={props.type ?? "button"} sx={customStyle.activeButton}>
          {props.title}
        </Button>
      ) : (
        <Button
          type={props.type ?? "button"}
          disabled={true}
          sx={customStyle.inactiveButton}
        >
          {props.title}
        </Button>
      )}
    </Box>
  );
}

export default CustomButton;
