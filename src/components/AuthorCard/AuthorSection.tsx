import Link from 'next/link';
import React from 'react';

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
}

const AuthorSection: React.FC<{ authorData: AuthorData }> = ({ authorData }) => {
  const { firstName, lastName, description, avatar, seo } = authorData;

  console.log("authorDatandsvs", authorData.seo);
  

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <img src={avatar?.url || "/author-image.jpg"} alt={`${firstName} ${lastName}`} className="w-full h-40 object-cover" />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{`${firstName} ${lastName}`}</h2>

        <div className="flex space-x-4 mb-4">
          {seo?.social?.twitter && (
            <div className="text-blue-500 cursor-pointer hover:underline">
              {seo.social.twitter}
            </div>
          )}

          {seo?.social?.facebook && (
            <div className="text-blue-500 cursor-pointer hover:underline">
              {seo.social.facebook}
            </div>
          )}

          {seo?.social?.linkedIn && (
            <div className="text-blue-500 cursor-pointer hover:underline">
              {seo.social.linkedIn}
            </div>
          )}
        </div>

        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default AuthorSection;
