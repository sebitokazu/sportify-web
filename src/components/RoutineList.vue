<template>
    <div>
        <h3>Routines</h3>
        <div v-for="routine in store.get()" :key="routine">
            <button @click="removeRoutine(routine)">X</button>
            <span>{{ routine }}</span>
        </div>
    </div>
</template>


<script>
import RoutineStore from "@/store/RoutineStore";

export default {
    name: "RoutineList.vue",
    data() {
        return {
            store: RoutineStore
        }
    },
    methods: {
        removeRoutine(routine) {
            this.store.remove(routine);
        }
    }


}
</script>

<style scoped>

</style>