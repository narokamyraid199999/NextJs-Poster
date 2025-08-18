"use client";

import PostHeader from "@/components/PostHeader/PostHeader";
import PostCard from "@/components/PostCard/PostCard";
import { useState } from "react";
import Modal from "@/components/Modal";
import PostEditButton from "@/components/PostEditButton";
import PostDeleteButton from "@/components/PostDeleteButton";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title:
        "nextJs is a framework for building server-side rendered React applications.",
      subject: "Nextjs",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editPostData, setEditPostData] = useState({});

  const handlePostData = (action, newPostData) => {
    if (action === "create") {
      setPosts([...posts, { ...newPostData, id: posts.length + 1 }]);
    } else if (action === "edit") {
      setPosts(
        posts.map((post) => (post.id === newPostData.id ? newPostData : post))
      );
    }
    setModalOpen(false);
    setEditPostData({});
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setEditPostData({});
  };

  const handleButtonAction = (action, postId) => {
    if (action === "delete") {
      setPosts(posts.filter((post) => post.id !== postId));
    } else if (action === "edit") {
      setEditPostData(posts.find((post) => post.id === postId));
    }
  };

  return (
    <main className="bg-gradient-to-r from-purple-700 to-purple-800 min-h-screen">
      <div className="container mx-auto">
        <PostHeader handlePostData={handlePostData} openModal={openModal} />
        <Modal
          open={modalOpen}
          editPostData={editPostData}
          onClose={closeModal}
          onSubmit={handlePostData}
        />
        {/* main */}
        <div className="mt-12 px-[10%] flex gap-x-4 gap-y-8 flex-wrap pb-12 ">
          <AnimatePresence>
            {posts.length > 0
              ? posts.map((post, index) => (
                  <motion.div
                    className="flex-auto overflow-hidden "
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <PostCard>
                      <div className="flex relative overflow-auto flex-col gap-y-3 bg-gradient-to-r  from-purple-300 to-purple-400 rounded-lg px-4 py-6 shadow-sm">
                        <div className="absolute top-4 right-4">
                          <div className="flex gap-x-3 flex-row-reverse items-center">
                            <PostDeleteButton
                              handleButtonAction={handleButtonAction}
                              postId={post.id}
                            />
                            <PostEditButton
                              handleButtonAction={handleButtonAction}
                              postId={post.id}
                            />
                          </div>
                        </div>

                        <p className="text-lg font-semibold">{post.subject}</p>
                        <p className="font-medium italic text-xl">
                          {post.title}
                        </p>
                      </div>
                    </PostCard>
                  </motion.div>
                ))
              : null}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
