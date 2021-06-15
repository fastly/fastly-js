# FastlyApi.ModelLoggingFtpAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | An hostname or IPv4 address. | [optional] 
**hostname** | **String** | Hostname used. | [optional] 
**ipv4** | **String** | IPv4 address of the host. | [optional] 
**password** | **String** | The password for the server. For anonymous use an email address. | [optional] 
**path** | **String** | The path to upload log files to. If the path ends in &#x60;/&#x60; then it is treated as a directory. | [optional] 
**port** | **Number** | The port number. | [optional] [default to 21]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for the server. Can be anonymous. | [optional] 


