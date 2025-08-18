import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, onSubmit, editPostData }) {
  if (!open && Object.keys(editPostData).length == 0) return null;

  const [title, setTitle] = useState(editPostData?.title || "");
  const [subject, setSubject] = useState(editPostData?.subject || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(Object.keys(editPostData).length == 0 ? "create" : "edit", {
      title,
      subject,
      id: editPostData?.id || null,
    });
    setTitle("");
    setSubject("");
  };

  return (
    <AnimatePresence>
      {(open || Object.keys(editPostData).length > 0) && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-purple-700">
              {Object.keys(editPostData).length == 0
                ? "Create New Post"
                : "Edit Post"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <textarea
                rows={4}
                placeholder="Your Text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              ></textarea>
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 hover:cursor-pointer"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold hover:from-purple-600 hover:to-purple-800 hover:cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
