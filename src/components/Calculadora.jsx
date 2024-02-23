import React, { useState } from 'react';

const Calculadora = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [historial, setHistorial] = useState([]);

    const appendToDisplay = (value) => {
        setDisplayValue(displayValue === '0' ? value : displayValue + value);
    };

    const clearDisplay = () => {
        setDisplayValue('0');
    };

    const calcular = () => {
        try {
            const result = eval(displayValue);
            setHistorial([...historial, displayValue + '=' + result]);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    return (
        <div className="flex justify-center ">
            <div className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="display"
                        type="text"
                        value={displayValue}
                        readOnly
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('7')}>7</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('8')}>8</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('9')}>9</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('/')}>/</button>
                    <div className="mb-5">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('4')}>4</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('5')}>5</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('6')}>6</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('*')}>*</button>
                    </div>
                    <div>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('1')}>1</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('2')}>2</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('3')}>3</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('-')}>-</button>
                    </div>
                    <div>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('+')}>+</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => appendToDisplay('0')}>0</button>
                        <button className="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={calcular}>=</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={clearDisplay}>C</button>
                    </div>

                </div>

            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-lg font-semibold mb-2">Historial</h2>
                <ul id="historial" className="list-disc pl-5">
                    {historial.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Calculadora;