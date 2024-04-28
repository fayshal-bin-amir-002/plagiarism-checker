let count = 0, similarLine = [];

export const handleResult = (txt1, txt2) => {

    similarLine = [];
    count = 0;

    const lineArr1 = handleSplitLine(txt1.toLowerCase());
    const lineArr2 = handleSplitLine(txt2.toLowerCase());
    
    if (lineArr1.length === 1 && lineArr2.length === 1) {
        const { count, similarLine } = loopFunc1(lineArr1, lineArr2);
        const similarLineOutput = similarLine.map((line) => line.join(" "));
        const result1 = lineArr1.length + lineArr2.length;
        const result = (count / result1).toFixed(4) * 100;
        return { result, similarLineOutput };
    }
    else if (lineArr1.length === 1) {
        const { count, similarLine } = loopFunc2(lineArr1, lineArr2);
        const similarLineOutput = similarLine.map((line) => line.join(" "));
        const result1 = lineArr1.length + lineArr2.length;
        const result = (count / result1).toFixed(4) * 100;
        return { result, similarLineOutput };
    }
    else if (lineArr2.length === 1) {
        const { count, similarLine } = loopFunc3(lineArr1, lineArr2);
        const similarLineOutput = similarLine.map((line) => line.join(" "));
        const result1 = lineArr1.length + lineArr2.length;
        const result = (count / result1).toFixed(4) * 100;
        return { result, similarLineOutput };
    }
    else {
        const { count, similarLine } = loopFunc4(lineArr1, lineArr2);
        const similarLineOutput = similarLine.map((line) => line.join(" "));
        const result1 = lineArr1.length + lineArr2.length;
        const result = (count / result1).toFixed(4) * 100;
        return { result, similarLineOutput };
    }
}


const loopFunc1 = (line1, line2) => {
    let have = 0;
    for (let i = 0; i < line2.length; i++) {

        for (let j = 0; j < line1[i].length; j++) {
            if (line1[i].includes(line2[i][j])) {
                have++;
            }
        }
        
        if (have === Math.min(line1[i].length, line2[i].length)) {
            count += 2;
            if (Math.min(line1[i].length, line2[i].length) === line1[i].length) {
                similarLine.push(line1[0]);
            }
            else {
                similarLine.push(line2[i]);
            }
        }
    }
    if (Math.min(line1.length, line2.length) <= count) {
        count = line1.length + line2.length;
        return { count, similarLine };
    }
    return { count, similarLine };
}

const loopFunc2 = (line1, line2) => {
    let have = 0;
    for (let i = 0; i < line2.length; i++) {

        for (let j = 0; j < line1[0].length; j++) {
            if (line1[0].includes(line2[i][j])) {
                have++;
            }
        }
        
        if (have === Math.min(line1[0].length, line2[i].length)) {
            count += 2;
            if (Math.min(line1[0].length, line2[i].length) === line1[0].length) {
                similarLine.push(line1[0]);
            }
            else {
                similarLine.push(line2[i]);
            }
        }
    }
    if (Math.min(line1.length, line2.length) <= count) {
        count = line1.length + line2.length;
        return { count, similarLine };
    }
    return { count, similarLine };
}

const loopFunc3 = (line1, line2) => {
    let have = 0;
    for (let i = 0; i < line1.length; i++) {

        for (let j = 0; j < line2[0].length; j++) {
            if (line1[0].includes(line1[i][j])) {
                have++;
            }
        }
        
        if (have === Math.min(line2[0].length, line1[i].length)) {
            count += 2;
            if (Math.min(line2[0].length, line1[i].length) === line2[0].length) {
                similarLine.push(line2[0]);
            }
            else {
                similarLine.push(line1[i]);
            }
        }
    }
    if (Math.min(line1.length, line2.length) <= count) {
        count = line1.length + line2.length;
        return { count, similarLine };
    }
    return { count, similarLine };
}

const loopFunc4 = (line1, line2) => {
    for (let i = 0; i < line1.length; i++) {
        let have = 0;
        for (let j = 0; j < line1[i].length; j++) {

            if (line2[i].includes(line1[i][j])) {
                have++;
            }
        }

        if (have === Math.min(line1[i].length, line2[i].length)) {
            count++;
            if (Math.min(line2[0].length, line1[i].length) === line2[0].length) {
                similarLine.push(line2[0]);
            }
            else {
                similarLine.push(line1[i]);
            }
        }
    }
    return { count, similarLine };
}



const handleSplitLine = (txt) => {
    const lines = txt.split('. ');
    const array = lines.map((line) => handleSplitWord(line));
    return array;
}

const handleSplitWord = (line) => {
    const nLine = line.replace('.', '').split(/[^\w\s]/g).join('');
    const words = nLine.split(' ');
    return words;
}

