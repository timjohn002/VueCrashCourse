<script>

// This is for Options API
export default {
  // Need to export default to have access to data and methods in my template
  data() {
    return {
      name: 'John Doe',
      status: 'pending',
      tasks : [{
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
      }],
      link: 'https://google.com'
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    }
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
 <a :href="link">Click for google shortcut</a>
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
