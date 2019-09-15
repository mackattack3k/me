import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import AllMockProviders from '../../../testproviders/AllMockProviders';
import english from '../../translation/english';
import ContactPage from '../components/ContactPage';

const VALID_EMAIL = 'test@test.com';
const INVALID_EMAIL = 'hejhej';

const setup = () => {
  const contactPage = render(
    <AllMockProviders>
      <ContactPage />
    </AllMockProviders>
  );
  const emailInput = contactPage.getByLabelText('sent-from-email');
  const messageInput = contactPage.getByLabelText('message');
  const submitButton = contactPage.getByText(english.contact.submit);
  return {
    emailInput,
    messageInput,
    submitButton,
    ...contactPage
  };
};

describe('contact page', () => {
  it('should show a toast on submit', async () => {
    const { emailInput, submitButton, findByText } = setup();
    // Valid email entered and submit clicked
    fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
    fireEvent.click(submitButton);
    const toast = await findByText(english.contact.success_message);
    expect(toast).toBeDefined();
  });
  it('should clear input on valid submit', async () => {
    const { emailInput, messageInput, submitButton, findByText } = setup();
    // Valid email entered and submit clicked
    fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
    fireEvent.click(submitButton);
    await findByText(english.contact.success_message);
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });
  it('should add error on no email', async () => {
    const { emailInput, findByText } = setup();
    // No text has been entered and user has clicked away from the input field
    fireEvent.blur(emailInput);
    const validationErrors = await findByText(english.contact.required);
    expect(validationErrors).toBeDefined();
  });
  it('should add error on invalid email', async () => {
    const { emailInput, findByText } = setup();
    // Invalid email has been entered and then blurred input field
    fireEvent.change(emailInput, { target: { value: INVALID_EMAIL } });
    fireEvent.blur(emailInput);
    const validationErrors = await findByText(english.contact.invalid_email);
    expect(validationErrors).toBeDefined();
  });
});
