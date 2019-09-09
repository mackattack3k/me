import React, { useEffect, useReducer, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components';
import LoadingSpinner from '../../loading/components/LoadingSpinner';

SyntaxHighlighter.registerLanguage('javascript', js);
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

const initialState = {
  fakeCode: 'const fetchData = async () => apiCall(wat);'
};

function reducer(state, action) {
  const { letter, type } = action;
  if (type === 'addLetter') {
    return { fakeCode: `${state.fakeCode}${letter}` };
  }
  throw new Error();
}

const Code = styled.div`
  max-width: 475px;
`;
const Loading = styled.div`
  padding-top: 15px;
  padding-left: 25px;
`;

const FakeAutoCode = () => {
  // Using reducer because we update state inside useEffect
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoadingApi, setIsLoadingFakeData] = useState(false);
  const writableCodeText =
    '\nconst { data: apiData = {}} = await fetchData();\nconsole.log(apiData);';
  useEffect(() => {
    const timers = [];
    const printNextLetter = (currentLetterPos, nextPos) => {
      const nextLetter = writableCodeText.slice(currentLetterPos, nextPos);
      timers.push(
        setTimeout(() => {
          dispatch({
            type: 'addLetter',
            letter: nextLetter
          });
        }, TYPING_DELAY_MS * nextPos)
      );
    };
    for (
      let currentLetterPos = 0;
      currentLetterPos < writableCodeText.length;
      currentLetterPos += 1
    ) {
      printNextLetter(currentLetterPos, currentLetterPos + 1);
    }
    const finalLogDelay = writableCodeText.length * TYPING_DELAY_MS;
    timers.push(
      setTimeout(() => {
        setIsLoadingFakeData(true);
        setTimeout(() => {
          // eslint-disable-next-line no-console
          console.log(FAKE_DATA);
          setIsLoadingFakeData(false);
        }, FAKE_API_DELAY_MS);
      }, finalLogDelay)
    );
    return () => {
      if (!timers) {
        return;
      }
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);
  const { fakeCode } = state;
  return (
    <Code>
      <SyntaxHighlighter language="javascript" style={dark}>
        {fakeCode}
      </SyntaxHighlighter>
      <Loading>{isLoadingApi && <LoadingSpinner />}</Loading>
    </Code>
  );
};

export default FakeAutoCode;
