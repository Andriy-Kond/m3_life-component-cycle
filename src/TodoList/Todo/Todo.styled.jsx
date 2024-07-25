import styled from "@emotion/styled";
const ItemText = styled.span`
  text-decoration: ${props => props.isCompleted && "line-through"};
`;
export { ItemText };
