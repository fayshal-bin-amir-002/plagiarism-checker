let count = 0, similarLine = [], have = 0, i = 0, j = 0;

export const handleResult = (txt1, txt2, txt3, txt4, txt5) => {



    const textArr1 = handleSplitLine(txt1.toLowerCase()).filter((w) => w.length !== 0);
    const textArr2 = handleSplitLine(txt2.toLowerCase()).filter((w) => w.length !== 0);
    const textArr3 = handleSplitLine(txt3.toLowerCase()).filter((w) => w.length !== 0);
    const textArr4 = handleSplitLine(txt4.toLowerCase()).filter((w) => w.length !== 0);
    const textArr5 = handleSplitLine(txt5.toLowerCase()).filter((w) => w.length !== 0);

    const allTextArr = [textArr1, textArr2, textArr3, textArr4, textArr5];

    const finalResult = [];

    // console.log(textArr1, textArr2);

    for (let m = 1; m < allTextArr.length; m++) {
        similarLine = [];
        count = 0;
        const { count: finalCount, similarLine: finalSimilar } = loopFunc(textArr1, allTextArr[m]);

        const similarLineOutput = finalSimilar.map((line) => line.join(" "));

        const result1 = allTextArr[m].length;
        const result = (finalCount / result1).toFixed(4) * 100;

        finalResult.push({ result, similarLineOutput });
    }

    return finalResult;
}


const loopFunc = (line1, line2) => {

    for (let k = 0; k < line1.length; k++) {
        for (i = 0; i < line2.length; i++) {
            have = 0;
            for (j = 0; j < line2[i].length; j++) {

                if (line1[k].includes(line2[i][j])) {
                    have++;
                }
            }
            if (have === Math.min(line2[i].length, line1[k].length)) {
                count++;
                if (Math.min(line1[k].length, line2[i].length) === line1[k].length) {
                    similarLine.push(line1[k]);
                }
                else {
                    similarLine.push(line2[i]);
                }
                if(line2.length === 1) {
                    return { count, similarLine };
                }
            }
        }
    }

    return { count, similarLine };
}



const handleSplitLine = (txt) => {
    const lines = txt.split(/[.!?]/);
    const linesArray = lines.map((line) => handleSplitWord(line.trim()));
    return linesArray;
}

const handleSplitWord = (line) => {
    const words = line.split(' ');
    const wordsArray = words.filter((w) => w !== '');
    const finalWordsArray = wordsArray.map((w) => w.replace(',', '')); 
    return finalWordsArray; 
}

