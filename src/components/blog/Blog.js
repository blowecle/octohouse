import React from "react";
import BlogPost from "./BlogPost";
import '../../css/blog.css'

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'February, 2021, The Big Freeze',
            images: [`https://www.gannett-cdn.com/presto/2021/02/15/NAAS/d72bfce4-965a-4b0b-9efb-792a9ac49902-jwj_021521_Snow_00750.jpg?crop=2999%2C1687%2Cx0%2Cy166&width=1200`,
        ],
            text: `Let's just say that I always knew that I was different. You see, I was supposed to be a boring black and white octopus, like all of the others - but I knew I was meant for more. So much more. Deep down within myself, I was ready to return to my origins of vibrancy and magic.  It wasn’t until after the freeze that I found my newly thawed courage to reveal my most extraordinary self - a remarkable and unforgettable sight to see.  My transformational journey begins…`,
        },
        {
            id: 2,
            title: 'February, 2021, The Big Thaw',
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1675801018/octo-house/-3015122360201427833_q6em8r.jpg`,
        ],
            text: `When I awoke from the big freeze, this is where I found myself: in a giant aquarium in the bottom of the house. As you can see, I eventually turned it into a shower for my pet human.`,
        },
        {
            id: 3,
            title: 'Summer, 2021, Exploring my new home',
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142313/octo-house/CE1ACF15-5F5C-43F7-A335-7CAE95151B7B_lujujq.jpg`],
            text: `As my tentacles unthawed, I began to explore my new home. What I found was not very Octopus like, so I began thinking about how to turn it into my very own home. And I don’t mean just a light touch; no, I mean a serious whole house makeover!`,
        },
        {
            id: 4,
            title: 'August, 2021, Planning Begins',
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142316/octo-house/E55E1B49-19E3-4377-BBE4-428344CB81DA_h39ise.jpg`,
                    `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142316/octo-house/ADC4E2D1-7E78-4675-8A6A-C6AAAE97D19D_o7lg3q.jpg`,
                    `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142316/octo-house/34CF1A10-8F50-4EB7-83BB-5F5D00A431D6_sgatdd.jpg`],
                    text: `I was pretty darn hungry after the big freeze, so I started developing the stomach of my home, with the help of Michael and his team at Custom Tile of Austin. You can see us brainstorming which diet would be best for me. We decided to replace my bland, monochromatic diet with something much more appetizing. `,
        }
    ]
    return (
        <div className="blog-wrapper">
            {posts.map((post) => (
                <BlogPost post={post}/>
            ))}
        </div>
    )
}

export default Blog;