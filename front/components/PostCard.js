import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import {Card , Avatar, Popover, Button, List, Comment } from 'antd';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false)  

  const id = useSelector((state) => state.user.me?.id)
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);

  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retwitt" />,
          liked ?
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            :  
            <HeartOutlined key="heart" onClick={onToggleLike}/>,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" Content={(
            <Button.Group>
              {id && post.User.id === id 
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="primary">삭제</Button>
                  </> 
                )
              : (<Button type="danger">신고</Button>)}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
      >
        <Card.Meta 
          avatar={<Avatar>{post.User.nickname}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card> 
      {commentFormOpened &&(
        <div>
          <CommentForm post={post} />
          <List 
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    // createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;