# FastlyApi.ModelLoggingCloudfilesAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **String** | Your Cloud Files account access key. | [optional] 
**bucket_name** | **String** | The name of your Cloud Files container. | [optional] 
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**region** | **String** | The region to stream logs to. | [optional] 
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for your Cloudfile account. | [optional] 



## Enum: RegionEnum


* `DFW` (value: `"DFW"`)

* `ORD` (value: `"ORD"`)

* `IAD` (value: `"IAD"`)

* `LON` (value: `"LON"`)

* `SYD` (value: `"SYD"`)

* `HKG` (value: `"HKG"`)

* `null` (value: `"null"`)




