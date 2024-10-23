import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time);

    const removeBookmark = bookmarks.filter((bookmark) => bookmark.id != id);
    setBookmarks(removeBookmark);
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-3 grid gap-3 md:grid-cols-3">
        <div className="col-span-2 border-2">
          <Blogs
            handleReadingTime={handleReadingTime}
            handleBookmark={handleBookmark}
          ></Blogs>
        </div>
        <div className="border-2 col-span-2 md:col-span-1">
          <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </>
  );
}

export default App;
