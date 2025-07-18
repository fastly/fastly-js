/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EventAttributes model module.
 * @module model/EventAttributes
 * @version 12.1.0
 */
class EventAttributes {
    /**
     * Constructs a new <code>EventAttributes</code>.
     * @alias module:model/EventAttributes
     */
    constructor() { 
        
        EventAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventAttributes} obj Optional instance to populate.
     * @return {module:model/EventAttributes} The populated <code>EventAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventAttributes();

            if (data.hasOwnProperty('admin')) {
                obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates if event was performed by Fastly.
 * @member {Boolean} admin
 */
EventAttributes.prototype['admin'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
EventAttributes.prototype['created_at'] = undefined;

/**
 * @member {String} customer_id
 */
EventAttributes.prototype['customer_id'] = undefined;

/**
 * Description of the event.
 * @member {String} description
 */
EventAttributes.prototype['description'] = undefined;

/**
 * Type of event. Can be used with `filter[event_type]`
 * @member {module:model/EventAttributes.EventTypeEnum} event_type
 */
EventAttributes.prototype['event_type'] = undefined;

/**
 * IP addresses that the event was requested from.
 * @member {String} ip
 */
EventAttributes.prototype['ip'] = undefined;

/**
 * Hash of key value pairs of additional information.
 * @member {Object.<String, Object>} metadata
 */
EventAttributes.prototype['metadata'] = undefined;

/**
 * @member {String} service_id
 */
EventAttributes.prototype['service_id'] = undefined;

/**
 * @member {String} user_id
 */
EventAttributes.prototype['user_id'] = undefined;

/**
 * @member {String} token_id
 */
EventAttributes.prototype['token_id'] = undefined;





/**
 * Allowed values for the <code>event_type</code> property.
 * @enum {String}
 * @readonly
 */
EventAttributes['EventTypeEnum'] = {

    /**
     * value: "api_key.create"
     * @const
     */
    "api_key.create": "api_key.create",

    /**
     * value: "acl.create"
     * @const
     */
    "acl.create": "acl.create",

    /**
     * value: "acl.delete"
     * @const
     */
    "acl.delete": "acl.delete",

    /**
     * value: "acl.update"
     * @const
     */
    "acl.update": "acl.update",

    /**
     * value: "address.create"
     * @const
     */
    "address.create": "address.create",

    /**
     * value: "address.delete"
     * @const
     */
    "address.delete": "address.delete",

    /**
     * value: "address.update"
     * @const
     */
    "address.update": "address.update",

    /**
     * value: "alerts.definition.create"
     * @const
     */
    "alerts.definition.create": "alerts.definition.create",

    /**
     * value: "alerts.definition.delete"
     * @const
     */
    "alerts.definition.delete": "alerts.definition.delete",

    /**
     * value: "alerts.definition.test"
     * @const
     */
    "alerts.definition.test": "alerts.definition.test",

    /**
     * value: "alerts.definition.update"
     * @const
     */
    "alerts.definition.update": "alerts.definition.update",

    /**
     * value: "backend.create"
     * @const
     */
    "backend.create": "backend.create",

    /**
     * value: "backend.delete"
     * @const
     */
    "backend.delete": "backend.delete",

    /**
     * value: "backend.update"
     * @const
     */
    "backend.update": "backend.update",

    /**
     * value: "billing.contact_update"
     * @const
     */
    "billing.contact_update": "billing.contact_update",

    /**
     * value: "cache_settings.create"
     * @const
     */
    "cache_settings.create": "cache_settings.create",

    /**
     * value: "cache_settings.delete"
     * @const
     */
    "cache_settings.delete": "cache_settings.delete",

    /**
     * value: "cache_settings.update"
     * @const
     */
    "cache_settings.update": "cache_settings.update",

    /**
     * value: "customer.create"
     * @const
     */
    "customer.create": "customer.create",

    /**
     * value: "customer.pricing"
     * @const
     */
    "customer.pricing": "customer.pricing",

    /**
     * value: "customer.update"
     * @const
     */
    "customer.update": "customer.update",

    /**
     * value: "customer_feature.create"
     * @const
     */
    "customer_feature.create": "customer_feature.create",

    /**
     * value: "customer_feature.delete"
     * @const
     */
    "customer_feature.delete": "customer_feature.delete",

    /**
     * value: "director.create"
     * @const
     */
    "director.create": "director.create",

    /**
     * value: "director.delete"
     * @const
     */
    "director.delete": "director.delete",

    /**
     * value: "director.update"
     * @const
     */
    "director.update": "director.update",

    /**
     * value: "director_backend.create"
     * @const
     */
    "director_backend.create": "director_backend.create",

    /**
     * value: "director_backend.delete"
     * @const
     */
    "director_backend.delete": "director_backend.delete",

    /**
     * value: "domain.create"
     * @const
     */
    "domain.create": "domain.create",

    /**
     * value: "domain.delete"
     * @const
     */
    "domain.delete": "domain.delete",

    /**
     * value: "domain.update"
     * @const
     */
    "domain.update": "domain.update",

    /**
     * value: "gzip.create"
     * @const
     */
    "gzip.create": "gzip.create",

    /**
     * value: "gzip.delete"
     * @const
     */
    "gzip.delete": "gzip.delete",

    /**
     * value: "gzip.update"
     * @const
     */
    "gzip.update": "gzip.update",

    /**
     * value: "header.create"
     * @const
     */
    "header.create": "header.create",

    /**
     * value: "header.delete"
     * @const
     */
    "header.delete": "header.delete",

    /**
     * value: "header.update"
     * @const
     */
    "header.update": "header.update",

    /**
     * value: "healthcheck.create"
     * @const
     */
    "healthcheck.create": "healthcheck.create",

    /**
     * value: "healthcheck.delete"
     * @const
     */
    "healthcheck.delete": "healthcheck.delete",

    /**
     * value: "healthcheck.update"
     * @const
     */
    "healthcheck.update": "healthcheck.update",

    /**
     * value: "invitation.accept"
     * @const
     */
    "invitation.accept": "invitation.accept",

    /**
     * value: "invitation.sent"
     * @const
     */
    "invitation.sent": "invitation.sent",

    /**
     * value: "invoice.failed_payment"
     * @const
     */
    "invoice.failed_payment": "invoice.failed_payment",

    /**
     * value: "invoice.payment"
     * @const
     */
    "invoice.payment": "invoice.payment",

    /**
     * value: "io_settings.create"
     * @const
     */
    "io_settings.create": "io_settings.create",

    /**
     * value: "io_settings.delete"
     * @const
     */
    "io_settings.delete": "io_settings.delete",

    /**
     * value: "io_settings.update"
     * @const
     */
    "io_settings.update": "io_settings.update",

    /**
     * value: "logging.create"
     * @const
     */
    "logging.create": "logging.create",

    /**
     * value: "logging.delete"
     * @const
     */
    "logging.delete": "logging.delete",

    /**
     * value: "logging.update"
     * @const
     */
    "logging.update": "logging.update",

    /**
     * value: "pool.create"
     * @const
     */
    "pool.create": "pool.create",

    /**
     * value: "pool.delete"
     * @const
     */
    "pool.delete": "pool.delete",

    /**
     * value: "pool.update"
     * @const
     */
    "pool.update": "pool.update",

    /**
     * value: "request_settings.create"
     * @const
     */
    "request_settings.create": "request_settings.create",

    /**
     * value: "request_settings.delete"
     * @const
     */
    "request_settings.delete": "request_settings.delete",

    /**
     * value: "request_settings.update"
     * @const
     */
    "request_settings.update": "request_settings.update",

    /**
     * value: "response_object.create"
     * @const
     */
    "response_object.create": "response_object.create",

    /**
     * value: "response_object.delete"
     * @const
     */
    "response_object.delete": "response_object.delete",

    /**
     * value: "response_object.update"
     * @const
     */
    "response_object.update": "response_object.update",

    /**
     * value: "rule_status.update"
     * @const
     */
    "rule_status.update": "rule_status.update",

    /**
     * value: "rule_status.upsert"
     * @const
     */
    "rule_status.upsert": "rule_status.upsert",

    /**
     * value: "security.workspace.create"
     * @const
     */
    "security.workspace.create": "security.workspace.create",

    /**
     * value: "security.workspace.update"
     * @const
     */
    "security.workspace.update": "security.workspace.update",

    /**
     * value: "security.workspace.delete"
     * @const
     */
    "security.workspace.delete": "security.workspace.delete",

    /**
     * value: "security.redaction.create"
     * @const
     */
    "security.redaction.create": "security.redaction.create",

    /**
     * value: "security.redaction.update"
     * @const
     */
    "security.redaction.update": "security.redaction.update",

    /**
     * value: "security.redaction.delete"
     * @const
     */
    "security.redaction.delete": "security.redaction.delete",

    /**
     * value: "security.rule.create"
     * @const
     */
    "security.rule.create": "security.rule.create",

    /**
     * value: "security.rule.update"
     * @const
     */
    "security.rule.update": "security.rule.update",

    /**
     * value: "security.rule.delete"
     * @const
     */
    "security.rule.delete": "security.rule.delete",

    /**
     * value: "security.virtual_patch.create"
     * @const
     */
    "security.virtual_patch.create": "security.virtual_patch.create",

    /**
     * value: "security.virtual_patch.update"
     * @const
     */
    "security.virtual_patch.update": "security.virtual_patch.update",

    /**
     * value: "security.virtual_patch.delete"
     * @const
     */
    "security.virtual_patch.delete": "security.virtual_patch.delete",

    /**
     * value: "security.event.update"
     * @const
     */
    "security.event.update": "security.event.update",

    /**
     * value: "server.create"
     * @const
     */
    "server.create": "server.create",

    /**
     * value: "server.delete"
     * @const
     */
    "server.delete": "server.delete",

    /**
     * value: "server.update"
     * @const
     */
    "server.update": "server.update",

    /**
     * value: "service.create"
     * @const
     */
    "service.create": "service.create",

    /**
     * value: "service.delete"
     * @const
     */
    "service.delete": "service.delete",

    /**
     * value: "service.move"
     * @const
     */
    "service.move": "service.move",

    /**
     * value: "service.move_destination"
     * @const
     */
    "service.move_destination": "service.move_destination",

    /**
     * value: "service.move_source"
     * @const
     */
    "service.move_source": "service.move_source",

    /**
     * value: "service.purge_all"
     * @const
     */
    "service.purge_all": "service.purge_all",

    /**
     * value: "service.update"
     * @const
     */
    "service.update": "service.update",

    /**
     * value: "service_authorization.create"
     * @const
     */
    "service_authorization.create": "service_authorization.create",

    /**
     * value: "service_authorization.delete"
     * @const
     */
    "service_authorization.delete": "service_authorization.delete",

    /**
     * value: "service_authorization.update"
     * @const
     */
    "service_authorization.update": "service_authorization.update",

    /**
     * value: "tls.bulk_certificate.create"
     * @const
     */
    "tls.bulk_certificate.create": "tls.bulk_certificate.create",

    /**
     * value: "tls.bulk_certificate.delete"
     * @const
     */
    "tls.bulk_certificate.delete": "tls.bulk_certificate.delete",

    /**
     * value: "tls.bulk_certificate.update"
     * @const
     */
    "tls.bulk_certificate.update": "tls.bulk_certificate.update",

    /**
     * value: "tls.certificate.create"
     * @const
     */
    "tls.certificate.create": "tls.certificate.create",

    /**
     * value: "tls.certificate.expiration_email"
     * @const
     */
    "tls.certificate.expiration_email": "tls.certificate.expiration_email",

    /**
     * value: "tls.certificate.update"
     * @const
     */
    "tls.certificate.update": "tls.certificate.update",

    /**
     * value: "tls.certificate.delete"
     * @const
     */
    "tls.certificate.delete": "tls.certificate.delete",

    /**
     * value: "tls.configuration.update"
     * @const
     */
    "tls.configuration.update": "tls.configuration.update",

    /**
     * value: "tls.private_key.create"
     * @const
     */
    "tls.private_key.create": "tls.private_key.create",

    /**
     * value: "tls.private_key.delete"
     * @const
     */
    "tls.private_key.delete": "tls.private_key.delete",

    /**
     * value: "tls.activation.enable"
     * @const
     */
    "tls.activation.enable": "tls.activation.enable",

    /**
     * value: "tls.activation.update"
     * @const
     */
    "tls.activation.update": "tls.activation.update",

    /**
     * value: "tls.activation.disable"
     * @const
     */
    "tls.activation.disable": "tls.activation.disable",

    /**
     * value: "tls.globalsign.domain.create"
     * @const
     */
    "tls.globalsign.domain.create": "tls.globalsign.domain.create",

    /**
     * value: "tls.globalsign.domain.verify"
     * @const
     */
    "tls.globalsign.domain.verify": "tls.globalsign.domain.verify",

    /**
     * value: "tls.globalsign.domain.delete"
     * @const
     */
    "tls.globalsign.domain.delete": "tls.globalsign.domain.delete",

    /**
     * value: "tls.subscription.create"
     * @const
     */
    "tls.subscription.create": "tls.subscription.create",

    /**
     * value: "tls.subscription.delete"
     * @const
     */
    "tls.subscription.delete": "tls.subscription.delete",

    /**
     * value: "tls.subscription.dns_check_email"
     * @const
     */
    "tls.subscription.dns_check_email": "tls.subscription.dns_check_email",

    /**
     * value: "token.create"
     * @const
     */
    "token.create": "token.create",

    /**
     * value: "token.destroy"
     * @const
     */
    "token.destroy": "token.destroy",

    /**
     * value: "two_factor_auth.disable"
     * @const
     */
    "two_factor_auth.disable": "two_factor_auth.disable",

    /**
     * value: "two_factor_auth.enable"
     * @const
     */
    "two_factor_auth.enable": "two_factor_auth.enable",

    /**
     * value: "user.create"
     * @const
     */
    "user.create": "user.create",

    /**
     * value: "user.destroy"
     * @const
     */
    "user.destroy": "user.destroy",

    /**
     * value: "user.lock"
     * @const
     */
    "user.lock": "user.lock",

    /**
     * value: "user.login"
     * @const
     */
    "user.login": "user.login",

    /**
     * value: "user.login_failure"
     * @const
     */
    "user.login_failure": "user.login_failure",

    /**
     * value: "user.logout"
     * @const
     */
    "user.logout": "user.logout",

    /**
     * value: "user.password_update"
     * @const
     */
    "user.password_update": "user.password_update",

    /**
     * value: "user.unlock"
     * @const
     */
    "user.unlock": "user.unlock",

    /**
     * value: "user.update"
     * @const
     */
    "user.update": "user.update",

    /**
     * value: "vcl.create"
     * @const
     */
    "vcl.create": "vcl.create",

    /**
     * value: "vcl.delete"
     * @const
     */
    "vcl.delete": "vcl.delete",

    /**
     * value: "vcl.update"
     * @const
     */
    "vcl.update": "vcl.update",

    /**
     * value: "version.activate"
     * @const
     */
    "version.activate": "version.activate",

    /**
     * value: "version.clone"
     * @const
     */
    "version.clone": "version.clone",

    /**
     * value: "version.copy"
     * @const
     */
    "version.copy": "version.copy",

    /**
     * value: "version.copy_destination"
     * @const
     */
    "version.copy_destination": "version.copy_destination",

    /**
     * value: "version.copy_source"
     * @const
     */
    "version.copy_source": "version.copy_source",

    /**
     * value: "version.create"
     * @const
     */
    "version.create": "version.create",

    /**
     * value: "version.deactivate"
     * @const
     */
    "version.deactivate": "version.deactivate",

    /**
     * value: "version.lock"
     * @const
     */
    "version.lock": "version.lock",

    /**
     * value: "version.update"
     * @const
     */
    "version.update": "version.update",

    /**
     * value: "waf.configuration_set_update"
     * @const
     */
    "waf.configuration_set_update": "waf.configuration_set_update",

    /**
     * value: "waf.create"
     * @const
     */
    "waf.create": "waf.create",

    /**
     * value: "waf.delete"
     * @const
     */
    "waf.delete": "waf.delete",

    /**
     * value: "waf.update"
     * @const
     */
    "waf.update": "waf.update",

    /**
     * value: "waf.enable"
     * @const
     */
    "waf.enable": "waf.enable",

    /**
     * value: "waf.disable"
     * @const
     */
    "waf.disable": "waf.disable",

    /**
     * value: "waf.owasp.create"
     * @const
     */
    "waf.owasp.create": "waf.owasp.create",

    /**
     * value: "waf.owasp.update"
     * @const
     */
    "waf.owasp.update": "waf.owasp.update",

    /**
     * value: "waf.ruleset.deploy"
     * @const
     */
    "waf.ruleset.deploy": "waf.ruleset.deploy",

    /**
     * value: "waf.ruleset.deploy_failure"
     * @const
     */
    "waf.ruleset.deploy_failure": "waf.ruleset.deploy_failure",

    /**
     * value: "wordpress.create"
     * @const
     */
    "wordpress.create": "wordpress.create",

    /**
     * value: "wordpress.delete"
     * @const
     */
    "wordpress.delete": "wordpress.delete",

    /**
     * value: "wordpress.update"
     * @const
     */
    "wordpress.update": "wordpress.update"
};



export default EventAttributes;

