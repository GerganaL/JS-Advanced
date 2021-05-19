function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const map = {
        encode: {
            text: textAreas[0],
            btn: buttons[0],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0) + 1);
            }
        },
        decode: {
            text: textAreas[1],
            btn: buttons[1],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0) - 1);
            }
        }
    };

    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        const type = ev.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        let message = map[type].text.value.split('').map(map[type].func).join('');
        map.encode.text.value = '';
        map.decode.text.value = message;
    }
}