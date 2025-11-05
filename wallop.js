class Process {
    constructor(module, memory, process_worker) {
        this.module = module;
        this.memory = memory;
        this.process_worker = process_worker;
    }
}

export class Wallop {
    constructor() {
        this.processes = [];
    }

    async new_process() {
    }
}