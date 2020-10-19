const RoutineStore = {
    routines: [],
    add(routine) {
        return this.routines.push(routine);
    },
    get(index) {
        if (index === undefined)
            return this.routines;

        if (index > this.routines.length)
            return null;

        return this.routines[index];
    },
    remove(routine) {
        if (!routine || this.routines.length === 0)
            return false;

        let index = this.routines.findIndex(item => (item === routine));
        if (index === -1)
            return false;

        this.routines.splice(index, 1);
        return true;
    }
};

export default RoutineStore;