import React from 'react';
import styles from './CheckoutModal.module.scss';
import { useAppDispatch } from '../../app/hooks';
import { clearCart } from '../../features/cart/cartSlice';

interface Props {
  isShown: boolean,
  setIsShown: (isShown: boolean) => void,
}

export const CheckoutModal: React.FC<Props>  = ({ setIsShown }) => {
  const dispatch = useAppDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
    setIsShown(false);
  };

  const modalCloser = () => {
    setIsShown(false);
  };

  return (
    <div className={styles.modal} onClick={modalCloser}>
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
        <h3 className={styles.modal_title}>Checkout Warning</h3>
        <div className={styles.modal_body}>Checkout is not implemented yet. Do you want to clear the Cart?</div>
        <div className={styles.line}></div>
        <div className={styles.modal_footer}>

          <button
            className={styles.modal_button}
            onClick={clearCartHandler}
          >Clear</button>
          <button
            className={styles.modal_button}
            onClick={modalCloser}
          >
            Cancel
          </button>
        </div>
      </div>

    </div>
  );
};
