import React from "react";
import BlogPost from "./BlogPost";
import '../../css/blog.css'

const Blog = () => {
    window.scrollTo(0,0);
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
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1675801018/octo-house/-3015122360201427833_q6em8r.jpg`],
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
        },
        {
            id: 9,
            title: `Beginning my Makeover`,
            date: `September, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142313/octo-house/CE1ACF15-5F5C-43F7-A335-7CAE95151B7B_lujujq.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142314/octo-house/C8C2FABA-23A2-4392-B077-FF6C0AA26A4F_oy6aeo.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142323/octo-house/E309703B-D083-4349-A2A7-AC1B36BCE09D_vlqrtj.jpg`],
            text: `It was time to finally start working on my face - the most important part after all! Since COVID was starting to dwindle down, I figured it was safe enough to finally remove my mask!`,
        },
        {
            id: 10,
            title: `Green Tech`,
            date: `October, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142323/octo-house/658E0145-066F-41E4-87EF-F3AE6AEB701A_k7w19i.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142325/octo-house/3AF6A0F2-C351-46A5-8268-0E1EF1F3C777_uihgek.jpg`],
            text: `I know octopi usually live in water, but I am a rare type of breed living on land (hopefully you’ve figured that out by now). I am a big octopus, taking up alot of room on this land. I wanted to make sure I was being environmentally friendly, so I got solar panels installed on top of my head.`,
        },
        {
            id: 11,
            title: `Makeover (continued)`,
            date: `December, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142327/octo-house/9CD8F392-D4F2-417B-9B49-CB3807DC0BF8_afef7c.jpg`],
            text: `Now that my mask was finally off, I was ready to put on my makeup! Here I am starting with the foundation.`,
        },
        {
            id: 12,
            title: `Makeover (continued)`,
            date: `December, 2021`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142328/octo-house/1E61BA9F-FB5A-4C38-BDBB-E77AEEB1A3A9_ld4phg.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142328/octo-house/35D98179-A2D3-4863-80E9-681174267EDF_q5tvv0.jpg`,],
            text: `Next, it was time to dazzle my face and outside of my body  with no other colors than my natural habitat.`,
        },
        {
            id: 13,
            title: `Makeover Complete!`,
            date: `January, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142329/octo-house/85842FCF-CA04-4B27-AB2F-CB694486A4DE_y2tfwp.jpg`],
            text: `And here you can see the finished product of my brand new face and body. I also thought it would be nice to invite some of my fellow sea friends so that I could feel more at home!`,
        },
        {
            id: 14,
            title: `Chillin' in the Lounge`,
            date: `January, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142330/octo-house/B3715B55-C4E0-41F9-9D7A-127FBAAC0D2F_xwiwi9.jpg`],
            text: `And a little dazzling jewelry for my fancy new self. `,
        },
        {
            id: 15,
            title: `Another Snow Day`,
            date: `February, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142331/octo-house/ADF39F97-1575-4FE3-9CC3-238350C7DEA5_eiayxh.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142331/octo-house/80DC2833-1F31-4879-B8E7-941946000E69_bzobfb.jpg`],
            text: `Another cold and snowy day wasn’t going to bring me down to my old dull and boring self ‘cuz now I’m prepared! Not only do I have solar to soak in the sun’s gorgeous rays, but I also have battery and natural gas backups should the Snowpocalypse return.`,
        },
        {
            id: 16,
            title: `My New Roomie`,
            date: `February, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142326/octo-house/A513FC14-44EE-4F46-9BCE-C0392E979A0B_xwlffr.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142327/octo-house/1A6829CF-F9EB-4BB8-9C7B-579580C5F7E1_j702iu.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142332/octo-house/47153EFA-9104-4DD3-BC70-C5401DEAB1D2_r9da7t.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142332/octo-house/C36EA4D1-604F-491E-BD44-7C82576DC06E_hvfbon.jpg`],
            text: `Word got out to my sea friends about my whole new makeover. I decided it was a good time to invite my shiny and colorful seahorse friend to be my new roommate! He gladly accepted.`
        },
        {
            id: 17,
            title: `Bringing the Water to me`,
            date: `February, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142333/octo-house/08D38965-8585-4630-B464-D6F32A8BC955_nvfamo.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142336/octo-house/FC6A7F4A-1FC9-4792-8815-95979BA67063_imseip.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142340/octo-house/0E0F2030-0D43-4288-A0E1-C994C1B2B0A5_viagfn.jpg`,],
            text: `Because I’m an octopus on land, I have to surround myself with familiar water, ‘cuz otherwise I’ll dry up and blow away. So my seahorse friend thought it would be a good idea to bring a little bit of my homeland to my new home in-land.`
        },
        {
            id: 18,
            title: `Light it up!`,
            date: `March, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142334/octo-house/22394300-04C6-4B2A-B082-BAE08C000D99_kflj2w.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142336/octo-house/07F3897D-CEE6-4129-9A52-05475CC8C4CD_jtuszz.jpg`],
            text: `“After a storm passes, we see them as symbols of better things and they often lift our spirits high. Seeing the rainbow is always a wonderful thing.” I always want to see the rainbow.`
        },
        {
            id: 19,
            title: `Sacred Space`,
            date: `March, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142335/octo-house/12F5BC87-803A-4C91-A5D3-8A7B40155FA4_yj51mz.jpg`],
            text: `We all need a sacred space within ourselves - even an octopus!`,
        },
        {
            id: 20,
            title: `Hot Tub Time Machine`,
            date: `March, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142335/octo-house/5122CB7E-0DD1-407F-A68A-1461EB235E50_hnv493.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142333/octo-house/B0F81EBA-3DFB-495D-A55F-8F03AFDCE347_fjcwyg.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142334/octo-house/523628E5-93CD-4113-9E94-208D8C1CEF62_x0oxgh.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142337/octo-house/29B67A43-DB59-4FB2-A8B1-2B8D72D0930A_kfziz2.jpg`],
            text: `I decided with my new physical makeover, I needed something to support my physical and emotional well-being with another part of my homeland - just a little warmer, like a hot tub as my human pet calls it. While my pet human enjoys the warmth in the winter I need to cool off in the summer, so it does that too, magically somehow.`
        },
        {
            id: 21,
            title: `Stained Glass Masterpiece`,
            date: `July, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142338/octo-house/154CE670-EB5B-444A-8FC0-527CE1CF6DA4_zkrc1t.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142338/octo-house/DDA90420-94C8-40A8-AFBE-648A5EE8CFC8_qi0vyj.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142339/octo-house/BF100093-EE67-4510-B10A-B8F1815BB434_onj3gu.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142339/octo-house/01600321-8A96-4DCC-8B0D-763B085ED4AF_hnwrb5.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142339/octo-house/BF100093-EE67-4510-B10A-B8F1815BB434_onj3gu.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142342/octo-house/B4E395FE-2C74-411C-9985-7EA02541718A_kd8uor.jpg`],
            text: `I realized as some point that my pet human wouldn’t be able to see out through my enormous tentacles, so I made some of them translucent. So now he can see out and I’m sparkly now too!`,
        },
        {
            id: 22,
            title: `Diggin' in the Dirt`,
            date: `August, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142340/octo-house/E59E668F-6B3B-4215-9028-A6596C7BBBC7_z40va5.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142340/octo-house/DC77AFE1-3051-42DA-B4FF-4CACF5CF1E17_hg8o2m.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142340/octo-house/27D4D96E-49EB-4341-A1EE-981CCD7747B4_utzelj.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142341/octo-house/2A9334E0-784C-4301-B53A-ECB6830CD052_dtr19q.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142343/octo-house/6BBD1975-278E-4D63-8EE7-85998EEA6C2A_kdq0yy.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142344/octo-house/B5308670-349B-47C1-A61F-8E2111B27B99_fn9zlp.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142345/octo-house/AA107743-570E-4C10-8C38-82289641CE4C_xbi7or.jpg`],
            text: `Now that my face and body were on a roll, it was time to work on my mantle. If you didn’t know- the mantle is located behind the head on the body of an octopus, a space of strong muscles that protect the organs and aid in respiration and contraction.
                \n
            As I was building my home I became aware of a great drought in my area, which caused me great concern, given my water ways. So now I gather all of the rainfall in a giant tank underground, so that I never go dry.
            `
        },
        {
            id: 23,
            title: 'Steel House',
            date: `October, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142347/octo-house/577C5996-2B14-40BC-AAA6-C8BD0E5CB3AE_iotqop.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142347/octo-house/0CBD56BF-5485-45CF-85BA-A1C3BB036939_fi4wnj.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142348/octo-house/8557C0CB-D6DB-487D-BEA4-7A6B9D866D30_uyipeq.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142348/octo-house/C4056B1A-1091-47F6-8F7B-4AB50E484929_mi1zup.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142349/octo-house/AC7975D2-817F-4F95-A56C-E04373588F98_sa0eb0.jpg`],
            text: `What a better way to get to my mantle than a spiraling staircase - something to represent my journey from being the under-topus to the top-topus.`
        },
        {
            id: 24,
            title: `An Octopus' Garden`,
            date: `October, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142350/octo-house/3DBF7337-0C7B-4AB7-9419-45E874E30C74_pohxjb.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142354/octo-house/A2029CD9-9CCB-4B15-A527-7D3CCA79D271_pqmc7i.jpg`],
            text: `Now that I had a beautiful home I needed to surround it in green. Just admiring all of my added green land glory and my new land creature friend! `,
        },
        {
            id: 25,
            title: `A New Friend`,
            date: `Halloween, 2022`,
            images:[`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142350/octo-house/2631E1AC-AE0B-438F-936B-6504C15F5D36_nbnill.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674145468/octo-house/8e8af56b-948e-4e0b-a29d-76ff1686e250_yqkxo2.heic`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142353/octo-house/ACC9744B-0023-4A03-A034-9D523B2FEC10_oofomv.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1675990360/octo-house/PXL_20221031_235238056_cdv14u.jpg`],
            text: `Although I may be living on land, I really wanted to make sure that I kept my roots of the ocean alive - and of course there was no better way to do that than to invite my beautiful mermaid friend to help keep that alive - if you didn’t know, some say mermaids can signify the life and fertility of the ocean.  Sometimes, when no human is looking, she comes and plays with me!`
        },
        {
            id: 26,
            title: `A Beachside Feeling`,
            date: `November, 2022`,
            images: [`https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142353/octo-house/A74A89B1-B6F7-462D-B5F2-40BECFE64A01_og6tax.jpg`,
            `https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142354/octo-house/6A95670E-B19F-4AD4-A184-573830E72413_lc2ijx.jpg`],
            text: `Adding in a more lavish looking mouth to match my beautiful new face.`,
        },
    ]

    return (
        <div className="blog-wrapper">
            <div className='filler'/>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Blog;