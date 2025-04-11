// components/Counter.js
"use client";

import { useState } from "react";

function Counter({ title, id }) {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    async function handleCounterAction(action) {
        setIsLoading(true);

        try {
            const response = await fetch("/api/counter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action,
                    counterId: id,
                }),
            });

            if (!response.ok) throw new Error("Failed to Update");

            // Update local state after successful API call
            setCount((prev) => (action === "increment" ? prev + 1 : prev - 1));
        } catch (error) {
            console.error("Error updating: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold">{title}</h2>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => handleCounterAction("decrement")}
                    className="btn btn-circle"
                    disabled={isLoading}
                >
                    -
                </button>
                <span className="text-2xl font-mono min-w-[3ch] text-center">
                    {count}
                </span>

                <button
                    onClick={() => handleCounterAction("increment")}
                    className="btn btn-circle btn-outline"
                    disabled={isLoading}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;





// "use client";

// import {useState} from "react";

// function Counter({ title, id }) {
//     const [count, setCount] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);

//     async function handleCounterAction(action) {
//         setIsLoading(true);

//         try{
//             const response = await fetch("/api/counter", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     action,
//                     counterId: id,
//                 }),
//             });

//             if (!response.ok) throw new Error("Failed to Update");

//             // Update local state after successful API call
//             setCount((prev) => (action === "increment" ? prev + 1 : prev - 1));
//         }   catch (error) {
//             console.error("Error updating: ", error);
//         } finally{
//             setIsLoading(false);
//         }
//     }

//     return(
//         <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
//             <h2 className="text-xl font-semibold">{props.title}</h2>

//             <div className="flex items-center gap-4">
//                 <button
//                     onClick={() => handleCounterAction("decrement")}
//                     className="btn btn-circle"
//                     disabled={isLoading}
//                 >
//                     -
//                 </button>
//                 <span className="text-2xl font-mono min-w-[3ch] text-center">
//                     {count}
//                 </span>

//                 <button
//                     onClick={() => handleCounterAction("increment")}
//                     className="btn btn-circle btn-outline"
//                     disabled={isLoading}
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Counter;



// function Counter(props) {
//     const [count, setCount] = useState(0);

//     return(
//         <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
//             <h2 className="text-xl font-semibold">{props.title}</h2>

//             <div className="flex items-center gap-4">
//                 <button
//                     onClick={() => setCount((prev) => prev - 1)}
//                     className="btn btn-circle"
//                 >
//                     -
//                 </button>
//                 <span className="text-2xl font-mono min-w-[3ch] text-center">
//                     {count}
//                 </span>

//                 <button
//                     onClick={() => setCount((prev) => prev + 1)}
//                     className="btn btn-circle btn-outline"
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Counter;