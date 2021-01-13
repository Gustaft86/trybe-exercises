const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      const arr = data.map((repo) => repo.name);
      console.log(arr);
      return arr
    });
};

getRepos('https://api.github.com/orgs/tryber/repos');


it('gets a list of repositories names', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  return getRepos(url).then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});