import Menu from './Menu';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
};

export default props => (
    <div style={layoutStyle}>
        <Menu />
        {props.children}
    </div>
);

//or:
// const Layout = props => (
//     <div style={layoutStyle}>
//       <Header />
//       {props.children}
//     </div>
//   );
// export default Layout;