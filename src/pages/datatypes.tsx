import { useState } from "react";

type ProfileType = {
  name: string;
  lastName: string;
  age: number;
  gender: boolean;
  profilePhoto?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: number;
  hardCovers: boolean;
};

const DataTypes = () => {
  const defaultProfileValues: ProfileType = {
    name: "Mario",
    lastName: "Kramaric",
    age: 23,
    gender: true,
    profilePhoto: "https://source.unsplash.com/random/400×400/?portrait",
  };

  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>(["Marin", "Luka"]);
  const [homeNumber, setHomeNumber] = useState<number>(0);
  const [grades, setGrades] = useState<number[]>([
    5, 4, 2, 3, 4, 1, 2, 5, 3, 1, 2, 4, 2,
  ]);
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues);
  const [books, setBooks] = useState<BookType[]>([]);
  const [wc, setWc] = useState<boolean>(false);

  const addBook = () => {
    const newState: BookType[] = [
      { title: "Petar Pan", author: "No clue", pages: 123, hardCovers: true },
    ];
    setBooks(newState);
  };

  const excitedNames = names.map((name) => `${name}!`);
  const firstHighGrade = grades.find((grade) => grade > 3);
  const deleteLowGrades = () => {
    let newState: number[] = [];
    grades.forEach((grade) => {
      if (grade >= 3) {
        newState.push(grade);
      }
    });
    setGrades(newState);
  };
  const longBooks = books.filter((book) => book.pages > 100);
  const averageGrade =
    grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
  const indexOfFirstM = names.findIndex((name) => name.startsWith("M"));

  return (
    <>
      <div>
        <h1>String</h1>
        <div>{name ? name : "Name not found!"}</div>
        <button onClick={() => setName("Mario")}>Change Name</button>
        <hr />
        <h1>String Array</h1>
        <div>
          {excitedNames.length === 0
            ? "No Names found!"
            : excitedNames.map((name, index) => {
                return <div key={index}>{name}</div>;
              })}
        </div>
        <button
          onClick={() => {
            const newState = [...names, "Mario", "Ivan", "Gabriel"];
            setNames(newState);
          }}
        >
          Add Names
        </button>
        <hr />
        <h1>Number</h1>
        <div>{homeNumber > 0 ? homeNumber : "Home Number not found!"}</div>
        <button onClick={() => setHomeNumber(81)}>Change Home Number</button>
        <hr />
        <h1>Number Array</h1>
        <div>
          {grades.length === 0
            ? "No grades found"
            : grades.map((grade, index) => {
                return <div key={index}>{grade > 0 && grade < 6 && grade}</div>;
              })}
        </div>
        <button onClick={deleteLowGrades}>Delete 1 Grades</button>
        <hr />
        <h1>Object</h1>
        <div>
          {profile.profilePhoto ? (
            <img width={30} src={profile.profilePhoto} alt="" />
          ) : undefined}
          <p>
            {profile.name} {profile.lastName} , {profile.age}
          </p>
          <p> Gender: {profile.gender ? "♂️" : "♀️"}</p>
          <button
            onClick={() => {
              const newState: ProfileType = {
                ...profile,
                gender: !profile.gender,
              };
              setProfile(newState);
            }}
          >
            Change gender
          </button>
        </div>
        <hr />
        <h1>Object Array</h1>
        <div>
          {books.length === 0
            ? "No Books in Library"
            : books.map((book) => {
                return (
                  <>
                    <div key={book.title}>
                      {book.title}, {book.author}
                      <div>Pages: {book.pages}</div>
                      <div>Hard Covers: {book.hardCovers ? "Yes" : "No"}</div>
                    </div>
                  </>
                );
              })}
        </div>
        <button onClick={addBook}>Add Book</button>
        <hr />
        <h1>Boolean</h1>
        <div>
          <div>{wc ? "Public WC" : "Private WC"}</div>
        </div>
        <button onClick={() => setWc(!wc)}>Public/Private</button>
        <hr />
      </div>
      <div>
        <h2>Results of Applied Functions:</h2>
        <p>First high grade: {firstHighGrade || "None found"}</p>
        <p>Long books: {longBooks.length}</p>
        <p>Average grade: {averageGrade}</p>
        <p>Index of the first name starting with 'M': {indexOfFirstM}</p>
      </div>
    </>
  );
};

export default DataTypes;
