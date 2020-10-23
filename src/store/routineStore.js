const defaultCycleExercise = { Training: [] };
const defaultCycle = {
    name: "Training",
    detail: "",
    type: "exercise",
    order: 1,
    repetitions: 1
};
const defaultRoutine = {
    name: "",
    detail: "",
    isPublic: false,
    difficulty: "rookie",
    category: { id: 1 }
};

let routine = { ...defaultRoutine };
let cycles = { Training: { ...defaultCycle } };
let exercisesCycleMap = { ...defaultCycleExercise };

var modificated = false;
const routineStore = {
    clearAll() {
        exercisesCycleMap = { ...defaultCycleExercise };
        cycles = { Training: { ...defaultCycle } };
        routine = { ...defaultRoutine };
        modificated = false;
        console.log("Reset");
    },
    addExercise(exercise, cycle) {
        exercisesCycleMap[cycle].push(exercise);
        modificated = true;
    },
    addCycle(name, cycle) {
        cycles[name] = cycle;
        exercisesCycleMap[cycle] = [];
        modificated = true;
    },
    getCycles() {
        return cycles;
    },
    getCyclesName() {
        return Object.keys(cycles);
    },
    getExerciseFromCycle(cycle) {
        return exercisesCycleMap[cycle];
    },
    wasModified() {
        return modificated;
    },
    getRoutine() {
        return routine;
    }
};

export default routineStore;
