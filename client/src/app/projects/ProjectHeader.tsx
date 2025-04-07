"use client"

import {useState} from "react";
import Header from "@/components/Header";
import {Grid3x3} from "lucide-react";

type Props = {
    activeTab:string;
    setActiveTab: (tabName:string) => void;
};
const ProjectHeader = ({activeTab,setActiveTab}: Props) => {
    const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false)
    return (
        <div className="px-4 xl:px-6">
            {/*MODAL NEW PROJECT*/}
            <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
                <Header name="Product Design Development"/>
            </div>

            {/*TABS*/}
            <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 md:items-center">
                <div className="flex flex-1 items-center gap-2 md:gap-4">
                    <TabButton name="Board" icon={<Grid3x3 />} setActiveTab={} activeTab={}/>
                </div>
            </div>
        </div>
    );
};

type TabButtonProps = {
    name:string;
    icon:React.ReactNode;
    setActiveTab: (tabName:string) => void;
    activeTab:string;
}
const TabButton = ({ name, setActiveTab, activeTab, icon}: TabButtonProps) => {
    const isActive = name===activeTab;
    return (
        <button
            className={`relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 sm:px-2 lg:px-4 ${isActive ? "text-blue-600 after:bg-blue-600":""}`}
            onClick={()=>setActiveTab(name)}
        >
            {icon}
            {name}
        </button>
    )
}


export default ProjectHeader;
