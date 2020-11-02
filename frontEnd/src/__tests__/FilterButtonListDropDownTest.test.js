import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import HeaderFilterDropdown from '../components/header-filter-dropdown';
describe('필터 버튼 리스트 테스트', () => {
  describe('dropDown 모션 테스트', () => {
    function FakeComponent() {
      return <div>ImFake</div>;
    }
    beforeEach(() => {
      /*
      render(
        <>
          <HeaderFilterDropdown />
          <FakeComponent />
        </>,
      );
      */
    });
    test('클릭시 dropDown이 나와야한다.', () => {
    });
    test('다른 곳이 눌려졌을 경우 dropDown이 사라져야 한다.', () => {});
  });
});
