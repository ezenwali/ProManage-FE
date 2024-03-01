import { ReactNode } from 'react';
import { DragDroparea, TaskContainerRapper, classesContainerRapper } from '../Project.styles';
import { Spacer } from '../../../atoms';
import { AddIcon } from '../../../../assets/icons/add';
import { Typography } from '@mui/material';
import { StrictModeDroppable } from './StrictModeDroppable';

interface TaskContainerProps {
  children: ReactNode;
  name: string;
  onAddTask: (id: string) => void;
  containerId: string;
}

export const TaskContainer: React.FC<TaskContainerProps> = ({ containerId, children, name, onAddTask }) => {
  return (
    <StrictModeDroppable droppableId={containerId}>
      {provided => (
        <TaskContainerRapper ref={provided.innerRef} {...provided.droppableProps}>
          <div className={classesContainerRapper.header}>
            <Typography variant="h3">{name}</Typography>
            <AddIcon onClick={() => onAddTask(containerId)} />
          </div>
          <Spacer height={10} />
          <DragDroparea>
            {children}
            {provided.placeholder}
          </DragDroparea>
        </TaskContainerRapper>
      )}
    </StrictModeDroppable>
  );
};
