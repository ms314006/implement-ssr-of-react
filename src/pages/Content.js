import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequestQuery } from '../actions';

const loadData = dispatch => (
  fetchRequestQuery(dispatch)
);

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadData(dispatch);
  }, []);

  const { request } = useSelector(state => state);
  return (
    <span>{JSON.stringify(request)}</span>
  );
};

export default {
  component: Content,
  loadData,
};
