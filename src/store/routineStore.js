const defaultCycle = { Training: [] };
let cycles = { ...defaultCycle };
var modificated = false;
const routineStore = {
    clearAll() {
        cycles = { ...defaultCycle };
        modificated = false;
        console.log("Reset");
    },
    addExercise(exercise, cycle) {
        cycles[cycle].push(exercise);
        modificated = true;
        console.log(this.getCyclesName());
    },
    addCycle(cycle) {
        cycles[cycle] = [];
        modificated = true;
        console.log(cycles);
    },
    getCycles() {
        return cycles;
    },
    getCyclesName() {
        return Object.keys(cycles);
    },
    wasModified() {
        return modificated;
    }
};

export default routineStore;
