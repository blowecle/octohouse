import React from "react";
import BlogPost from "./BlogPost";
import '../../css/blog.css'

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'The Big Freeze',
            date: `February, 2021`,
            images: [`https://www.gannett-cdn.com/presto/2021/02/15/NAAS/d72bfce4-965a-4b0b-9efb-792a9ac49902-jwj_021521_Snow_00750.jpg?crop=2999%2C1687%2Cx0%2Cy166&width=1200`,],
            text: `Let's just say that I always knew that I was different. You see, I was supposed to be a boring black and white octopus, like all of the others - but I knew I was meant for more. So much more. Deep down within myself, I was ready to return to my origins of vibrancy and magic.  It wasn’t until after the freeze that I found my newly thawed courage to reveal my most extraordinary self - a remarkable and unforgettable sight to see.  My transformational journey begins…`,
        },
        {
            id: 2,
            title: 'The Big Thaw',
            date: `February, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1675801018/octo-house/-3015122360201427833_q6em8r.jpg`,],
            text: `When I awoke from the big freeze, this is where I found myself: in a giant aquarium in the bottom of the house. As you can see, I eventually turned it into a shower for my pet human.`,
        },
        {
            id: 3,
            title: 'Exploring my new home',
            date: `Summer, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142313/octo-house/CE1ACF15-5F5C-43F7-A335-7CAE95151B7B_lujujq.jpg`],
            text: `As my tentacles unthawed, I began to explore my new home. What I found was not very Octopus-like, so I began thinking about how to turn it into my very own home. And I don’t mean just a light touch; no, I mean a serious whole house makeover!`,
        },
        {
            id: 4,
            title: 'Planning Begins',
            date: `August, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142316/octo-house/E55E1B49-19E3-4377-BBE4-428344CB81DA_h39ise.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142316/octo-house/ADC4E2D1-7E78-4675-8A6A-C6AAAE97D19D_o7lg3q.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142316/octo-house/34CF1A10-8F50-4EB7-83BB-5F5D00A431D6_sgatdd.jpg`],
            text: `I was pretty darn hungry after the big freeze, so I started developing the stomach of my home, with the help of Michael and his team at Custom Tile of Austin. You can see us brainstorming which diet would be best for me. We decided to replace my bland, monochromatic diet with something much more appetizing. Here, you can see Michael and his crew feeding me with tiles of sparkling charm, a seasoning that everyone should try!`,
        },
        {
            id: 5,
            title: 'Living Room Development',
            date: `August, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142318/octo-house/90A234FE-981E-4E00-A122-7BCB1818E3CA_fctnix.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142318/octo-house/E2B425F9-86AB-4056-832B-2990C6A5F83B_ivuzfp.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142318/octo-house/AE018ACC-A814-4920-9596-D90846D1B6C2_ecrxvj.jpg`],
            text: `Now that I had my stomach fed, it was time to start working on my living space. Leo Mejilla helped me remove the dull oyster-like coloring (sorry oysters, but your coloring is nothing to brag about) and began transforming the room into an octopus friendly environment.`,
        },
        {
            id: 6,
            title: 'Living Room Continued',
            date: `September, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142324/octo-house/B42F0797-8F79-4CB5-8A29-239D008D6E4F_bpthgk.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142325/octo-house/AFEE5132-8407-417A-84FA-F23BEF3D776D_d0u80x.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142325/octo-house/43566438-45A4-4BF6-8C5A-3F1ADCD8BA5A_zqctir.jpg`,],
            text: `Now that I had a gorgeous living space I needed some amazing lighting to properly highlight it all. With help from Mike Cincungui (electrician) along with Donny, Hugo and Brandon (Haas Home Automation), we were able to  really highlight the beauty of my makeover.`,
        },
        {
            id:7,
            title: `Not Enough Books`,
            date: `September, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142313/octo-house/F875080F-FF7C-41F2-9C41-F667AFCE8449_ok0lr8.jpg`],
            text: `It was time to work on my brains - Oh, FYI, I bet you didn’t know that octopi have nine brains! This bookshelf was not nearly large enough for my brain, so lo and behold, it was time to expand it!`
        },
        {
            id: 8,
            title: `Building the Bookcase`,
            date: `September, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142319/octo-house/21B87FE6-EBBF-4CF3-BE6A-2A960FC13FB1_ajdsh4.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142322/octo-house/6B01D48A-C5AC-440A-B886-16BF9465D5BC_tyn8ba.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142322/octo-house/81102B7D-C135-42F7-8B0A-96F9426B9EA8_sjstl9.jpg`,
                `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142340/octo-house/75096837-E0E7-4FB9-A3BA-93C7CADA8371_lat3bu.jpg`],
            text: `Tada! Oh, and have you ever seen an Octopus play a guitar or ukulele? I’m just full of surprises!`
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