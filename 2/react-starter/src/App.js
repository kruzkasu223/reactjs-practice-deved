import { useState, useEffect } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

export default function App() {
    const [name, setName] = useState("KruZ");
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        console.log("Yeyyy!!! I just Tweeted...");
    }, [tweets]);

    return (
        <div className="container">
            <h1 className="heading">Tweeterrino</h1>
            <CreateTweet
                textInput={textInput}
                setTextInput={setTextInput}
                tweets={tweets}
                setTweets={setTweets}
            />
            <TweetList
                name={name}
                setName={setName}
                tweets={tweets}
                setTweets={setTweets}
            />
        </div>
    );
}
