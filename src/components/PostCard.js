import parseHtml from 'react-html-parser';

const PostCard = ({ title, content }) => {
  return (
    <section className="mt-10 m-5 p-5 border border-white rounded-2xl">
      <h2 data-testid="title" className="text-xl font-bold">{title}</h2>
      <div data-testid="content" className="mt-5">{parseHtml(content)}</div>
    </section>
  )
}

export default PostCard;
