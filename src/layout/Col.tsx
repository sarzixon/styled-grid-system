import styled from "styled-components";

const Col = styled.div`
  display: flex;
  //margin: 0 15px;
  background: red;
  grid-column-start: ${({ col }) => col ? `span ${col}` : ''};
  //grid-column-start: ${({ col }) => col ? `1` : '-1'};
  
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    grid-column-start: span ${({ col_sm }) => col_sm};
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-column-start: span ${({ col_md }) => col_md};
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-column-start: span ${({ col_lg }) => col_lg};
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-column-start: span ${({ col_xl }) => col_xl};
  }
`;

export default Col;