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
 * The TlsBulkCertificateResponseAttributesAllOf model module.
 * @module model/TlsBulkCertificateResponseAttributesAllOf
 * @version 7.5.0
 */
class TlsBulkCertificateResponseAttributesAllOf {
    /**
     * Constructs a new <code>TlsBulkCertificateResponseAttributesAllOf</code>.
     * @alias module:model/TlsBulkCertificateResponseAttributesAllOf
     */
    constructor() { 
        
        TlsBulkCertificateResponseAttributesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsBulkCertificateResponseAttributesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateResponseAttributesAllOf} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateResponseAttributesAllOf} The populated <code>TlsBulkCertificateResponseAttributesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsBulkCertificateResponseAttributesAllOf();

            if (data.hasOwnProperty('not_after')) {
                obj['not_after'] = ApiClient.convertToType(data['not_after'], 'Date');
            }
            if (data.hasOwnProperty('not_before')) {
                obj['not_before'] = ApiClient.convertToType(data['not_before'], 'Date');
            }
            if (data.hasOwnProperty('replace')) {
                obj['replace'] = ApiClient.convertToType(data['replace'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic.
 * @member {Date} not_after
 */
TlsBulkCertificateResponseAttributesAllOf.prototype['not_after'] = undefined;

/**
 * Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic.
 * @member {Date} not_before
 */
TlsBulkCertificateResponseAttributesAllOf.prototype['not_before'] = undefined;

/**
 * A recommendation from Fastly indicating the key associated with this certificate is in need of rotation.
 * @member {Boolean} replace
 */
TlsBulkCertificateResponseAttributesAllOf.prototype['replace'] = undefined;






export default TlsBulkCertificateResponseAttributesAllOf;

