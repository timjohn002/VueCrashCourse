<script setup>

import axios from 'axios';
import {reactive} from 'vue';
import RequestCtn from '@/components/DatabaseVueComponents/RequestCtn.vue';
import Card from '../Card.vue';

const state = reactive({
    data: "",
    status:{},
    
});

const getData = async () => {
    console.log("hello");

    try{
        const res = await axios.get('http://localhost:3200/api/hello');

        state.data = res.data;
        state.status.code = res.status;
        console.log(state);
    }catch (error){
        console.log("Error getting data.", error)

        if(error.response){
            state.status.code = error.response.status;
            state.status.error = error.code;
            state.status.message = error.message;
        }

        if(error.request){
            state.status.code = error.request.status;
            state.status.error = error.code;
            state.status.message = error.message;
        }
    }
}; 

</script>

<template>

<RequestCtn title="Test API Connection" desc="Tests the api connectivity" :status="state.status.code">

<div class="mb-1">
<button @click="getData" class="btn-primary"
> Click</button>
</div>

<Card>
    <ul>
        <li v-for="(val, i) in state.data.data">
            {{ val }}. {{ i }}
        </li>
    </ul>
</Card>
</RequestCtn>


</template>