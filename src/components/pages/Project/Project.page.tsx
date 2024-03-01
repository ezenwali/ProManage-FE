import { Project, ProjectPageCon, classesProjectPageCon } from './Project.styles';
import { Typography } from '@mui/material';
import { Button, Spacer } from '../../atoms';
import { FullCenterPageLoader } from '../../atoms/FullCenterPageLoader/FullCenterPageLoader';
import { useProjectPage } from './useProjectPage';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../common/store';
import { TransitionsModal } from '../../molecules/Modal/Modal';
import { CreateProject } from './components/CreateProject/CreateProject';
import { removeHtmlTags, truncateText } from '../../../common/funtions';

export const ProjectPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const { isLoading, projects, isModalOpen, handleCloseModal, setIsModalOpen } = useProjectPage();

  if (isLoading || !user) {
    return <FullCenterPageLoader />;
  }

  console.log(projects);

  return (
    <ProjectPageCon>
      <Typography variant="h1">Hi {user.email}, you have 5 due Tasks today.</Typography>
      <Spacer height={20} />
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className={classesProjectPageCon.btn}>
        Create Project
      </Button>
      <Spacer height={20} />
      {projects.length === 0 ? (
        <div>No project created or invited to yet</div>
      ) : (
        <section>
          {projects.map((project, i) => (
            <Project onClick={() => navigate(project.id)} key={i}>
              <Typography variant="h3">{project.title}</Typography>
              <Spacer height={5} />
              <Typography variant="body1" style={{ maxWidth: '300px' }}>
                {truncateText(removeHtmlTags(project.description), 30)}
              </Typography>
              <Spacer height={10} />
              <Typography variant="h4">
                Created by: <span>{project.creatorId}</span>
              </Typography>
            </Project>
          ))}
        </section>
      )}

      <TransitionsModal isOpen={isModalOpen} handleClose={handleCloseModal}>
        <Typography variant="h3">Create Project</Typography>
        <Spacer height={30} />
        <CreateProject />
      </TransitionsModal>
    </ProjectPageCon>
  );
};
