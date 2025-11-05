import { WASIXProcess } from "./wasix.js";

onmessage = (e) => {
    if(e.data[0] === "start") {
        const process = new WASIXProcess(e.data[1], e.data[2]);
    }
}