import Vue from "vue";
import { RoutinesApi } from "@/api/routines";

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
let isNew = true;
let toDeleteCyclesId = [];
let toDeleteExercisesId = {};

export default Vue.observable({
    openCyclePanel: 0,
    clearAll() {
        exercisesCycleMap = {};
        Vue.set(exercisesCycleMap, "Training", []);
        cycles = {};
        Vue.set(cycles, "Training", { ...defaultCycle.Training });
        routine = {};
        Object.assign(routine, { ...defaultRoutine });
        modificated = false;
        isNew = true;
        console.log(routine);
        console.log(cycles);
        console.log(exercisesCycleMap);
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
    deleteExercise(index, cycle) {
        Vue.delete(exercisesCycleMap[cycle], index);
    },
    deleteCycle(cycle) {
        Vue.delete(exercisesCycleMap, cycle);
        Vue.delete(cycles, cycle);
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
    },
    isNewRoutine() {
        return isNew;
    },
    async toEditRoutine(r) {
        isNew = false;
        routine.name = r.name;
        routine.detail = r.detail;
        routine.isPublic = r.isPublic;
        routine.difficulty = r.difficulty;
        routine.category = r.category;
        routine.id = r.id;

        cycles = {};
        exercisesCycleMap = {};
        let cycleRes = await RoutinesApi.getCycles(r.id);
        cycleRes = cycleRes.results;
        cycleRes.forEach(async cycle => {
            toDeleteCyclesId.push(cycle.id);
            const cycleId = cycle.id;
            this.addCycle(cycle.name, cycle);
            delete cycle.id;
            let exRes = await RoutinesApi.getExercises(r.id, cycleId);
            exRes = exRes.results;
            toDeleteExercisesId[cycleId] = [];
            exRes.forEach(exercise => {
                toDeleteExercisesId[cycleId].push(exercise.id);
                delete exercise.id;
                this.addExercise(exercise, cycle.name);
            });
        });
    },
    deleteRoutine() {
        const routineId = routine.id;
        delete routine.id;
        toDeleteCyclesId.forEach(cycleId => {
            toDeleteExercisesId[cycleId].forEach(exerciseId => {
                RoutinesApi.deleteExercise(routineId, cycleId, exerciseId);
            });
            RoutinesApi.deleteCycle(routineId, cycleId);
        });
        RoutinesApi.deleteRoutine(routineId);
        toDeleteCyclesId = [];
        toDeleteExercisesId = {};
    },
    saved() {
        modificated = false;
        this.clearAll();
    }
});

//export default routineStore;
