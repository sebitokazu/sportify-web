const defaultCycle = { Training: [] };
let cycles = { ...defaultCycle };
const routineStore = {
    clearAll() {
        cycles = { ...defaultCycle };
        console.log("Reset");
    },
    addExercise(exercise, cycle) {
        cycles[cycle].push(exercise);
        console.log(this.getCyclesName());
    },
    addCycle(cycle) {
        cycles[cycle] = [];
        console.log(cycles);
    },
    getCycles() {
        return cycles;
    },
    getCyclesName() {
        return Object.keys(cycles);
    }
};

export default routineStore;
