import React from 'react';
import './Test.css';

export default function Test({ name }: { name: string }) {
  return <div className="some-style">{name}</div>;
}
