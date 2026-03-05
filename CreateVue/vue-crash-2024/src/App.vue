 <script setup>
import { ref } from 'vue';
// This is for Composition API
    const name = ref("John Doe");
    const status = ref("active");
    const tasks = ref([{
        id:1,
        name:"Task One"
      },
    {
        id:2,
        name:"Task Two"
      },
    {
        id:3,
        name:"Task Three"
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
</script>


<template>
<h1> {{ name }} </h1>
<p v-if="status === 'active'" > User is active</p>
<p v-else-if="status === 'pending'">User is pending</p>
<p v-else>User is inactive</p>

<h3>Tasks:</h3>
<ul>
  <li v-for="task in tasks" :key="task">{{ task.id }} - {{ task.name }}</li>
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
