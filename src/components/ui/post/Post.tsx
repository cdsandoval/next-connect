import React from "react";

interface IPost {
  avatar?: string;
  name?: string;
}

const Post: React.FC<IPost> = ({ avatar = "avatar", name = "Carlos" }) => {
  return (
    <div className="w-2/4 rounded overflow-hidden shadow-lg">
      <div className="bg-teal-500 h-12">
        <div></div>
      </div>
      <div>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          placeholder="jane@example.com"
        />
      </div>
      <div className="bg-teal-500 h-12">
        <button>Post</button>
      </div>
    </div>
  );
};

export default Post;
