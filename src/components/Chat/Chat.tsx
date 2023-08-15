import { FC, useEffect, useRef } from 'react';

import styles from './Chat.module.scss';
import { IMessage } from '../../utils/messageInterface';

import Message from '../Message/Message';

interface ChatProps {
  messagesList: IMessage[];
  isLoading: boolean;
}

const Chat: FC<ChatProps> = ({ messagesList, isLoading }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messagesList]);

  return (
    <div className={styles.container} ref={containerRef}>
      {messagesList.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {isLoading && <Message message={{ message: '', owner: 'bot' }} isLoading />}
    </div>
  );
};

export default Chat;
