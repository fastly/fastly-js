# Fastly.EventResponseDataAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **Boolean** | Indicates if event was performed by Fastly. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional] [readonly] 
**description** | **String** | Description of the event. | [optional] 
**event_type** | **String** | Type of event. Can be used with &#x60;filter[event_type]&#x60; | [optional] 
**ip** | **String** | IP addresses that the event was requested from. | [optional] 
**metadata** | **Object** | Hash of key value pairs of additional information. | [optional] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**user_id** | **String** | Alphanumeric string identifying the user. | [optional] [readonly] 



## Enum: EventTypeEnum


* `api_key.create` (value: `"api_key.create"`)

* `acl.create` (value: `"acl.create"`)

* `acl.delete` (value: `"acl.delete"`)

* `acl.update` (value: `"acl.update"`)

* `address.create` (value: `"address.create"`)

* `address.delete` (value: `"address.delete"`)

* `address.update` (value: `"address.update"`)

* `backend.create` (value: `"backend.create"`)

* `backend.delete` (value: `"backend.delete"`)

* `backend.update` (value: `"backend.update"`)

* `billing.contact_update` (value: `"billing.contact_update"`)

* `cache_settings.create` (value: `"cache_settings.create"`)

* `cache_settings.delete` (value: `"cache_settings.delete"`)

* `cache_settings.update` (value: `"cache_settings.update"`)

* `customer.create` (value: `"customer.create"`)

* `customer.pricing` (value: `"customer.pricing"`)

* `customer.update` (value: `"customer.update"`)

* `customer_feature.create` (value: `"customer_feature.create"`)

* `customer_feature.delete` (value: `"customer_feature.delete"`)

* `director.create` (value: `"director.create"`)

* `director.delete` (value: `"director.delete"`)

* `director.update` (value: `"director.update"`)

* `director_backend.create` (value: `"director_backend.create"`)

* `director_backend.delete` (value: `"director_backend.delete"`)

* `domain.create` (value: `"domain.create"`)

* `domain.delete` (value: `"domain.delete"`)

* `domain.update` (value: `"domain.update"`)

* `gzip.create` (value: `"gzip.create"`)

* `gzip.delete` (value: `"gzip.delete"`)

* `gzip.update` (value: `"gzip.update"`)

* `header.create` (value: `"header.create"`)

* `header.delete` (value: `"header.delete"`)

* `header.update` (value: `"header.update"`)

* `healthcheck.create` (value: `"healthcheck.create"`)

* `healthcheck.delete` (value: `"healthcheck.delete"`)

* `healthcheck.update` (value: `"healthcheck.update"`)

* `invitation.accept` (value: `"invitation.accept"`)

* `invitation.sent` (value: `"invitation.sent"`)

* `invoice.failed_payment` (value: `"invoice.failed_payment"`)

* `invoice.payment` (value: `"invoice.payment"`)

* `io_settings.create` (value: `"io_settings.create"`)

* `io_settings.delete` (value: `"io_settings.delete"`)

* `io_settings.update` (value: `"io_settings.update"`)

* `logging.create` (value: `"logging.create"`)

* `logging.delete` (value: `"logging.delete"`)

* `logging.update` (value: `"logging.update"`)

* `pool.create` (value: `"pool.create"`)

* `pool.delete` (value: `"pool.delete"`)

* `pool.update` (value: `"pool.update"`)

* `request_settings.create` (value: `"request_settings.create"`)

* `request_settings.delete` (value: `"request_settings.delete"`)

* `request_settings.update` (value: `"request_settings.update"`)

* `response_object.create` (value: `"response_object.create"`)

* `response_object.delete` (value: `"response_object.delete"`)

* `response_object.update` (value: `"response_object.update"`)

* `rule_status.update` (value: `"rule_status.update"`)

* `rule_status.upsert` (value: `"rule_status.upsert"`)

* `server.create` (value: `"server.create"`)

* `server.delete` (value: `"server.delete"`)

* `server.update` (value: `"server.update"`)

* `service.create` (value: `"service.create"`)

* `service.delete` (value: `"service.delete"`)

* `service.move` (value: `"service.move"`)

