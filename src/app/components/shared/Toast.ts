import toast from "react-hot-toast";

export function errorToast(msg: string) {
    toast.error(msg, {
        position: 'top-right',
        style: {
            border: '1px solid var(--color-error)',
            padding: '16px',
            color: 'var(--color-error-content)',
            background: 'var(--color-error)',
        },
        iconTheme: {
            primary: 'var(--color-error-content)',
            secondary: 'var(--color-error)',
        },
    });
}
export function successToast(msg: string) {
    toast.success(msg, {
        position: 'top-right',
        style: {
            border: '1px solid var(--color-success)',
            padding: '16px',
            color: 'var(--color-success-content)',
            background: 'var(--color-success)',
        },
        iconTheme: {
            primary: 'var(--color-success-content)',
            secondary: 'var(--color-success)',
        },
    });
}