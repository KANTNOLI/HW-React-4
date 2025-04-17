import style from "./Students.module.css";
import { StdIntf } from "../../Interfaces.interface";

const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const StudentsList = Array.from(
  { length: 10 },
  (): StdIntf => ({
    name: `Name rand(${rand(0, 1000)})`,
    money: rand(0, 1000),
    group: rand(1000, 1000000),
    mail: `mailrand(${rand(0, 1000)})@mail.com`,
  })
);

function Students() {
  console.log(StudentsList);

  return (
    <section className={style.body}>
      {StudentsList.map((Std, id) => (
        <div key={id} className={style.cart}>
          <p>{Std.name}</p>
          <p>{Std.group}</p>
          <p>{Std.money}</p>
          <p>{Std.mail}</p>
        </div>
      ))}
    </section>
  );
}

export default Students;
