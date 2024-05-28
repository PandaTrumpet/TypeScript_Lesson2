import React from 'react';

type Props = {
  children: React.ReactElement;
};

export default function Panel({ children }: Props) {
  return <div>{children}</div>;
}