"use client"

import React, {useState} from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import BoardView from "@/app/projects/BoardView";

type Props = {
    params: Promise<{ id: string }>
};
const Project = ({ params }: Props) => {

    const { id } = React.use(params);
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)
    return (
        <div>
            {/*Modal New Tasks*/}
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        </div>
    );
};
export default Project;
