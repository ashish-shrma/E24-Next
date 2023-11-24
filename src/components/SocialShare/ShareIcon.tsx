'use client'

import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  InstagramIcon,
} from "next-share";

interface ShareIconProps {
    id: string;
    slug: string;
    title: string;
}

const ShareIcon: React.FC<ShareIconProps> = ({ id, slug, title }) =>  (
    <>
      <div className="shareBox d-flex">
        <ul className="shareOptions">
          <FacebookShareButton
            url={`https://e24bollywood.com/${slug}`}
            quote={title}
          >
            <li className="px-2">
              <FacebookIcon size={24} round={true} />
            </li>
          </FacebookShareButton>
          <TwitterShareButton
            title={title}
            url={`https://e24bollywood.com/${slug}`}
          >
            <li className="px-2">
              <TwitterIcon size={24} round={true} />
            </li>
          </TwitterShareButton>
          <WhatsappShareButton
            title={title}
            url={`https://e24bollywood.com/${slug}`}
          >
            <li className="px-2">
              <WhatsappIcon size={24} round={true} />
            </li>
          </WhatsappShareButton>
          <TelegramShareButton
            title={title}
            url={`https://e24bollywood.com/${slug}`}
          >
            <li className="px-2">
              <TelegramIcon size={24} round={true} />
            </li>
          </TelegramShareButton>
        </ul>
      </div>
    </>
  );

export default ShareIcon;
