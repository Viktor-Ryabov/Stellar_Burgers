import ReactDOM from "react-dom";
import Modal from "../../components/Modal/Modal";
import PropTypes from "prop-types";

export const withModal = (WrappedComponent) => (props) => {
    // console.log(props);

    return ReactDOM.createPortal(
        <>
            <Modal {...props} >
                <WrappedComponent {...props} />
            </Modal>
            
        </>, 
        document.querySelector("#react-modals")
    );
};

withModal.propTypes = {
    active: PropTypes.bool.isRequired,
};
