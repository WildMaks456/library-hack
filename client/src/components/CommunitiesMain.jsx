import React, { useState } from 'react';
import { Thread } from './Thread';
import CreatePostModal from './CreatePostModal';

export default function CommunitiesMain() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="communities-nav-right-div-right">
                <button onClick={openModal} className='communities-nav-right-div-btn'>
                    Создать новое
                </button>
            </div>
            <Thread />
            {isModalOpen && <CreatePostModal onClose={closeModal} />}
        </>
    );
}
