import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  children?: string | React.ReactElement;
  className?: string;
}

const Button = ({
  children,
  type,
  className,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      type={type}
      onClick={actionOnClick}
      children={children}
      className={className}
    />
  );
};

export default Button;
