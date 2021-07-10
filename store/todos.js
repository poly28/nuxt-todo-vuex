import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const todosRef = db.collection("todos");

export const state = () => {
  return {
    todos: [],
    task: ""
  };
};

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("todos", todosRef);
  }),

  add: firestoreAction((context, name) => {
    if (name.trim()) {
      todosRef.add({
        task: name,
        isDone: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }),
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete();
  }),
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      isDone: !todo.isDone
    });
  })
};
// vuexのみの場合
// export const mutations = {
//   addTask: function(state) {
//     let add = {
//       isDone: false,
//       task: state.task
//     };
//     state.todos.push(add);
//     state.task = "";
//   },
//   deleteTask: function(state, index) {
//     state.todos.splice(index, 1);
//   },
//   toggleIsDone: function(state, value) {
//     state.todos.isDone = !state.todos.isDone;
//   },
//   todoAdd: function(state, value) {
//     state.task = value;
//   }
// };

// export const actions = {
//   updateAddTask(context) {
//     context.commit("addTask");
//   },
//   updateDeleteTask(context, index) {
//     context.commit("deleteTask", index);
//   },
//   updateIsDone(context, value) {
//     context.commit("toggleIsDone", value);
//   },
//   updateTodoAdd(context, value) {
//     context.commit("todoAdd", value);
//   }
// };
