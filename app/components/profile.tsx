import React from 'react';
import Image from 'next/image';

interface ProfileProps {
    staff: {
        sha256?: string;
        img?: string;
        name: string;
    };
}

export default function Profile({ staff }: ProfileProps) {
    return (
        <div className="text-center">
            <Image
                src={
                    staff.sha256
                        ? `https://www.gravatar.com/avatar/${staff.sha256}?s=256`
                        : staff.img || '/assets/twnog.png'
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