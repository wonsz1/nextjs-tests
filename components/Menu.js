import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

export default () => (
    <div>
        <Link href="/">
            <a title="This is Home page" style={linkStyle}>Home</a>
        </Link>
        <Link href="/type-script">
            <a style={linkStyle}>TypeScript</a>
        </Link>
        <Link href="/spacex">
            <a style={linkStyle}>SpaceX</a>
        </Link>
        <Link href="/game">
            <a style={linkStyle}>Game</a>
        </Link>
        <Link href="/react-tutorial">
          <a style={linkStyle}>React tutorial</a>
        </Link>
    </div>
);