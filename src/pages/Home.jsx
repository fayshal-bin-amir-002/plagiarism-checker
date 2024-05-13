import { useState } from "react";
import { handleResult } from "./utilities/processInput";


const Home = () => {

    const [result, setResult] = useState([]);
    const [txtFile1, setTxtFile1] = useState('');
    const [txtFile2, setTxtFile2] = useState('');
    const [txtFile3, setTxtFile3] = useState('');
    const [txtFile4, setTxtFile4] = useState('');
    const [txtFile5, setTxtFile5] = useState('');

    const [file1, setFile1] = useState({});
    const [file2, setFile2] = useState({});
    const [file3, setFile3] = useState({});
    const [file4, setFile4] = useState({});
    const [file5, setFile5] = useState({});

    const handleInput = (e) => {
        e.preventDefault();
        setResult([]);
        const form = e.target;
        const text1 = form.text1.value;
        const text2 = form.text2.value;
        const text3 = form.text3.value;
        const text4 = form.text4.value;
        const text5 = form.text5.value;

        const res = handleResult(text1, text2, text3, text4, text5);
        setResult(res);
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

    async function getFile3() {
        // Open file picker and destructure the result the first handle
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        setFile3(file);
        const text3 = await file.text();
        setTxtFile3(text3);
    }

    async function getFile4() {
        // Open file picker and destructure the result the first handle
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        setFile4(file);
        const text4 = await file.text();
        setTxtFile4(text4);
    }

    async function getFile5() {
        // Open file picker and destructure the result the first handle
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        setFile5(file);
        const text5 = await file.text();
        setTxtFile5(text5);
    }

    return (
        <form onSubmit={handleInput} className="min-h-screen px-5 py-12">
            <h1 className="text-3xl md:text-5xl font-semibold pb-6 border-b-4 border-green-600 mb-12 text-center">Plagiarism Checker</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid gap-6">
                {/* file 1 */}
                <div className="border rounded-md shadow-md p-5 mb-8">
                    <div className="w-full flex gap-12 mb-5">
                        <div>
                            <input type="button" className=" cursor-pointer bg-purple-400 px-6 py-3 rounded-lg text-white text-lg" onClick={getFile1} defaultValue={'Input File 1'} />
                            <p className="text-xs mt-1 ms-2 text-blue-600">{file1.name}</p>
                        </div>
                    </div>
                    <div>
                        <textarea name="text1" id="" rows="10" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4" defaultValue={txtFile1}></textarea>
                    </div>
                </div>
                {/* file 2 */}
                <div className="border rounded-md shadow-md p-5 mb-8">
                    <div className="w-full flex gap-12 mb-5">
                        <div>
                            <input type="button" className=" cursor-pointer bg-purple-400 px-6 py-3 rounded-lg text-white text-lg" onClick={getFile2} defaultValue={'Input File 2'} />
                            <p className="text-xs mt-1 ms-2 text-blue-600">{file2.name}</p>
                        </div>
                    </div>
                    <div>
                        <textarea name="text2" id="" rows="10" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-4" defaultValue={txtFile2}></textarea>
                    </div>
                </div>
                {/* file 3 */}
                <div className="border rounded-md shadow-md p-5 mb-8">
                    <div className="w-full flex gap-12 mb-5">
                        <div>
                            <input type="button" className=" cursor-pointer bg-purple-400 px-6 py-3 rounded-lg text-white text-lg" onClick={getFile3} defaultValue={'Input File 3'} />
                            <p className="text-xs mt-1 ms-2 text-blue-600">{file3.name}</p>
                        </div>
                    </div>
                    <div>
                        <textarea name="text3" id="" rows="10" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-4" defaultValue={txtFile3}></textarea>
                    </div>
                </div>
                {/* file 4 */}
                <div className="border rounded-md shadow-md p-5 mb-8">
                    <div className="w-full flex gap-12 mb-5">
                        <div>
                            <input type="button" className=" cursor-pointer bg-purple-400 px-6 py-3 rounded-lg text-white text-lg" onClick={getFile4} defaultValue={'Input File 4'} />
                            <p className="text-xs mt-1 ms-2 text-blue-600">{file4.name}</p>
                        </div>
                    </div>
                    <div>
                        <textarea name="text4" id="" rows="10" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-4" defaultValue={txtFile4}></textarea>
                    </div>
                </div>
                {/* file 5 */}
                <div className="border rounded-md shadow-md p-5 mb-8">
                    <div className="w-full flex gap-12 mb-5">
                        <div>
                            <input type="button" className=" cursor-pointer bg-purple-400 px-6 py-3 rounded-lg text-white text-lg" onClick={getFile5} defaultValue={'Input File 5'} />
                            <p className="text-xs mt-1 ms-2 text-blue-600">{file5.name}</p>
                        </div>
                    </div>
                    <div>
                        <textarea name="text5" id="" rows="10" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-4" defaultValue={txtFile5}></textarea>
                    </div>
                </div>
            </div>
            {/* check button container */}
            <div className="text-center my-6">
                <button className="w-[200px] bg-green-600 text-white text-lg font-semibold py-2 rounded">Check</button>
            </div>
            {/* result container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    result && result.map((res, i) =>
                        <div className="border p-3 rounded-lg" key={i}>
                            <p className=" font-medium max-w-max border-b-2 border-red-500 mb-2">File 1 & File {i + 2}</p>
                            {
                                res !== '' &&
                                <div className="text-left space-y-6">
                                    <p className="text-2xl font-medium">Similarity : <span className="text-red-500">{res.result} %</span></p>
                                    <div className=" space-y-2">
                                        {
                                            res.similarLineOutput.map((line, i) => <p key={i} className=" bg-amber-200 px-2 py-1 rounded">{line}</p>)
                                        }
                                    </div>
                                </div>
                            }
                        </div>)
                }
            </div>
        </form>
    );
};

export default Home;