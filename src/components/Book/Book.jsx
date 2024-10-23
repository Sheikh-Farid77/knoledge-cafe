/* eslint-disable react/prop-types */

const Book = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="p-4 bg-gray-300 rounded-lg mb-3">
      <h2 className="text-xl font-semibold text-center">{title}</h2>
    </div>
  );
};

export default Book;
