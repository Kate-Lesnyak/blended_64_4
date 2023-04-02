import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodoList } from 'components/TodoList/TodoList';

export const App = () => {
  const todos = useSelector(selectTodos);

  // const addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   setTodos(prevState => [...prevState, todo]);
  // };

  // const handleSubmit = data => {
  //   addTodo(data);
  // };

  // const deleteTodo = id => {
  //   setTodos(prevState => prevState.filter(todo => todo.id !== id));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
