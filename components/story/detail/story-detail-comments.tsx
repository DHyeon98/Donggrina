import React from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import { StoryComment } from '@/types/story/details';
import styles from './story-detail-comments.module.scss';

interface StoryDetailCommentsProps {
  comments: StoryComment[];
}

export default function StoryDetailComments(props: StoryDetailCommentsProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const updateFn = () => {
    console.log('Update');
    onCloseToggle();
  };

  const deleteFn = () => {
    console.log('Delete');
    onCloseToggle();
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles['comment-list']}>
        {props.comments.map((comment) => (
          <li className={styles['comment-item']}>
            <div className={styles['comment-item__info']}>
              <AvatarImage image={comment.commentsAuthorProfile} />
              <div>
                <AvatarName>{comment.commentAuthor}</AvatarName>
                <time className={styles['comment-item__date']}>2024-06-21</time>
              </div>
            </div>
            <div className={styles['comment-item__contents']}>
              <p>{comment.comment}</p>
            </div>
            <button className={styles['comment-item__reply']}>댓글</button>
            <div className={styles['comment-item__kebab']}>
              <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
                <DropdownMenu.Kebab />
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
                  <DropdownMenu.Item onClick={deleteFn}>삭제</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
