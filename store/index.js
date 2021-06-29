import vuex from "vuex";

const createStore = () => {
  return new vuex.Store({
    state: function() {
      return {
        todos: [],
        task: ""
      };
    },
    mutations: {
      addTask: function(state) {
        console.log(state);
        let add = {
          isDone: false,
          task: state.task
        };
        state.todos.push(add);
        state.task = "";
      },
      deleteTask: function(state, index) {
        state.todos.splice(index, 1);
      }
    }
    // mutations: {
    //   updateMessage: function(state) {
    //     state.message = "Updated!";
    //   }
    // }
  });
};

export default createStore;
