interface Props {
  buttonName: string;
}

const Button = ({ buttonName }: Props) => {
  return (
    <button type="button" className="btn btn-primary">
      {buttonName}
    </button>
  );
};

export default Button;
