# ts-node-api

> Version 0.0.1

## Path Table

| Method | Path | Description |
| --- | --- | --- |
| GET | [/hello](#gethello) |  |
| GET | [/hello/user](#gethellouser) |  |
| GET | [/hello/world](#gethelloworld) |  |
| GET | [/hello/{name}](#gethelloname) |  |
| GET | [/user](#getuser) |  |

## Reference Table

| Name | Path | Description |
| --- | --- | --- |
| error | [#/components/responses/error](#componentsresponseserror) | Error response |
| Authorization | [#/components/securitySchemes/Authorization](#componentssecurityschemesauthorization) |  |

## Path Details

***

### [GET]/hello

#### Responses

- 200 Successful response

`application/json`

```ts
{
  message?: string
}
```

- default undefined

***

### [GET]/hello/user

#### Parameters(Query)

```ts
name: string
```

```ts
greeting?: string
```

#### Responses

- 200 Successful response

`application/json`

```ts
{
  message?: string
}
```

- default undefined

***

### [GET]/hello/world

#### Responses

- 200 Successful response

`application/json`

```ts
{
  message?: string
}
```

- default undefined

***

### [GET]/hello/{name}

#### Parameters(Query)

```ts
greeting?: string
```

#### Responses

- 200 Successful response

`application/json`

```ts
{
  message?: string
}
```

- default undefined

***

### [GET]/user

#### Responses

- 200 Successful response

`application/json`

```ts
{
  message?: string
}
```

- default undefined

## References

### #/components/responses/error

- application/json

```ts
{
  message: string
  code: string
  issues: {
    message: string
  }[]
}
```

### #/components/securitySchemes/Authorization

```ts
{
  "type": "http",
  "scheme": "bearer"
}
```