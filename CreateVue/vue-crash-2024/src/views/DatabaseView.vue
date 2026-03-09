<script setup>

import axios from 'axios';
import {reactive} from 'vue';
import RequestCtn from '@/components/DatabaseVueComponents/RequestCtn.vue';

const state = reactive({
    data: []
});

const getData = async () => {
    console.log("hello");

    try{
        const res = await axios.get('http://localhost:3200/api/hello');

        state.data = res.data;

        console.log(state.data);
    }catch (error){
        console.log("Error getting data.", error)
    }
}; 

</script>


<template>

<RequestCtn title="Get Data" desc="Test api call">
<button @click="getData" class="active:bg-blue-800 focus:bg-blue-800 bg-blue-400 text-white p-2 rounded-lg"
> Click</button>
</RequestCtn>

<RequestCtn title="Get Data">
<button @click="getData" class="active:bg-blue-800 focus:bg-blue-800 bg-blue-400 text-white p-2 rounded-lg"
> Click</button>
</RequestCtn>



</template>