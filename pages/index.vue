<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <Counter />
  </div>
</template>
<script>
import Counter from "../components/testingstates.vue";

definePageMeta({
  layout: "main",
});

export default {
    components: {
        Counter
    },
    data() {

        return {
            
        }
    },
    methods: {
    },
}
</script>

<style>

</style>