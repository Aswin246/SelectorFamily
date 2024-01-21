import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import { TodoList } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <TodoApp id={1} />
      <TodoApp id={2} />
    </RecoilRoot>
  );
}

function TodoApp({ id }) {
  const todoAtom = useRecoilValue(TodoList(id));

  return (
    <>
      <div>{todoAtom.title}</div>
      <div>{todoAtom.description}</div>
    </>
  );
}
export default App;
