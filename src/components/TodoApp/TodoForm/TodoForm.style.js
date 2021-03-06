import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 540px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.component};
  margin-bottom: ${({ edit }) => (edit ? "0" : "24px")};
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;

  @media screen and (max-width: 530px) {
    height: 48px;
    margin-bottom: 16px;
  }

  .form {
    position: relative;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 24px;
    box-sizing: border-box;

    .circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: ${({ theme }) => `1px solid ${theme.colors.borderList}`};
      box-sizing: border-box;
      margin-right: 24px;

      @media screen and (max-width: 530px) {
        width: 20px;
        height: 20px;
      }
    }

    input {
      width: 70%;
      max-width: 414px;
      height: 24px;
      border: none;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
      color: ${({ theme }) => theme.colors.text};
      background: transparent;
      padding: 0;

      @media screen and (max-width: 530px) {
        font-size: 12px;
      }

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
      }
    }

    .content-btn {
      display: flex;
      gap: 1em;
    }

    .error {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fc4747;
    }

    .success {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #767992;
    }
  }
`;
