import Input from '../form/Input';
import Select from '../form/Select';
import styles from './ProjectForm.module.css';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input 
                type='text' 
                text='Nome do pojeto'
                name='name'
                placeholder='Insira o nome do projeto'
            />
            <Input 
                type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Incira o orçamento total'
            />
            <Select name='category_id' text='Selecione a categoria' />
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;