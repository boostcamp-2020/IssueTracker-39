import {useRef} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';

const requestImageUpload = async (formData, stateSetter) => {
  const axiosInstance = axiosMaker();
  const result = await axiosInstance.post('/api/issue/image', formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

  if (result.status === 200) {
    stateSetter((content) => content + result.data.filename);
  }
};

const imageInputCustomHooks = (stateSetter) => {
  const imageInputRef = useRef();

  const clickFileSelectingArea = () => {
    imageInputRef.current.click();
  };

  const imageFileChange = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    requestImageUpload(formData, stateSetter);
  };

  return {
    imageInputRef,
    clickFileSelectingArea,
    imageFileChange,
  };
};

export default imageInputCustomHooks;
