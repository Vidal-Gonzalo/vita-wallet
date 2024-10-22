import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    title: string;
    description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, title, description }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg py-12 w-11/12 max-w-lg relative flex flex-col justify-center items-center">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-600 hover:text-gray-800">
                    <img width={20} height={24} src={"/icons/cross.png"} />
                </button>
                <img src={imageSrc} alt={title} className="h-60 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default Modal;