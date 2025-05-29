import React from 'react';
import {useGetTasksQuery} from "@/state/api";
type Props = {
    id: string,
    setIsModalNewTaskOpen: (isOpen: boolean) => void,
}
function ListView({ id, setIsModalNewTaskOpen}:Props) {

    const {data:tasks ,error ,isLoading} = useGetTasksQuery({projectId:Number(id)});
    if(isLoading) return <div>Loading ...</div>
    if(error) return <div>An error occurred while fetching tasks</div>;
    return (
        <div>ListViews</div>
    );
}

export default ListView;