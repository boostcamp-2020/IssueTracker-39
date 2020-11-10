import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
export function paramValidation() {
  const {id} = useParams();
  const history = useHistory();
  try {
    const numberInt = parseInt(id);
    return numberInt;
  } catch (e) {
    history.goBack();
  }
}
export function dateValidation() {}
