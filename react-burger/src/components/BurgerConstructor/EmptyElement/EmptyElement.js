import Styles from "./EmptyElement.module.css";

const EmptyElement = ( {...props} ) => {
    return <div className= { props.type ? `${Styles.EmptyElement_top}` : `${Styles.EmptyElement_bottom}` }></div>;
};

export default EmptyElement;
