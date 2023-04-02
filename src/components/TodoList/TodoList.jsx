import { Grid, GridItem, Todo } from 'components';
import { selectFilteredTodos } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const TodoList = () => {
    const todos = useSelector(selectFilteredTodos);
  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
            //   onClick={deleteTodo}
            />
          </GridItem>
        ))}
    </Grid>
  );
};
