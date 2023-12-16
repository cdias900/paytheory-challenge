import { FormEventHandler, useState } from 'react';
import { ValidationError } from 'yup';

import { formDataInitialState } from 'constants/formData';
import { FormDataType, FormDataKeysType } from 'types/FormData';
import { PaymentMethodType } from 'types/PaymentMethod';
import { getFormDataSchema } from 'utils/formDataSchema';

export const useContentRight = () => {
  const [checked, setChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('card');
  const [formData, setFormData] = useState<FormDataType>(formDataInitialState);
  const [formErrors, setFormErrors] = useState<Partial<FormDataType>>({});

  const onClickCheckbox = () => setChecked(c => !c);

  const onUpdateFormData = (key: FormDataKeysType, value: string) => {
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [key]: '',
    }));
    setFormData(data => ({
      ...data,
      [key]: value,
    }));
  };

  const onUpdatePaymentMethod = (method: PaymentMethodType) =>
    setPaymentMethod(method);

  const onFormSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    console.log('SUBMITTED', formData);

    const schema = getFormDataSchema(!checked);

    try {
      await schema.validate(formData, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        const validationErrors: Partial<FormDataType> = {};
        error.inner.forEach(formError => {
          if (formError.path)
            validationErrors[formError.path as FormDataKeysType] =
              formError.message;
        });

        setFormErrors(validationErrors);
      }
    }
  };

  return {
    checked,
    formData,
    formErrors,
    paymentMethod,
    onClickCheckbox,
    onFormSubmit,
    onUpdateFormData,
    onUpdatePaymentMethod,
  };
};
