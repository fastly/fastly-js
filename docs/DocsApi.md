# Fastly.DocsApi

```javascript
const apiInstance = new Fastly.DocsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getDocs**](DocsApi.md#getDocs) | **GET** /docs | Get Fastly API docs as structured data
[**getDocsSection**](DocsApi.md#getDocsSection) | **GET** /docs/section/{section} | Get API docs matching a section filter
[**getDocsSubject**](DocsApi.md#getDocsSubject) | **GET** /docs/subject/{subject} | Get API docs for a single subject


## `getDocs`

```javascript
getDocs()
```

Gets all documentation associated with the Fastly API.

### Example

```javascript
apiInstance.getDocs()
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

This endpoint does not need any parameters.

### Return type

**[Object]**


## `getDocsSection`

```javascript
getDocsSection({ section, invert })
```

Gets all documentation associated with a given Categorical Section where `section` is a regular_expression. Passing `invert=true` will force a return of everything that does not match the given regular expression.

### Example

```javascript
const options = {
  section: backend, // required
  invert: "invert_example", // required
};

apiInstance.getDocsSection(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**section** | **String** | The section to search for. Supports regular expressions. |
**invert** | **String** | Get everything that does not match section. |

### Return type

null (empty response body)


## `getDocsSubject`

```javascript
getDocsSubject({ subject })
```

Gets all documentation relating to a given 'Subject'.

### Example

```javascript
const options = {
  subject: backend, // required
};

apiInstance.getDocsSubject(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subject** | **String** | The subject to search for. Supports regular expressions. |

### Return type

null (empty response body)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
