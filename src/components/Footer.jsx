const Footer = () => {
    return (
        <footer className="bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-2 py-10">
                    <h3 className="font-bold text-3xl">Gadget Heaven</h3>
                    <p className="font-medium text-[#09080F99] pb-5">Leading the way in cutting-edge technology and innovation.</p>
                    <hr />
                </div>
                <div>
                    <div>
                        <h6 className="font-bold text-lg">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <h6 className="font-bold text-lg">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <h6 className="font-bold text-lg">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;