# react hooks

**Customize react hook**



### Installing

```shell
npm install @cd-react/hooks
// or
yarn add @cd-react/hooks
```



### Usage

```javascript
import { useRefState } from '@cd-react/hooks'
```

#### useRefState hooks

```javascript
// refValue.current is up-to-date value
const [value, setValue, refValue] = useRefState('1')
```



### Note

- Support tree shaking
