import { Button, Input, Form } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const dispatch = useDispatch();
    
    const imgInput = useRef('');
    const { imagePaths } = useSelector((state) => state.post);
    const [text, setText] = useState('');
    
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, [])
    const onSubmit = useCallback(() => {
        dispatch(addPost);
        setText('');
    }, []);
    const onClickImgUpload = useCallback(() => {
        imgInput.current.click();
    }, [imgInput.current]);

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="입력하세요" />
            <div>
                <input type="file" ref={imgInput} multiple hidden />
                <Button onClick={onClickImgUpload}>이미지업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">Write</Button>
            </div>
            <div>
                {imagePaths.map((img) => (
                <div key={img} style={{ display: 'inline-block' }}>
                    <img src={img} style={{ width: '200px'}} alt={img} />
                    <div>
                        <Button>Remove Image</Button>
                    </div>
                </div>
                ))}
            </div>
        </Form>
    );
};

export default PostForm;