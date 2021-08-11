# FastlyApi.WafFirewallVersionDataAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_http_versions** | **String** | Allowed HTTP versions. | [optional] [default to &#39;HTTP/1.0 HTTP/1.1 HTTP/2&#39;]
**allowed_methods** | **String** | A space-separated list of HTTP method names. | [optional] [default to &#39;GET HEAD POST OPTIONS PUT PATCH DELETE&#39;]
**allowed_request_content_type** | **String** | Allowed request content types. | [optional] [default to &#39;application/x-www-form-urlencoded|multipart/form-data|text/xml|application/xml|application/x-amf|application/json|text/plain&#39;]
**allowed_request_content_type_charset** | **String** | Allowed request content type charset. | [optional] [default to &#39;utf-8|iso-8859-1|iso-8859-15|windows-1252&#39;]
**arg_name_length** | **Number** | The maximum allowed argument name length. | [optional] [default to 100]
**arg_length** | **Number** | The maximum number of arguments allowed. | [optional] [default to 400]
**combined_file_sizes** | **Number** | The maximum allowed size of all files (in bytes). | [optional] [default to 10000000]
**comment** | **String** | A freeform descriptive note. | [optional] 
**critical_anomaly_score** | **Number** | Score value to add for critical anomalies. | [optional] [default to 6]
**crs_validate_utf8_encoding** | **Boolean** | CRS validate UTF8 encoding. | [optional] 
**error_anomaly_score** | **Number** | Score value to add for error anomalies. | [optional] [default to 5]
**high_risk_country_codes** | **String** | A space-separated list of country codes in ISO 3166-1 (two-letter) format. | [optional] 
**http_violation_score_threshold** | **Number** | HTTP violation threshold. | [optional] 
**inbound_anomaly_score_threshold** | **Number** | Inbound anomaly threshold. | [optional] 
**lfi_score_threshold** | **Number** | Local file inclusion attack threshold. | [optional] 
**locked** | **Boolean** | Whether a specific firewall version is locked from being modified. | [optional] [default to false]
**max_file_size** | **Number** | The maximum allowed file size, in bytes. | [optional] [default to 10000000]
**max_num_args** | **Number** | The maximum number of arguments allowed. | [optional] [default to 255]
**notice_anomaly_score** | **Number** | Score value to add for notice anomalies. | [optional] [default to 4]
**number** | **Number** | Integer identifying a WAF firewall version. | [optional] [readonly] 
**paranoia_level** | **Number** | The configured paranoia level. | [optional] [default to 1]
**php_injection_score_threshold** | **Number** | PHP injection threshold. | [optional] 
**rce_score_threshold** | **Number** | Remote code execution threshold. | [optional] 
**restricted_extensions** | **String** | A space-separated list of allowed file extensions. | [optional] [default to &#39;.asa/ .asax/ .ascx/ .axd/ .backup/ .bak/ .bat/ .cdx/ .cer/ .cfg/ .cmd/ .com/ .config/ .conf/ .cs/ .csproj/ .csr/ .dat/ .db/ .dbf/ .dll/ .dos/ .htr/ .htw/ .ida/ .idc/ .idq/ .inc/ .ini/ .key/ .licx/ .lnk/ .log/ .mdb/ .old/ .pass/ .pdb/ .pol/ .printer/ .pwd/ .resources/ .resx/ .sql/ .sys/ .vb/ .vbs/ .vbproj/ .vsdisco/ .webinfo/ .xsd/ .xsx&#39;]
**restricted_headers** | **String** | A space-separated list of allowed header names. | [optional] [default to &#39;/proxy/ /lock-token/ /content-range/ /translate/ /if/&#39;]
**rfi_score_threshold** | **Number** | Remote file inclusion attack threshold. | [optional] 
**session_fixation_score_threshold** | **Number** | Session fixation attack threshold. | [optional] 
**sql_injection_score_threshold** | **Number** | SQL injection attack threshold. | [optional] 
**total_arg_length** | **Number** | The maximum size of argument names and values. | [optional] [default to 6400]
**warning_anomaly_score** | **Number** | Score value to add for warning anomalies. | [optional] 
**xss_score_threshold** | **Number** | XSS attack threshold. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
