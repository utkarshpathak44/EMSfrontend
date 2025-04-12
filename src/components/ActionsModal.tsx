// components/WindowModal.jsx

import { ReactNode } from "react";

interface ActionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ActionsModal = ({ isOpen, onClose, children }: ActionsModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 w-screen h-screen antialiased"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-[90%] max-w-5xl max-h-[90%] overflow-auto 
            bg-gradient-to-br from-stone-800/70 to-stone-900/70 
            border border-stone-700/30 
            rounded-3xl p-6 
            shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] 
            backdrop-blur-lg 
            text-stone-200"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-stone-400 hover:text-red-400 text-2xl transition-colors"
          >
            ×
          </button>
          {children}
          <div className="h-128"></div>
        </div>
      </div>
    );
  };
  
  export default ActionsModal;
  