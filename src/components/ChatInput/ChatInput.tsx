import { FC, useState } from 'react'

import styles from './ChatInput.module.scss';

interface ChatInputProps {
    send: (message: string) => void
}

const ChatInput: FC<ChatInputProps> = ({send}) => {
    const [message, setMessage] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        send(message);
        setMessage('');
    }
    return (
        <form className={styles.label} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                placeholder='Start typing here...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className={styles.button} />
        </form>
    )
}

export default ChatInput