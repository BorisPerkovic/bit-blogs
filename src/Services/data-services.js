import { POSTS, USERS, AUTHORS_POSTS, SINGLE_USER } from "../Shared/endpoints";

export class BlogsCommunicator {
  static async fetchAllUsers() {
    const response = await fetch(USERS);
    const allUsers = await response.json();
    return allUsers;
  }

  static async fetchSingleUser(id) {
    const response = await fetch(SINGLE_USER + id);
    const singleUser = await response.json();
    return singleUser;
  }

  static async fetchAllPosts() {
    const response = await fetch(POSTS);
    const allPosts = await response.json();
    return allPosts;
  }

  static async fetchSinglePost(id) {
    const response = await fetch(`${POSTS}/${id}`);
    const singlePost = await response.json();
    return singlePost;
  }

  static async fetchAuthorsPosts(id) {
    const response = await fetch(AUTHORS_POSTS + id);
    const authorsPosts = await response.json();
    return authorsPosts;
  }
}
