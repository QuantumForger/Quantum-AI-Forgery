
import Image from 'next/image';

const AboutPage = () => (
    <div>
        <h1>About Us</h1>
        {/* Placeholder images replaced with correct paths */}
        <Image src="/public/images/about-us-before.png" alt="Before AI Integration" width={300} height={200} />
        <Image src="/public/images/about-us-after.png" alt="After AI Integration" width={300} height={200} />
    </div>
);

export default AboutPage;
