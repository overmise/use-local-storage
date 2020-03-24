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

You should useLocalStorage() almost like you useState, the only difference is you must provide a key within which the data should be stored like so:

```jsx
const [username, setUsername] = useStorage('username', null)
```
From there on, you can use your state and it will automatically sync with localStorage:

```jsx
setUsername('Bob')
```
To unset values, simply null out by invoking the same method with a blank string:

```jsx
setUsername('')
```

## Example

The following example component illustrates how this hooks works with objects, and how you could use it to store form data inside localStorage for later retrieval (this hook was extracted from a project that needed to do exactly this). 

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
            <textarea value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} />
        </form>
    )
}
```

When you change values and reload the page, the values should have been persisted, hence what you typed should have been preserved and being displayed in the newly rendered page.   

## License

MIT © [benvilliere](https://github.com/benvilliere)
