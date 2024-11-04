import { useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import GadgetCard from "./GadgetCard";

const Gadgets = () => {
    const data = useLoaderData();
    console.log(data);
    const [category, setCategory] = useState("initial");
    return (
        <div className="max-w-6xl mx-auto mb-10">
            <div className="text-center">
                <h3 className="font-bold text-4xl">Explore Cutting-Edge Gadgets</h3>
            </div>
            <div className="grid grid-cols-4 gap-10 mt-10">
                <div className="border rounded-xl p-3">
                    <Sidebar selectCategory={setCategory}></Sidebar>
                </div>
                <div className="col-span-3 gap-5">
                    <GadgetCard products={data} category={category}></GadgetCard>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;