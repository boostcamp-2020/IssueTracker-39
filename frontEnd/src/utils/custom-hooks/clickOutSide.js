import {useEffect} from 'react';

export default function clickOutSide(ref, callback) {
  useEffect(() => {
    function handleClickOutSide(e) {
      e.stopPropagation();
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    }
    document.addEventListener('click', handleClickOutSide);
  }, [ref]);

  //뒷정리
  return () => {
    document.removeEventListener('click', handleClickOutSide);
  };
}
