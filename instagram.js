const users = [
  {
    id: 1,
    username: "user1",
    fullName: "User One",
    profilePicture: "path/to/profile/pic1.jpg",
    bio: "This is user one bio",
    followers: 150,
    following: 100,
    postIds: [101, 102],
  },
  {
    id: 2,
    username: "user2",
    fullName: "User Two",
    profilePicture: "path/to/profile/pic2.jpg",
    bio: "This is user two bio",
    followers: 200,
    following: 150,
    postIds: [103, 104],
  },
  {
    id: 3,
    username: "user3",
    fullName: "User Three",
    profilePicture: "path/to/profile/pic3.jpg",
    bio: "This is user three bio",
    followers: 300,
    following: 250,
    postIds: [105, 106],
  },
  {
    id: 4,
    username: "user4",
    fullName: "User Four",
    profilePicture: "path/to/profile/pic4.jpg",
    bio: "This is user four bio",
    followers: 400,
    following: 350,
    postIds: [107, 118],
  },
  {
    id: 5,
    username: "user5",
    fullName: "User Five",
    profilePicture: "path/to/profile/pic5.jpg",
    bio: "This is user five bio",
    followers: 500,
    following: 450,
    postIds: [109, 110],
  },
];

// Posts
const posts = [
  {
    id: 101,
    userId: 1,
    title: "Post 1 by user1",
    content: "Content of post 1 by user1",
    timestamp: "2024-07-01T12:34:56Z",
  },
  {
    id: 102,
    userId: 1,
    title: "Post 2 by user1",
    content: "Content of post 2 by user1",
    timestamp: "2024-07-02T12:34:56Z",
  },
  {
    id: 103,
    userId: 2,
    title: "Post 1 by user2",
    content: "Content of post 1 by user2",
    timestamp: "2024-07-01T13:34:56Z",
  },
  {
    id: 104,
    userId: 2,
    title: "Post 2 by user2",
    content: "Content of post 2 by user2",
    timestamp: "2024-07-02T13:34:56Z",
  },
  {
    id: 105,
    userId: 3,
    title: "Post 1 by user3",
    content: "Content of post 1 by user3",
    timestamp: "2024-07-01T14:34:56Z",
  },
  {
    id: 106,
    userId: 3,
    title: "Post 2 by user3",
    content: "Content of post 2 by user3",
    timestamp: "2024-07-02T14:34:56Z",
  },
  {
    id: 107,
    userId: 4,
    title: "Post 1 by user4",
    content: "Content of post 1 by user4",
    timestamp: "2024-07-01T15:34:56Z",
  },
  {
    id: 108,
    userId: 4,
    title: "Post 2 by user4",
    content: "Content of post 2 by user4",
    timestamp: "2024-07-02T15:34:56Z",
  },
  {
    id: 109,
    userId: 5,
    title: "Post 1 by user5",
    content: "Content of post 1 by user5",
    timestamp: "2024-07-01T16:34:56Z",
  },
  {
    id: 110,
    userId: 5,
    title: "Post 2 by user5",
    content: "Content of post 2 by user5",
    timestamp: "2024-07-02T16:34:56Z",
  },
];

// Comments
const comments = [
  {
    id: 201,
    postId: 101,
    userId: 2,
    username: "user2",
    comment: "Great post!",
    timestamp: "2024-07-03T12:34:56Z",
  },
  {
    id: 202,
    postId: 101,
    userId: 3,
    username: "user3",
    comment: "Interesting read!",
    timestamp: "2024-07-03T13:34:56Z",
  },
  {
    id: 203,
    postId: 102,
    userId: 4,
    username: "user4",
    comment: "Nice work!",
    timestamp: "2024-07-04T12:34:56Z",
  },

  {
    id: 204,
    postId: 103,
    userId: 1,
    username: "user1",
    comment: "Well done!",
    timestamp: "2024-07-03T14:34:56Z",
  },
  {
    id: 205,
    postId: 103,
    userId: 5,
    username: "user5",
    comment: "Enjoyed this!",
    timestamp: "2024-07-03T15:34:56Z",
  },
  {
    id: 206,
    postId: 104,
    userId: 3,
    username: "user3",
    comment: "Very insightful!",
    timestamp: "2024-07-04T13:34:56Z",
  },

  {
    id: 207,
    postId: 105,
    userId: 1,
    username: "user1",
    comment: "Loved it!",
    timestamp: "2024-07-03T16:34:56Z",
  },
  {
    id: 208,
    postId: 105,
    userId: 4,
    username: "user4",
    comment: "Great insights!",
    timestamp: "2024-07-03T17:34:56Z",
  },
  {
    id: 209,
    postId: 106,
    userId: 2,
    username: "user2",
    comment: "Very informative!",
    timestamp: "2024-07-04T14:34:56Z",
  },

  {
    id: 210,
    postId: 107,
    userId: 5,
    username: "user5",
    comment: "Awesome post!",
    timestamp: "2024-07-03T18:34:56Z",
  },
  {
    id: 211,
    postId: 108,
    userId: 1,
    username: "user1",
    comment: "Really good!",
    timestamp: "2024-07-04T15:34:56Z",
  },
  {
    id: 212,
    postId: 108,
    userId: 3,
    username: "user3",
    comment: "Well articulated!",
    timestamp: "2024-07-04T16:34:56Z",
  },

  {
    id: 213,
    postId: 109,
    userId: 4,
    username: "user4",
    comment: "Excellent!",
    timestamp: "2024-07-03T19:34:56Z",
  },
  {
    id: 214,
    postId: 110,
    userId: 2,
    username: "user2",
    comment: "Really enjoyed this!",
    timestamp: "2024-07-04T17:34:56Z",
  },
];

const instagramData = {users, posts, comments};
