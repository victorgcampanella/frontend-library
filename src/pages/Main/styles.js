import styled, { keyframes, css } from 'styled-components';

export const GeneralBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    opacity: 0.2;
  }
`;

export const ContainerBody = styled.div`
  width: 100%;
  position: absolute;
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 30px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #4684be;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 2px solid #eee;
    }

    span {
      flex: 1;
      font-size: 18px;
    }

    input {
      flex: 1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 18px;
    }

    .buttonSuccess {
      background: #88da66;
      height: 40px;
      width: 60px;
      border: 0;
      margin-left: 15px;
      border-radius: 4px;

      display: flex;
      justify-content: center;
      align-content: center;
    }

    .buttonUpdate {
      background: #6bd0f1;
      height: 40px;
      width: 40px;
      border: 0;
      border-radius: 4px;

      display: flex;
      justify-content: center;
      align-content: center;
    }

    .buttonDelete {
      background: #ded1c9;
      height: 40px;
      width: 40px;
      border: 0;
      margin-left: 15px;
      border-radius: 4px;

      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
`;
