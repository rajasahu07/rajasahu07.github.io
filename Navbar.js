// Implement a React router that has three routes: home, about, and contact. When the user navigates to each route, display the corresponding page/component.

export default fuction Navbar() {
    return <nav className="nav">
    <a href='/'className="site-title">Site Name</a>
    <ul>
    <li>
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    </li>
    </ul>
    </nav>
}