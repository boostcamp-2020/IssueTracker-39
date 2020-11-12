import React from 'react';
import {LabelModelContext} from '~/*/models/LabelModel';
import LabelBtn from '~/*/components/label-btn';
import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
describe('라벨 버튼 테스트 코드', () => {
  test('컨텍스트내 store의 갯수만큼 view에 반영되어야 한다', () => {
    render(
      <HashRouter>
        <LabelModelContext.Provider value={{store: [1, 2, 3, 4]}}>
          <LabelBtn />
        </LabelModelContext.Provider>
      </HashRouter>,
    );
    screen.getByText('4');
  });
});
