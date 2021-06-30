<template>
  <div>
    <h1>Todo</h1>
    <form action="">
      <input type="text" v-model="$store.state.task" />
      <button @click.prevent="$store.commit('addTask')">
        追加
      </button>
    </form>
    <ul>
      <li v-for="(todo, index) in $store.state.todos" :key="todo.id">
        <input type="checkbox" v-model="todo.isDone" />
        {{ todo.task }}
        <button @click="$store.commit('deleteTask', index)">削除</button>
      </li>
    </ul>
    <!-- <p>{{ $store.state.todos }}</p> -->
  </div>
</template>

<script>
export default {};
</script>
