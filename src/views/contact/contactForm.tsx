import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Card from '../../components/ui/card';
import Toast from '../../components/ui/toast';
import DialogBox from '../../components/ui/dialog';
import { Contact } from '../../store/reducers/contactReducer';


interface ContactFormProps {
  type: 'new' | 'edit' | 'view'; // Add 'view' type
  handleOnSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void;
  initialValues?: any;
}

const ContactForm: React.FC<ContactFormProps> = ({ type, handleOnSubmit, initialValues }) => {
  const [toastMessage, setToastMessage] = useState('');

  const dispatch = useDispatch();

  // Validation schema for the form fields
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
  });

  const fieldData = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone' },
  ];
  const statusOptions = ['active', 'inactive'];

  return (
    <div className="max-w-md mx-auto p-4">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleOnSubmit}>
        {() => (
          <Form>
            <Card title={type === 'view' ? 'Contact Details' : type === 'edit'?'Edit Contact':'Add Contact'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fieldData.map((field) => (
                  <div key={field.name} className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    {type === 'view' ? (
                      <div className="px-3 py-2 border rounded bg-gray-100">{initialValues[field.name]}</div>
                    ) : (
                      <Field
                        type={field.name === 'email' ? 'email' : 'text'}
                        name={field.name}
                        className="w-full px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    )}
                    <ErrorMessage name={field.name} component="div" className="text-red-500" />
                  </div>
                ))}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <div className="flex items-center">
                    {statusOptions.map((status) => (
                      <label key={status} className="mr-2">
                        <Field type="radio" name="status" value={status} className="mr-1" disabled={type === 'view'} />
                        {status[0].toUpperCase() + status.slice(1)}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="status" component="div" className="text-red-500" />
                </div>
              </div>
              {type !== 'view' && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  {type === 'new' ? 'Add Contact' : 'Update Contact'}
                </button>
              )}
            </Card>
          </Form>
        )}
      </Formik>

      {toastMessage && <Toast message={toastMessage} type='success' duration={3000} />}
    </div>
  );
};

export default ContactForm;
