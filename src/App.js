import React from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Data from "./todoData";
import "./App.css";

export default function App() {
  const storedData = JSON.parse(localStorage.getItem("todo-data"));
  const storedSelected = JSON.parse(localStorage.getItem("todo-data-current"));
  const [todoData, setTodoData] = React.useState(storedData || Data);
  const [selected, setSelected] = React.useState(storedSelected || null);

  React.useEffect(() => {
    localStorage.setItem("todo-data", JSON.stringify(todoData));
  }, [todoData]);

  React.useEffect(() => {
    localStorage.setItem("todo-data-current", JSON.stringify(selected));
  }, [selected]);

  function addTodo(title) {
    const todo = {
      id: todoData.length,
      title: title,
      favorite: false,
      items: []
    };

    setTodoData(prev => prev.concat(todo));
  }

  function deleteTodo(id) {
    setTodoData(prev => prev.filter(item => item.id !== id));
    setSelected(null);
  }

  function selectedItem(id) {
    setSelected(todoData.filter(data => data.id === id)[0]);
  }

  function checkItem(id) {
    setTodoData(prev => {
      return prev.map(item => {
        if (item.id === selected.id) {
          item.items = item.items.map(i => {
            if (i.id === id) {
              if (i.checked) {
                i.checked = false;
              } else {
                i.checked = true;
              }
            }
            return i;
          });
        }
        return item;
      });
    });
  }

  function toggleFavorite(id) {
    setTodoData(prev => {
      return sortByFav(
        prev.map(item => {
          if (item.id === id) {
            if (item.favorite) {
              item.favorite = false;
            } else {
              item.favorite = true;
            }
          }
          console.log(item.favorite);
          return item;
        })
      );
    });
  }

  function sortByFav(items) {
    return items.sort((a, b) => {
      if (a.favorite && b.favorite === false) {
        return -1;
      } else if (a.favorite === false && b.favorite) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  function deleteItem(id) {
    setTodoData(prev => {
      return prev.map(todo => {
        if (todo.id === selected.id) {
          todo.items = todo.items.filter(item => {
            return item.id !== id;
          });
        }
        return todo;
      });
    });
  }

  function addItem(text) {
    setTodoData(prev => {
      return prev.map(todo => {
        if (todo.id === selected.id) {
          todo.items = todo.items.concat({
            id: todo.items.length,
            title: text,
            checked: false
          });
        }
        return todo;
      });
    });
  }

  return (
    <div className="container">
      <Sidebar
        items={todoData}
        addTodo={addTodo}
        deleteItem={deleteTodo}
        selectedItem={selectedItem}
        toggleFavorite={toggleFavorite}
      />
      <Main
        selected={selected}
        checkItem={checkItem}
        deleteItem={deleteItem}
        addItem={addItem}
      />
    </div>
  );
}
