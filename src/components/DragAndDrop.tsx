import { Status } from '../types/types';
import Todolist from './TodoList';

const TodoTable: Status[] = ['Queue', 'Development', 'Done'];

export const DragAndDrop = () => {
  return (
    <>
      {TodoTable.map((item) => (
        <Todolist status={item} key={item} />
      ))}
    </>
  );
};
