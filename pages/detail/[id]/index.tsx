import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Header } from "../../../src/components/Header";

const Detail: React.FC = () => {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <DetailView>
      <Header />
      <p>Detail {id}</p>
    </DetailView>
  );
};

const DetailView = styled.div`
  height: 100vh;
  padding: 1rem;
`;

export default Detail;