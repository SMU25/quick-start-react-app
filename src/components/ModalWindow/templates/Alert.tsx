import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button";

const T_PREFIX = "modal-alert";
const DEFAULT_APPROVAL_BUTTON_NAME = "ok";

interface Props {
  children?: ReactNode;
  approvalButtonName?: string;
  onClose: VoidFunction;
}

export const Alert: FC<Props> = ({ children, approvalButtonName, onClose }) => {
  const { t } = useTranslation();

  const approval =
    approvalButtonName || t(`${T_PREFIX} - ${DEFAULT_APPROVAL_BUTTON_NAME}`);

  return (
    <div>
      {children}
      <Button className="" onClick={onClose}>
        {approval}
      </Button>
    </div>
  );
};
