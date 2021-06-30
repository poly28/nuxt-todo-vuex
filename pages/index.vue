<template>
  <div>
    <h1>Todo</h1>
    <form action="">
      <input type="text" v-model="todoAdd" />
      <button @click.prevent="$store.dispatch('todos/updateAddTask')">
        追加
      </button>
    </form>
    <ul>
      <li v-for="(todo, index) in $store.state.todos.todos" :key="todo.id">
        <input type="checkbox" v-model="todoDone" />
        {{ todo.task }}
        <button @click="$store.dispatch('todos/updateDeleteTask', index)">
          削除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todoAdd: {
      get() {
        return this.$store.state.todos.task;
      },
      set(value) {
        return this.$store.dispatch("todos/updateTodoAdd", value);
      }
    },
    todoDone: {
      get() {
        return this.$store.state.todos.todos.isDone;
      },
      set(value) {
        return this.$store.dispatch("todos/updateIsDone", value);
      }
      // let isDone = $store.state.todos.todos.isDone;
      // return isDone;
    }
  }
};
</script>
