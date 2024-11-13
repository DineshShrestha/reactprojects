import React from "react";

export default function Card({ username = "Hitesh", post = "Engineer", myObj }) {
  return (
    <>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/17884003/pexels-photo-17884003/free-photo-of-a-woman-laying-in-the-grass-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-xl font-medium ">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams.""
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{username}</div>
            <div class="text-slate-700 dark:text-slate-500">
              {post}, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
