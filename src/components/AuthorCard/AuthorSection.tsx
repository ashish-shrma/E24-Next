import twitter from "../../assets/social/twitter.png";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import Image from "next/image";

type AuthorData = {
  firstName: string;
  lastName: string;
  description: string;
  avatar?: {
    url: string;
  };
  seo?: {
    social?: {
      twitter?: string;
      facebook?: string;
      linkedIn?: string;
    };
  };
};

const AuthorSection: React.FC<{ authorData: AuthorData }> = ({
  authorData,
}) => {
  const { firstName, lastName, description, avatar, seo } = authorData;

  return (
    <div className="lg:px-0 px-4 rounded overflow-hidden shadow-l">
      <div className="flex items-center pt-2">
        <img
          src={avatar?.url || "/author-image.jpg"}
          alt={`${firstName} ${lastName}`}
          className="w-20 h-20 object-cover rounded-full mr-4"
        />
        <div className="text-sm">
          <h2 className="text-2xl font-bold mb-2">{`${firstName} ${lastName}`}</h2>
          <div className="flex space-x-4 mb-4">
            {seo?.social?.twitter && (
              <a href={seo.social.twitter}>
                <Image
                  className="w-6 cursor-pointer"
                  src={twitter}
                  alt="Twitter"
                />
              </a>
            )}
            {seo?.social?.facebook && (
              <a href={seo.social.facebook}>
                <Image
                  className="w-6 cursor-pointer"
                  src={facebook}
                  alt="Facebook"
                />
              </a>
            )}
            {seo?.social?.linkedIn && (
              <a href={seo.social.linkedIn}>
                <Image
                  className="w-6 cursor-pointer"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="text-gray-700 my-3">{description}</p>
    </div>
  );
};

export default AuthorSection;
