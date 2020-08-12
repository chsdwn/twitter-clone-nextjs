import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Button.module.css';

interface IProps {
  className?: string;
  full?: boolean;
  href?: string;
  children: React.ReactNode;
}

export const Button = ({
  className,
  full = false,
  href,
  children,
  ...props
}: IProps) => (
  <>
    {!href ? (
      <button
        type="button"
        className={classNames(
          styles.button,
          full && styles.fullWidth,
          className,
        )}
        {...props}>
        {children}
      </button>
    ) : (
      <Link href={href}>
        <a
          className={classNames(
            styles.button,
            full && styles.fullWidth,
            className,
          )}
          {...props}>
          {children}
        </a>
      </Link>
    )}
  </>
);
