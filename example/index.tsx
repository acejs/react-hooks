import React, { useState, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { Input, Button, Row, Col } from 'antd'
import { useRefState } from '../src'
import 'antd/dist/antd.css'

function Add() {
  const [count, setCount, ref] = useRefState('1')
  const [v, setV] = useState('v')
  console.log(ref)
  const alertCount = useCallback(() => {
    alert(count)
  }, [count])

  useMemo(() => {
    console.log('memo', count)
  }, [count])

  function add(): void {
    setCount(count + 1)
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Input
            value={count}
            onChange={(e): void => setCount(e.target.value)}
          />
          <Button onClick={add}>+</Button>
        </Col>
      </Row>
      <Button onClick={alertCount}>点击</Button>
      {/* <Button onClick={alertValue}>点击</Button> */}
    </>
  )
}
ReactDOM.render(<Add />, document.getElementById('app'))
