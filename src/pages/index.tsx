import Head from "next/head";
import styled, { css } from "styled-components";
import socials from "../constants/social-links";

const Index = () => (
  <>
    <Head>
      <title>Christian Villamin</title>
      <link rel="icon" href="/1412.ico" />
    </Head>

    <Container>
      <main className="main">
        <p>
          Christian Villamin's portfolio site v2.
          <br />
          &lt;This site is under construction /&gt;
        </p>

        <div className="pic">
          <p>For the mean time, here's my pic</p>
          <img src="images/profile.jpg" alt="profile-picture" />
        </div>

        <div className="social-links">
          <a
            href="https://github.com/codekcv"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/codekcv/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>

          <a
            href="mailto:codekcv31@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Email
          </a>
        </div>

        {/* <ul className="social-links">
          {socials.map((social) => (
            <li key={social.name}>
              <a href={social.url} target="_blank" rel="noreferrer noopener">
                {social.icon}
              </a>
            </li>
          ))}
        </ul> */}
      </main>
    </Container>
  </>
);

const Container = styled.div(
  ({ theme }) => css`
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
        color: ${theme["text-primary"].light};
      }
    }

    .pic {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        margin-bottom: 1rem;
      }
    }

    .social-links {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 0.5rem;

      a {
        margin: 0 0.25rem;
      }
    }
  `
);

export default Index;
