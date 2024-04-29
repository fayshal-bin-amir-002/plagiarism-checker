let count = 0, similarLine = [], have = 0, i = 0, j = 0;

export const handleResult = (txt1, txt2) => {

    similarLine = [];
    count = 0;
    have = 0;

    const lineArr1 = handleSplitLine(txt1.toLowerCase()).filter((w) => w.length !== 0);
    const lineArr2 = handleSplitLine(txt2.toLowerCase()).filter((w) => w.length !== 0);

    // console.log(lineArr1, lineArr2);

    const { count:finalCount, similarLine:finalSimilar } = loopFunc(lineArr1, lineArr2);
    const similarLineOutput = finalSimilar.map((line) => line.join(" "));
    const result1 = Math.min(lineArr1.length, lineArr2.length);
    const result = (finalCount / result1).toFixed(4) * 100;
    return { result, similarLineOutput };

    // if (lineArr1.length === 1 && lineArr2.length === 1) {
    //     const { count, similarLine } = loopFunc1(lineArr1, lineArr2); 
    //     const similarLineOutput = similarLine.map((line) => line.join(" "));
    //     const result1 = Math.max(lineArr1.length,  lineArr2.length);
    //     const result = (count / result1).toFixed(4) * 100;
    //     return { result, similarLineOutput };
    // }
    // else if (lineArr1.length === 1) {
    //     const { count, similarLine } = loopFunc2(lineArr1, lineArr2);
    //     const similarLineOutput = similarLine.map((line) => line.join(" "));
    //     const result1 = Math.max(lineArr1.length,  lineArr2.length);
    //     const result = (count / result1).toFixed(4) * 100;
    //     return { result, similarLineOutput };
    // }
    // else if (lineArr2.length === 1) {
    //     const { count, similarLine } = loopFunc3(lineArr1, lineArr2);
    //     const similarLineOutput = similarLine.map((line) => line.join(" "));
    //     const result1 = Math.max(lineArr1.length,  lineArr2.length);
    //     const result = (count / result1).toFixed(4) * 100;
    //     return { result, similarLineOutput };
    // }
    // else {
    //     const { count: lineCount, similarLine: similarLines } = loopFunc4(lineArr1, lineArr2);
    //     const similarLineOutput = similarLines.map((line) => line.join(" "));
    //     const result1 = Math.max(lineArr1.length,  lineArr2.length);
    //     const result = (lineCount / result1).toFixed(4) * 100;
    //     return { result, similarLineOutput };
    // }
}


// const loopFunc1 = (line1, line2) => {
//     console.log('function 1');

//     for (i = 0; i < line2.length; i++) {
//         have = 0;
//         for (j = 0; j < line2[i].length; j++) {
//             if (line1[i].includes(line2[i][j])) {
//                 have++;
//             }
//         }

//         if (have === Math.min(line1[i].length, line2[i].length)) {
//             count++;
//             if (Math.min(line1[i].length, line2[i].length) === line1[i].length) {
//                 similarLine.push(line1[0]);
//             }
//             else {
//                 similarLine.push(line2[0]);
//             }
//         }
//     }

//     return { count, similarLine };
// }

// const loopFunc2 = (line1, line2) => {
//     console.log('function 2');

//     for (i = 0; i < line2.length; i++) {
//         have = 0;
//         for (j = 0; j < line2[i].length; j++) {
//             if (line1[0].includes(line2[i][j])) {
//                 have++;
//             }
//         }

//         if (have === Math.min(line1[0].length, line2[i].length)) {
//             count++;
//             if (Math.min(line1[0].length, line2[i].length) === line1[0].length) {
//                 similarLine.push(line1[0]);
//             }
//             else {
//                 similarLine.push(line2[i]);
//             }
//         }
//     }


//     return { count, similarLine };
// }

// const loopFunc3 = (line1, line2) => {
//     console.log('function 3');

//     for (i = 0; i < line1.length; i++) {
//         have = 0;
//         for (j = 0; j < line2[0].length; j++) {
//             if (line2[0].includes(line1[i][j] && line1[i][j])) {
//                 have++;
//             }
//         }

//         if (have === Math.min(line2[0].length, line1[i].length)) {
//             count++;
//             if (Math.min(line2[0].length, line1[i].length) === line2[0].length) {
//                 similarLine.push(line2[0]);
//             }
//             else {
//                 similarLine.push(line1[i]);
//             }
//         }
//     }


//     return { count, similarLine };
// }

const loopFunc = (line1, line2) => {
    
    for (let k = 0; k < line2.length; k++) {
        for (i = 0; i < line1.length; i++) {
            have = 0;
            for (j = 0; j < line1[i].length; j++) {

                if (line2[k].includes(line1[i][j])) {
                    have++;
                }
            }
            if (have === Math.min(line1[i].length, line2[k].length)) {
                count++;
                if (Math.min(line2[k].length, line1[i].length) === line2[k].length) {
                    similarLine.push(line2[k]);
                }
                else {
                    similarLine.push(line1[i]);
                }
            }
        }
    }

    return { count, similarLine };
}



const handleSplitLine = (txt) => {
    // const lines = txt.split(/[!?]+/); 
    const lines = txt.split(/[.!?]+\s*/);
    const array = lines.map((line) => handleSplitWord(line));
    return array;
}

const handleSplitWord = (line) => {
    // const nLine = line.replace('.', '').split(/[^\w\s]/g).join('');
    const words = line.split(' ');
    const wordss = words.filter((w) => w !== '');
    return wordss;
}

