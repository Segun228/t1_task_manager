import React from 'react';
import { Button } from 'antd';
import { createStyles } from 'antd-style';
import type { ButtonProps } from 'antd/es/button';

const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
        &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
        > span {
            position: relative;
        }

        &::before {
            content: '';
            background: linear-gradient(135deg, #6253e1, #04befe);
            position: absolute;
            inset: -1px;
            opacity: 1;
            transition: all 0.3s;
            border-radius: inherit;
            z-index: -1;
        }

        &:hover::before {
            opacity: 0;
        }
        }
    `,
}));

const ActionButton: React.FC<ButtonProps> = (props) => {
    const { styles } = useStyle();

    return (
        <Button
        {...props}
        type="primary"
        className={styles.linearGradientButton}
        >
        {props.children}
        </Button>
    );
};

export default ActionButton;