type props = {
    author: string,
    quote: string
}

export const Quote = ({ author, quote }: props) =>
    <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
