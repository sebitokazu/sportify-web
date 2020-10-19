<template>
    <div>
        <h3>New Routine</h3>
        <h4>Name: </h4>
        <input v-model="name" />
        <button @click="addRoutine()" :disabled="!isValidName">Add (+)</button>
    </div>
</template>

<script>
import RoutineStore from "@/store/RoutineStore";

export default {
    name: "Routine",
    data(){
        return{
            name: '',
            store: RoutineStore
        }
    },

    methods: {
        addRoutine(){
            this.store.add(this.name);
            this.name = '';
        }
    },
    computed: {
        isValidName(){
            return (this.name.length > 0);
        }
    }
}
</script>

<style scoped>

</style>