import React, { useState, useEffect } from "react";
import styles from "./Button.module.scss";
import Button, { ButtonProps } from "./Button";

type StateButtonProps = ButtonProps & {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
};

const StateButton: React.FC<StateButtonProps> = ({
  isLoading,
  isSuccess,
  isError,
  children,
  ...rest
}) => {
  const [showLoader, setShowLoader] = useState(isLoading);

  // Add delay to loading state change
  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    }

    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showLoader, isLoading, isError]);

  return (
    <Button
      {...rest}
      color={`${isError ? "red" : rest.color ? rest.color : "default"}`}
    >
      {showLoader && !isError && (
        <i className={styles["icon-loading"] + " fas fa-circle-notch"}></i>
      )}
      {isSuccess && !showLoader && (
        <i className={styles["icon-success"] + " fas fa-check-circle"}></i>
      )}
      {isError && (
        <i className={styles["icon-error"] + " fas fa-exclamation-circle"}></i>
      )}
      {isError ? <>Error</> : children}
    </Button>
  );
};

export default StateButton;
