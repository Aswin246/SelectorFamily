import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const TodoList = atomFamily({
  key: "TodoList",
  default: selectorFamily({
    key: "todoSelector",
    get: (id) => async () => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
    },
  }),
});
