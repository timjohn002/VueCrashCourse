 <script setup>
import { onMounted, ref } from 'vue';
// This is for Composition API
    const name = ref("John Doe");
    // ref is like use state in React
    const status = ref("active");
    const newTask = ref('dasdad');
    const tasks = ref([{
        id:1,
        taskName:"Task One"
      },
    {
        id:2,
        taskName:"Task Two"
      },
    {
        id:3,
        taskName:"Task Three"
      }]);
    // const link  = "https://google.com";

    const toggleStatus = () => {
       if (status.value === 'active') {
        status.value = 'pending';

        //After adding ref ("reactive") , we remove the this keyword and change to .value
        // status.value-> status.value
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    }

    const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({id:"x", name:newTask.value});
    newTask.value = '';
  }
    }

    const deleteTask = (index) => {
      tasks.value.splice(index,1);
    }

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map(task => ({
          /// task above is the response received
          id : task.id,
          taskName : task.title

          /// id and taskName is my own object.
        }));
      }catch (error) {
        console.log('Error fetching tasks: ',error);
      }
    });
</script>


<template>
<h1> {{ name }} </h1>
<p v-if="status === 'active'" > User is active</p>
<p v-else-if="status === 'pending'">User is pending</p>
<p v-else>User is inactive</p>


<form @submit.prevent="addTask">
  <!-- the ".prevent" stops the normal event propagation -->
  <label for="newTask">Add Task</label>
  <input type="text" id="newTask" name="newTask" v-model="newTask">
  <button type="submit">Submit Task</button>

</form>

<h3>Tasks:</h3>
<ul>
  <li v-for="(task, index) in tasks" :key="task"><span>{{ task.id }} - {{ task.taskName }}</span>
  <button @click="deleteTask(index)">x</button></li>
</ul>

<!-- <a v-bind:href="link"> Click for google</a> -->
 <!-- <a :href="link">Click for google shortcut</a> -->
<br />
 <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status shortcut</button>
</template>


<!--  scoped will make any styling apply to this component only -->
<style scoped>


h1 {
  color: red;
}

</style>
