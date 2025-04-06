"use client"

import {useState} from "react";
import Header from "@/components/Header";

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
                <Header />

            </div>
        </div>
    );
};
export default ProjectHeader;
