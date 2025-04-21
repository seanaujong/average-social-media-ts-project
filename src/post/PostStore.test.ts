import { usePostStore } from "./PostStore";
import { Post } from "./Post";

describe("PostStore", () => {
    beforeEach(() => {
        usePostStore.getState().reset();
    });

    it("should add a single post with put", () => {
        const post = new Post("1", "Title", "Content", "AuthorId", new Date());
        usePostStore.getState().put(post);

        const postMap = usePostStore.getState().postMap;
        expect(postMap.size).toBe(1);
        expect(postMap.get("1")).toEqual(post);
    });

    it("should add multiple posts with putAll", () => {
        const post1 = new Post("1", "Title1", "Content1", "AuthorId1", new Date());
        const post2 = new Post("2", "Title2", "Content2", "AuthorId2", new Date());
        usePostStore.getState().putAll([post1, post2]);

        const postMap = usePostStore.getState().postMap;
        expect(postMap.size).toBe(2);
        expect(postMap.get("1")).toEqual(post1);
        expect(postMap.get("2")).toEqual(post2);
    });
})