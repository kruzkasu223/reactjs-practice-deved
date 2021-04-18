export default function Tweet({ name, tweet, tweets, setTweets }) {
    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    };

    return (
        <div className="tweet">
            <h3 className="tweet_title">{name}</h3>
            <h4 className="tweet_msg">{tweet.message}</h4>
            <button className="btn tweet_like">Like</button>
            <button className="btn tweet_delete" onClick={() => deleteTweet()}>
                Delete
            </button>
        </div>
    );
}
