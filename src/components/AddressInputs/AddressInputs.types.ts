import { FormDataType, FormDataKeysType } from 'types/FormData';

export type AddressInputsProps = {
  billing?: boolean;
  formData: FormDataType;
  formErrors: Partial<FormDataType>;
  onUpdateFormData: (key: FormDataKeysType, value: string) => void;
};