* `service.move_destination` (value: `"service.move_destination"`)

* `service.move_source` (value: `"service.move_source"`)

* `service.purge_all` (value: `"service.purge_all"`)

* `service.update` (value: `"service.update"`)

* `service_authorization.create` (value: `"service_authorization.create"`)

* `service_authorization.delete` (value: `"service_authorization.delete"`)

* `service_authorization.update` (value: `"service_authorization.update"`)

* `tls.bulk_certificate.create` (value: `"tls.bulk_certificate.create"`)

* `tls.bulk_certificate.delete` (value: `"tls.bulk_certificate.delete"`)

* `tls.bulk_certificate.update` (value: `"tls.bulk_certificate.update"`)

* `tls.certificate.create` (value: `"tls.certificate.create"`)

* `tls.certificate.expiration_email` (value: `"tls.certificate.expiration_email"`)

* `tls.certificate.update` (value: `"tls.certificate.update"`)

* `tls.certificate.delete` (value: `"tls.certificate.delete"`)

* `tls.configuration.update` (value: `"tls.configuration.update"`)

* `tls.private_key.create` (value: `"tls.private_key.create"`)

* `tls.private_key.delete` (value: `"tls.private_key.delete"`)

* `tls.activation.enable` (value: `"tls.activation.enable"`)

* `tls.activation.update` (value: `"tls.activation.update"`)

* `tls.activation.disable` (value: `"tls.activation.disable"`)

* `tls.globalsign.domain.create` (value: `"tls.globalsign.domain.create"`)

* `tls.globalsign.domain.verify` (value: `"tls.globalsign.domain.verify"`)

* `tls.globalsign.domain.delete` (value: `"tls.globalsign.domain.delete"`)

* `tls.subscription.create` (value: `"tls.subscription.create"`)

* `tls.subscription.delete` (value: `"tls.subscription.delete"`)

* `tls.subscription.dns_check_email` (value: `"tls.subscription.dns_check_email"`)

* `token.create` (value: `"token.create"`)

* `token.destroy` (value: `"token.destroy"`)

* `two_factor_auth.disable` (value: `"two_factor_auth.disable"`)

* `two_factor_auth.enable` (value: `"two_factor_auth.enable"`)

* `user.create` (value: `"user.create"`)

* `user.destroy` (value: `"user.destroy"`)

* `user.lock` (value: `"user.lock"`)

* `user.login` (value: `"user.login"`)

* `user.login_failure` (value: `"user.login_failure"`)

* `user.logout` (value: `"user.logout"`)

* `user.password_update` (value: `"user.password_update"`)

* `user.unlock` (value: `"user.unlock"`)

* `user.update` (value: `"user.update"`)

* `vcl.create` (value: `"vcl.create"`)

* `vcl.delete` (value: `"vcl.delete"`)

* `vcl.update` (value: `"vcl.update"`)

* `version.activate` (value: `"version.activate"`)

* `version.clone` (value: `"version.clone"`)

* `version.copy` (value: `"version.copy"`)

* `version.copy_destination` (value: `"version.copy_destination"`)

* `version.copy_source` (value: `"version.copy_source"`)

* `version.create` (value: `"version.create"`)

* `version.deactivate` (value: `"version.deactivate"`)

* `version.lock` (value: `"version.lock"`)

* `version.update` (value: `"version.update"`)

* `waf.configuration_set_update` (value: `"waf.configuration_set_update"`)

* `waf.create` (value: `"waf.create"`)

* `waf.delete` (value: `"waf.delete"`)

* `waf.update` (value: `"waf.update"`)

* `waf.enable` (value: `"waf.enable"`)

* `waf.disable` (value: `"waf.disable"`)

* `waf.owasp.create` (value: `"waf.owasp.create"`)

* `waf.owasp.update` (value: `"waf.owasp.update"`)

* `waf.ruleset.deploy` (value: `"waf.ruleset.deploy"`)

* `waf.ruleset.deploy_failure` (value: `"waf.ruleset.deploy_failure"`)

* `wordpress.create` (value: `"wordpress.create"`)

* `wordpress.delete` (value: `"wordpress.delete"`)

* `wordpress.update` (value: `"wordpress.update"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
