<script setup> 

import {defineProps} from 'vue';

defineProps({
    title: {
        type:String,
        default:"No title"
    },
    desc: {
        type:String,
        default:"No description"
    },
    status: {
        type:Number,
        default:0
    }
});


</script>


<template >
<div class="m-3 p-1 rounded-md border-solid border border-green-600 border-opacity-100">

<h1 class="font-bold ">{{ title }}</h1>

<hr class="mb-2">
<h6 class="bg-gray-200 p-2">{{ desc }}</h6>
<div :class="`${status==200 ? 'bg-green-100' : 'bg-red-100'} p-2`">
<slot></slot>
</div>

</div>



</template>