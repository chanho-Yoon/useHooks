## 사용 예시

### useInput()은 여러가지 useState를 사용할 때 여러가지 중복되는 것들을 줄여주는 역할을 합니다.

#### 사용은 아래와 같이 Input onChange={setter}를 주면 됩니다. (단 value 속성만 가능)

```
<Input name="user-id" id="user-id" value={id} required onChange={onChangeId} />
```

<hr/>

### useInput 사용하기 전

```
const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };
  const onChangePwCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
```

### useInput 사용한 후

```
const Signup = () => {
  // custom hooks
  const [id, onChangeId] = useInput();
  const [nick, onChangeNick] = useInput();
  const [password, onChangePw] = useInput();
  const [passwordCheck, onChangePwCheck] = useInput();
```
