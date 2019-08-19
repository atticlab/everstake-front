<template>

</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

export default {
  name: 'MultipleSelect',
  data: () => ({
    selectedGraph: [],
  }),
};
</script>
