# Fastly.Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | **[String]** | List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account.  | [optional] 
**name** | **String** | Name of the token. | [optional] 
**scope** | **String** | Space-delimited list of authorization scope. | [optional]  [one of: "global", "purge_select", "purge_all", "global:read"][defaults to 'global']



 

### `scope`

* `global` (value: `"global"`)

* `purge_select` (value: `"purge_select"`)

* `purge_all` (value: `"purge_all"`)

* `global:read` (value: `"global:read"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
