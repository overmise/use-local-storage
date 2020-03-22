# use-local-storage

> React Hook to help with using localStorage

[![NPM](https://img.shields.io/npm/v/use-local-storage.svg)](https://www.npmjs.com/package/use-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @overmise/use-local-storage
```

## Usage

```jsx
import React from 'react'

import { useLocalStorage } from '@overmise/use-local-storage'

const Form = () => {
    const example = useMyHook()
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

## License

MIT © [benvilliere](https://github.com/benvilliere)
