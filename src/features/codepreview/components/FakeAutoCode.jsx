import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import JavascriptHighlighter from '../../highlighter/components/JavascriptHighlighter';
import LoadingSpinner from '../../loading/components/LoadingSpinner';
import printCode from '../printCode';

const TYPING_DELAY_MS = 100;
const FAKE_API_DELAY_MS = 1500;
const FAKE_DATA = {
  marcus: {
    age: 27,
    height_cm: 198,
    glasses: true,
    hasCats: false,
    hasDogs: true,
    location: 'The Alps'
  }
};

function reducer(state, action) {
  const { letter, type } = action;
  if (type === 'addLetter') {
    return { fakeCode: `${state.fakeCode}${letter}` };
  }
  throw new Error();
}

const Code = styled.div`
  width: 100%;
  max-width: 475px;
  @media (max-width: 900px) {
    font-size: 80%;
  }
`;
const Loading = styled.div`
  padding-top: 15px;
  padding-left: 25px;
`;

const FakeAutoCode = () => {
  // Using reducer because we update state inside useEffect
  const initialState = {
    fakeCode: 'const fetchData = async () => apiCall(wat);'
  };
  const [{ fakeCode }, dispatch] = useReducer(reducer, initialState);
  const [isLoadingApi, setIsLoadingFakeData] = useState(false);
  const writableCodeText =
    '\nconst { data: apiData = {}} = await fetchData();\nconsole.log(apiData);';
  useEffect(
    () =>
      printCode({
        codeToType: writableCodeText,
        typingDelay: TYPING_DELAY_MS,
        onTypingDone: () => setIsLoadingFakeData(true),
        onDone: () => {
          // eslint-disable-next-line no-console
          console.log(FAKE_DATA);
          setIsLoadingFakeData(false);
        },
        onDoneDelay: FAKE_API_DELAY_MS,
        dispatch
      }),
    []
  );
  return (
    <Code>
      <JavascriptHighlighter>{fakeCode}</JavascriptHighlighter>
      <Loading>{isLoadingApi && <LoadingSpinner />}</Loading>
    </Code>
  );
};

export default FakeAutoCode;
