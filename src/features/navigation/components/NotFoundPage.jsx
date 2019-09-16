import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import H1 from '../../text/components/H1';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.secondary.dark};
  text-align: center;
`;
const SubTitle = styled.div`
  color: ${props => props.theme.secondary.dark};
  font-size: 18px;
`;

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <H1>{t('not_found.title')}</H1>
      <SubTitle>{t('not_found.subtitle')}</SubTitle>
    </Page>
  );
};

export default NotFoundPage;
