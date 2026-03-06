<script setup>
import {reactive, defineProps, onMounted} from 'vue';
import JobListingSingular from '@/components/JobListingSingular.vue';
import { RouterLink } from 'vue-router';
import axios, { Axios } from 'axios';
const props = defineProps({
    maxRecords : {
        type : Number,
        default:10
    },
    showMoreBtn : {
        type : Boolean,
        default: false
    }
})

// const jobs = ref([]);
//Changed ref to reactive.
/**
 *  Key differences:
 * 1. reactive() only takes objects and not primitives,
 *    while ref() can
 * 2. ref() has a .value property for reassigning.
 *    reactive() doesn't have .value.
 * 
 */

 const state = reactive({
    jobs: [],
    isLoading: true
 });


onMounted(async () => {
    try{
        const res = await axios.get('http://localhost:5000/jobs');
        state.jobs = res.data;

    }catch(error){
        console.error("Error fetching jobs.", error);
    }finally {
        state.isLoading = false;
        // This assigning is okay

        // state = ??? is not okay
    }
});


</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
             <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
             </h2>
             <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobListingSingular v-for="job in state.jobs.slice(0, maxRecords || state.jobs.length)" :key="job.id" :job="job"/>            
        </div>
        </div>
    </section>


    <section v-if="showMoreBtn===true && state.jobs.length > maxRecords" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>

</template>