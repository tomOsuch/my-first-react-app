import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextImput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label className={styles.label}>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Column title" /></label>
            <label className={styles.label}>Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} placeholder="Column icon" /></label>
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
