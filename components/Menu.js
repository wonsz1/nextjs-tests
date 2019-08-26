import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

export default () => (
    <div>
        <Link href="/">
            <a title="This is Home page" style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/spacex">
            <a style={linkStyle}>SpaceX</a>
        </Link>
        <Link href="/test2">
            <a style={linkStyle}>Test2</a>
        </Link>
    </div>
);