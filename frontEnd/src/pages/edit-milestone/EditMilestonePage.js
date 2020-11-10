import React from 'react';
import {useParams} from 'react-router-dom';
const EditMilestonePage = () => {
  const params = useParams();
  console.log(params);
  return <div>헬로~~~~~</div>;
};

export default EditMilestonePage;
