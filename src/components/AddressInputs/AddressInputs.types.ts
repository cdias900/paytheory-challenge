import { FormData, FormDataKeys } from 'types/FormData';

export type AddressInputsProps = {
  billing?: boolean;
  formData: FormData;
  onUpdateFormData: (key: FormDataKeys, value: string) => void;
};
