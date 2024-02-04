import { marked } from "marked";
import DOMPurify from "dompurify";

const responseParser = (response: string) => {
  return DOMPurify.sanitize(marked.parse(response.split("</s>")[0]));
};

export default responseParser;
