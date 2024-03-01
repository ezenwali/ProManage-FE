import { Field, Formik } from 'formik';
import { StyledForm } from '../../../../../common/style';
import { Button, InputField, Spacer } from '../../../../atoms';
import { InputTag } from '../../../../molecules/InputTag/InputTag';
import { createProject } from '../../../../../common/helpers/form.validator';
import { Editior } from '../../../../molecules';
import { useCustomMutation } from '../../../../../common/services/hooks/useCustomMutation';
import { MutationKey } from '../../../../../common/interface/mutationKey.types';
import { QueryKey } from '../../../../../common/interface/queryKeys.type';

interface FormValues {
  title: string;
  tags: { id: number; name: string }[];
  description: string;
}

const initialValues: FormValues = {
  title: '',
  tags: [],
  description: ''
};

export const CreateProject = () => {
  const { mutateAsync: creatProject, isLoading } = useCustomMutation<
    null,
    {
      title: string;
      tags: string[];
      dsc: string;
    }
  >({
    mutationKey: MutationKey.createProject,
    url: 'Project',
    refetchKeys: [QueryKey.projects]
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async data => {
        const modifiedInitialValues = data as unknown as { title: string; tags: string[]; dsc: string };

        const tags = data.tags.map(t => t.name);

        await creatProject({ ...modifiedInitialValues, tags });
      }}>
      {({ handleSubmit, errors, isSubmitting, values, setFieldValue }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field
            name="title"
            label="Title"
            error={errors.title}
            validate={createProject.title}
            placeholder="Title"
            type="text"
            as={InputField}
          />

          <Spacer height={20} />

          <Field
            label="Tags"
            name="tags"
            tags={values.tags}
            onChange={(updateTags: any) => setFieldValue('tags', updateTags)}
            error={errors.tags}
            onTagDelete={(id: number) => {
              const updateTags = values.tags.filter(t => t.id !== id);
              setFieldValue('tags', updateTags);
            }}
            as={InputTag}
            validate={createProject.tags}
          />
          <Spacer height={20} />

          <Field
            label="Description"
            name="description"
            value={values.tags}
            onChange={(value: string) => {
              setFieldValue('description', value);
            }}
            error={errors.description}
            as={Editior}
            validate={createProject.editor}
          />
          <Spacer height={20} />

          <Button type="submit" disabled={isSubmitting} isLoading={isLoading}>
            Create Project
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};
