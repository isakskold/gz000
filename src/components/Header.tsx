interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="fixed px-2 top-0 w-full h-16 sm:h-32 bg-black">
      {/* Header content */}
      <div className="flex mx-auto justify-between max-w-4xl">
        {/* Logo */}
        <div className="w-8 h-8 bg-white"></div>
        {/* Navbar */}
        <div className="flex text-white gap-1.5">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
        </div>
        {/* Socials */}
        <div className="flex text-white">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
