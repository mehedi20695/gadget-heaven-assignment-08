const Footer = () => {
    return (
        <footer className="bg-gray-100 max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto pb-10">
                <div className="text-center space-y-2 py-10">
                    <h3 className="font-bold text-3xl">Gadget Heaven</h3>
                    <p className="font-medium text-[#09080F99] pb-5">Leading the way in cutting-edge technology and innovation.</p>
                    <hr />
                </div>
                <div className="md:flex md:justify-center gap-40">
                    <div className="text-center space-y-2">
                        <h6 className="font-bold text-lg mb-3">Services</h6>
                        <p><a className="link link-hover text-[#09080F99]">Product Support</a></p>
                        <p><a className="link link-hover text-[#09080F99]">Order Tracking</a></p>
                        <p><a className="link link-hover text-[#09080F99]">Shipping $ Delivery</a></p>
                        <p><a className="link link-hover text-[#09080F99]">Returns</a></p>
                    </div>
                    <div className="text-center space-y-2">
                        <h6 className="font-bold text-lg mb-3">Company</h6>
                        <p><a className="link link-hover text-[#09080F99]">About us</a></p>
                        <p><a className="link link-hover text-[#09080F99]">Careers</a></p>
                        <p><a className="link link-hover text-[#09080F99]">Contact</a></p>
                    </div>
                    <div className="text-center space-y-2">
                        <h6 className="font-bold text-lg mb-3">Legal</h6>
                        <p><a className="link link-hover text-[#09080F99]">Terms Of Service</a></p>
                        <p><a className="link link-hover text-[#09080F99]">Privacy Policy</a></p>
                        <p><a className="link link-hover text-[#09080F99]">Cookie Policy</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;