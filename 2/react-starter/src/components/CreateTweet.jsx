import { v4 as uuidv4 } from "uuid";

export default function CreateTweet({
    textInput,
    setTextInput,
    tweets,
    setTweets,
}) {
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, { message: textInput, id: uuidv4() }]);
        setTextInput("");
    };

    return (
        <form className="create_tweet" onSubmit={submitTweetHandler}>
            <input
                className="tweet_input"
                type="text"
                value={textInput}
                onChange={userInputHandler}
            />
            <br />
            <button className="btn create_btn" type="submit">
                Tweet
            </button>
            <h2 className="tweet_preview">{textInput}</h2>
        </form>
    );
}
