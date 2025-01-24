import React from 'react';
import Image from 'next/image';

interface ProfileProps {
    staff: {
        md5?: string;
        img: string;
        name: string;
    };
}

const Profile: React.FC<ProfileProps> = ({ staff }) => {
    return (
        <div className="text-center">
            <Image
                src={
                    staff.md5
                        ? `https://www.gravatar.com/avatar/${staff.md5}?s=256`
                        : staff.img
                }
                alt={staff.name}
                width={256}
                height={256}
                className="h-24 w-24 object-cover rounded-full mx-auto border border-gray-300"
            />
            <p className="mt-2 text-sm font-medium">{staff.name}</p>
        </div>
    );
};

export default Profile;