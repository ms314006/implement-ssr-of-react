import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequestQuery } from '../actions';

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRequestQuery(dispatch);
  }, []);

  const { request } = useSelector(state => state);
  return (
    <span>{JSON.stringify(request)}</span>
  );
};

const serverLoadData = dispatch => (
  fetchRequestQuery(dispatch)
);

export default {
  component: Content,
  serverLoadData,
};
