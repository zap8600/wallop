import { WASI } from "./wasi.js";

(async function () {
    const wasix = new WASI();
    const memory = new WebAssembly.Memory({ initial: 2, maximum: 2, shared: true })

    const { instance } = await WebAssembly.instantiateStreaming(fetch("./wasitests/thread.wasm"), {
        "wasi_snapshot_preview1": wasix,
        "wasi": {
            "thread-spawn"() {
                throw new Error("thread-spawn");
            }
        },
        env: { memory: memory }
    });
    instance.exports._start();
})();