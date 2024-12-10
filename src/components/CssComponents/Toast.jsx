import React, { useContext, useEffect } from 'react';
import MyContext from '../../context/MyContext';

// created a tost to show masagges when we login , logout, boolmark, or remove from bookmar
const Toast = () => {
    const { toast, setToast, toastMessage } = useContext(MyContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setToast(false)
        }, 3000);

        return () => clearTimeout(timer);
    }, [toast, toastMessage]);

    return (
        <div
            className={`fixed z-50 top-5 right-5 bg-green-600 bg-opacity-90 rounded-lg px-4 py-2 ${toast ? 'block' : 'hidden'}`}
        >
            <p className="text-black">{toastMessage}</p>
        </div>
    );
};

export default Toast;
