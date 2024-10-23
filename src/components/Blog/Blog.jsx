/* eslint-disable react/prop-types */
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
  const {
    title,
    cover,
    author_img,
    reading_time,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="p-4">
      <img className="rounded-lg w-full" src={cover} alt="" />
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-5">
          <img className="w-16 h-16" src={author_img} alt="" />
          <div>
            <h3 className="text-xl font-semibold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>
            {reading_time} min read{" "}
            <button onClick={() => handleBookmark(blog)} className="ml-2">
              <CiBookmark />
            </button>
          </p>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-4">{title}</h2>
      <p className="mt-3">
        {hashtags.map((hash, index) => (
          <span className="mr-2" key={index}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-600 underline font-bold mt-3"
        onClick={() => handleReadingTime(reading_time, blog.id)}
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
