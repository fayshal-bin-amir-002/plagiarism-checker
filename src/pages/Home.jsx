import { useState } from "react";
import { handleResult } from "./utilities/processInput";


const Home = () => {

    const [result, setResult] = useState('');
    const [lines, setLines] = useState([]);
    const [txtFile1, setTxtFile1] = useState('');
    const [txtFile2, setTxtFile2] = useState('');
    const [file1, setFile1] = useState({});
    const [file2, setFile2] = useState({});

    const handleInput = (e) => {
        e.preventDefault();
        setResult('');
        setLines([]);
        const form = e.target;
        const text1 = form.text1.value;
        const text2 = form.text2.value;
        if (text1.trim() === '' || text2.trim() === '') {
            return alert("Please fill the input box");
        }
        const { result, similarLineOutput } = handleResult(text1, text2);
        setResult(result);
        setLines(similarLineOutput);
    }

    async function getFile1() {
        // Open file picker and destructure the result the first handle
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        setFile1(file);
        const text1 = await file.text();
        setTxtFile1(text1);
    }

    async function getFile2() {
        // Open file picker and destructure the result the first handle
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        setFile2(file);
        const text2 = await file.text();
        setTxtFile2(text2);
    }

    return (
        <div className="container mx-auto min-h-screen flex flex-col justify-center items-center px-5 my-12">
            <div className="w-full lg:w-1/2">
                <h1 className="text-3xl md:text-5xl font-semibold pb-3 border-b-4 border-green-600 mb-12">Plagiarism Checker</h1>
                <div className="w-full flex gap-12 mb-5">
                    <div>
                        <button className="btn bg-purple-400 px-6 py-3 rounded-lg text-white text-lg" onClick={getFile1}>Input File 1</button>
                        <p className="text-xs mt-1 ms-2 text-blue-600">{file1.name}</p>
                    </div>
                    <div>
                        <button className="btn bg-violet-500 px-6 py-3 rounded-lg text-white text-lg" onClick={getFile2}>Input File 2</button>
                        <p className="text-xs mt-1 ms-2 text-blue-600">{file2.name}</p>
                    </div>
                </div>
                <form onSubmit={handleInput} className="border rounded-md shadow-md p-4 mb-8">
                    <textarea name="text1" id="" rows="5" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-4" defaultValue={txtFile1}></textarea>
                    <textarea name="text2" id="" rows="5" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-8" defaultValue={txtFile2}></textarea>
                    <button className="w-full bg-green-600 text-white text-lg font-semibold py-2 rounded">Check</button>
                </form>
                {
                    result !== '' &&
                    <div className="text-left space-y-6">
                        <p className="text-2xl font-medium">Similarity : <span className="text-red-500">{result} %</span></p>
                        <div className=" space-y-2">
                            {
                                lines.map((line, i) => <p key={i} className=" bg-amber-200 px-2 py-1 rounded">{line}</p>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Home;