import { createSignal, onMount } from "solid-js";

import Footer from "../../components/footer/footer";
import moment from "moment";
import useBlogPosts from "../../hooks/blogPosts";
import { useNavigate } from "@solidjs/router";

const News = () => {
  let navigate = useNavigate();

  let blogPosts = useBlogPosts();

  const [statusMessage, setStatusMessage] = createSignal("Loading news.");

  onMount(() => {
    setTimeout(() => {
      if (blogPosts.length === 0) setStatusMessage("There is no news here.");
    }, 3000);
  });

  return (
    <div class="flex flex-col items-center w-full h-full">
      <div class="flex flex-col w-full mb-auto md:w-4/5 lg:w-4/6 h-auto animate-fade-in duration-50 ease-in-out">
        <div class="flex w-full h-full flex-col space-y-5 pt-10 p-5">
          <div class="flex flex-col items-center w-full space-y-3">
            <div class="text-4xl font-semibold">News</div>
            <div class="w-16 h-1 bg-brownish"></div>
          </div>

          <div class="w-full grid gap-4 grid-cols-1 md:grid-cols-3">
            {blogPosts.length > 0 &&
              blogPosts.map((post) => (
                <div
                  class="w-full h-auto bg-white dark:bg-gray-900 rounded space-y-5 p-5 animate-fade-in duration-50 ease-in-out cursor-pointer group"
                  onClick={() => navigate("/news/" + post.id)}
                >
                  <div class="flex justify-center items-center">
                    {post.images ? (
                      <img src={post.images[0].url} class="rounded-t" />
                    ) : (
                      <div class="bg-gray-300 w-full h-40 rounded-t"></div>
                    )}
                  </div>

                  <div class="break-words space-y-5">
                    <div class="text-2xl text-brownish font-semibold">{post.title}</div>
                    <div class="text-md group-hover:text-brownish">
                      Last updated on{" "}
                      {moment(post.updated).format("MMMM DD, YYYY")} by{" "}
                      {post.author.displayName}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {blogPosts.length === 0 && (
            <div class="w-full text-center pb-5">{statusMessage()}</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
