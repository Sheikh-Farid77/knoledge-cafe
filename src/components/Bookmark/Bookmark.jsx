/* eslint-disable react/prop-types */

import Book from "../Book/Book"


const Bookmark = ({bookmarks, readingTime}) => {
 return (
    <div className="p-5">
      <h3 className="mt-5 text-purple-600 text-2xl text-center font-semibold mb-5">Spent Time On Read: {readingTime}</h3>
        <h3 className="text-center text-2xl font-semibold mt-2 mb-4">BookMarked Blogs: {bookmarks.length}</h3>
        {
          bookmarks.map((bookmark, index) => <Book bookmark={bookmark} key={index}></Book>)
        }
    </div>
  )
}

export default Bookmark