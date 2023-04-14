function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="xiketic-background flex flex-centered almond">
            Santiago Lobo &copy; {year}
        </footer>
    )
}

export default Footer