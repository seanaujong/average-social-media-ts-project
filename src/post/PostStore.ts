import { create } from 'zustand';
import { Post, type PostId } from './Post';

type PostStore = {
  postMap: ReadonlyMap<PostId, Post>;
  put: (post: Post) => void;
  putAll: (posts: Post[]) => void;
  reset: () => void;
};

export const usePostStore = create<PostStore>((set, get) => {
  let _postMap = new Map<PostId, Post>();

  return {
    postMap: _postMap,

    put: (post) => {
      _postMap.set(post.id, post);
      set({ postMap: new Map(_postMap) });
    },

    putAll: (posts) => {
      posts.forEach((post) => {
        _postMap.set(post.id, post);
      });
      set({ postMap: new Map(_postMap) });
    },

    reset: () => {
      _postMap = new Map();
      set({ postMap: new Map(_postMap) });
    },
  };
});
