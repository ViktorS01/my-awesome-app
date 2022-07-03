import React, { FC, useState } from 'react';
import * as ST from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../store/actions/commentsAction';
import { RootState } from '../../../store/reducers';

const Comment: FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  return (
    <>
      <ST.Comment>
        {comments.length > 0 &&
          comments.map((item, index) => {
            return <p key={index}>{item.value}</p>;
          })}
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addComment(value, Math.random()));
            setValue('');
          }}
        >
          Отправить
        </button>
      </ST.Comment>
    </>
  );
};

export default Comment;
