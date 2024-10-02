
// import { cn } from "@/lib/utils";
// // import Marquee from "@/components/magicui/marquee";
// import Marquee from "./ui/marquee";

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({ img, name, username, body }) => {
//   return (
//     <figure
//       className={cn(
//         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles with white background
//         "bg-white border-gray-200 shadow-lg hover:bg-gray-100",
//         // dark styles if needed (keeping white bg)
//         "dark:border-gray-50/[.1] dark:bg-white dark:hover:bg-gray-100"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-black">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium text-gray-500">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm text-gray-700">{body}</blockquote>
//     </figure>
//   );
// };

// export default function MarqueeDemo() {
//   return (
//     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-transparent md:shadow-xl">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))} 
//       </Marquee>
//       <Marquee reverse pauseOnHover className="[--duration:20s]">
//         {secondRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))} 
//       </Marquee>
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-transparent"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent to-transparent"></div>
//     </div>
//   );
// }
import { cn } from "@/lib/utils";
// import Marquee from "@/components/magicui/marquee";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-96 h-36 cursor-pointer overflow-hidden rounded-xl border p-6", // Increased width (w-96) and decreased height (h-36)
        // light styles with white background
        "bg-white border-gray-200 shadow-lg hover:bg-gray-100",
        // dark styles if needed (keeping white bg)
        "dark:border-gray-50/[.1] dark:bg-white dark:hover:bg-gray-100"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full" width="48" height="48" alt="" src={img} /> {/* Keeping image size */}
        <div className="flex flex-col">
          <figcaption className="text-base font-medium dark:text-black"> {/* Adjusted text size */}
            {name}
          </figcaption>
          <p className="text-sm font-medium text-gray-500">{username}</p> {/* Adjusted text size */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700"> {/* Reduced margin-top for tighter fit */}
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-transparent md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent to-transparent"></div>
    </div>
  );
}

