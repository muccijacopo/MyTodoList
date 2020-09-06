import store from "../store";

const labelRegex = /#[^\s]*/;
const dateRegex = /@[^\s]*/;

export class TodoService {
  static validateTodo = (todoText) => {
    if (!todoText) return null;

    const todo = {
      label: null,
      date: null,
      text: todoText,
    };

    const labelMatch = todoText.match(labelRegex);
    if (labelMatch) {
      todo.label = labelMatch[0].slice(1);
      todo.text = todo.text.replace(labelMatch, "");
    }

    const dateMatch = todoText.match(dateRegex);
    if (dateMatch) {
      const date = dateMatch[0].slice(1);
      if (date === "Today") todo.date = "Today";
      else if (date === "Tomorrow") todo.date = "Tomorrow";
      else todo.date = null;
      todo.text = todo.text.replace(dateMatch, "");
    }

    return todo;
  };
  static addTodo = async (todoText) => {
    const todo = this.validateTodo(todoText);
    if (!todo) return Promise.reject(null);
    if (todo.label) store.commit("addLabel", todo.label);
    return store
      .dispatch("addTodo", todo)
      .then((todo) => todo)
      .catch((e) => e);
  };
  static updateTodo = async (todo) => {
    if (!todo) return Promise.reject(null);
    const { label, date, text } = this.validateTodo(todo.text);
    if (label) store.commit("addLabel", label);
    return store
      .dispatch("updateTodo", { ...todo, label, date, text })
      .then((t) => t)
      .catch((e) => e);
  };
}
