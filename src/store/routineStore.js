import Vue from "vue";

const defaultCycleExercise = { Training: [] };
const defaultCycle = {
    Training: {
        name: "Training",
        detail: "",
        type: "exercise",
        order: 1,
        repetitions: 1
    }
};
const defaultRoutine = {
    name: "",
    detail: "",
    isPublic: false,
    difficulty: "rookie",
    category: { id: 1 }
};

let modificated = false;
let routine = { ...defaultRoutine };
let cycles = { ...defaultCycle };
let exercisesCycleMap = { ...defaultCycleExercise };

export default Vue.observable({
    openCyclePanel: 0,
    clearAll() {
        exercisesCycleMap = { ...defaultCycleExercise };
        cycles = { ...defaultCycle };
        routine = { ...defaultRoutine };
        modificated = false;
        console.log("Reset");
    },
    addExercise(exercise, cycle) {
        exercisesCycleMap[cycle].push(exercise);
        this.openCyclePanel = Object.keys(exercisesCycleMap).findIndex(
            key => key === cycle
        );
        modificated = true;
    },
    addCycle(name, cycle) {
        Vue.set(exercisesCycleMap, name, []);
        Vue.set(cycles, name, { ...cycle });
        modificated = true;
    },
    getCycles() {
        return cycles;
    },
    getCyclesName() {
        return Object.keys(exercisesCycleMap);
    },
    getExercisesCycleMap() {
        return exercisesCycleMap;
    },
    getCyclesExercisesByName(cycle) {
        return exercisesCycleMap[cycle];
    },
    wasModified() {
        return modificated;
    },
    getRoutine() {
        return routine;
    },
    getOpenCyclePanel() {
        return this.openCyclePanel;
    }
});

//export default routineStore;
