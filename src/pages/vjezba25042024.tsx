type objektType = {
  minNum: number;
  maxNum: number;
};

let objekt: objektType = {
  minNum: 0,
  maxNum: 0,
};

const nizBrojeva = [95, 79, 80, 5, 83, 28, 29, 21, 94, 13];
let cntMax = nizBrojeva[0];
let cntMin = nizBrojeva[0];

const funkcija1 = (niz: number[]) => {
  return (
    <>
      {niz.forEach((broj) => {
        if (cntMax < broj) {
          cntMax = broj;
        } else if (cntMax > broj && cntMin > broj) {
          cntMin = broj;
        }
        objekt.maxNum = cntMax;
        objekt.minNum = cntMin;
      })}

      <h1>{objekt.maxNum} je najveci broj!</h1>
      <h1>{objekt.minNum} je najmanji broj!</h1>

      {console.log(objekt)}
    </>
  );
};

const funkcija2 = (count: number) => {
  let numbersArray: number[] = [];

  {
    if (count < 0) {
      return <div> Broj ne može biti negativan. </div>;
    }

    for (let i = 0; i <= count; i++) {
      numbersArray.push(i);
    }
  }

  return (
    <>
      <div>
        {numbersArray.map((item, index) => {
          return (
            <>
              <div key={index}>{item}</div>
            </>
          );
        })}
      </div>
      {console.log(numbersArray)}
    </>
  );
};

const Vjezba25042024 = () => {
  return (
    <>
      <h1>Zadatak 1</h1>
      <div>{funkcija1(nizBrojeva)}</div>
      <h1>Zadatak 2</h1>
      <div>{funkcija2(13)}</div>
    </>
  );
};
export default Vjezba25042024;
