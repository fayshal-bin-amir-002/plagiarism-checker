import { useState } from "react";
import { handleResult } from "./utilities/processInput";

const Home = () => {

    const [result, setResult] = useState('');
    const [lines, setLines] = useState([]);

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

    return (
        <div className="container mx-auto min-h-screen flex flex-col justify-center items-center px-5">
            <h1 className="text-3xl md:text-5xl">plagiarism-checker</h1>
            <form onSubmit={handleInput} className="w-full md:w-1/2 border p-4 mb-8">
                <textarea name="text1" id="" rows="5" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-4"></textarea>
                <textarea name="text2" id="" rows="5" placeholder="Type here... " className="border-2 rounded border-teal-500 w-full p-4 mb-8"></textarea>
                <button className="w-full bg-green-600 text-white text-lg font-semibold py-2 rounded">Check</button>
            </form>
            {
               result !== '' &&
                <div className="text-left w-full md:w-1/2 space-y-6">
                    <p className="text-2xl font-medium">Similarity : <span className="text-red-500">{result} %</span></p>
                    <div className="flex items-center gap-4">
                        {
                            lines.map((line, i) => <p key={i} className=" bg-amber-200 px-2 py-1 rounded">{line}</p>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Home;