import styled from "@emotion/styled";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border: 1px solid black;
  padding: 5px;
`;

const ItemText = styled.span`
  text-decoration: ${props => props.isCompleted && "line-through"};
`;

export { List, ListItem, ItemText };
