export interface CustomButtonProps {
  title: string;
  active: boolean;
  type?: "button" | "submit" | "reset";
<<<<<<< HEAD
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface TodoModalProps {
  handleModalOpen: boolean;
  setHandleModalOpen: (value: boolean) => void;
=======
>>>>>>> 3614df627b28156636ec815351fc9f73838d2679
}
