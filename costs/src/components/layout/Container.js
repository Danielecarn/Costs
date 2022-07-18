import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div> // Tudo que estiver dentro de container vai estar nessa div
    );
}

export default Container;