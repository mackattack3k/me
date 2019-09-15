import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Button from '../../button/components/Button';
import H1 from '../../text/components/H1';
import { ToastContext } from '../../toast/components/ToastProvider';

const Subtitle = styled.div`
  margin: 10px 0;
`;
const InputSection = styled.div`
  margin: 10px 0;
`;

const ContactPage = () => {
  const { t } = useTranslation();
  const { addToast } = useContext(ToastContext);
  return (
    <>
      <H1>{t('contact.title')}</H1>
      <Subtitle>{t('contact.subtitle')}</Subtitle>
      <Formik
        initialValues={{ email: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = t('contact.required');
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = t('contact.invalid_email');
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            addToast('contact.success_message');
            setSubmitting(false);
            resetForm();
          }, 300);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <InputSection>
              <label htmlFor="contact-email">
                <div>{t('contact.email_label')}</div>
                <Field
                  type="email"
                  name="email"
                  aria-label="sent-from-email"
                  id="contact-email"
                />
              </label>
              <ErrorMessage name="email" component="div" />
            </InputSection>
            <InputSection>
              <label>
                <div>{t('contact.message_label')}</div>
                <Field type="textarea" name="message" aria-label="message" />
              </label>
              <ErrorMessage name="message" component="div" />
            </InputSection>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              {t('contact.submit')}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactPage;
