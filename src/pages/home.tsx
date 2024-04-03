type LinkType = {
  href: string;
  label: string;
};

type KarticaType = {
  naslov: string;
  tekst: string;
};

type PerosnalDataType = {
  image: string;
  id: string;
  bio: string;
  links: LinkType[];
};

const karticadata: KarticaType[] = [
  {
    naslov: "Frontend Developer",
    tekst:
      "Volim Frontend i također Web Design, prijatelj mi je UI / UX developer te sam se ugledao na njega za dosta svojih dizajnova, volim pastelaste boje i sve što je trenutno u trendu",
  },
  {
    naslov: "Fotograf",
    tekst:
      "Kada uzmem svoj DSLR fotoaparat i idem fotkati nema mi lijepšeg, već dugo se bavim fotografiranjem, i također editom fotografija, neopisivo volim fotkati zgrade, prirodu i aute",
  },
  {
    naslov: "Unity 3D Developer",
    tekst:
      "Trenutno na pauzi od C# jer sam posvetio vrijeme Algebrinom Frontend Developer tečaju, programiranje i playtestanje u Unity-u sam počeo 2020. godine kao šalu da ću napraviti sebi i prijateljima Multiplayer Kart Racing igru",
  },
  {
    naslov: "Game Tester",
    tekst:
      "U suradnji sa Ubisoft kompanijeom sam play testao njihove video igrice, napisao sam im review za igricu XDefiant i sa jednim indie developerima igricu Off The Grid ",
  },
];

const linksdata: LinkType[] = [
  {
    href: "https://github.com/KramaDev",
    label: "GitHub",
  },
  {
    href: "https://hr.linkedin.com/in/mario-kramarich",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/@mario_kramaric/",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/c/brazingahd",
    label: "Youtube",
  },
];

const profiledata: PerosnalDataType = {
  image:
    "https://media.licdn.com/dms/image/D4D03AQF18y1YsyIbxA/profile-displayphoto-shrink_200_200/0/1669145631958?e=2147483647&v=beta&t=y-sSiWY6VSdM1WxtJOmO1iZ6nl9u1uZfVrq1VGzxrjI",
  id: "@mario_kramaric",
  bio: "Onaj lik iz Osijeka",
  links: [
    {
      href: "https://github.com/KramaDev",
      label: "GitHub",
    },
    {
      href: "https://hr.linkedin.com/in/mario-kramarich",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/@mario_kramaric/",
      label: "Instagram",
    },
  ],
};

const Home = () => {
  return (
    <>
      <div className="article">
        <div className="user">
          <div className="user__info">
            <img className="user__image" src={profiledata.image} alt="" />
            <h2 className="user__id">{profiledata.id}</h2>
            <p className="user__bio">{profiledata.bio}</p>
          </div>
          <div className="user__links">
            {linksdata.map((link) => {
              return (
                <>
                  <a
                    target="_blank"
                    key={link.href}
                    className="link"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </>
              );
            })}
          </div>
          <div className="user__action"></div>
        </div>
        <div className="article__wrapper">
          {karticadata.map((item, index) => {
            return (
              <>
                <div className="kartica">
                  <h2 key={index} className="kartica__naslov">
                    {item.naslov}
                  </h2>
                  <hr />
                  <p className="kartica__tekst">{item.tekst}</p>
                  <button className="kartica__btn">MORE</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
