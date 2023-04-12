import { create } from "zustand";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useUserStore } from "./useUserStore";

export interface BlogData {
  id: string;
  author: string;
  img: string;
  title: string;
  createdAt: Date;
  content: string;
  category: "tutorial" | "article";
}

interface Blog {
  blogs: { [key: number]: BlogData };
  createBlog: (
    title: string,
    content: string,
    category: string
  ) => Promise<void>;
  readBlog: () => void;
  deleteBlog: () => void;
  updateBlog: () => void;
}

const blogsRef = collection(db, "blogs");
const q = query(blogsRef, orderBy("createdAt"));

export const useBlogStore = create<Blog>()((set, get) => ({
  // State
  blogs: [],

  //Actions
  createBlog: async (_title: string, _content: string, _category: string) => {
    await addDoc(blogsRef, {
      author: useUserStore.getState().user.currentUser?.displayName,
      img: useUserStore.getState().user.currentUser?.photoURL,
      title: _title,
      content: _content,
      category: _category,
      createdAt: serverTimestamp(),
    });
  },
  readBlog: async () => {
    try {
      const data = await getDocs(blogsRef);
      const _data = data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }   
      });
      set((state) => ({
        blogs: { ...state.blogs, ...Object.fromEntries(_data.map((d) => [d.id, d])) },
      })); 
      console.log(get().blogs);
    } catch (error) {
      console.error(error);
    }
  },
  deleteBlog: async () => {},
  updateBlog: async () => {},
}));
