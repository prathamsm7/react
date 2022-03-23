import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import TodoItem from './components/TodoItem';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Todo />} />
        <Route exact path='/todo/:id' element={<TodoItem />} />
      </Routes>
    </div>
  );
}

export default App;
