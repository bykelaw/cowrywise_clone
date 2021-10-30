import styled from "styled-components";

const TextField = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  background-color: var(--white);
  border-radius: 0.4rem;
  padding: 1.6rem;
  height: 4.8rem;
  border: 1px solid var(--border);
  position: relative;
  transition: all 0.2s ease-out;

  &:hover {
    border-color: var(--grey_3);
  }

  &.contentFilled {
    border-color: var(--primary);
  }

  .errorText {
    display: none;
  }

  &.error {
    border-color: var(--danger);

    label {
      color: var(--danger);
    }

    .errorText {
      display: block;
      content: "${(props) => props.errorMsg}";
      position: absolute;
      top: calc(100% + 0.6rem);
      left: 0.8rem;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }

  input,
  textarea,
  select {
    display: block;
    color: var(--text);
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;

    &::placeholder {
      color: ${(props) => (props.disabled ? "var(--border)" : "var(--grey_1)")};
    }
  }

  .toggleShowText {
    display: none;
  }

  &.password {
    input,
    textarea {
      width: 80%;
    }

    .toggleShowText {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 2.4rem;
      cursor: pointer;
      color: #8d9091;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0px;
    }
  }

  label {
    position: absolute;
    top: -0.8rem;
    left: 0.8rem;
    display: block;
    padding: 0 0.4rem;
    color: var(--sup_text);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    background-color: var(--white);
  }
`;

export default TextField;
