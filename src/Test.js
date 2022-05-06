import { useEffect, useState } from 'react'

export function Parent() {
  const [name, setName] = useState('');

  window.eventBus.on('prop-changed', (name) => {
    console.log("React received event: " + name);
    setName(name)
  });

  return <Child name={ name } />;
}

function Child(props) {
  return <h1>Hello, {props.name}</h1>;
}