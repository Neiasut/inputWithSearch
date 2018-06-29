const readOnly = (target, key, descriptor) => {
    descriptor.writable = false;
    return descriptor;
};

export {readOnly};