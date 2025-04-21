/**
 * Represents an average social media post and the info needed
 * to render it for a particular user.
 *
 * Some state like isSaved and isLiked depends
 * on the user that is viewing the post.
 */
export class Post {
  constructor(
    public id: PostId,
    public title: string,
    public content: string,
    public authorId: UserId,
    public createdAt: Date,
    public isSaved: boolean = false,
    public isLiked: boolean = false
  ) {}
}

export type PostId = string;
export type UserId = string;
