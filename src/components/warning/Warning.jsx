import "./warning.css";

export default function Warning({ message }) {
  return (
    <div className="warning">
      <h1>text formatting</h1>
      <p>
        This text is styled with some of the text formatting properties. The
        heading uses the text-align, text-transform, and color properties.
        <a target="_blank" href="tryit.asp?filename=trycss_text">
          "Jakaza"
        </a>{" "}
        link.
      </p>
    </div>
  );
}
