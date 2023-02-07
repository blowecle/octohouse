import React from "react";
import '../../css/post.css'

const BlogPost = ({post}) => {
    return (
        <div className='post-wrapper'>
            <div className='post-title-wrapper'>
                <div className='post-title'>{`${post.title}`}</div>
            </div>
            <div className='post-image-wrapper'>
                    {post.images.map((image) => (
                        <div className='inner-wrapper'>
                            <img src={image} alt='blogImage' className='post-image'/>
                        </div>
                    ))}
            </div>
            <div className='post-content-wrapper'>
                <div className='post-content'>
                    {`${post.text}`}
                </div>
            </div>
        </div>
    )
}

export default BlogPost