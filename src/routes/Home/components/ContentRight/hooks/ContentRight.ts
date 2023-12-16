import { FormEventHandler, useState } from 'react';

import { formDataInitialState } from 'constants/formDataInitialState';

import { FormData, FormDataKeys } from 'types/FormData';

export const useContentRight = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState<FormData>(formDataInitialState);

  const onClickCheckbox = () => setChecked(c => !c);

  const onUpdateFormData = (key: FormDataKeys, value: string) => {
    setFormData(data => ({
      ...data,
      [key]: value,
    }));
  };

  const onFormSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    console.log('SUBMITTED', formData);
  };

  return { checked, formData, onClickCheckbox, onFormSubmit, onUpdateFormData };
};
