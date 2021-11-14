import LinkedinSvg from '../assets/images/linkedin-brands.svg'
import GithubSvg from '../assets/images/github-brands.svg';
import TwitterSvg from '../assets/images/twitter-brands.svg';

function App() {
  return (
    <section data-testid="intro" className="intro [ min-h-screen ] [ flex justify-center items-center flex-col ] ">
      <h1 className="name text-5xl">Nama Saya Budi</h1>
      <div className="tag-line text-2xl mt-5">
        Budi Pemain Bola
      </div>
      <div className="links flex mt-5">
        <a href="https://linkedin.com/in/budi" target="_blank" rel="noreferrer">
          <img className="w-10 h-10 m-3" src={LinkedinSvg} alt="linkedin" />
        </a>
        <a href="https://github.com/budi" target="_blank" rel="noreferrer">
          <img className="w-10 h-10 m-3" src={GithubSvg} alt="linkedin" />
        </a>
        <a href="https://twitter.com/budi" target="_blank" rel="noreferrer">
          <img className="w-10 h-10 m-3" src={TwitterSvg} alt="linkedin" />
        </a>
      </div>
    </section>
  );
}

export default App;
