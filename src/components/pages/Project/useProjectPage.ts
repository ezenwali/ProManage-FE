import { useState } from 'react';
import { useCustomQuery } from '../../../common/services/hooks/useCustomQuery';
import { ProjectInterface } from '../../../common/interface/project';
import { QueryKey } from '../../../common/interface/queryKeys.type';

export const useProjectPage = () => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading } = useCustomQuery<ProjectInterface[]>({
    queryKey: QueryKey.projects,
    url: 'project',
    onSuccess: res => {
      if (res) {
        setProjects(res);
      }
    }
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return { isLoading, projects, isModalOpen, handleCloseModal, setIsModalOpen };
};
