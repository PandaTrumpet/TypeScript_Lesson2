import React from 'react';

// type Props = {
//   name: string;
//   age: number;
// };

// export default function User({ name, age }: Props) {
 
//   return (
//     <div>
//       <p>{`User name is ${name}`}</p>
//       <p>{`User age is ${age}`}</p>
//     </div>
//   );
// }

// Варіант 2

// export  const User: React.FC<Props> = ({ name, age }) => {
//   return (
//     <div>
//       <p>{`User name is ${name}`}</p>
//       <p>{`User age is ${age}`}</p>
//     </div>
//   );
// };

// Варіант 3

type Props = {
  name: string;
  age: number;
  children: React.ReactNode; // Типизация для children
};

export default function User({ name, age, children }: Props) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
      {children} {/* Рендерим children */}
    </div>
  );
}