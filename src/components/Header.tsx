import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <HeaderContainer role="link" onClick={() => {}}>
      <HeaderImg src="/flower-icon.png" alt="flower" />
      <Title variant={"h1"} gutterBottom>
        <Link href="/">Floristería Dulces Pétalos</Link>
      </Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const Title = styled(Typography)`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2rem;
`;

const HeaderImg = styled.img`
  margin-right: 1rem;
  max-width: 2rem;
`;
