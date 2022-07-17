import styled from "styled-components";

export const TaskItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;
  text-decoration-line: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "initial"};
  color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.colors.completedColor : theme.colors.uncompletedColor};
  padding: 20px 24px 19px 24px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.borderList}`};
  /* transition: all 200ms ease-in-out; */

  @media screen and (max-width: 530px) {
    padding: 16px 20px 16px 20px;
    font-size: 12px;
  }

  .content-li {
    display: flex;
    align-items: center;
  }

  .close {
    opacity: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.closeBg};
  }

  &:hover .close {
    opacity: 1;
  }

  .completed {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: ${({ isCompleted, theme }) =>
      isCompleted ? "initial" : `1px solid ${theme.colors.borderList}`};

    background: ${({ isCompleted }) =>
      isCompleted
        ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
        : "transparent"};
    border-radius: 50%;
    margin-right: 24px;
    box-sizing: border-box;
    cursor: pointer;

    @media screen and (max-width: 530px) {
      width: 20px;
      height: 20px;
    }
  }

  img {
    cursor: pointer;

    @media screen and (max-width: 530px) {
      width: 12px;
      heigth: 12px;
    }
  }
`;
