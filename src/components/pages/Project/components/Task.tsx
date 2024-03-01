import { AvatarGroup, Typography } from '@mui/material';
import { Avatar, TaskRapper, classestaskRapper } from '../Project.styles';
import { Options } from '../../../../assets/icons/options';
import { Spacer, Tag } from '../../../atoms';
import { Draggable } from 'react-beautiful-dnd';
import { StringToColor } from '../../../../common/helpers/stringToColor';

interface TaskProps {
  desc: string;
  tags: string[];
  title: string;
  assignees: { imgUrl: string; name: string }[];
  taskId: string;
  index: number;
}

export const Task: React.FC<TaskProps> = ({ desc, tags, title, taskId, assignees, index }) => {
  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided, snapshot) => (
        <TaskRapper
          isDragged={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div className={classestaskRapper.header}>
            <div className={classestaskRapper.titleHead}>
              <Typography variant="h2">{title}</Typography>
              <Spacer width={10} />
              <Options className={classestaskRapper.options} />
            </div>
            <AvatarGroup>
              {assignees.map(({ name, imgUrl }, i) => (
                <Avatar key={i} sx={{ bgcolor: StringToColor(name), width: 20, height: 20 }} src={imgUrl} alt={name} />
              ))}
            </AvatarGroup>
          </div>
          <Spacer height={10} />
          <Typography variant="body1">{desc}</Typography>
          <Spacer height={10} />
          <div className={classestaskRapper.tags}>
            {tags.map((name, i) => (
              <Tag name={name} id={i} key={i} />
            ))}
          </div>
        </TaskRapper>
      )}
    </Draggable>
  );
};
