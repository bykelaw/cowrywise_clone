import styled from "styled-components";
import Search from "./Search";

const Dropdown = styled(Search)`
  .title {
    width: -webkit-fill-available;
  }

  &.isOpen {
    .icon {
      transition: all 0.2s ease-out;
      &.right {
        transform: rotateZ(180deg);
      }
    }
  }
`;

export default Dropdown;
