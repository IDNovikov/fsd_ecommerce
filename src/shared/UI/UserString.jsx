import styled from "styled-components";

const Style = styled.div`
  font-size: 1rem;
  color: #e74c3c;
  cursor: pointer;
`;

export default function UserString({ children }) {
  return <Style>{children}</Style>;
}
