
export const ReviewItem = ({ author, text }) => {
  return (
    <li>
      <h3>Author: {author}</h3>
      <p>{text}</p>
    </li>
  );
};