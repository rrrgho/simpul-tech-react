import { Input } from "reactstrap";
import { Wrapper } from "./textfield.style";

const Textfield = (props: any) => {
  return (
    <Wrapper>
      <Input
        {...props}
        placeholder="Type your message"
        className="shadow-none border-0"
      />
    </Wrapper>
  );
};

export default Textfield;
