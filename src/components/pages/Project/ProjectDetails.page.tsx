import { ProjectBoard, DetailsPage } from './Project.styles';
import { Typography } from '@mui/material';
import { Spacer } from '../../atoms';
import { Task, TaskContainer } from './components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useState } from 'react';

const dummyData = [
  {
    column: 'To do',
    columnId: '34jsjs',
    tasks: [
      {
        taskId: '1333',
        tags: ['ui design', 'frontend', 'backend', 'fullstack'],
        title: 'Login components design',
        desc: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        assignees: [
          { name: 'RE', imgUrl: '' },
          { name: 'AE', imgUrl: '' }
        ]
      },
      {
        taskId: '2www',
        tags: ['ui design', 'frontend', 'backend', 'fullstack'],
        title: 'Select Field',
        desc: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        assignees: [
          { name: 'RE', imgUrl: '' },
          { name: 'AE', imgUrl: '' }
        ]
      },
      {
        taskId: 'w21ww',
        tags: ['ui design', 'frontend', 'backend', 'fullstack'],
        title: 'Come Home Field',
        desc: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        assignees: [
          { name: 'RE', imgUrl: '' },
          { name: 'AE', imgUrl: '' }
        ]
      }
    ]
  },
  {
    column: 'In Progress',
    columnId: 'jsjs',
    tasks: [
      {
        taskId: '1',
        tags: ['Figma', 'React'],
        title: 'Login components design',
        desc: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        assignees: [
          { name: 'PM', imgUrl: '' },
          { name: 'MI', imgUrl: '' }
        ]
      }
    ]
  },
  {
    column: 'Done',
    columnId: '33eew',
    tasks: [
      {
        taskId: '32',
        tags: ['Nestjs', 'C# Dotnet'],
        title: 'Login components design',
        desc: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        assignees: [
          { name: 'PM', imgUrl: '' },
          { name: 'MI', imgUrl: '' }
        ]
      }
    ]
  }
];

export const ProjectDetailsPage = () => {
  // const { projectId } = useParams();
  const [data, setData] = useState(dummyData);

  const onDragEnd = (res: DropResult) => {
    const { destination, source } = res;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const sourceColumn = data.find(obj => obj.columnId === source.droppableId);
    const targetColumn = data.find(obj => obj.columnId === destination.droppableId);

    if (!sourceColumn || !targetColumn) return;

    const newTasks = Array.from(sourceColumn.tasks);
    const [removedTask] = newTasks.splice(source.index, 1);

    if (destination.droppableId === source.droppableId) {
      newTasks.splice(destination.index, 0, removedTask);
      const updatedColumn = { ...targetColumn, tasks: newTasks };
      const updatedData = data.map(obj => (obj.columnId === targetColumn.columnId ? updatedColumn : obj));

      setData(updatedData);
      return;
    }

    const targetTasks = Array.from(targetColumn.tasks);
    targetTasks.splice(destination.index, 0, removedTask);
    const updatedSourceColumn = { ...sourceColumn, tasks: newTasks };
    const updatedTargetColumn = { ...targetColumn, tasks: targetTasks };

    const updatedData = data.map(obj => {
      if (obj.columnId === sourceColumn.columnId) {
        return updatedSourceColumn;
      } else if (obj.columnId === targetColumn.columnId) {
        return updatedTargetColumn;
      }
      return obj;
    });

    setData(updatedData);
  };

  return (
    <DetailsPage>
      <Typography variant="h1">Backend Sprint</Typography>
      <Spacer height={20} />
      <ProjectBoard>
        <DragDropContext onDragEnd={res => onDragEnd(res)}>
          {data.map(({ column, columnId, tasks }) => (
            <TaskContainer key={columnId} name={column} onAddTask={() => {}} containerId={columnId}>
              {tasks.map(({ tags, title, desc, assignees, taskId }, index) => (
                <Task
                  key={taskId}
                  tags={tags}
                  title={title}
                  desc={desc}
                  assignees={assignees}
                  taskId={taskId}
                  index={index}
                />
              ))}
            </TaskContainer>
          ))}
        </DragDropContext>
      </ProjectBoard>
    </DetailsPage>
  );
};
