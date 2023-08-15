import { FC, useEffect, useState } from 'react';

import { IMessage } from '../../utils/messageInterface';
import styles from './Message.module.scss';
import Loader from '../Loader/Loader';

interface MessageProps {
    message: IMessage;
    isLoading?: boolean;
}

const Message: FC<MessageProps> = ({ message, isLoading }) => {
    const [displayedMessage, setDisplayedMessage] = useState('');

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
        let currentIndex = 0;

        const displayMessage = () => {
            if (currentIndex < message.message.length) {
                setDisplayedMessage(prevMessage => prevMessage + message.message[currentIndex]);
                currentIndex++;
                timeoutId = setTimeout(displayMessage, 10);
            }
        };
        message.owner === 'bot' ? displayMessage() : setDisplayedMessage(message.message);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [message]);

    return (
        <div className={styles[message.owner]}>
            <span className={styles.avatar}>T</span>
            {isLoading ? (<Loader />) : (<p className={styles.text}>{displayedMessage}</p>)}
        </div>
    );
};

export default Message;
