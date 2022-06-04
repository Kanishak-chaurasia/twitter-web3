
import React,{ useState} from "react";
import Post from "../Post";
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};
const tweets = [
  {
    displayName: "John Doe",
    username: "johndoe",
    avatar:
      "https://images.unsplash.com/photo-1593642647963-b5f7c8f8f9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isProfileImageNft: false,
    timestamp: "2020-06-01T00:00:00.000Z",
  },
  {
    displayName: "John Doe",
    username: "johndoe",
    avatar:
      "https://images.unsplash.com/photo-1593642647963-b5f7c8f8f9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isProfileImageNft: false,
    timestamp: "2020-06-01T00:00:00.000Z",
  },
  {
    displayName: "John Doe",
    username: "johndoe",
    avatar:
      "https://images.unsplash.com/photo-1593642647963-b5f7c8f8f9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isProfileImageNft: false,
    timestamp: "2020-06-01T00:00:00.000Z",
  },
  {
    displayName: "John Doe",
    username: "johndoe",
    avatar:
      "https://images.unsplash.com/photo-1593642647963-b5f7c8f8f9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isProfileImageNft: false,
    timestamp: "2020-06-01T00:00:00.000Z",
  },
  {
    displayName: "John Doe",
    username: "johndoe",
    avatar:
      "https://images.unsplash.com/photo-1593642647963-b5f7c8f8f9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isProfileImageNft: false,
    timestamp: "2020-06-01T00:00:00.000Z",
  },
  {
    displayName: "John Doe",
    username: "johndoe",
    avatar:
      "https://images.unsplash.com/photo-1593642647963-b5f7c8f8f9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isProfileImageNft: false,
    timestamp: "2020-06-01T00:00:00.000Z",
  },
];
const ProfileTweet = () => {
  
//   const [tweets, setTweets] =useState<Tweets >
//     [
//       {
//         timestamp: "",
//         tweet: "",
//       },
//     ];
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
          <Post
            key={index}
            displayName={tweet.displayName}
            username={tweet.username}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
            
          />
        // <Post
        //   key={index}
        //   displayName={
        //     author.name === "Unnamed"
        //       ? `${author.walletAddress.slice(
        //           0,
        //           4
        //         )}...${author.walletAddress.slice(41)}`
        //       : author.name
        //   }
        //   userName={`${author.walletAddress.slice(
        //     0,
        //     4
        //   )}...${author.walletAddress.slice(41)}`}
        //   text={tweet.tweet}
        //   avatar={author.profileImage}
        //   timestamp={tweet.timestamp}
        //   isProfileImageNft={author.isProfileImageNft}
        // />
      ))}
    </div>
  );
};

export default ProfileTweet;
