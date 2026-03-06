<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>


<template>
  <Navbar />
  <Hero title="This is the title" />
  <HomeCards />
  <JobListings :maxRecords=3 :showMoreBtn=true />
</template>