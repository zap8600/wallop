import { WASIXProcess } from "./wasix.js";

(async function () {
    const memory = new WebAssembly.Memory({initial: 2, maximum: 2, shared: true});
    const module = await WebAssembly.compileStreaming(fetch("./wasitests/hello.wasm"));

    // const process = new WASIXProcess(module, memory);
    const worker = new Worker("./process_worker.js", {type: "module"});
    worker.onmessage = (e) => {
        if(e.data[0] === "fd_write") {
            const fd = e.data[1];
            const iovs_ptr = e.data[2];
            const iovs_len = e.data[3];
            const nwrittem = e.data[4];

            // TODO: Make this thread-safe
            const iovs = new Uint32Array(memory.buffer, iovs_ptr, iovs_len * 2);
            if(fd === 1) {
                let text = "";
                let total_bytes = 0;
                const decoder = new TextDecoder();
                for(let i = 0; i < iovs_len * 2; i += 2) {
                    const offset = iovs[i];
                    const length = iovs[i + 1];
                    const text_chunk = decoder.decode(new Int8Array(memory.buffer, offset, length));
                    text += text_chunk;
                    total_bytes += length;
                }
                const data_view = new DataView(memory.buffer);
                data_view.setInt32(nwrittem, total_bytes, true);
                console.log(text);
            }
            return 0;
        } else {
            throw new Error(e.data[0]);
        }
    }
    worker.postMessage(["start", module, memory]);
})();