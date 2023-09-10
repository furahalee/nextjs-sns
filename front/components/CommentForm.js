import { Form, Input, Button } from 'antd';
import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';

const CommentForm = ({ post }) => {
  const [commentText, setCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {

  }, [commentText]);
const onChangeCommentText = useCallback(() => {

}, []);

  return (
    <div>
      <Form onFinish={onSubmitComment}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button type="primary" htmlType="submit">버튼</Button>
      </Form>
      
    </div>
  );
};

export default CommentForm;