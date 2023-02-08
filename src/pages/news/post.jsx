import { useNavigate, useParams } from "@solidjs/router";

import Footer from "../../components/footer/footer";
import { createStore } from "solid-js/store";
import { onMount } from "solid-js";

const Post = () => {
  const navigate = useNavigate();
  const params = useParams();

  let url = `https://www.googleapis.com/blogger/v3/blogs/1435434888713979579/posts/${params.id}?key=AIzaSyBYYFsSeCGec4RCV6tqzZXuW4mBPASptgY&fetchImages=true&fetchBodies=true`;

  let [post, setPost] = createStore({}, { name: params.id + "-blog-post" });

  onMount(() => {
    fetch(url).then(async (response) => {
      setPost(await response.json());

      console.log(post);
    });
  });

  var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");

    return doc.body;
  };

  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto space-y-2 p-5">
        <div class="flex w-full items-center space-between">
          <div class="flex flex-col justify-center items-center p-3 rounded-full text-brownish cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out" onClick={() => navigate("/news")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
        </div>
        
        {post.content && (
          <div class="prose prose-green dark:prose-invert max-w-none m-0 prose-img:w-full prose-img:m-0 p-5 prose-a:text-lime-500 prose-headings:text-brownish bg-white rounded-lg animate-fade-in duration-50 ease-in-out">
            {stringToHTML(post.content)}
          </div>
        )}

        {!post.content && <div class="w-full text-center">Loading post.</div>}
      </div>

      <Footer />
    </div>
  );
};

export default Post;
