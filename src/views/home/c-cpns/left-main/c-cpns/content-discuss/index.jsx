import React from 'react'
import { DiscussWrapper } from './styled'

const ContentDiscuss = (props) => {

  const { coverLink,imgSrc,avatarLink,avatarSrc,titleLink,title,time,content,contentLink,tags } = props

  return (
    <DiscussWrapper>
        {imgSrc && <a className="img-link" href={coverLink}>
          <img src={imgSrc} alt="" />
        </a>}
        <div className="content">
          <div className="discuss-header">
            <div className="header-main">
            <a href={avatarLink}>
              <picture>
                <img src={avatarSrc} alt="" className="avatar" />
              </picture>
            </a>
              <span className="title-action">参与了</span>
              <a className="title-link " href={titleLink}>{title}</a>
            </div>
            <div className="header-time">
              {time}
            </div>
          </div>
          <a href={contentLink}>
            <div className="discuss-content">
              {content}
            </div>
          </a>
          
          <div className="discuss-tags">
            <div className="discuss-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                <path fillRule="evenodd" d="M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z" clipRule="evenodd"></path>
              </svg>
            讨论
            </div>
            {tags.map((item,index)=> {
              return <a className="text-tag" key={index} >{item}</a>
            })}
            
          </div>
        </div>
    </DiscussWrapper>
  )
}

export default ContentDiscuss