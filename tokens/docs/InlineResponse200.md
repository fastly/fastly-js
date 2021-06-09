# Tokens.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Alphanumeric string identifying a token. | [optional] [readonly] 
**userId** | **String** | Alphanumeric string identifying the user. | [optional] 
**services** | **[String]** | List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account.  | [optional] 
**name** | **String** | Name of the token. | [optional] 
**scope** | **String** | Space-delimited list of authorization scope. | [optional] [default to &#39;global&#39;]
**createdAt** | **String** | Time-stamp (UTC) of when the token was created. | [optional] 
**lastUsedAt** | **String** | Time-stamp (UTC) of when the token was last used. | [optional] [readonly] 
**expiresAt** | **String** | Time-stamp (UTC) of when the token will expire (optional). | [optional] 
**ip** | **String** | IP Address of the client that last used the token. | [optional] 
**userAgent** | **String** | User-Agent header of the client that last used the token. | [optional] 



## Enum: ScopeEnum


* `global` (value: `"global"`)

* `purge_select` (value: `"purge_select"`)

* `purge_all` (value: `"purge_all"`)

* `global:read` (value: `"global:read"`)




