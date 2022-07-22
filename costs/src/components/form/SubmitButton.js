import styles from './SubmitButton.module.css';

function Select({text}){   
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
}

export default Select;