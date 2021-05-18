function extract(id) {
    const text = document.getElementById(id).textContent;

    const regex = /\((.+?)\)/gm;

    let result = [];

    let macth = regex.exec(text);
    while (macth != null) {
        result.push(macth[1]);
        match = regex.exec(text);
    }
    return result.join('; ');
}