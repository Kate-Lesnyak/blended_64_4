import styled from '@emotion/styled';

export const InputSearch = styled.input`
  width: ${({ theme }) => theme.spacing(50)};
  height: ${({ theme }) => theme.spacing(14)};

  margin: 0 auto;
  display: block;

  margin-bottom: ${({ theme }) => theme.spacing(10)};

  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: transparent;

  padding: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  outline: none;

  transition: ${({ theme }) => theme.animation.cubicBezier};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }
`;