# react hooks

**Customize react hook**



### Installing

```shell
npm install @cdrh/hooks
// or
yarn add @cdrh/hooks
```



### Usage

```javascript
import { useRefState } from '@cdrh/hooks'
```





#### useRefState

```javascript
// refValue.current is up-to-date value
const [value, setValue, refValue] = useRefState('1')
```



### Note

- Support tree shaking