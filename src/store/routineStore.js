const defaultCycle = { Training: [] };
let cycles = { ...defaultCycle };
const routineStore = {
    clearAll() {
        cycles = { ...defaultCycle };
        console.log("Reset");
    },
    addExercise(exercise, cycle) {
        cycles[cycle].push(exercise);
        console.log(cycles);
    },
    addCycle(cycle) {
        cycles[cycle] = [];
    },
    getCycles() {
        return cycles;
    },
    getCyclesName() {
        return Object.keys(cycles);
    }
};

export default routineStore;
