export interface CustomButtonProps {
  title: string;
  active: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface TodoModalProps {
  handleModalOpen: boolean;
  setHandleModalOpen: (value: boolean) => void;
}
