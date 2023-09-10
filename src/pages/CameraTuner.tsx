import React, { useState } from "react";

const CameraTuner = () => {
    const [brightness, setBrightness] = useState<number>(50);
    const [contrast, setContrast] = useState<number>(50);
    const [saturation, setSaturation] = useState<number>(50);

    const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        console.log('Brightness:', value);
        setBrightness(value);
    };

    const handleContrastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        console.log('Contrast:', value);
        setContrast(value);
    };

    const handleSaturationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        console.log('Saturation:', value);
        setSaturation(value);
    };

    return (
        <div className="bg-black text-white py-10">
            <div className="text-center text-xl font-bold">
                Camera Tuner
            </div>

            <div className="flex justify-center my-10">
                <img src="Photo by Katelyn Barone on Unsplash.jpeg" alt="" className="max-w-[320px] max-h-[640px]" />
            </div>

            <div className="border border-white w-1/2 px-5 py-5 rounded-xl mx-auto my-10">
                <div className="flex justify-between w-full">
                    <label htmlFor="brightness" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brightness</label>
                    <small className="text-end">{brightness}</small>
                </div>
                <input id="brightness" name="brightness" type="range" value={brightness} onChange={handleBrightnessChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min={0} max={255} />

                <div className="flex justify-between w-full">
                    <label htmlFor="contrast" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contrast</label>
                    <small className="text-end">{contrast}</small>
                </div>
                <input id="contrast" name="contrast" type="range" value={contrast} onChange={handleContrastChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min={0} max={255} />

                <div className="flex justify-between w-full">
                    <label htmlFor="saturation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Saturation</label>
                    <small className="text-end">{saturation}</small>
                </div>
                <input id="saturation" name="saturation" type="range" value={saturation} onChange={handleSaturationChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min={0} max={255} />
            </div>
        </div>
    );
};

export default CameraTuner;