import { Dialogs } from '../../components/Dialogs';
import { DialogsList } from '../../components/Dialogs/DialogsList';

import styles from './MessagesPage.module.css';

export default function MessagesPage() {
    return (
        <div className={styles.MessagesPage}>
            <div className={styles.dialogs}>
                <DialogsList />
            </div>
            <div className={styles.chat}>
                <Dialogs />
            </div>
        </div>
    )
}