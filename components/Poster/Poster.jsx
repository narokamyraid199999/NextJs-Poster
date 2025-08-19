"use client";

import PostHeader from "@/components/PostHeader/PostHeader";
import PostCard from "@/components/PostCard/PostCard";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import PostEditButton from "@/components/PostEditButton";
import PostDeleteButton from "@/components/PostDeleteButton";
import { AnimatePresence, motion } from "framer-motion";
import { getPosts, createPost, updatePost, deletePost } from "@/lib/Posts";
import Loader from "../Loader";

export default function Poster() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editPostData, setEditPostData] = useState({});

  useEffect(() => {
    setLoading(true);
    getPosts().then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  const handlePostData = async (action, newPostData) => {
    setModalOpen(false);
    setEditPostData({});
    if (action === "create") {
      setLoading(true);
      const postRes = await createPost(newPostData);
      if (postRes.success) {
        setPosts((oldPosts) => [
          { ...newPostData, id: postRes.id },
          ...oldPosts,
        ]);
      } else {
        console.log("faild to create post");
      }
      setLoading(false);
    } else if (action === "edit") {
      setLoading(true);
      const postRes = await updatePost(newPostData);
      if (postRes.success) {
        setPosts(
          posts.map((post) => (post.id === newPostData.id ? newPostData : post))
        );
      } else {
        console.log("faild to update post");
      }
      setLoading(false);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setEditPostData({});
  };

  const handleButtonAction = async (action, postId) => {
    if (action === "delete") {
      setLoading(true);
      const postRes = await deletePost(postId);
      if (postRes.success) {
        setPosts(posts.filter((post) => post.id !== postId));
      } else {
        console.log("faild to delete post");
      }
      setLoading(false);
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
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center w-full h-full z-50 bg-white/80 backdrop-blur-sm">
              <Loader></Loader>
            </div>
          )}
          {posts.length == 0 && !loading && (
            <div className="w-full flex flex-col items-center justify-center gap-y-4 text-white">
              <h2 className="text-2xl font-bold">There's no posts yet</h2>
              <p>Start adding soon!</p>
            </div>
          )}
          <AnimatePresence>
            {posts.length > 0 &&
              posts.map((post, index) => (
                <motion.div
                  className="flex-auto max-w-full"
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <PostCard>
                    <div className="flex relative flex-col gap-y-3 bg-gradient-to-r  from-purple-300 to-purple-400 rounded-lg px-4 py-6 shadow-sm">
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
                      <p className="font-medium italic text-xl break-words">
                        {post?.title}
                      </p>
                      <p className="text-lg font-semibold break-words truncate max-w-[20rem]">
                        {post?.body}
                      </p>
                    </div>
                  </PostCard>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
