function args_get(argv, argv_buf) {
    const data_view = new DataView(instance.exports.memory.buffer);
    // TODO
    return 0;
}

function args_sizes_get(argc, argv_buf_size) {
    const data_view = new DataView(instance.exports.memory.buffer);
    // TODO
    return 0;
}

function environ_get(env, env_buf) {
    // TODO
    return 0;
}

function environ_sizes_get(env_count, env_buf_size) {
    // TODO
    const data_view = new DataView(instance.exports.memory.buffer);
    data_view.setUint32(env_count, 0);
    data_view.setUint32(env_buf_size, 0);
    return 0;
}

function clock_get_res(clock_id, resolution) {
    // TODO
    return 0;
}

function clock_time_get(clock_id, precision, time) {
    const data_view = new DataView(instance.exports.memory.buffer);
    data_view.setBigUint64(time, BigInt(Date.now() * 1000000), true);
    return 0;
}
