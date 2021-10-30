import styled from "styled-components";
import TextField from "./TextField";

const Multiline = styled(TextField)`
  height: max-content;

  textarea {
    height: 9.6rem;
  }
`;

export default Multiline;
