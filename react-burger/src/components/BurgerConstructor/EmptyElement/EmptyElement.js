import Styles from "./EmptyElement.module.css";
import PropTypes from "prop-types";

const EmptyElement = (props) => {
    // console.log(props)
    return (
        <div
            className={
                props.type
                    ? `${Styles.EmptyElement_top}`
                    : `${Styles.EmptyElement_bottom}`
            }
        ></div>
    );
};

EmptyElement.propTypes = {
    props: PropTypes.string,
};

export default EmptyElement;
