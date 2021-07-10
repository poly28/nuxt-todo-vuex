<template>
  <div>
    <h1>Todo</h1>
    <form action="">
      <input type="text" v-model="task" />
      <button @click.prevent="add(task)">
        追加
      </button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.isDone" @change="toggle(todo)" />
        {{ todo.task }}
        <button @click="remove(todo.id)">
          削除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$store.dispatch("todos/init");
  },
  data: function() {
    return {
      task: ""
    };
  },
  methods: {
    add(task) {
      this.$store.dispatch("todos/add", task);
      this.task = "";
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo);
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    }
  }
};
</script>
