import React, { FC } from 'react';
import * as ST from './styled';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import {
  incrementLikes,
  decrementLikes,
} from '../../store/actions/likesAction';
import { Dispatch } from 'redux';
import Comment from './Comment';

interface IPost {
  likes: number;
  onIncrementLike: () => void;
  onDecrementLike: () => void;
}

const Post: FC<IPost> = ({ likes, onIncrementLike, onDecrementLike }) => {
  return (
    <>
      <ST.PostWrapper>
        <button onClick={() => onIncrementLike()}>Like</button>
        <div>{likes} ❤</div>
        <button onClick={() => onDecrementLike()}>DisLike </button>
      </ST.PostWrapper>
      <Comment />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrementLike: () => dispatch(incrementLikes()),
    onDecrementLike: () => dispatch(decrementLikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
