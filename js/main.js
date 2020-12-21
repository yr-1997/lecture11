async function getRandomChinese(length) {
    let outputSign = '';
    const delay = 50;

    const makeChineseSing = () => String.fromCharCode(String(Date.now()).slice(-5));

    let getRandomSing = () => new Promise((resolve) => setTimeout(() => {
        return resolve(makeChineseSing());
    }, delay));

    while (length > 0) {
        outputSign += await getRandomSing();
        length--;
    }

    return outputSign;
}

getRandomChinese(4).then((result) => console.log(result));