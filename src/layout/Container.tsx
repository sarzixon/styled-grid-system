import styled from "styled-components";

const Container = styled.div`
  //height: 100vh;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 30px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    max-width: 540px
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: 720px;
    grid-template-columns: repeat(8, 1fr);
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: 960px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(12, 1fr);
    max-width: 1140px;
    
  }
`;

export default Container;