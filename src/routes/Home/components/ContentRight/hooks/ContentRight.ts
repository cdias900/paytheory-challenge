import { FormEventHandler, useEffect, useState } from 'react';
import { ValidationError } from 'yup';

import { formDataInitialState } from 'constants/formData';
import { usePayment } from 'context/paymentContext';
import { FormDataType, FormDataKeysType } from 'types/FormData';
import { PaymentMethodType } from 'types/PaymentMethod';
import { getFormDataSchema } from 'utils/formDataSchema';

export const useContentRight = () => {
  const [checked, setChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('card');
  const [formData, setFormData] = useState<FormDataType>(formDataInitialState);
  const [formErrors, setFormErrors] = useState<Partial<FormDataType>>({});

  const { createPayment } = usePayment();

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

    const schema = getFormDataSchema(!checked);

    try {
      await schema.validate(formData, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (Object.values(formErrors).some(value => !!value)) {
        return;
      }

      createPayment(formData, checked);
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

  useEffect(() => {
    const cleanupFunction = window.paytheory.stateObserver(
      (state: {
        [key: string]: {
          isDirty: boolean;
          isFocused: boolean;
          errorMessages: string[];
        };
      }) => {
        const newErrors: Partial<FormDataType> = {
          cardCVV: '',
          cardExp: '',
          cardNumber: '',
        };
        const newValues: Partial<FormDataType> = {
          cardCVV: '',
          cardExp: '',
          cardNumber: '',
        };

        const states = [
          {
            key: 'cardNumber',
            ...state['card-number'],
          },
          {
            key: 'cardCVV',
            ...state['card-cvv'],
          },
          {
            key: 'cardExp',
            ...state['card-exp'],
          },
        ];

        states.forEach(item => {
          if (
            item.isDirty &&
            !item.isFocused &&
            item.errorMessages.length > 0
          ) {
            newErrors[item.key as FormDataKeysType] = item.errorMessages[0];
          }

          newValues[item.key as FormDataKeysType] = item.isDirty ? 'dirty' : '';
        });

        setFormErrors(prevErrors => ({
          ...prevErrors,
          ...newErrors,
        }));
        setFormData(prevData => ({
          ...prevData,
          ...newValues,
        }));
      },
    );

    return cleanupFunction;
  }, []);

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
