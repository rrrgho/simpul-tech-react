import { Input } from "reactstrap";

const FormInput = ({ register, name, ...rest }: any) => {
  const { ref, ...registerField } = register(name);

  return <Input innerRef={ref} {...registerField} {...rest} />;
};

export default FormInput;
