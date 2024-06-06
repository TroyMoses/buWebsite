"use client"

import { Fragment, useState } from "react";
import Modal from "../../components/Modal";


export default function ModalPage() {
    const [showModel, setShowModel] = useState(false);
    return (
        <Fragment>
            <div className="p-10 text-center">
                <h1 className="text-3xl mb-5">
                    Custom Modal With Tailwindcss
                </h1>
                <button 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5" 
                    onClick={() => setShowModel(true)}
                    >
                        Text Modal
                </button>
            </div>
            <div>
                <Modal isVisible={showModel} onClose={() => setShowModel(false)}>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-5">
                            Modal Title
                        </h3>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
                        </p>
                    </div>
                </Modal>  
            </div>
        </Fragment>
    );
}