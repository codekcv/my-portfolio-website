import Head from "next/head";
import styled from "styled-components";

const Index = () => (
  <>
    <Head>
      <title>Christian Villamin</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <main className="main">
        <p>
          Christian Villamin
          <br />
          &lt;This site is under construction /&gt;
        </p>
      </main>
    </Container>
  </>
);

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
    }
  }
`;

export default Index;
