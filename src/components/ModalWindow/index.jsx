import React, { useRef } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "hooks/useClickOutside";
import { hideModal } from "app/modal/actions";
import { selectModalState } from "app/modal/selectors";
import { Button } from "components/Button";
import { ReactComponent as Close } from "assets/icons/xmark.svg";

export const ModalWindow = () => {
  const dispatch = useDispatch();

  const { isOpen, title, text, children } = useSelector(selectModalState);

  const modalRef = useRef();

  const onClose = () => {
    if (isOpen) dispatch(hideModal());
  };

  useClickOutside(modalRef, onClose);

  return (
    <div className={cn({ "": isOpen })}>
      <div ref={modalRef} className={cn("", { "": isOpen })}>
        <Button onClick={onClose}>
          <Close />
        </Button>
        {title && <h3 className="">{title}</h3>}
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  );
};
