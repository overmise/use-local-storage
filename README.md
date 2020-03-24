# @overmise/use-local-storage

> React Hook to help with using localStorage

[![NPM](https://img.shields.io/npm/v/use-local-storage.svg)](https://www.npmjs.com/package/use-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Goal

Hook the localStorage browser API in React so that you can use it like you'd useState, while supporting all data types inculding automatic JSON encoding/decoding.

## Install

```bash
npm install --save @overmise/use-local-storage
```

## Usage

```jsx
import React from 'react'

import { useLocalStorage } from '@overmise/use-local-storage'

const Form = () => {
    const [draft, setDraft] = useLocalStorage('draft', {
        title: 'An article about the meaning of life',
        body: 'Now I realize this was too ambitious and am gonna stop myself there.'
    })

    return (
        <form>
            <input value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
        </form>
    )
}
```

## Roadmap

- Add a cleanup function that will allow to automatically clear storage by invoking localStorage.removeItem(key);
- Add an example component to showcase how this thing works
                 

## License

MIT © [benvilliere](https://github.com/benvilliere)
