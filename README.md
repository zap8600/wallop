# wallop

Kernel for running WASI applications in the browser, implemented in Javascript.

## Notes on WASI tests

* The `print_str` and `print_err` functions were created since they only need the `fd_write` system call.
* Every print statement is missing a new line since printing them to the JavaScript console will give them their own line. This may make readability on non-web platforms difficult.
* The `env` test doesn't use the `envp` argument as just having it causes the worker to hang inside of the WebAssembly code.
* Using the `printf` function to print to the console requires the buffer to be disabled. This can be done by adding `setbuf(stdout, NULL);`

## Compiling WASI tests

The command below is only here for reference.

```shell
$WASI_SDK_PATH/bin/clang --target=wasm32-wasi-threads --sysroot=${WASI_SDK_PATH}/share/wasi-sysroot -Wl,--import-memory -Wl,--shared-memory -Wl,--max-memory=67108864 -matomics hello.c -o hello.wasm
```
