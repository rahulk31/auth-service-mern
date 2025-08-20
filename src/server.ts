function welcome(name: string) {
  console.log('hello');

  const user = {
    name: 'rahul',
  };

  const firstName = user.name;

  return name + firstName;
}

welcome('Rahul');
